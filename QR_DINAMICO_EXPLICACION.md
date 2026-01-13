# 🎫 QR Dinámico de Un Solo Uso - Explicación

## 🎯 Concepto Clave

**Un QR = Un Turno**

El QR mostrado en la tablet del staff **se regenera automáticamente después de cada uso**.

---

## 🔄 Flujo Visual

```
┌─────────────────────────────────────────────────────────┐
│                    CICLO COMPLETO                        │
└─────────────────────────────────────────────────────────┘

1️⃣ ESTADO INICIAL
   Tablet muestra: QR Token #1
   Estado: Esperando cliente

2️⃣ CLIENTE 1 LLEGA
   - Escanea QR Token #1
   - Abre Queue Join Page
   - Click "Unirme a la fila"
   - Manda WhatsApp: "UNIRME token1-codigo123"

3️⃣ BACKEND PROCESA
   - Valida token1 ✓
   - Asigna turno #12 a Cliente 1
   - Marca token1 como "usado" ❌
   - **Genera automáticamente Token #2** ✨
   - Notifica a tablet vía WebSocket

4️⃣ TABLET SE ACTUALIZA
   Tablet ahora muestra: QR Token #2
   Estado: Listo para siguiente cliente

5️⃣ CLIENTE 2 LLEGA (5 minutos después)
   - Escanea QR Token #2
   - Repite proceso...
   - Token #2 se usa → Token #3 se genera

♻️ CICLO SE REPITE INFINITAMENTE
```

---

## 🛡️ Anti-Spam Perfecto

### ❌ Escenario de Ataque Bloqueado

```
ATACANTE intenta spam:

1. Guarda foto del QR mostrado en tablet
2. Se va a su casa
3. Intenta escanear la foto del QR

Resultado:
❌ "Este QR ya fue usado. Pide al staff que muestre el nuevo QR."

¿Por qué falla?
- Ese QR ya fue usado por otro cliente
- El QR actual en la tablet es diferente
- No hay forma de obtener el QR actual sin estar físicamente ahí
```

---

## 🔑 Características Técnicas

### **Token (QR)**
- **ID único:** `abc123xyz`
- **Vida útil:** Hasta que se use (un solo uso)
- **Estado:** `active` → `used`
- **Regeneración:** Automática al usarse

### **Join Code (Mensaje WhatsApp)**
- **Formato:** `token-abc123xyz-codigo456`
- **Componentes:**
  - `token`: El token del QR escaneado
  - `codigo456`: Código aleatorio adicional
- **Vida útil:** 5 minutos (para completar el flujo WhatsApp)
- **Un solo uso:** Se marca como `used` al asignar turno

---

## 📊 Base de Datos

```sql
-- Tabla de tokens (QR)
CREATE TABLE qr_tokens (
  token VARCHAR(50) PRIMARY KEY,
  business_id UUID REFERENCES businesses(id),
  created_at TIMESTAMP DEFAULT NOW(),
  used BOOLEAN DEFAULT FALSE,
  used_at TIMESTAMP,
  phone_number VARCHAR(20),
  current BOOLEAN DEFAULT TRUE
);

-- Solo puede haber 1 token con current=true por negocio
CREATE UNIQUE INDEX idx_one_current_qr
  ON qr_tokens(business_id) WHERE current = TRUE;
```

**Estados del token:**

| Estado | `used` | `current` | Descripción |
|--------|--------|-----------|-------------|
| Activo | false | true | QR mostrado en tablet, esperando uso |
| Usado | true | false | Ya generó un turno, invalidado |
| Histórico | false | false | Nunca se usó, reemplazado por uno nuevo |

---

## 🔄 Regeneración Automática

### **Backend (webhook de WhatsApp)**

```javascript
// Cuando se asigna un turno...

// 1. Marcar token actual como usado
await db.qrTokens.update({
  where: { token: currentToken },
  data: {
    used: true,
    usedAt: new Date(),
    phoneNumber: clientPhone,
    current: false
  }
});

// 2. Generar nuevo token
const newToken = generateToken(); // "xyz789def"

await db.qrTokens.create({
  data: {
    token: newToken,
    businessId: business.id,
    current: true
  }
});

// 3. Notificar a tablet del staff vía WebSocket
io.to(`business-${business.id}`).emit('qr_regenerated', {
  token: newToken,
  qrUrl: `https://app.turnolibre.com/join/${newToken}`
});
```

### **Frontend (Business App en tablet)**

```javascript
// WebSocket listener
socket.on('qr_regenerated', ({ token, qrUrl }) => {
  // Actualizar QR mostrado
  setCurrentToken(token);
  setQrUrl(qrUrl);

  // Generar nuevo QR code visual
  QRCode.toCanvas(canvasRef.current, qrUrl);

  console.log('✅ QR regenerado - Listo para siguiente cliente');
});
```

---

## ⏱️ Timeline de Ejemplo

```
9:00 AM - Staff abre Business App
         → Token1 generado, QR mostrado

9:05 AM - María llega y escanea QR (Token1)
         → María completa registro
         → Token1 marcado como usado
         → Token2 generado automáticamente
         → Tablet muestra Token2

9:10 AM - Juan llega y escanea QR (Token2)
         → Juan completa registro
         → Token2 marcado como usado
         → Token3 generado automáticamente
         → Tablet muestra Token3

9:15 AM - Pedro llega y escanea QR (Token3)
         ...ciclo continúa...

10:00 AM - Alguien intenta escanear foto vieja del Token1
         → ❌ "Este QR ya fue usado"
```

---

## 💡 Ventajas vs QR Estático

| Característica | QR Estático (Plan Pro) | QR Dinámico (Plan Básico) |
|----------------|------------------------|---------------------------|
| **Spam desde casa** | ⚠️ Posible (puede guardar QR) | ✅ Imposible (QR de un uso) |
| **Control de admisiones** | ❌ Siempre abierto | ✅ Staff controla (oculta tablet) |
| **Instalación** | ✅ QR impreso en cartel | ⚠️ Requiere tablet siempre visible |
| **Conveniencia** | ✅ Alta (QR permanente) | ⚠️ Media (tablet necesaria) |
| **Costo** | 💰 $1,799/mes | 💰 $399/mes |
| **Hardware incluido** | ✅ Tablet + impresora | ❌ Cliente provee |

---

## 🎬 Demo del Flujo

### **Vista del Cliente:**

```
1. Llega al negocio
2. Ve tablet en mostrador con QR
3. Escanea QR → Abre página web
4. Click "Unirme" → WhatsApp se abre
5. Envía mensaje → Recibe confirmación
6. Se va a tomar café

Total: 20 segundos
```

### **Vista del Staff:**

```
1. Abre Business App al inicio del día
2. Deja tablet visible en mostrador
3. Clientes escanean el QR cuando llegan
4. Tablet se actualiza sola con nuevo QR cada vez
5. Staff solo interactúa para llamar/liberar turnos

Intervención: 0 (automático)
```

---

## 🔧 Manejo de Casos Especiales

### **¿Qué pasa si un cliente escanea pero no completa el flujo?**

```
1. Cliente escanea QR → Token1
2. Cliente abre página pero cierra el navegador sin hacer click
3. Join code nunca se genera
4. Token1 sigue activo (no usado)
5. Siguiente cliente puede escanear el mismo Token1

Solución: El token solo se invalida cuando realmente se usa (envía WhatsApp)
```

### **¿Qué pasa si dos clientes escanean al mismo tiempo?**

```
1. Cliente A escanea → Token1
2. Cliente B escanea (0.5seg después) → Token1 (mismo)
3. Cliente A envía WhatsApp primero → Token1 se usa, Token2 se genera
4. Cliente B envía WhatsApp → ❌ "Token1 ya fue usado"

Solución: Cliente B debe escanear el nuevo QR (Token2) que ya está en la tablet
```

### **¿Qué pasa si el staff cierra la app?**

```
1. Staff cierra Business App
2. Token actual queda marcado como no-current
3. Staff vuelve a abrir app
4. Nuevo token se genera automáticamente
5. Tokens viejos quedan invalidados

Efecto: QR anterior ya no funciona (seguridad)
```

---

## 📱 Implementación Técnica Resumida

### **Tecnologías Necesarias:**
- **WebSocket/SSE** para notificar cambios de QR en tiempo real
- **PostgreSQL** para almacenar tokens y su estado
- **React/Next.js** para Business App (tablet)
- **WhatsApp Business API** para recibir mensajes

### **Endpoints Clave:**
```
GET  /api/staff/qr/current     - Obtener QR actual
POST /api/staff/qr/regenerate  - Regenerar manualmente (opcional)
GET  /api/join/:token           - Validar token del QR
POST /api/join/code             - Generar código de unión
POST /api/webhooks/whatsapp     - Recibir mensajes y procesar
```

### **Eventos WebSocket:**
```
qr_regenerated        - Nuevo QR generado
ticket_assigned       - Nuevo turno asignado
queue_updated         - Cola actualizada
```

---

## ✅ Checklist de Implementación

- [ ] Tabla `qr_tokens` en base de datos
- [ ] Endpoint para obtener QR actual
- [ ] Lógica de regeneración automática en webhook
- [ ] WebSocket/SSE para notificar cambios
- [ ] Business App con listener de actualizaciones
- [ ] Validación de token en Queue Join Page
- [ ] Manejo de tokens expirados/usados
- [ ] Constraint único: 1 token `current` por negocio
- [ ] Limpieza periódica de tokens antiguos

---

## 🚀 Beneficio Principal

**El staff solo necesita:**
1. Abrir la app al inicio del día
2. Dejar la tablet visible

**Todo lo demás es automático:**
- QR se regenera solo
- Clientes se registran solos
- Notificaciones automáticas
- Control anti-spam perfecto

**Result: Sistema que "funciona solo" con seguridad máxima.**
