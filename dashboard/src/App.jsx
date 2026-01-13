import { useState } from 'react';
import { BRAND, CONFIG, COLORS } from '../../shared/constants';
import './App.css';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: COLORS.background.secondary,
      padding: '2rem'
    }}>
      {/* Header */}
      <header style={{
        background: COLORS.background.main,
        padding: '1.5rem 2rem',
        borderRadius: '12px',
        marginBottom: '2rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: COLORS.text.main,
              margin: '0 0 0.25rem 0'
            }}>
              {BRAND.name}
            </h1>
            <p style={{
              fontSize: '0.875rem',
              color: COLORS.text.secondary,
              margin: 0
            }}>
              {BRAND.tagline}
            </p>
          </div>
          <div style={{
            background: COLORS.accent.light,
            color: COLORS.accent.hover,
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: '600'
          }}>
            Plan: {CONFIG.pricing.professional.name}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        background: COLORS.background.main,
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: COLORS.accent.main,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            fontSize: '2rem',
            fontWeight: '700',
            color: '#fff'
          }}>
            {BRAND.initials}
          </div>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: COLORS.text.main,
            marginBottom: '1rem'
          }}>
            Dashboard en Construcción
          </h2>
          <p style={{
            fontSize: '1rem',
            color: COLORS.text.secondary,
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            El panel de control de {BRAND.name} estará disponible próximamente.
            <br />
            Aquí podrás gestionar tu fila, turnos y configuración.
          </p>

          {/* Environment Info */}
          <div style={{
            background: COLORS.background.secondary,
            padding: '1.5rem',
            borderRadius: '8px',
            marginTop: '2rem',
            textAlign: 'left'
          }}>
            <h3 style={{
              fontSize: '0.875rem',
              fontWeight: '700',
              color: COLORS.text.secondary,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '1rem'
            }}>
              Configuración del Sistema
            </h3>
            <div style={{
              display: 'grid',
              gap: '0.75rem',
              fontSize: '0.875rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: COLORS.text.secondary }}>Entorno:</span>
                <span style={{ color: COLORS.text.main, fontWeight: '600' }}>
                  {CONFIG.env}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: COLORS.text.secondary }}>API URL:</span>
                <span style={{ color: COLORS.text.main, fontWeight: '600', fontFamily: 'monospace', fontSize: '0.75rem' }}>
                  {CONFIG.urls.api}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: COLORS.text.secondary }}>Landing URL:</span>
                <span style={{ color: COLORS.text.main, fontWeight: '600', fontFamily: 'monospace', fontSize: '0.75rem' }}>
                  {CONFIG.urls.landing}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: COLORS.text.secondary }}>Timeout No-Show:</span>
                <span style={{ color: COLORS.text.main, fontWeight: '600' }}>
                  {CONFIG.defaults.noShowTimeoutMinutes} minutos
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '2rem 0',
        fontSize: '0.875rem',
        color: COLORS.text.secondary
      }}>
        &copy; {new Date().getFullYear()} {BRAND.name}. Contacto: {BRAND.email}
      </footer>
    </div>
  );
}

export default App;
