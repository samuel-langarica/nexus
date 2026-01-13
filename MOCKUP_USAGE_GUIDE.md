# 📱 Guía de Uso: Sistema de Mockups Multi-Industria

## 🎯 Resumen

El sistema de mockups de WhatsApp ahora soporta **5 presets de industrias diferentes**, cada uno con mensajes optimizados para ese vertical específico.

---

## 🏗️ Arquitectura

### **Componente Principal:** `PhoneMockup`

```jsx
<PhoneMockup
  state="chat_welcome"      // "scan" | "chat_welcome" | "chat_progress" | "chat_alert"
  preset="hospital"         // "general" | "hospital" | "retail" | "bank" | "government"
  customMessages={null}     // Opcional: objeto personalizado de mensajes
/>
```

### **Constante Exportada:** `MESSAGE_PRESETS`

Contiene todos los presets con sus mensajes:

```javascript
MESSAGE_PRESETS = {
  general: { welcome: [...], alert: [...] },
  hospital: { welcome: [...], progress: [...], alert: [...] },
  retail: { welcome: [...], alert: [...] },
  bank: { welcome: [...], alert: [...] },
  government: { welcome: [...], progress: [...], alert: [...] }
}
```

---

## 📋 Presets Disponibles

### 1️⃣ **General** (Por defecto)
**Caso de uso:** Cualquier negocio, genérico
**Estados:** `welcome`, `alert`
**Tono:** Amigable, casual, libertad

```jsx
<PhoneMockup state="chat_welcome" preset="general" />
```

**Mensajes:**
- ✅ "Listo, ya estás en el sistema"
- "Puedes sentarte, ir al baño o tomar un café ☕"
- "Te avisamos cuando falten 2 turnos (~8 min)"

---

### 2️⃣ **Hospital**
**Caso de uso:** Clínicas, hospitales, consultorios médicos
**Estados:** `welcome`, `progress`, `alert`
**Tono:** Profesional, empático, tranquilizador

```jsx
<PhoneMockup state="chat_welcome" preset="hospital" />
<PhoneMockup state="chat_progress" preset="hospital" />
<PhoneMockup state="chat_alert" preset="hospital" />
```

**Mensajes:**
- **Welcome:** "Registrado para consulta médica" + "45 min" + libertad de movimiento
- **Progress:** "Faltan 3 pacientes (~15 min)" + "Ve acercándote"
- **Alert:** "Es tu turno ahora" + "Consultorio 5 - Dra. Martínez"

**Por qué funciona:** Resuelve la ansiedad de no saber cuánto falta en esperas largas

---

### 3️⃣ **Retail**
**Caso de uso:** Tiendas, comercios, devoluciones
**Estados:** `welcome`, `alert`
**Tono:** Venta suave, conveniencia, oportunidad

```jsx
<PhoneMockup state="chat_welcome" preset="retail" />
```

**Mensajes:**
- **Welcome:** "Ya estás en fila de cambios" + "Sigue viendo la tienda 🛍️"
- **Alert:** "Tu turno sale en 2 minutos" + "Servicio al Cliente"

**Por qué funciona:** Convierte tiempo muerto en oportunidades de venta adicional

---

### 4️⃣ **Bank**
**Caso de uso:** Bancos, servicios financieros, alto volumen
**Estados:** `welcome`, `alert`
**Tono:** Eficiencia, profesional, sistema inteligente

```jsx
<PhoneMockup state="chat_welcome" preset="bank" />
```

**Mensajes:**
- **Welcome:** "En fila para atención general" + "4 cajas trabajando"
- **Alert:** "¡Es tu turno!" + "Dirígete a Ventanilla 7"

**Por qué funciona:** Demuestra distribución inteligente entre múltiples puntos de atención

---

### 5️⃣ **Government**
**Caso de uso:** Trámites gubernamentales, oficinas públicas
**Estados:** `welcome`, `progress`, `alert`
**Tono:** Libertad máxima, esperas ultra-largas, control extremo

```jsx
<PhoneMockup state="chat_welcome" preset="government" />
```

**Mensajes:**
- **Welcome:** "Posición 15 (~90 min)" + "NO necesitas estar presente"
- **Progress:** "Faltan 30 minutos" + "Ve regresando al edificio"
- **Alert:** "Es tu turno - Ventanilla 12" + "Ten listos: INE + comprobante"

**Por qué funciona:** Resuelve el peor caso de uso (trámites de 2+ horas)

---

## 🎨 Mensajes Personalizados

Si necesitas un caso específico que no está en los presets:

```jsx
const customMessages = {
  welcome: [
    "✅ Bienvenido al Spa Relax",
    "Tu masaje empieza en 20 minutos",
    "Puedes cambiarte en vestidor #3"
  ],
  alert: [
    "🧖‍♀️ Tu terapeuta está lista",
    "Sala de masajes - Piso 2"
  ]
};

<PhoneMockup state="chat_welcome" customMessages={customMessages} />
```

---

## 📍 Dónde Usar Cada Preset

### **Hero Section** → `general`
El más relatable para todos, caso genérico

```jsx
<PhoneMockup state="chat_welcome" preset="general" />
```

### **Sección "Casos de Uso"** → `hospital`, `retail`, `bank`
Demuestra adaptabilidad a verticales específicos
*(Ya implementado en `/components/UseCases.jsx`)*

### **Testimonios/Case Studies** → Preset según industria del cliente
Si tienes testimonial de un hospital → usa `preset="hospital"`

### **Visual Flow** → `hospital` (el más dramático)
Demuestra el caso más difícil (esperas largas)

```jsx
<PhoneMockup state="chat_alert" preset="hospital" />
```

### **Pricing/FAQ** → `general`
Mantén genérico para no sesgar hacia una industria

---

## 🧪 Testing Rápido

Para ver todos los presets en acción, puedes crear una página de prueba:

```jsx
// TestPage.jsx
import { PhoneMockup, MESSAGE_PRESETS } from './Mockups';

const TestPage = () => (
  <div style={{ display: 'flex', gap: '2rem', padding: '2rem', flexWrap: 'wrap' }}>
    {Object.keys(MESSAGE_PRESETS).map(preset => (
      <div key={preset}>
        <h3>{preset}</h3>
        <PhoneMockup state="chat_welcome" preset={preset} />
      </div>
    ))}
  </div>
);
```

---

## 🎯 Estrategia de Marketing

### **Regla de Oro:**
Cada screenshot debe atacar un **pain point específico** de esa industria.

| Industria   | Pain Point Principal                          | Mockup que lo Resuelve |
|-------------|-----------------------------------------------|------------------------|
| Hospital    | "No sé cuánto falta, llevo 40 min esperando" | `hospital/welcome`     |
| Retail      | "Quiero ver la tienda pero tengo que esperar" | `retail/welcome`       |
| Bank        | "No sé a cuál caja ir, hay mucha gente"      | `bank/welcome`         |
| Government  | "Tengo que estar parado 2 horas"             | `government/welcome`   |
| General     | "Las filas son frustrantes"                  | `general/welcome`      |

### **A/B Testing Recomendado:**

1. **Hero con diferentes presets** según tráfico:
   - Si viene de ad de "hospitales" → `preset="hospital"`
   - Si viene de Google genérico → `preset="general"`

2. **Landing pages específicas por industria:**
   - `/hospitales` usa solo `hospital` preset
   - `/retail` usa solo `retail` preset

---

## ✅ Checklist de Implementación

- [x] PhoneMockup acepta `preset` prop
- [x] 5 presets implementados (general, hospital, retail, bank, government)
- [x] Soporta mensajes personalizados via `customMessages`
- [x] Sección UseCases creada con 3 industrias principales
- [x] Hero usa preset `general`
- [ ] A/B testing configurado (futuro)
- [ ] Landing pages específicas por vertical (futuro)

---

## 🚀 Próximos Pasos Sugeridos

1. **Agregar más industrias:**
   - Restaurantes: "Espera en tu mesa, te avisamos cuando esté listo"
   - Spas: "Cambia en vestidor, iniciamos en 15 min"
   - Talleres mecánicos: "Deja tu auto, te avisamos cuando esté listo"

2. **Agregar imágenes de industria:**
   - Reemplazar el emoji 🏥 con foto real de hospital
   - Agregar mockup de tablet/dashboard específico por industria

3. **Métricas específicas por industria:**
   - Hospital: "73% reducción en ansiedad reportada"
   - Retail: "+18% en ventas durante espera"
   - Bank: "+40% clientes procesados por hora"

---

## 📞 Soporte

Si tienes preguntas sobre cómo implementar un nuevo preset o caso de uso, revisa:
1. `/src/components/Mockups.jsx` - Componente principal
2. `/src/components/UseCases.jsx` - Ejemplo de implementación
3. Este documento - Guía completa

**Happy coding! 🎉**
