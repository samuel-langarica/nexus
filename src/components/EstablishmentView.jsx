import React from 'react';
import { RichScreenMockup, TabletMockup } from './Mockups';

const EstablishmentView = () => {
    return (
        <section style={{ padding: '6rem 0', background: '#0f172a', color: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1.5rem', color: '#fff' }}>
                        Control total para tu equipo
                    </h2>
                    <p style={{ opacity: 0.8, fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Mantén el flujo bajo control con herramientas diseñadas para la operación diaria. Todo sincronizado en tiempo real.
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4rem',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    {/* Feature 1: The Control */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                        <div style={{ position: 'relative' }}>
                            <TabletMockup />
                            <div style={{
                                position: 'absolute',
                                bottom: '-20px',
                                right: '-20px',
                                background: '#fff',
                                color: '#0f172a',
                                padding: '10px 20px',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                                fontSize: '0.9rem'
                            }}>
                                Tablet del Staff
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', maxWidth: '300px' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Gestión Simple</h3>
                            <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Genera tickets, llama turnos y gestiona la cola con un solo toque.</p>
                        </div>
                    </div>

                    {/* Visual Connector */}
                    <div style={{
                        width: '50px',
                        height: '2px',
                        background: '#334155',
                        borderRadius: '2px',
                        display: 'none' // Hidden on mobile, could show on desktop with media query
                    }} className="desktop-only-connector"></div>

                    {/* Feature 2: The Display */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                        <div style={{ position: 'relative' }}>
                            <RichScreenMockup number="A047" />
                            <div style={{
                                position: 'absolute',
                                bottom: '-20px',
                                right: '-20px',
                                background: 'var(--accent-color)',
                                color: '#fff',
                                padding: '10px 20px',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                                fontSize: '0.9rem'
                            }}>
                                Pantalla Pública
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', maxWidth: '300px' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Dashboard Informativo</h3>
                            <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Muestra turnos actuales y tiempos de espera para reducir la ansiedad.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EstablishmentView;
