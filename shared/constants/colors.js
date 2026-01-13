/**
 * Color Palette
 * Shared across landing and dashboard
 * Based on design system in landing/src/index.css
 */

export const COLORS = {
  // Primary colors
  primary: {
    main: '#1e293b',      // Slate 800 - Deep Professional Blue/Gray
    light: '#334155',     // Slate 700
    dark: '#0f172a',      // Slate 900
  },

  // Accent colors (WhatsApp green)
  accent: {
    main: '#25D366',      // WhatsApp Green
    hover: '#128C7E',     // Darker WhatsApp Green
    light: '#dcfce7',     // Light green background
  },

  // Text colors
  text: {
    main: '#0f172a',      // Slate 900
    secondary: '#64748b', // Slate 500
    light: '#94a3b8',     // Slate 400
    white: '#ffffff',
  },

  // Background colors
  background: {
    main: '#ffffff',
    secondary: '#f8fafc',  // Slate 50
    gray: '#e2e8f0',       // Slate 200
  },

  // Status colors
  status: {
    error: '#ef4444',      // Red 500
    success: '#22c55e',    // Green 500
    warning: '#f59e0b',    // Amber 500
    info: '#3b82f6',       // Blue 500
  },

  // Specific UI colors
  whatsapp: {
    green: '#25D366',
    darkGreen: '#075E54',
    background: '#E5DDD5',
  },
};

// CSS Variables (for use in inline styles)
export const CSS_VARS = {
  primaryColor: 'var(--primary-color)',
  accentColor: 'var(--accent-color)',
  accentHover: 'var(--accent-hover)',
  textMain: 'var(--text-main)',
  textSecondary: 'var(--text-secondary)',
  bgMain: 'var(--bg-main)',
  bgSecondary: 'var(--bg-secondary)',
};

export default COLORS;
