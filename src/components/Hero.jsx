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
                        marginBottom: '2rem',
                        maxWidth: '540px',
                        lineHeight: '1.6'
                    }}>
                        Tus clientes esperan donde quieran. Tu equipo gestiona todo desde WhatsApp. Sin apps que instalar, sin hardware obligatorio.
                    </p>

                    {/* Mini Plan Selector */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '1rem',
                        marginBottom: '2rem',
                        maxWidth: '540px'
                    }}>
                        {/* Setup Rápido */}
                        <div style={{
                            background: '#fff',
                            border: '2px solid #e2e8f0',
                            borderRadius: '12px',
                            padding: '1.25rem',
                            transition: 'all 0.2s',
                            cursor: 'pointer'
                        }}>
                            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem', letterSpacing: '0.5px' }}>
                                Setup Rápido
                            </div>
                            <div style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.25rem' }}>
                                $399<span style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-secondary)' }}> MXN/mes</span>
                            </div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                Configúralo tú mismo
                            </div>
                        </div>

                        {/* Setup Completo */}
                        <div style={{
                            background: 'linear-gradient(135deg, #dcfce7 0%, #f0fdf4 100%)',
                            border: '2px solid var(--primary-color)',
                            borderRadius: '12px',
                            padding: '1.25rem',
                            transition: 'all 0.2s',
                            cursor: 'pointer',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '12px',
                                background: 'var(--primary-color)',
                                color: '#fff',
                                fontSize: '0.625rem',
                                fontWeight: '700',
                                padding: '0.25rem 0.625rem',
                                borderRadius: '4px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                Popular
                            </div>
                            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: '600', color: '#15803d', marginBottom: '0.5rem', letterSpacing: '0.5px' }}>
                                Setup Completo
                            </div>
                            <div style={{ fontSize: '2rem', fontWeight: '800', color: '#166534', marginBottom: '0.25rem' }}>
                                $1,999<span style={{ fontSize: '1rem', fontWeight: '600', color: '#15803d' }}> MXN/mes</span>
                            </div>
                            <div style={{ fontSize: '0.875rem', color: '#15803d' }}>
                                Instalación profesional
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                        <button className="btn btn-primary">
                            Ver Planes Completos
                        </button>
                        <button className="btn btn-secondary">
                            Ver Demo
                        </button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        <div style={{ width: '20px', height: '20px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a', fontSize: '0.75rem', fontWeight: 'bold' }}>✓</div>
                        <span style={{ fontWeight: '600' }}>Mismo software potente en ambos planes</span>
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
