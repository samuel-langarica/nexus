import React from 'react';
import { TicketMockup, PhoneMockup } from './Mockups';

const Hero = () => {
    return (
        <section style={{
            padding: '8rem 0 4rem 0',
            background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)',
            overflow: 'hidden'
        }}>
            <div className="container hero-grid">
                <div className="hero-content">
                    <span style={{
                        color: 'var(--accent-hover)',
                        fontWeight: '600',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        fontSize: '0.875rem',
                        marginBottom: '1rem',
                        display: 'block'
                    }}>
                        Sistema de Gestión de Filas
                    </span>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        color: 'var(--text-main)',
                        letterSpacing: '-1px'
                    }}>
                        El fin de las <br />
                        <span style={{ color: 'var(--primary-color)' }}>filas caóticas.</span>
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2.5rem',
                        maxWidth: '500px',
                        lineHeight: '1.6'
                    }}>
                        Sistema de gestión de filas con WhatsApp. Elige entre setup rápido autoservicio o instalación profesional completa.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <button className="btn btn-primary">
                            Ver Opciones
                        </button>
                        <button className="btn btn-secondary">
                            Ver Demo
                        </button>
                    </div>

                    <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', fontSize: '0.875rem', color: 'var(--text-secondary)', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '20px', height: '20px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>✓</div>
                            <span>Desde $399/mes</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '20px', height: '20px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>✓</div>
                            <span>Sin Apps</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '20px', height: '20px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>✓</div>
                            <span>Setup flexible</span>
                        </div>
                    </div>
                </div>

                {/* Simple Hero Visual - Ticket + Phone */}
                <div className="hero-visual" style={{
                    position: 'relative',
                    height: '600px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '3rem'
                }}>
                    {/* Abstract Background */}
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        background: 'radial-gradient(circle, rgba(37,211,102,0.08) 0%, rgba(255,255,255,0) 70%)',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 0
                    }}></div>

                    {/* Ticket - Left */}
                    <div style={{
                        position: 'relative',
                        zIndex: 2,
                        transform: 'scale(1.1)',
                        filter: 'drop-shadow(10px 20px 30px rgba(0,0,0,0.15))'
                    }}>
                        <TicketMockup number="A047" />
                    </div>

                    {/* Arrow/Connection Indicator */}
                    <div style={{
                        position: 'relative',
                        zIndex: 1,
                        fontSize: '3rem',
                        color: 'var(--primary-color)',
                        opacity: 0.3
                    }}>
                        →
                    </div>

                    {/* Phone - Right */}
                    <div style={{
                        position: 'relative',
                        zIndex: 2,
                        transform: 'scale(1.1)',
                        filter: 'drop-shadow(20px 30px 40px rgba(0,0,0,0.2))'
                    }}>
                        <PhoneMockup state="chat_welcome" preset="government" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
