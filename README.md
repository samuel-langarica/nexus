# TurnoLibre

Sistema de gestión de turnos por WhatsApp. Los clientes escanean un QR, reciben su turno, y esperan remotamente mientras el staff gestiona la fila desde un dashboard.

---

## 📁 Estructura del Proyecto

Este repositorio contiene dos aplicaciones separadas:

```
/nexus
  /landing        → Marketing website (turnolibre.com)
  /dashboard      → Business dashboard (app.turnolibre.com)
  /plan           → Product planning & specs
```

---

## 🚀 Apps

### **Landing Page** (`/landing`)

Sitio de marketing con información del producto, pricing, y conversión.

**Stack:**
- React + Vite
- Inline CSS (no Tailwind)
- Componentes de mockups para demostración

**Deploy:**
- Hosting: Vercel
- URL: `turnolibre.com`
- Root Directory: `landing`

**Desarrollo:**
```bash
cd landing
npm install
npm run dev
```

Corre en: `http://localhost:5173`

**Build:**
```bash
cd landing
npm run build
npm run preview
```

---

### **Dashboard** (`/dashboard`)

Aplicación web para que el staff de negocios gestione turnos en tiempo real.

**Stack:**
- React + Vite
- (A definir: Supabase, WebSockets, WhatsApp API)

**Deploy:**
- Hosting: Vercel
- URL: `app.turnolibre.com`
- Root Directory: `dashboard`

**Desarrollo:**
```bash
cd dashboard
npm install
npm run dev
```

Corre en: `http://localhost:5174`

**Build:**
```bash
cd dashboard
npm run build
npm run preview
```

---

## 📋 Plan & Documentación

- **`/plan/business_app.md`** - Especificación completa del sistema
- **`CLAUDE.md`** - Instrucciones para Claude Code
- **`ARCHITECTURE_V2.md`** - Arquitectura técnica
- **`USER_JOURNEYS.md`** - Flujos de usuario
- **`MOCKUP_USAGE_GUIDE.md`** - Guía de uso de mockups

---

## 🔧 Setup Inicial

1. **Clonar repo:**
   ```bash
   git clone <repo-url>
   cd nexus
   ```

2. **Instalar dependencias:**
   ```bash
   # Landing
   cd landing
   npm install

   # Dashboard
   cd ../dashboard
   npm install
   ```

3. **Correr ambas apps en desarrollo:**
   ```bash
   # Terminal 1 - Landing
   cd landing && npm run dev

   # Terminal 2 - Dashboard
   cd dashboard && npm run dev
   ```

---

## 🌐 Deploy en Vercel

### Landing Page

1. Conectar repo en Vercel
2. Crear nuevo proyecto "TurnoLibre Landing"
3. Configurar:
   - **Root Directory:** `landing`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Agregar dominio: `turnolibre.com`

### Dashboard

1. Conectar mismo repo en Vercel
2. Crear nuevo proyecto "TurnoLibre Dashboard"
3. Configurar:
   - **Root Directory:** `dashboard`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Agregar dominio: `app.turnolibre.com`

---

## 🎯 Comandos Útiles

```bash
# Lint landing
cd landing && npm run lint

# Build landing para producción
cd landing && npm run build

# Preview build de landing
cd landing && npm run preview

# Lo mismo para dashboard
cd dashboard && npm run [comando]
```

---

## 📝 Git Workflow

```bash
# Cambios en landing
git add landing/
git commit -m "Update landing pricing section"

# Cambios en dashboard
git add dashboard/
git commit -m "Add queue management UI"

# Cambios que afectan ambos (ej: branding)
git add .
git commit -m "Update brand colors in landing and dashboard"
```

---

## 🔑 Environment Variables

Crear archivos `.env.local` en cada app según sea necesario:

**Landing:**
```env
# No requiere env vars por ahora (sitio estático)
```

**Dashboard:**
```env
VITE_API_URL=https://api.turnolibre.com
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

---

## 🤝 Contribución

Este es un proyecto personal. Para cambios mayores:
1. Crear branch: `git checkout -b feature/nueva-feature`
2. Commit: `git commit -m "Add nueva feature"`
3. Push: `git push origin feature/nueva-feature`
4. Merge a main cuando esté listo

---

## 📞 Contacto

Para dudas sobre el proyecto, revisar `/plan/business_app.md` o documentación en la raíz del repo.
