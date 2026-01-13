# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nexus is a WhatsApp-based queue management system landing page. It's a React + Vite single-page application that showcases a flexible queue system with mockups for different industries (hospitals, retail, banks, government, restaurants).

## Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## Architecture

### Component Structure

**Landing Page Flow (App.jsx):**
The landing page is organized as a vertical scroll experience:
1. `Header` - Sticky navigation with scroll effect
2. `Hero` - Main value proposition with ticket → phone visual flow
3. `VisualFlow` - Step-by-step process demonstration
4. `EstablishmentView` - Business owner perspective (tablet/terminal mockups)
5. `Solution` - Key features and benefits
6. `Pricing` - Two-tier pricing (DIY vs Professional)
7. `Footer` - Links and contact info

**UseCases section exists but is commented out** - It demonstrates government and restaurant verticals but was hidden to reduce landing page length.

### Mockup System (src/components/Mockups.jsx)

The core visual system is built around **industry-specific message presets**. This is the most architecturally significant part of the codebase.

**Key Exports:**
- `PhoneMockup` - WhatsApp interface with 4 states: `scan`, `chat_welcome`, `chat_progress`, `chat_alert`
- `TicketMockup` - Physical ticket with QR code
- `TabletMockup` - Queue management dashboard for staff
- `RichScreenMockup` - Large display showing current queue number
- `TerminalMockup` - Ticket printer/dispenser visual
- `MESSAGE_PRESETS` - Object containing industry-specific messages

**Industry Presets:**
The system supports 6 industry verticals (`MESSAGE_PRESETS` object):
- `general` - Default, generic business use case
- `hospital` - Medical facilities with long waits
- `retail` - Stores emphasizing shopping during wait
- `bank` - Financial services with multiple counters
- `government` - Long bureaucratic waits with freedom to leave
- `restaurant` - Table waiting with bar/walk options

**Using Presets:**
```jsx
<PhoneMockup state="chat_welcome" preset="hospital" />
<PhoneMockup state="chat_alert" preset="retail" />
```

**Custom Messages:**
You can override presets with custom messages:
```jsx
<PhoneMockup
  state="chat_welcome"
  customMessages={{
    welcome: ["Custom message 1", "Custom message 2"],
    alert: ["Alert message"]
  }}
/>
```

### Styling Approach

**CSS-in-JS (inline styles) is used for ALL component styling.** There is NO Tailwind CSS or CSS modules.

Global styles (src/index.css) provide:
- CSS custom properties (--primary-color, --accent-color, etc.)
- Base reset styles
- Utility classes (`.container`, `.btn`, `.hero-grid`, `.grid-3`)
- Responsive layouts via media queries

**Design System:**
- Primary color: `#1e293b` (Slate 800)
- Accent color: `#25D366` (WhatsApp Green)
- Font: Inter (system fallback)
- All components use inline styles referencing CSS variables via `var(--primary-color)`

### Component Patterns

1. **All components are functional components** using React hooks (no class components)
2. **No PropTypes or TypeScript** - this is vanilla JavaScript
3. **Inline styles everywhere** - style objects directly in JSX
4. **Mockup components are highly self-contained** - all WhatsApp UI details are in Mockups.jsx
5. **Hero visual uses ticket + arrow + phone** - represents the user flow visually

## Important Files

- **MOCKUP_USAGE_GUIDE.md** - Comprehensive guide in Spanish explaining all mockup presets, use cases, and marketing strategy for different industries. Read this to understand the product positioning.
- **src/components/Mockups.jsx** - 600+ lines, contains ALL mockup components and MESSAGE_PRESETS
- **src/index.css** - Global styles and CSS custom properties

## Key Patterns to Follow

1. **When adding new industry presets**, add them to `MESSAGE_PRESETS` in Mockups.jsx with `welcome`, `progress` (optional), and `alert` message arrays
2. **Hero section currently uses `preset="government"`** to showcase the most extreme use case (90 min wait)
3. **Visual flow pattern**: Left-to-right progression (ticket → scanning → WhatsApp messages)
4. **Responsive design**: Mobile-first with media queries at 768px and 968px breakpoints
5. **All mockup dimensions are fixed** (e.g., PhoneMockup is 240x480px) - they're not meant to be responsive

## Project Context

This is a **landing page for a product**, not the product itself. The WhatsApp integration, queue management logic, and backend systems are not part of this repository. This codebase only demonstrates the concept visually.

The business model has two tiers:
1. **DIY Plan ($399/month)** - Customer provides their own hardware
2. **Full Professional ($1,799/month)** - Includes hardware installation

## Git Workflow

Main branch: `main`
Current modified files (as of init): EstablishmentView.jsx, Hero.jsx, Mockups.jsx, Pricing.jsx, Solution.jsx
