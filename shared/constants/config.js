/**
 * App Configuration
 * Shared across landing and dashboard
 */

// Determinar entorno
const isDev = import.meta?.env?.DEV || process.env.NODE_ENV === 'development';
const isProd = !isDev;

export const CONFIG = {
  // Environment
  env: isDev ? 'development' : 'production',
  isDev,
  isProd,

  // URLs
  urls: {
    landing: isDev ? 'http://localhost:5173' : 'https://turnolibre.com',
    dashboard: isDev ? 'http://localhost:5174' : 'https://app.turnolibre.com',
    api: isDev ? 'http://localhost:3000' : 'https://api.turnolibre.com',
  },

  // Pricing (mantener sincronizado entre landing y dashboard)
  pricing: {
    basic: {
      name: 'Básico',
      price: 399,
      currency: 'MXN',
      turnLimit: 1000, // turnos por mes
      features: ['Dashboard', 'QR Digital', '1,000 turnos/mes'],
      customWhatsAppMessages: false, // Solo disponible en plan Profesional
    },
    professional: {
      name: 'Profesional',
      price: 1799,
      currency: 'MXN',
      turnLimit: null, // ilimitado
      features: ['Todo de Básico', 'WhatsApp Ilimitado', 'Mensajes WhatsApp Personalizables', 'API REST', 'Soporte Prioritario'],
      customWhatsAppMessages: true, // Feature exclusivo del plan Pro
    },
  },

  // Features flags
  features: {
    enableAnalytics: isProd,
    enableWhatsApp: true,
    enableAPI: isProd,
  },

  // Limits
  limits: {
    maxQueueSize: 100,
    maxBusinessNameLength: 50,
    maxCustomMessageLength: 200,
  },

  // Default settings
  defaults: {
    noShowTimeoutMinutes: 10,
    queueRefreshSeconds: 5,
    notificationThreshold: 2, // Notificar cuando falten 2 turnos
  },
};

export default CONFIG;
