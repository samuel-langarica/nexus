# Shared Code

Código compartido entre `/landing` y `/dashboard`.

---

## 📁 Estructura

```
/shared
  /constants
    branding.js     - Nombre del negocio, tagline, contacto
    colors.js       - Paleta de colores
    config.js       - URLs, pricing, configuración
    index.js        - Export central
  /assets
    (logos, iconos compartidos)
  /utils
    (funciones utilitarias compartidas)
```

---

## 🚀 Cómo Usar

### **Importar desde Landing:**

```jsx
// landing/src/components/Hero.jsx
import { BRAND, COLORS, CONFIG } from '../../../shared/constants';

function Hero() {
  return (
    <h1>{BRAND.name}</h1>
    <p style={{ color: COLORS.accent.main }}>{BRAND.tagline}</p>
    <p>Plan Básico: ${CONFIG.pricing.basic.price} MXN/mes</p>
  );
}
```

### **Importar desde Dashboard:**

```jsx
// dashboard/src/App.jsx
import { BRAND, COLORS, CONFIG } from '../../../shared/constants';

function Dashboard() {
  return (
    <div style={{ backgroundColor: COLORS.background.secondary }}>
      <h1>{BRAND.name} - Dashboard</h1>
      <p>API URL: {CONFIG.urls.api}</p>
    </div>
  );
}
```

---

## 📦 Qué Compartir

### ✅ **SÍ compartir:**
- Constantes de branding (nombre, colores, logo)
- URLs de API
- Pricing (para mantener sincronizado)
- Paleta de colores
- Configuración general
- Utilidades genéricas (formateo de fechas, validaciones)

### ❌ **NO compartir:**
- Componentes de UI (Hero, Pricing son muy diferentes entre landing y dashboard)
- Lógica de negocio específica
- Estilos completos (cada app tiene su CSS)

---

## 🎨 Constantes Disponibles

### **BRAND** (`branding.js`)
```js
BRAND.name          // "TurnoLibre"
BRAND.tagline       // "Gestión de Filas por WhatsApp"
BRAND.email         // "hola@turnolibre.com"
BRAND.initials      // "TL"
```

### **COLORS** (`colors.js`)
```js
COLORS.primary.main       // "#1e293b"
COLORS.accent.main        // "#25D366" (WhatsApp green)
COLORS.text.secondary     // "#64748b"
COLORS.background.main    // "#ffffff"
COLORS.status.success     // "#22c55e"
```

### **CONFIG** (`config.js`)
```js
CONFIG.urls.api                     // "https://api.turnolibre.com"
CONFIG.pricing.basic.price          // 399
CONFIG.pricing.professional.price   // 1799
CONFIG.defaults.noShowTimeoutMinutes // 10
```

---

## 🔧 Agregar Nuevas Constantes

1. Edita el archivo correspondiente en `/shared/constants/`
2. Exporta en `/shared/constants/index.js` si es necesario
3. Importa en landing o dashboard según lo necesites

**Ejemplo - Agregar redes sociales:**

```js
// shared/constants/branding.js
export const BRAND = {
  // ... existente
  social: {
    twitter: 'https://twitter.com/turnolibre',
    instagram: 'https://instagram.com/turnolibre',
    linkedin: 'https://linkedin.com/company/turnolibre',
  },
};
```

---

## 📝 Notas

- Los paths relativos desde landing (`src/components/`): `../../../shared/constants`
- Los paths relativos desde dashboard (`src/`): `../../shared/constants`
- Landing tiene componentes un nivel más profundo que dashboard

- **Importante:** Si cambias un valor en `/shared`, afectará tanto landing como dashboard. Esto es intencional para mantener consistencia.
