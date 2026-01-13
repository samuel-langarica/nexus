# 🏗️ Arquitectura TurnoLibre V2 - QR Dinámico

## 🎯 Cambio Clave: QR Dinámico vs QR Estático

### **Plan Básico (Self-Service)**
❌ **NO incluye QR impreso estático**
✅ **Staff muestra QR dinámico desde su dispositivo**

**Ventajas:**
1. ✅ **Control total**: Staff decide cuándo aceptar nuevos turnos
2. ✅ **Anti-spam**: No se puede guardar el QR y usarlo desde casa
3. ✅ **Un solo uso**: Cada QR solo permite registrar 1 turno
4. ✅ **Auto-regeneración**: Después de cada uso, se genera nuevo QR automáticamente
5. ✅ **Cierre de fila**: Staff simplemente oculta/cierra el QR

---

### **Plan Profesional**
✅ **Incluye QR estático impreso** (cartel en recepción)
✅ **Más QR dinámico en tablet** (opcional)

**Razón:** Mayor conveniencia, el negocio no necesita mostrar activamente el QR.

---

## 📱 Flujo Completo con QR Dinámico

```
┌──────────────────────────────────────────────────────┐
│                   FLUJO COMPLETO                      │
└──────────────────────────────────────────────────────┘

1️⃣ STAFF ABRE BUSINESS APP
   ├─ Staff abre Business App en tablet
   ├─ QR se genera automáticamente al iniciar
   └─ QR queda visible en la tablet para clientes

2️⃣ CLIENTE ESCANEA QR
   ├─ QR contiene: https://app.turnolibre.com/join/abc123xyz
   │                                              ↑
   │                                    Token único de un solo uso
   └─ Lleva a Queue Join Page

3️⃣ QUEUE JOIN PAGE (Web)
   ├─ Muestra: "Consultorio Dr. Pérez"
   ├─ Muestra: "8 personas en fila, ~25 min"
   ├─ Botón único: "Unirme a la fila"
   └─ Al hacer click → Abre WhatsApp con mensaje

4️⃣ CLIENTE MANDA MENSAJE WHATSAPP
   ├─ Mensaje: "UNIRME token-abc123xyz"
   ├─ Se manda desde el número del cliente
   └─ Llega al número de WhatsApp Business de TurnoLibre

5️⃣ BACKEND PROCESA Y REGENERA QR
   ├─ Recibe webhook de WhatsApp
   ├─ Valida token (existe, no usado)
   ├─ Valida que no tenga turno activo
   ├─ Asigna turno al número del cliente
   ├─ **Marca token como usado** (QR ya no sirve)
   ├─ **Genera nuevo QR automáticamente** (para el siguiente cliente)
   ├─ Actualiza tablet del staff con el nuevo QR
   └─ Responde: "✅ Turno #12, ~25 min. Escribe SALIR para cancelar."

6️⃣ STAFF LIBERA TURNO
   ├─ Staff atiende al cliente
   ├─ Click en "Liberar turno/mesa"
   └─ Sistema notifica automáticamente a los siguientes
```

---

## 🗄️ Esquema de Base de Datos Actualizado

```sql
-- NEGOCIOS
CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20),
  avg_service_time INT DEFAULT 10,
  qr_code VARCHAR(100) UNIQUE NOT NULL,     -- Identificador permanente
  plan VARCHAR(20) DEFAULT 'basic',         -- basic | professional
  created_at TIMESTAMP DEFAULT NOW()
);

-- COLA ACTIVA
CREATE TABLE queue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id),
  ticket_number INT NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  status VARCHAR(20) DEFAULT 'waiting',     -- waiting | called | serving | completed
  joined_at TIMESTAMP DEFAULT NOW(),
  called_at TIMESTAMP,
  completed_at TIMESTAMP,

  -- Constraint: Un número solo puede tener un turno activo
  UNIQUE(business_id, phone_number) WHERE status IN ('waiting', 'called', 'serving')
);

-- TOKENS DE QR (Un solo uso por turno)
CREATE TABLE qr_tokens (
  token VARCHAR(50) PRIMARY KEY,            -- Token único del QR
  business_id UUID REFERENCES businesses(id),
  created_at TIMESTAMP DEFAULT NOW(),
  used BOOLEAN DEFAULT FALSE,
  used_at TIMESTAMP,
  phone_number VARCHAR(20),                 -- Quién lo usó
  current BOOLEAN DEFAULT TRUE              -- Solo puede haber 1 current=true por negocio
);

-- CÓDIGOS DE UNIÓN (Join codes)
CREATE TABLE join_codes (
  code VARCHAR(100) PRIMARY KEY,            -- "token-codigo123"
  token VARCHAR(50) REFERENCES qr_tokens(token),
  business_id UUID REFERENCES businesses(id),
  created_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP NOT NULL,            -- Expira en 5 minutos
  used BOOLEAN DEFAULT FALSE,
  phone_number VARCHAR(20)
);

-- ÍNDICES
CREATE INDEX idx_queue_business_status ON queue(business_id, status);
CREATE INDEX idx_qr_tokens_current ON qr_tokens(business_id, current) WHERE current = TRUE;
CREATE INDEX idx_codes_expires ON join_codes(expires_at) WHERE used = FALSE;

-- CONSTRAINT: Solo un QR activo por negocio
CREATE UNIQUE INDEX idx_one_current_qr_per_business ON qr_tokens(business_id) WHERE current = TRUE;

-- USUARIOS STAFF
CREATE TABLE staff_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'staff',         -- staff | admin | owner
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🔌 API Endpoints Actualizados

### **Business App (Staff)**

```javascript
// 1. Login del staff
POST /api/auth/login
Body: { email, password }
Response: { token, businessId, businessName }

// 2. Obtener QR actual (un solo uso)
GET /api/staff/qr/current
Headers: { Authorization: "Bearer jwt..." }
Response: {
  token: "abc123xyz",
  qrUrl: "https://app.turnolibre.com/join/abc123xyz",
  queueLength: 8,
  status: "active"  // active | used
}

// 3. Generar nuevo QR manualmente (opcional)
POST /api/staff/qr/regenerate
Headers: { Authorization: "Bearer jwt..." }
Response: { token: "def456xyz", qrUrl: "..." }
Note: Normalmente no necesario - se regenera automáticamente al usarse

// 4. Ver cola actual
GET /api/staff/queue
Headers: { Authorization: "Bearer jwt..." }
Response: {
  queue: [
    { id: "uuid", ticketNumber: 12, phone: "+521...", status: "waiting", joinedAt: "..." },
    { id: "uuid", ticketNumber: 13, phone: "+521...", status: "waiting", joinedAt: "..." }
  ],
  serving: { id: "uuid", ticketNumber: 11, phone: "+521...", status: "serving" }
}

// 5. Llamar siguiente turno
POST /api/staff/queue/next
Headers: { Authorization: "Bearer jwt..." }
Response: {
  called: { ticketNumber: 12, phone: "+521..." },
  notifiedNext: ["+521555...", "+521666..."]
}

// 6. Liberar turno (marcar como completado)
POST /api/staff/queue/complete
Headers: { Authorization: "Bearer jwt..." }
Body: { ticketId: "uuid" }
Response: { success: true, autoCalledNext: true }

// 7. Enviar notificación manual
POST /api/staff/queue/notify
Headers: { Authorization: "Bearer jwt..." }
Body: { ticketId: "uuid", message: "Tu mesa está lista" }
Response: { success: true }
```

---

### **Queue Join Page (Público)**

```javascript
// 1. Obtener info del token
GET /api/join/:token
Response: {
  businessName: "Consultorio Dr. Pérez",
  businessType: "hospital",
  queueLength: 8,
  avgWaitTime: 25,
  tokenValid: true  // false si ya fue usado
}

// 2. Generar código de unión
POST /api/join/code
Body: { token: "abc123xyz" }
Response: {
  code: "token-abc123xyz-codigo123",
  whatsappUrl: "https://wa.me/5215512345678?text=UNIRME token-abc123xyz-codigo123"
}
```

---

### **WhatsApp Webhook**

```javascript
// 1. Recibir mensajes de WhatsApp
POST /api/webhooks/whatsapp
Body: { from: "+5215512345678", body: "UNIRME abc123xyz-codigo123" }
Response: 200 OK

// Procesa:
// - "UNIRME codigo" → Asigna turno
// - "SALIR" → Remueve de la fila
// - "ESTADO" → Muestra posición actual
```

---

## 🔄 Flujo Detallado

### **1. Staff Abre la Business App**

```
┌──────────────────────────────────────────┐
│  Business App - Dashboard                │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                          │
│  Consultorio Dr. Pérez                   │
│  📅 Lunes, 14 Enero 2025 - 9:00 AM       │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  QR DINÁMICO - Muestra a clientes │ │
│  │  ────────────────────────────────  │ │
│  │                                    │ │
│  │       [QR CODE AQUÍ]               │ │
│  │                                    │ │
│  │  Se renueva en: 45 segundos        │ │
│  │                                    │ │
│  │  ┌──────────────────────────────┐ │ │
│  │  │  🔄 Renovar Ahora            │ │ │
│  │  └──────────────────────────────┘ │ │
│  └────────────────────────────────────┘ │
│                                          │
│  Cola Actual: 8 personas                 │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                          │
│  Atendiendo Ahora:                       │
│  🟢 Turno #11 - +521 555 1111            │
│  ┌──────────────────────────────────┐   │
│  │  ✅ Liberar Turno                │   │
│  └──────────────────────────────────┘   │
│                                          │
│  Próximos:                               │
│  #12 - +521 555 2222  (esperando)       │
│  #13 - +521 555 3333  (esperando)       │
│  #14 - +521 555 4444  (esperando)       │
│  ...                                     │
│                                          │
└──────────────────────────────────────────┘
```

**Backend:**
```javascript
// Auto-genera sesión al hacer login
const session = await db.activeSessions.create({
  sessionId: generateSessionId(),  // "abc123xyz"
  businessId: staff.businessId,
  createdAt: now,
  expiresAt: now + 60_000,  // 60 segundos
  active: true
});

// Retorna QR URL
qrUrl: "https://app.turnolibre.com/join/abc123xyz"
```

---

### **2. Cliente Escanea QR Dinámico**

**QR contiene:** `https://app.turnolibre.com/join/abc123xyz`

**Queue Join Page se abre:**

```
┌──────────────────────────────────────┐
│  Consultorio Dr. Pérez               │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                      │
│  👥 8 personas en fila               │
│  ⏰ Tiempo estimado: ~25 min         │
│                                      │
│  ┌────────────────────────────────┐ │
│  │                                │ │
│  │  🚀 Unirme a la fila           │ │
│  │                                │ │
│  └────────────────────────────────┘ │
│                                      │
│  ✓ Recibirás notificación WhatsApp   │
│  ✓ No necesitas estar presente       │
│                                      │
└──────────────────────────────────────┘
```

**Backend valida sesión:**
```javascript
// GET /api/join/abc123xyz
const session = await db.activeSessions.findUnique({
  where: { sessionId: "abc123xyz" }
});

if (!session || !session.active || new Date() > session.expiresAt) {
  return { error: "Sesión expirada. Pide al staff un nuevo QR" };
}

// Sesión válida, retorna info del negocio
```

---

### **3. Cliente Hace Click "Unirme a la fila"**

**Frontend:**
```javascript
async function handleJoinQueue() {
  // 1. Generar código único
  const response = await fetch(`/api/join/code`, {
    method: 'POST',
    body: JSON.stringify({ sessionId })
  });

  const { code, whatsappUrl } = await response.json();
  // code: "abc123xyz-codigo123"

  // 2. Abrir WhatsApp
  window.open(whatsappUrl);
}
```

**Backend:**
```javascript
// POST /api/join/code
const code = `${sessionId}-${generateRandomCode()}`;
// "abc123xyz-codigo123"

await db.joinCodes.create({
  code,
  sessionId,
  businessId: session.businessId,
  createdAt: now,
  expiresAt: now + 300_000,  // 5 minutos
  used: false
});

return {
  code,
  whatsappUrl: `https://wa.me/5215512345678?text=UNIRME ${code}`
};
```

---

### **4. Cliente Envía Mensaje de WhatsApp**

**Mensaje:** `UNIRME abc123xyz-codigo123`

**Webhook procesa:**
```javascript
// POST /api/webhooks/whatsapp
const { from, body } = req.body;
const [command, code] = body.split(' ');

if (command === 'UNIRME') {
  // 1. Validar código
  const joinCode = await db.joinCodes.findUnique({ where: { code } });

  if (!joinCode || joinCode.used || new Date() > joinCode.expiresAt) {
    await sendWhatsApp(from, '❌ Código inválido o expirado');
    return;
  }

  // 2. Validar que el token no haya sido usado
  const qrToken = await db.qrTokens.findUnique({ where: { token: joinCode.token } });

  if (!qrToken || qrToken.used) {
    await sendWhatsApp(from, '❌ Este QR ya fue usado. Pide al staff que muestre el nuevo QR.');
    return;
  }

  // 3. Verificar que no tenga turno activo
  const existingTicket = await db.queue.findFirst({
    where: {
      businessId: joinCode.businessId,
      phoneNumber: from,
      status: { in: ['waiting', 'called', 'serving'] }
    }
  });

  if (existingTicket) {
    await sendWhatsApp(from,
      `⚠️ Ya tienes el turno #${existingTicket.ticketNumber} activo.\n\n` +
      `Escribe ESTADO para ver tu posición.`
    );
    return;
  }

  // 4. Asignar turno
  const nextNumber = await getNextTicketNumber(joinCode.businessId);
  const ticket = await db.queue.create({
    data: {
      businessId: joinCode.businessId,
      ticketNumber: nextNumber,
      phoneNumber: from,
      status: 'waiting',
      joinedAt: new Date()
    }
  });

  // 5. Marcar código y token como usados
  await db.joinCodes.update({
    where: { code },
    data: { used: true, phoneNumber: from }
  });

  await db.qrTokens.update({
    where: { token: joinCode.token },
    data: {
      used: true,
      usedAt: new Date(),
      phoneNumber: from,
      current: false
    }
  });

  // 6. GENERAR NUEVO QR AUTOMÁTICAMENTE
  const newToken = generateToken();
  await db.qrTokens.create({
    data: {
      token: newToken,
      businessId: joinCode.businessId,
      current: true
    }
  });

  // 7. Notificar al staff via WebSocket/SSE que hay nuevo QR
  notifyStaff(joinCode.businessId, {
    event: 'qr_regenerated',
    token: newToken,
    qrUrl: `https://app.turnolibre.com/join/${newToken}`
  });

  // 8. Calcular tiempo de espera
  const queueLength = await db.queue.count({
    where: {
      businessId: joinCode.businessId,
      status: { in: ['waiting', 'serving'] },
      ticketNumber: { lt: nextNumber }
    }
  });

  const business = await db.businesses.findUnique({
    where: { id: joinCode.businessId }
  });

  const estimatedWait = queueLength * business.avgServiceTime;

  // 9. Responder
  await sendWhatsApp(from,
    `✅ *Turno asignado*\n\n` +
    `🎫 Turno: #${nextNumber}\n` +
    `📍 ${business.name}\n` +
    `👥 Posición: ${queueLength} personas adelante\n` +
    `⏰ Tiempo estimado: ~${estimatedWait} min\n\n` +
    `Puedes irte, te avisamos cuando falten 2 turnos.\n\n` +
    `💬 Escribe *SALIR* para cancelar tu turno\n` +
    `💬 Escribe *ESTADO* para ver tu posición`
  );
}
```

---

### **5. Staff Libera Turno**

**Staff atiende al turno #11 y hace click en "Liberar Turno":**

```javascript
// POST /api/staff/queue/complete
const completedTicket = await db.queue.update({
  where: { id: ticketId },
  data: {
    status: 'completed',
    completedAt: new Date()
  }
});

// Auto-llamar siguiente
const nextTicket = await db.queue.findFirst({
  where: {
    businessId: staff.businessId,
    status: 'waiting'
  },
  orderBy: { ticketNumber: 'asc' }
});

if (nextTicket) {
  // Marcar como "serving"
  await db.queue.update({
    where: { id: nextTicket.id },
    data: { status: 'serving', calledAt: new Date() }
  });

  // Notificar al turno actual
  await sendWhatsApp(nextTicket.phoneNumber,
    `🔔 *¡ES TU TURNO AHORA!*\n\n` +
    `🎫 Turno #${nextTicket.ticketNumber}\n` +
    `📍 ${business.name}\n\n` +
    `Por favor preséntate en recepción.`
  );

  // Notificar a los siguientes 2
  const upcomingTickets = await db.queue.findMany({
    where: {
      businessId: staff.businessId,
      status: 'waiting',
      ticketNumber: { gt: nextTicket.ticketNumber }
    },
    orderBy: { ticketNumber: 'asc' },
    take: 2
  });

  upcomingTickets.forEach((ticket, index) => {
    const turnosRestantes = index + 1;
    const minutosEstimados = turnosRestantes * business.avgServiceTime;

    sendWhatsApp(ticket.phoneNumber,
      `⏰ *Faltan ${turnosRestantes} turnos*\n\n` +
      `Tu turno (#${ticket.ticketNumber}) está cerca\n` +
      `Tiempo estimado: ~${minutosEstimados} min\n\n` +
      `${turnosRestantes === 1 ? '👉 Ve acercándote' : '⏳ Sigue atento'}`
    );
  });
}
```

---

## 🛡️ Seguridad y Anti-Spam

### **1. Token de Un Solo Uso**
```javascript
// Cada token solo puede usarse una vez
await db.qrTokens.update({
  where: { token },
  data: { used: true, usedAt: new Date() }
});

// Inmediatamente después, genera nuevo token
const newToken = generateToken();
await db.qrTokens.create({
  data: { token: newToken, businessId, current: true }
});
```

**Beneficio:** Cliente no puede guardar el QR y usarlo después. Un QR = Un turno.

---

### **2. Un Turno Activo por Número**
```sql
-- Constraint en la tabla
UNIQUE(business_id, phone_number) WHERE status IN ('waiting', 'called', 'serving')
```

**Beneficio:** Mismo número no puede tener múltiples turnos.

---

### **3. Código de Un Solo Uso**
```javascript
// Marcar como usado inmediatamente
await db.joinCodes.update({
  where: { code },
  data: { used: true }
});
```

**Beneficio:** Código no puede reusarse.

---

### **4. Staff Controla Flujo**
- Staff puede ocultar el QR (pausar admisiones)
- Staff puede cerrar sesión (invalida QR actual)
- Staff puede regenerar QR manualmente si es necesario
- Cada QR usado se reemplaza automáticamente

---

## 📊 Diferenciación de Planes

| Característica | Plan Básico | Plan Profesional |
|----------------|-------------|------------------|
| **QR Estático Impreso** | ❌ No | ✅ Sí (cartel) |
| **QR Dinámico en App** | ✅ Sí (obligatorio) | ✅ Sí (opcional) |
| **Control de Admisiones** | ✅ Manual (staff muestra QR) | ✅ Automático (QR siempre visible) |
| **Hardware** | ❌ Cliente provee | ✅ Tablet + impresora incluidos |
| **Setup** | ⚡ 10 min (self-service) | 🔧 3 horas (instalación) |
| **Precio** | 💰 $399/mes | 💰 $1,799/mes |

---

## 💬 Comandos de WhatsApp

```javascript
// Cliente puede interactuar vía WhatsApp

// 1. UNIRME codigo
"UNIRME abc123xyz-codigo123"
→ Asigna turno

// 2. SALIR
"SALIR"
→ Remueve de la fila
→ "❌ Te removimos de la fila. ¡Hasta pronto!"

// 3. ESTADO
"ESTADO"
→ Muestra posición actual
→ "🎫 Turno #12 | 👥 5 personas adelante | ⏰ ~15 min"

// Cualquier otro mensaje
→ "No entiendo ese comando. Escribe ESTADO, SALIR o UNIRME [código]"
```

---

## 🎯 Ventajas de Esta Arquitectura

### **Plan Básico:**
✅ Staff tiene control total (muestra QR cuando quiere)
✅ Imposible spam desde casa (QR expira en 60seg)
✅ Puede pausar admisiones (oculta el QR)
✅ No requiere impresión ni instalación

### **Plan Profesional:**
✅ QR estático siempre disponible (más conveniente)
✅ Hardware dedicado incluido
✅ Instalación profesional
✅ Mejor para alto volumen

---

## 🔄 Auto-Regeneración de QR (Después de Cada Uso)

```javascript
// En el Business App (Frontend) - WebSocket/SSE para actualizaciones en tiempo real
const eventSource = new EventSource('/api/staff/events');

eventSource.addEventListener('qr_regenerated', (event) => {
  const { token, qrUrl } = JSON.parse(event.data);

  // Actualizar QR mostrado automáticamente
  setQrUrl(qrUrl);
  setCurrentToken(token);

  console.log('QR regenerado - listo para siguiente cliente');
});

eventSource.addEventListener('ticket_assigned', (event) => {
  const { ticketNumber, phoneNumber } = JSON.parse(event.data);

  // Mostrar notificación al staff
  showNotification(`Nuevo turno #${ticketNumber} asignado`);

  // Actualizar cola
  refreshQueue();
});
```

**Flujo:**
1. Cliente completa registro → Token marcado como usado
2. Backend genera nuevo token automáticamente
3. WebSocket notifica al Business App
4. QR se actualiza en la tablet sin intervención del staff

---

## 📝 Notas Importantes

1. **Token vs Join Code:**
   - **Token**: Identificador del QR (un solo uso, se regenera al usarse)
   - **Join Code**: Código generado al hacer click (5min de vida)
   - Formato: `token-abc123xyz-codigo456` → incluye ambos

2. **Regeneración Automática:**
   - Token usado → Nuevo token generado inmediatamente
   - Staff no necesita hacer nada, sucede automáticamente
   - WebSocket/SSE actualiza la tablet en tiempo real

3. **Plan Básico es "Controlado":**
   - Staff tiene la tablet con QR visible
   - Cada QR = 1 turno (anti-spam perfecto)
   - Plan Pro es "Automático": QR estático siempre disponible

4. **Limpieza de Base de Datos:**
   ```javascript
   // Cron job diario - eliminar tokens antiguos
   DELETE FROM qr_tokens WHERE created_at < NOW() - INTERVAL '7 days';

   // Eliminar join codes expirados
   DELETE FROM join_codes WHERE expires_at < NOW() - INTERVAL '1 hour';
   ```

5. **Estado del Token:**
   - `current: true` → Es el QR activo mostrado en la tablet
   - `used: true` → Ya fue utilizado, generó un turno
   - Solo puede haber 1 token con `current: true` por negocio
