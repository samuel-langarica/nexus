import React from 'react';
import { TicketMockup, PhoneMockup, TabletMockup, RichScreenMockup } from './Mockups';

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
                        Nexus moderniza tu establecimiento con tickets físicos, notificaciones por WhatsApp y un dashboard inteligente. Todo conectado.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <button className="btn btn-primary">
                            Empezar Ahora
                        </button>
                        <button className="btn btn-secondary">
                            Ver Demo
                        </button>
                    </div>

                    <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '20px', height: '20px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>✓</div>
                            <span>Sin Apps</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '20px', height: '20px', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>✓</div>
                            <span>Instalación en 5 min</span>
                        </div>
                    </div>
                </div>

                {/* Unified Ecosystem Visual */}
                <div className="hero-visual" style={{
                    position: 'relative',
                    height: '600px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    perspective: '1200px' // Increased perspective for better depth
                }}>
                    {/* Abstract Background Blobs */}
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

                    {/* 3D Composition Container */}
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '600px', // Constrain width to prevent giant scaling
                        height: '100%',
                        transformStyle: 'preserve-3d',
                        transform: 'rotateY(-12deg) rotateX(8deg)', // Subtler rotation
                        transition: 'transform 0.5s ease-out'
                    }}>
                        {/* 1. Tablet (Back Layer - Left) */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '0%',
                            zIndex: 1,
                            transform: 'translateY(-60%) translateZ(-40px) scale(0.9)', // Centered vertically relative to container
                            filter: 'drop-shadow(20px 30px 40px rgba(0,0,0,0.2))'
                        }}>
                            <TabletMockup />
                        </div>

                        {/* 2. Screen (Back Layer - Right) */}
                        <div style={{
                            position: 'absolute',
                            top: '15%',
                            right: '5%', // Adjusted from -50px to be contained
                            zIndex: 2,
                            transform: 'translateZ(-60px) scale(0.8)',
                            filter: 'drop-shadow(20px 30px 40px rgba(0,0,0,0.2))',
                            opacity: 0.95
                        }}>
                            <RichScreenMockup number="A047" />
                        </div>

                        {/* 3. Phone (Front Layer - Right Center) */}
                        <div style={{
                            position: 'absolute',
                            bottom: '10%',
                            right: '15%',
                            zIndex: 10,
                            transform: 'translateZ(60px) scale(0.85)', // Reduced scale
                            filter: 'drop-shadow(30px 50px 60px rgba(0,0,0,0.35))'
                        }}>
                            <PhoneMockup state="chat_alert" />
                        </div>

                        {/* 4. Ticket (Front Layer - Left Center) */}
                        <div style={{
                            position: 'absolute',
                            bottom: '20%',
                            left: '10%',
                            zIndex: 5,
                            transform: 'rotate(-5deg) translateZ(20px) scale(0.9)',
                            filter: 'drop-shadow(10px 20px 30px rgba(0,0,0,0.15))'
                        }}>
                            <TicketMockup />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
