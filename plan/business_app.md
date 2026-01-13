# Business App - TurnoLibre Dashboard

## 🎯 Resumen del Sistema

**Concepto:** Sistema de gestión de turnos por WhatsApp donde clientes escanean QR, reciben su turno, y esperan remotamente mientras el staff gestiona la fila desde un dashboard.

**Usuarios:** Staff de negocios (un solo rol con acceso completo)

---

## 📋 Arquitectura del Sistema

### **Estructura de Filas**
- ✅ **Fila única** por negocio (sin categorías en MVP)
- ✅ **Múltiples puntos de atención** (cajas, mesas, mostradores)
- ✅ **Siguiente turno → cualquier punto disponible** (sistema inteligente asigna)

**Ejemplo:**
```
Fila: A047 → A048 → A049 → A050 → A051

Puntos de atención:
- Caja 1: atendiendo A045
- Caja 2: atendiendo A046
- Caja 3: atendiendo A047
```

Cuando Caja 3 marca A047 como "completado", A048 es el siguiente (sin importar qué caja se libere).

---

## 👤 Roles y Permisos

### **Un solo rol: Owner/Staff**
- ✅ Ver toda la fila
- ✅ Ver turnos activos (siendo atendidos)
- ✅ Marcar turnos como "completado"
- ✅ Marcar turnos como "ausente"
- ✅ **Reordenar turnos manualmente** (drag & drop)
- ✅ Configurar cuenta (nombre negocio, logo, mensajes WhatsApp)
- ✅ Ver historial del día

**Nota:** Todos tienen acceso completo. No hay diferenciación entre admin y staff básico.

---

## 🔄 Flujo de Turnos

### **1. Cliente escanea QR**
- Cliente escanea QR mostrado en pantalla del negocio
- Sistema asigna turno único (ej: A052)
- Cliente recibe mensaje de bienvenida por WhatsApp

**Mensaje WhatsApp:**
```
✅ Listo, ya estás en el sistema
Faltan 5 turnos
Puedes sentarte, ir al baño o tomar un café ☕
Te avisamos cuando falten 2 turnos
```

### **2. Staff atiende turnos**
**Dashboard muestra:**
- Turno actual siendo atendido (ej: A047)
- Lista de turnos esperando (A048, A049, A050...)
- Botón "Marcar como completado"

**Cuando staff marca turno como completado:**
1. Turno A047 se libera
2. Sistema marca siguiente turno (A048) como "activo"
3. **WhatsApp automático a A048:** "⏰ ¡Tu turno está por salir! Dirígete a Caja 3"
4. **WhatsApp automático a A049:** "Faltan 2 turnos"

### **3. Cliente no llega (No-show)**

**Escenario:**
- Staff llama a A048
- Cliente no está presente

**Acciones del staff:**
1. Click en botón "Marcar ausente"
2. Sistema inicia contador de X minutos (configurable por negocio)
3. Turno queda en estado "Esperando" con timer visible
4. **Después de X minutos:** Turno permanece en espera hasta que staff lo cancele manualmente
5. Staff puede:
   - Cancelar definitivamente (cliente pierde turno)
   - O cliente llega tarde y staff reactiva el turno

**Configuración:**
- X minutos es **configurable por negocio** (5, 10, 15 minutos)
- Default sugerido: 10 minutos

---

## 🔀 Reordenar Turnos

### **Staff puede cambiar el orden manualmente**

**Casos de uso:**
- VIP/Emergencia (adulto mayor, persona con discapacidad)
- Cliente urgente ("solo vengo a pagar rápido")
- Corrección de errores

**Implementación:**
- Drag & drop en lista de turnos
- **Recomendado:** Log de auditoría
  ```
  Carlos movió A050 de posición 4 a posición 1
  Razón: Cliente adulto mayor
  Hora: 2:35 PM
  ```

**Beneficios:**
- Flexibilidad para casos reales
- Accountability (evita abuso)

---

## 📱 Notificaciones WhatsApp

### **Triggers automáticos:**

**1. Cliente escanea QR:**
```
✅ Listo, ya estás en el sistema
Faltan 8 turnos
Te avisamos cuando falten 2 turnos
```

**2. Faltan 2 turnos:**
```
⏰ Faltan 2 turnos
Ve acercándote
```

**3. Es tu turno:**
```
🔔 ¡Es tu turno!
Dirígete a Caja 3 ahora 👉
```

**IMPORTANTE:**
- Notificaciones basadas en **número de turnos que faltan** (NO tiempo estimado)
- Mensajes son personalizables por negocio

---

## ⚙️ Configuración del Negocio

**Settings que staff puede modificar:**

1. **Información básica:**
   - Nombre del negocio
   - Logo (opcional)

2. **Configuración de turnos:**
   - Tiempo de gracia para no-shows (X minutos)
   - Número de puntos de atención activos

3. **Mensajes WhatsApp:**
   - Mensaje de bienvenida personalizado
   - Mensaje de alerta personalizado
   - Mensaje cuando falta poco

4. **QR Code:**
   - Código QR único del negocio (para mostrar en pantalla/imprimir)

---

## 📊 Dashboard - Vista Principal

### **Secciones:**

**1. Turno Actual (Destacado)**
```
┌─────────────────────────┐
│   TURNO ACTUAL          │
│      A048               │
│                         │
│ [✓ Marcar Completado]   │
│ [⊗ Marcar Ausente]      │
└─────────────────────────┘
```

**2. Cola de Espera**
```
EN ESPERA:
┌─────────────────────────┐
│ A049  • Hace 12 min     │ ← Drag & drop habilitado
│ A050  • Hace 8 min      │
│ A051  • Hace 5 min      │
│ A052  • Hace 2 min      │
└─────────────────────────┘
```

**3. Historial (Opcional/Colapsado)**
- Turnos completados hoy
- Turnos cancelados/ausentes
- Total procesados

---

## 🎯 MVP - Funcionalidades Esenciales

### **Fase 1 (Lanzamiento):**
- [ ] Autenticación (login/signup)
- [ ] Dashboard con fila única
- [ ] Marcar turno como completado
- [ ] Marcar turno como ausente (con timer configurable)
- [ ] Reordenar turnos (drag & drop)
- [ ] Notificaciones WhatsApp automáticas
- [ ] Configuración básica del negocio
- [ ] Generación de QR único

### **Fase 2 (Post-MVP):**
- [ ] Analytics (turnos procesados, tiempo promedio espera)
- [ ] Múltiples categorías de fila (ej: mesas 2, 4, 6 personas)
- [ ] Múltiples roles (admin vs staff básico)
- [ ] Pausar fila (breaks, cierre temporal)
- [ ] Historial completo con búsqueda
- [ ] API para integraciones (plan Profesional)

---

## 🔐 Seguridad

- Autenticación requerida para acceder al dashboard
- Una cuenta por negocio
- QR único por negocio (no reutilizable entre negocios)
- Rate limiting en generación de turnos (evitar spam)

---

## 🚀 Stack Tecnológico Sugerido

**Frontend (Dashboard):**
- React + Vite
- Hosting: Vercel (app.turnolibre.com)

**Backend:**
- Node.js + Express (o Next.js API routes)
- Base de datos: PostgreSQL o Supabase
- WhatsApp API: Twilio o Meta WhatsApp Business API

**Landing Page:**
- Separada del dashboard (turnolibre.com)
- Estática, optimizada para SEO

---

## ✅ Resumen de Decisiones Clave

| Aspecto | Decisión |
|---------|----------|
| **Filas** | Fila única (sin categorías en MVP) |
| **Puntos de atención** | Múltiples (siguiente turno va al que se libere) |
| **Roles** | Un solo rol con acceso completo |
| **No-shows** | Marcar ausente → Timer X min (configurable) → Queda en espera hasta cancelación manual |
| **Reordenar** | ✅ Sí, con drag & drop (+ log de auditoría recomendado) |
| **Liberación** | Manual: staff marca como "completado" |
| **Notificaciones** | Basadas en turnos que faltan (no tiempo) |
| **Next turno** | Se activa automáticamente al completar anterior |

