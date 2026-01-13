# 👥 User Journeys - TurnoLibre

## 📋 Nomenclatura de Sitios

```
┌─────────────────────────────────────────────────────────┐
│                    SITIOS DEL SISTEMA                    │
└─────────────────────────────────────────────────────────┘

1. Marketing Site (Landing Page de TurnoLibre)
   URL: https://turnolibre.com
   Propósito: Vender el producto, mostrar planes, captar clientes

2. Queue Join Page (Página de Registro a Fila)
   URL: https://app.turnolibre.com/q/negocio123
   Propósito: Cliente escanea QR y se une a la fila

3. Staff Dashboard (Panel de Gestión de Fila)
   URL: https://app.turnolibre.com/dashboard
   Propósito: Staff del negocio gestiona turnos en tiempo real

4. Business Onboarding (Wizard de Configuración)
   URL: https://app.turnolibre.com/setup
   Propósito: Nuevo cliente configura su negocio

5. Admin Panel (Panel de Administración)
   URL: https://app.turnolibre.com/admin
   Propósito: Dueño del negocio ve analytics, configuración
```

---

## 🚶 User Journey 1: Cliente/Comensal

### **Persona:** María, 32 años, espera turno en consultorio médico

---

### **Paso 1: Llegada al Negocio**

```
Contexto: María llega al consultorio. La recepcionista (Carlos)
tiene una tablet en el mostrador mostrando un QR dinámico.

┌─────────────────────────────────┐
│  [TABLET DEL STAFF]             │
│                                 │
│     [QR CODE DINÁMICO]          │
│                                 │
│  Escanéame para unirte         │
│  a la fila virtual             │
│                                 │
│  Consultorio Dr. Pérez         │
│  8 personas en fila            │
│                                 │
└─────────────────────────────────┘
```

**Nota:** Este QR es de un solo uso. Cuando María complete su registro,
el QR se regenerará automáticamente para el siguiente cliente.

**Acción:** María saca su celular y escanea el QR dinámico de la tablet

---

### **Paso 2: Queue Join Page**

**URL abierta:** `https://app.turnolibre.com/join/abc123xyz`
*(Session ID único del QR dinámico)*

**Pantalla mostrada:**

```
┌─────────────────────────────────────┐
│  Consultorio Dr. Pérez              │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                     │
│  👥 8 personas en fila              │
│  ⏰ Tiempo estimado: ~25 min        │
│                                     │
│  ┌───────────────────────────────┐ │
│  │  🚀 Unirme a la fila          │ │
│  └───────────────────────────────┘ │
│                                     │
│  ✓ Te avisamos por WhatsApp         │
│  ✓ No necesitas estar presente      │
│                                     │
└─────────────────────────────────────┘
```

**Acción:** María hace click en "Unirme a la fila"

---

### **Paso 3: Generación de Código**

**Backend:**
- Frontend solicita código: POST `/api/join/code` con `sessionId: abc123xyz`
- Backend genera código: `abc123xyz-codigo123`
- Abre WhatsApp automáticamente

**Pantalla de María (WhatsApp se abre):**

```
┌─────────────────────────────────────┐
│  WhatsApp                           │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                     │
│  Para: TurnoLibre                   │
│  +52 155 1234 5678                  │
│                                     │
│  Mensaje:                           │
│  ┌─────────────────────────────┐   │
│  │ UNIRME abc123xyz-codigo123  │   │
│  │                             │   │
│  └─────────────────────────────┘   │
│                                     │
│              [ENVIAR] ➤             │
│                                     │
└─────────────────────────────────────┘
```

**Acción:** María presiona "Enviar"

---

### **Paso 4: Confirmación por WhatsApp**

**Mensaje recibido (instantáneo):**

```
┌─────────────────────────────────────┐
│  WhatsApp - TurnoLibre              │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                     │
│  TurnoLibre                         │
│  ✅ Turno asignado                  │
│                                     │
│  🎫 Turno #12                       │
│  📍 Consultorio Dr. Pérez           │
│  👥 Posición: 8 personas adelante   │
│  ⏰ Tiempo estimado: ~25 min        │
│                                     │
│  Puedes irte, te avisamos           │
│  cuando falten 2 turnos             │
│                                     │
│  💬 Escribe SALIR para cancelar     │
│  💬 Escribe ESTADO para ver posición│
│                                     │
│  Hoy 10:15 AM                       │
└─────────────────────────────────────┘
```

**Acción:** María se va a tomar un café al Starbucks de enfrente

---

### **Paso 5: Notificación de Progreso**

**20 minutos después, María recibe:**

```
┌─────────────────────────────────────┐
│  WhatsApp - TurnoLibre              │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                     │
│  TurnoLibre                         │
│  ⏰ Faltan 2 turnos                 │
│                                     │
│  Tu turno (#12) está cerca          │
│  Tiempo estimado: ~8 minutos        │
│                                     │
│  👉 Ve acercándote al consultorio   │
│                                     │
│  Hoy 10:35 AM                       │
└─────────────────────────────────────┘
```

**Acción:** María termina su café y camina de regreso

---

### **Paso 6: Llamado al Turno**

**Mensaje final:**

```
┌─────────────────────────────────────┐
│  WhatsApp - TurnoLibre              │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                     │
│  TurnoLibre                         │
│  🔔 ¡ES TU TURNO AHORA!             │
│                                     │
│  🎫 Turno #12                       │
│  🚪 Consultorio 5 - Dra. Martínez   │
│                                     │
│  Por favor preséntate ahora         │
│                                     │
│  Hoy 10:43 AM                       │
└─────────────────────────────────────┘
```

**Acción:** María entra al consultorio y es atendida

---

### **Resumen del Journey (Cliente):**

| Paso | Tiempo | Acción | Resultado |
|------|--------|--------|-----------|
| 1. Escanea QR | 0:00 | Abre Queue Join Page | Ve info de fila |
| 2. Click "Unirme" | 0:10 | Genera código | WhatsApp se abre |
| 3. Envía mensaje | 0:15 | Manda por WhatsApp | Turno asignado + QR se regenera |
| 4. Confirmación | 0:16 | Recibe mensaje | Turno #12, ~25 min |
| 5. Espera libre | 20 min | Toma café afuera | Libertad de movimiento |
| 6. Alerta progreso | 20:00 | Recibe notificación | "Faltan 2 turnos" |
| 7. Llamado | 28:00 | Recibe notificación | "¡ES TU TURNO!" |
| 8. Atención | 28:30 | Entra al consultorio | Consulta médica |

**Tiempo total de interacción:** ~30 segundos
**Tiempo de espera sin estar de pie:** 28 minutos

---

## 👨‍💼 User Journey 2: Staff del Negocio

### **Persona:** Carlos, recepcionista del Consultorio Dr. Pérez

---

### **Paso 1: Inicio de Jornada**

**Contexto:** Carlos llega al consultorio a las 9:00 AM y coloca la tablet en el mostrador

**Acción:** Abre la Business App (Staff Dashboard) en la tablet

**URL:** `https://app.turnolibre.com/dashboard`

**Propósito:** La tablet mostrará el QR dinámico para que los pacientes escaneen al llegar

---

### **Paso 2: Login al Staff Dashboard**

```
┌─────────────────────────────────────┐
│  TurnoLibre - Staff Login           │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                     │
│  Email                              │
│  ┌─────────────────────────────┐   │
│  │ carlos@drperez.com          │   │
│  └─────────────────────────────┘   │
│                                     │
│  Contraseña                         │
│  ┌─────────────────────────────┐   │
│  │ ••••••••                    │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌───────────────────────────────┐ │
│  │  Iniciar Sesión               │ │
│  └───────────────────────────────┘ │
│                                     │
└─────────────────────────────────────┘
```

**Acción:** Carlos ingresa sus credenciales

---

### **Paso 3: Vista del Dashboard (Con QR Dinámico)**

**Estado inicial (9:00 AM - sin pacientes):**

```
┌──────────────────────────────────────────────┐
│  Business App - Consultorio Dr. Pérez       │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  📅 Lunes, 14 Enero 2025 - 9:00 AM          │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │  QR DINÁMICO - Un uso por turno     │   │
│  │  ────────────────────────────────    │   │
│  │                                      │   │
│  │       [QR CODE AQUÍ]                 │   │
│  │                                      │   │
│  │  Consultorio Dr. Pérez               │   │
│  │  Escanéame para unirte              │   │
│  │                                      │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  Cola Actual: 0 personas                     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                              │
│  Sin turnos activos                          │
│                                              │
│  💡 Deja la tablet visible en el mostrador   │
│  El QR se regenera automáticamente después   │
│  de cada registro                            │
│                                              │
└──────────────────────────────────────────────┘
```

**Nota:** El QR se regenera automáticamente cada vez que un cliente completa su registro.

---

### **Paso 4: Llegada de Pacientes (Automático)**

**9:15 AM - María y otros pacientes escanean el QR dinámico de la tablet**

**Dashboard se actualiza en tiempo real:**

```
┌──────────────────────────────────────────────┐
│  Business App - Consultorio Dr. Pérez       │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │  [QR DINÁMICO - Listo para escanear] │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  Cola Actual - 8 personas                    │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                              │
│  Próximos Turnos:                            │
│  #9  +521 555 1234    ESPERANDO  9:05       │
│  #10 +521 555 2345    ESPERANDO  9:07       │
│  #11 +521 555 3456    ESPERANDO  9:10       │
│  #12 +521 555 4567    ESPERANDO  9:15 ◄─ María
│  #13 +521 555 5678    ESPERANDO  9:16       │
│  #14 +521 555 6789    ESPERANDO  9:18       │
│  #15 +521 555 7890    ESPERANDO  9:20       │
│  #16 +521 555 8901    ESPERANDO  9:22       │
│                                              │
│  ┌────────────────────────────────────┐     │
│  │  🔔 LLAMAR SIGUIENTE TURNO         │     │
│  └────────────────────────────────────┘     │
│                                              │
└──────────────────────────────────────────────┘
```

---

### **Paso 5: Llamar Siguiente Turno**

**9:30 AM - Dra. Martínez está lista para el siguiente paciente**

**Acción:** Carlos hace click en "Llamar Siguiente Turno"

**Efecto en el sistema:**
1. Turno #9 cambia de `ESPERANDO` → `ATENDIENDO`
2. WhatsApp automático a turno #9: "🔔 ¡ES TU TURNO AHORA!"
3. WhatsApp a turno #10: "⏰ Faltan 1 turno (~10 min)"
4. WhatsApp a turno #11: "⏰ Faltan 2 turnos (~20 min)"

**Dashboard actualizado:**

```
┌──────────────────────────────────────────────┐
│  Business App - Consultorio Dr. Pérez       │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                              │
│  ┌──────────────────────────────────────┐   │
│  │ ATENDIENDO AHORA                     │   │
│  │ ════════════════════════════════════ │   │
│  │ 🟢 Turno #9 - +521 555 1234          │   │
│  │                                      │   │
│  │ ┌──────────────────────────────────┐│   │
│  │ │  ✅ Liberar Turno                ││   │
│  │ └──────────────────────────────────┘│   │
│  └──────────────────────────────────────┘   │
│                                              │
│  Próximos en Fila (7 personas)               │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  #10 +521 555 2345    ESPERANDO  9:07       │
│  #11 +521 555 3456    ESPERANDO  9:10       │
│  #12 +521 555 4567    ESPERANDO  9:15 ◄─ María
│  #13 +521 555 5678    ESPERANDO  9:16       │
│  ...                                         │
│                                              │
│  💡 El QR sigue visible para nuevos clientes │
│                                              │
└──────────────────────────────────────────────┘
```

---

### **Paso 6: Liberar Turno (Marcar como Completado)**

**9:40 AM - Paciente #9 terminó su consulta**

**Acción:** Carlos hace click en "✅ Liberar Turno"

**Efecto automático:**
1. Turno #9 se marca como `COMPLETADO` y se remueve de la cola
2. Sistema **automáticamente** llama al siguiente turno (#10)
3. Notificaciones automáticas:
   - Turno #10: "🔔 ¡ES TU TURNO AHORA!"
   - Turno #11: "⏰ Faltan 1 turno"
   - Turno #12: "⏰ Faltan 2 turnos"

**Ciclo se repite:**
```
Liberar #9 → Auto-llama #10 → Liberar #10 → Auto-llama #11 → Liberar #11 → Auto-llama #12 (María)
```

**Nota:** Carlos solo necesita hacer 1 click por turno (Liberar), el sistema llama automáticamente al siguiente.

---

### **Paso 7: Paciente No Se Presentó**

**10:50 AM - Turno #15 no responde al llamado**

**Acción:** Carlos espera 2 minutos y hace click en "✗ No vino"

**Efecto:**
- Turno #15 se marca como `NO_SHOW`
- Sistema automáticamente llama al siguiente (#16)
- WhatsApp a #15: "❌ Perdiste tu turno. Escanea el QR de nuevo para volver a la fila"

---

### **Paso 8: Fin de Jornada**

**2:00 PM - Consultorio cierra**

**Dashboard muestra resumen:**

```
┌──────────────────────────────────────────────┐
│  Resumen del Día                             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                              │
│  ✅ Atendidos: 24 pacientes                  │
│  ❌ No show: 3 pacientes                     │
│  ⏰ Tiempo promedio: 12 min                  │
│  😊 Satisfacción: 96%                        │
│                                              │
│  ┌────────────────────────────────────┐     │
│  │  📊 Ver Analytics Completos        │     │
│  └────────────────────────────────────┘     │
│                                              │
└──────────────────────────────────────────────┘
```

---

### **Resumen del Journey (Staff):**

| Paso | Hora | Acción | Resultado |
|------|------|--------|-----------|
| 1. Login | 9:00 | Ingresa al dashboard | Ve cola vacía |
| 2. Monitoreo | 9:00-9:30 | Observa llegadas | 8 pacientes se registran |
| 3. Llamar turno | 9:30 | Click "Llamar siguiente" | Turno #9 llamado |
| 4. Atender | 9:40 | Click "Atendido" | Turno #9 completado |
| 5. Repetir | 9:40-2:00 | Ciclo continuo | 24 pacientes atendidos |
| 6. No show | 10:50 | Click "No vino" | Turno #15 saltado |
| 7. Fin | 2:00 | Cierra dashboard | Ve resumen del día |

**Interacciones por turno:** 2 clicks (llamar + atendido)
**Tiempo por interacción:** ~5 segundos

---

## 🏢 User Journey 3: Dueño del Negocio (Onboarding)

### **Persona:** Dr. Pérez, dueño del consultorio, contrata plan Básico

---

### **Paso 1: Registro Inicial**

**URL:** `https://turnolibre.com` (Marketing Site)

**Acción:** Dr. Pérez hace click en "Probar Gratis 14 Días"

---

### **Paso 2: Business Onboarding (Setup Wizard)**

**URL:** `https://app.turnolibre.com/setup`

**Pantalla 1/5 - Datos del Negocio:**

```
┌─────────────────────────────────────┐
│  Configuración Inicial              │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Paso 1 de 5                        │
│                                     │
│  Nombre del negocio                 │
│  ┌─────────────────────────────┐   │
│  │ Consultorio Dr. Pérez       │   │
│  └─────────────────────────────┘   │
│                                     │
│  Tipo de negocio                    │
│  ┌─────────────────────────────┐   │
│  │ ▼ Hospital/Consultorio      │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌───────────────────────────────┐ │
│  │  Siguiente →                  │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
```

**Pantalla 2/5 - Tiempo de Atención:**

```
┌─────────────────────────────────────┐
│  Configuración Inicial              │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Paso 2 de 5                        │
│                                     │
│  ¿Cuánto tiempo toma atender        │
│  cada cliente?                      │
│                                     │
│  ┌─────┐                            │
│  │ 15  │ minutos                    │
│  └─────┘                            │
│      ├─────────────┤                │
│      5            60                │
│                                     │
│  💡 Esto nos ayuda a calcular       │
│  tiempos de espera                  │
│                                     │
│  ┌───────────────────────────────┐ │
│  │  Siguiente →                  │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
```

**Pantalla 3/5 - Número de WhatsApp:**

```
┌─────────────────────────────────────┐
│  Configuración Inicial              │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Paso 3 de 5                        │
│                                     │
│  Número de WhatsApp del negocio     │
│  (Opcional - solo para respaldo)    │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ +52 155 1234 5678           │   │
│  └─────────────────────────────┘   │
│                                     │
│  💡 Los clientes recibirán          │
│  notificaciones de nuestro número   │
│  TurnoLibre, no del tuyo           │
│                                     │
│  ┌───────────────────────────────┐ │
│  │  Siguiente →                  │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
```

**Pantalla 4/5 - Crear Usuario Staff:**

```
┌─────────────────────────────────────┐
│  Configuración Inicial              │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Paso 4 de 5                        │
│                                     │
│  Crea tu usuario para el dashboard  │
│                                     │
│  Email                              │
│  ┌─────────────────────────────┐   │
│  │ carlos@drperez.com          │   │
│  └─────────────────────────────┘   │
│                                     │
│  Contraseña                         │
│  ┌─────────────────────────────┐   │
│  │ ••••••••                    │   │
│  └─────────────────────────────┘   │
│                                     │
│  💡 Este usuario podrá gestionar    │
│  la fila desde el dashboard        │
│                                     │
│  ┌───────────────────────────────┐ │
│  │  Siguiente →                  │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
```

**Pantalla 5/5 - Descarga tu QR:**

```
┌─────────────────────────────────────┐
│  ¡Listo! 🎉                         │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                     │
│  Tu sistema está configurado        │
│                                     │
│  ┌─────────────────────────────┐   │
│  │                             │   │
│  │     [QR CODE AQUÍ]          │   │
│  │                             │   │
│  │  consultorio-dr-perez       │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌───────────────────────────────┐ │
│  │  📥 Descargar QR (PNG)        │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │  🖨️ Imprimir Cartel           │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │  🚀 Ir al Dashboard           │ │
│  └───────────────────────────────┘ │
│                                     │
└─────────────────────────────────────┘
```

---

### **Resumen del Journey (Onboarding):**

| Paso | Tiempo | Acción | Resultado |
|------|--------|--------|-----------|
| 1. Registro | 0:00 | Ingresa datos | Cuenta creada |
| 2. Wizard 1/5 | 0:30 | Nombre y tipo | Info guardada |
| 3. Wizard 2/5 | 1:00 | Tiempo atención | 15 min configurado |
| 4. Wizard 3/5 | 1:30 | WhatsApp (opcional) | Contacto guardado |
| 5. Wizard 4/5 | 2:00 | Usuario staff | Carlos puede loguearse |
| 6. Wizard 5/5 | 2:30 | Descarga QR | QR listo para imprimir |
| 7. Imprime | 5:00 | Imprime cartel | QR en recepción |
| 8. Primera prueba | 6:00 | Escanea su QR | Sistema funciona ✓ |

**Tiempo total de setup:** ~10 minutos
**Time-to-value:** Inmediato (puede usarse de inmediato)

---

## 📊 Comparación de Journeys

| Usuario | Tiempo Total | Clicks Necesarios | Nivel de Fricción |
|---------|--------------|-------------------|-------------------|
| **Cliente** | 30 seg | 2 (Unirme + Enviar WA) | ⭐⭐⭐⭐⭐ Muy bajo |
| **Staff** | 5 seg/turno | 2 (Llamar + Atendido) | ⭐⭐⭐⭐⭐ Muy bajo |
| **Dueño** | 10 min | ~15 (Wizard completo) | ⭐⭐⭐⭐ Bajo |

---

## 💡 Puntos Clave de UX

### **Cliente:**
✅ Sin fricción (no requiere app, registro ni login)
✅ WhatsApp como canal único (familiar)
✅ Libertad de movimiento (no estar de pie)

### **Staff:**
✅ Interfaz minimalista (solo 2 botones principales)
✅ Actualizaciones en tiempo real
✅ Sin entrenamiento complejo

### **Dueño:**
✅ Onboarding guiado en 5 pasos
✅ Configuración en 10 minutos
✅ Valor inmediato (empieza a operar hoy)

---

## 🔄 Flujos Alternativos

### **Cliente - Salir de la Fila:**

```
Cliente decide irse sin esperar:
1. Abre el chat de WhatsApp
2. Escribe: "SALIR"
3. Recibe confirmación: "❌ Te removimos de la fila. ¡Hasta pronto!"
4. Sistema libera el turno
```

### **Staff - Pausar Fila:**

```
Emergencia/Break:
1. Toggle "⏸️ Pausar fila"
2. Nuevos escaneos reciben: "⚠️ Fila pausada temporalmente"
3. Los que ya están siguen en cola pero se avisa del delay
```

### **Dueño - Ver Analytics:**

```
URL: https://app.turnolibre.com/admin/analytics

Métricas mostradas:
- Turnos totales (día/semana/mes)
- Tiempo promedio de espera
- Tasa de no-show
- Horas pico
- Satisfacción (estimada por no-shows)
```
