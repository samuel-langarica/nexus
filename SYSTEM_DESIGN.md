# 🏗️ Diseño del Sistema TurnoLibre

## 📐 Arquitectura General

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENTES (USUARIOS)                   │
└─────────────────────────────────────────────────────────┘
         │                                    │
    [QR Scan]                           [Staff Login]
         │                                    │
         ↓                                    ↓
┌──────────────────────┐          ┌──────────────────────┐
│  Landing Page        │          │   Dashboard Web      │
│  (Next.js)          │          │   (Next.js)          │
│  /q/negocio123      │          │   /dashboard         │
└──────────────────────┘          └──────────────────────┘
         │                                    │
         └────────────────┬───────────────────┘
                          ↓
         ┌────────────────────────────────┐
         │       API Backend              │
         │       (Node.js + Express)      │
         │                                │
         │  /api/business/:id             │
         │  /api/codes/reserve            │
         │  /api/webhooks/whatsapp        │
         │  /api/queue/:businessId        │
         │  /api/queue/next               │
         └────────────────────────────────┘
              │              │
              ↓              ↓
    ┌─────────────┐   ┌──────────────────┐
    │ PostgreSQL  │   │ WhatsApp Business│
    │   Database  │   │      API         │
    └─────────────┘   └──────────────────┘
                              │
                              ↓
                      ┌──────────────┐
                      │   Cliente    │
                      │  (WhatsApp)  │
                      └──────────────┘
```

---

## 🗄️ Esquema de Base de Datos

```sql
-- NEGOCIOS (Clientes de TurnoLibre)
CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,        -- Número WhatsApp del negocio
  avg_service_time INT DEFAULT 10,          -- Minutos promedio por cliente
  qr_code VARCHAR(100) UNIQUE NOT NULL,     -- Identificador único: "negocio123"
  created_at TIMESTAMP DEFAULT NOW()
);

-- COLA ACTIVA
CREATE TABLE queue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id),
  ticket_number INT NOT NULL,                -- #1, #2, #3...
  phone_number VARCHAR(20) NOT NULL,         -- Número del cliente
  status VARCHAR(20) DEFAULT 'waiting',      -- waiting | called | completed | no_show
  joined_at TIMESTAMP DEFAULT NOW(),
  called_at TIMESTAMP,
  completed_at TIMESTAMP,

  UNIQUE(business_id, phone_number, status) WHERE status IN ('waiting', 'called')
);

-- CÓDIGOS DINÁMICOS (Temporales)
CREATE TABLE pending_codes (
  code VARCHAR(100) PRIMARY KEY,
  business_id UUID REFERENCES businesses(id),
  client_ip VARCHAR(45),                     -- Para rate limiting
  created_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP NOT NULL,
  used BOOLEAN DEFAULT FALSE,
  phone_number VARCHAR(20)
);

-- ÍNDICES
CREATE INDEX idx_queue_business_status ON queue(business_id, status);
CREATE INDEX idx_codes_expires ON pending_codes(expires_at) WHERE used = FALSE;

-- USUARIOS STAFF (Opcional - para dashboard)
CREATE TABLE staff_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🔌 API Endpoints

### **Públicos (No requieren auth)**

```javascript
// 1. Obtener info del negocio (para landing page)
GET /api/business/:qrCode
Response: {
  id: "uuid",
  name: "Consultorio Dr. Pérez",
  avgWaitTime: 25,
  queueLength: 8
}

// 2. Reservar código dinámico
POST /api/codes/reserve
Body: { code: "negocio123-1705...", businessId: "uuid" }
Response: { success: true }

// 3. Webhook de WhatsApp (recibe mensajes)
POST /api/webhooks/whatsapp
Body: { from: "+5215512345678", body: "UNIRME codigo123" }
Response: 200 OK
```

### **Privados (Requieren JWT del staff)**

```javascript
// 4. Login del staff
POST /api/auth/login
Body: { email: "staff@negocio.com", password: "***" }
Response: { token: "jwt...", businessId: "uuid" }

// 5. Ver cola actual
GET /api/queue/:businessId
Headers: { Authorization: "Bearer jwt..." }
Response: {
  queue: [
    { ticketNumber: 12, phoneNumber: "+521...", status: "waiting", joinedAt: "..." },
    { ticketNumber: 13, phoneNumber: "+521...", status: "waiting", joinedAt: "..." }
  ]
}

// 6. Llamar siguiente turno
POST /api/queue/next
Headers: { Authorization: "Bearer jwt..." }
Body: { businessId: "uuid" }
Response: {
  called: { ticketNumber: 12, phoneNumber: "+521..." },
  notified: ["+521555...", "+521666..."] // Siguientes en la fila
}

// 7. Marcar turno como completado
POST /api/queue/complete
Body: { ticketId: "uuid" }
Response: { success: true }

// 8. Cancelar turno (staff o cliente)
DELETE /api/queue/:ticketId
Response: { success: true }
```

---

## 🔄 Flujos Principales

### **Flujo 1: Cliente se une a la fila**

```
1. Cliente escanea QR
   → Abre: https://app.turnolibre.com/q/negocio123

2. Frontend carga info del negocio
   GET /api/business/negocio123
   → Muestra: "8 personas, ~25 min"

3. Cliente hace click "Unirme a la fila"
   → Frontend genera código: "negocio123-1705234567890-a7f3k2"
   → POST /api/codes/reserve { code, businessId }
   → Abre WhatsApp: wa.me/5215512345678?text=UNIRME negocio123-1705234567890-a7f3k2

4. Cliente envía mensaje de WhatsApp

5. Backend recibe webhook
   POST /api/webhooks/whatsapp { from: "+521...", body: "UNIRME codigo..." }
   → Valida código
   → Verifica que no tenga turno activo
   → Asigna turno #12
   → Marca código como usado
   → Envía WhatsApp: "✅ Turno #12, ~25 min"
```

### **Flujo 2: Staff llama siguiente turno**

```
1. Staff ve dashboard con cola
   GET /api/queue/:businessId
   → [Turno #12 (waiting), Turno #13 (waiting), ...]

2. Staff hace click "Llamar siguiente"
   POST /api/queue/next { businessId }

3. Backend:
   → Marca turno #12 como "called"
   → Envía WhatsApp a #12: "🔔 ¡Tu turno es ahora!"
   → Envía WhatsApp a #13: "⏰ Faltan 2 turnos (~8 min)"
   → Envía WhatsApp a #14: "⏰ Faltan 3 turnos (~12 min)"

4. Staff atiende cliente y marca como completado
   POST /api/queue/complete { ticketId }
   → Marca turno #12 como "completed"
```

### **Flujo 3: Notificaciones automáticas**

```javascript
// Cron job que corre cada 30 segundos
async function checkQueueProgress() {
  // Para cada negocio activo
  for (business of activeBusinesses) {
    const queue = await getQueue(business.id);

    // Turno actual siendo atendido
    const serving = queue.find(t => t.status === 'called');

    // Siguiente en la fila
    const next = queue.find(t => t.status === 'waiting' && t.position === 1);

    // Si el siguiente está próximo (< 2 turnos)
    if (next && next.estimatedWait < 10) {
      await sendWhatsApp(next.phoneNumber, "⏰ Faltan ~8 min");
    }
  }
}
```

---

## 🛠️ Stack Tecnológico

```
FRONTEND
├─ Framework: Next.js 14 (App Router)
├─ Styling: TailwindCSS o CSS-in-JS (actual)
├─ State: React Query (para polling/cache)
└─ Hosting: Vercel

BACKEND
├─ Runtime: Node.js 20+
├─ Framework: Express.js
├─ ORM: Prisma (para PostgreSQL)
├─ Auth: JWT (jsonwebtoken)
├─ WhatsApp: Twilio API for WhatsApp
└─ Hosting: Railway / Render / Fly.io

DATABASE
├─ Producción: PostgreSQL (Supabase / Neon / Railway)
├─ Cache: Redis (Upstash) - Opcional
└─ Migrations: Prisma Migrate

INFRA
├─ Monitoreo: Sentry (errores)
├─ Logs: Winston / Pino
└─ CI/CD: GitHub Actions
```

---

## 📦 Estructura de Carpetas

```
turnolibre/
├─ apps/
│  ├─ web/                      # Frontend (Next.js)
│  │  ├─ app/
│  │  │  ├─ q/[qrCode]/page.tsx    # Landing page del negocio
│  │  │  └─ dashboard/page.tsx     # Dashboard del staff
│  │  └─ components/
│  │     ├─ QueueLanding.tsx
│  │     └─ StaffDashboard.tsx
│  │
│  └─ api/                      # Backend (Express)
│     ├─ routes/
│     │  ├─ business.js
│     │  ├─ codes.js
│     │  ├─ queue.js
│     │  └─ webhooks.js
│     ├─ services/
│     │  ├─ whatsapp.js
│     │  └─ queue-manager.js
│     └─ server.js
│
├─ prisma/
│  └─ schema.prisma            # Esquema de BD
│
└─ package.json
```

---

## 🔐 Validaciones Clave

```javascript
// 1. Código dinámico válido
function validateCode(code) {
  const codeData = await db.pendingCodes.findUnique({ where: { code } });

  if (!codeData) return { valid: false, reason: 'No existe' };
  if (codeData.used) return { valid: false, reason: 'Ya usado' };
  if (new Date() > codeData.expiresAt) return { valid: false, reason: 'Expiró' };

  return { valid: true, businessId: codeData.businessId };
}

// 2. Un turno activo por número
function hasActiveTicket(phoneNumber, businessId) {
  const ticket = await db.queue.findFirst({
    where: {
      phoneNumber,
      businessId,
      status: { in: ['waiting', 'called'] }
    }
  });

  return ticket !== null;
}

// 3. Rate limiting por IP
function checkRateLimit(ip) {
  const count = await db.pendingCodes.count({
    where: {
      clientIp: ip,
      createdAt: { gte: new Date(Date.now() - 10 * 60 * 1000) }
    }
  });

  return count < 3; // Máximo 3 por 10 min
}
```

---

## 🚀 Orden de Implementación (MVP)

```
SEMANA 1: Fundación
✅ Setup proyecto (Next.js + Express)
✅ Base de datos (PostgreSQL + Prisma)
✅ Modelo de datos (businesses, queue, pending_codes)
✅ Landing page dinámica (/q/negocio123)

SEMANA 2: WhatsApp Integration
✅ Cuenta Twilio WhatsApp
✅ Webhook para recibir mensajes
✅ Lógica de códigos dinámicos
✅ Asignación de turnos

SEMANA 3: Dashboard Staff
✅ Login simple (JWT)
✅ Vista de cola en tiempo real
✅ Botón "Llamar siguiente"
✅ Notificaciones automáticas

SEMANA 4: Pulido
✅ Estimación de tiempos
✅ Manejo de errores
✅ Deploy a producción
```

---

## 📊 Variables de Entorno

```bash
# .env
DATABASE_URL=postgresql://user:pass@host:5432/turnolibre
JWT_SECRET=tu-secret-super-seguro
TWILIO_ACCOUNT_SID=ACxxxxx
TWILIO_AUTH_TOKEN=xxxxx
TWILIO_WHATSAPP_NUMBER=+14155238886
NEXT_PUBLIC_API_URL=https://api.turnolibre.com
```

---

## 🔐 QR Dinámico de Un Solo Uso

### El Problema
Sin QR dinámico, cualquiera podría guardar el QR y saturar la fila desde casa.

### La Solución: QR de Un Solo Uso por Turno
El QR dinámico es un **token que solo permite registrar 1 turno**:
1. Staff muestra QR en tablet del negocio
2. Cliente escanea → Se une a la fila
3. **QR se invalida automáticamente**
4. **Nuevo QR se genera para el siguiente cliente**

### Cómo Funciona
1. Cliente escanea QR → Abre Queue Join Page con token único
2. Click "Unirme" → Genera código: `token-abc123xyz-codigo456`
3. Frontend registra código en BD (expira en 5 min)
4. Abre WhatsApp con mensaje: `UNIRME token-abc123xyz-codigo456`
5. Backend valida código y token (existe, no usado)
6. Asigna turno, marca token como usado
7. **Backend genera nuevo token automáticamente**
8. **Tablet del staff se actualiza con nuevo QR vía WebSocket**

### Prevención de Spam
**Solución perfecta:** Un QR = Un Turno
- Imposible guardar el QR y usarlo después (se invalida al usarse)
- Imposible usar el mismo QR múltiples veces
- Staff controla el flujo (tablet visible o no)

**Solución adicional:** Un turno activo por número de teléfono
- Mismo número no puede tener múltiples turnos simultáneos

---

## 📝 Notas Importantes

1. **WhatsApp Rate Limiting**: Empieza con 1,000 conversaciones/día, necesitas aprobar aumento con Meta
2. **Costos Variables**: ~$0.005 USD por mensaje de WhatsApp
3. **Validación de Números**: Considera formato internacional (+52, +1, etc.)
4. **Persistencia del Chat**: WhatsApp mantiene historial, el cliente puede revisar su turno
5. **Constraint Único**: La tabla `queue` tiene constraint único en `(business_id, phone_number, status)` para evitar turnos duplicados activos
