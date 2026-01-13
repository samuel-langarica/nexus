import React from 'react';
import { TerminalMockup } from './Mockups';
import tabletImage from '../assets/tablet.png';

const EstablishmentView = () => {
    return (
        <section style={{ padding: '6rem 0', background: '#0f172a', color: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1.5rem', color: '#fff' }}>
                        Hardware profesional disponible
                    </h2>
                    <p style={{ opacity: 0.9, fontSize: '1.25rem', lineHeight: '1.6', fontWeight: '500' }}>
                        Con el plan Setup Completo, todo el hardware está incluido.<br />
                        Sin compras adicionales, solo una mensualidad.
                    </p>
                </div>

                {/* Hardware Showcase */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '4rem'
                }}>
                    {/* Tablet del Staff */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                        <div style={{ position: 'relative' }}>
                            <img
                                src={tabletImage}
                                alt="Tablet del Staff"
                                style={{
                                    width: '420px',
                                    height: 'auto',
                                    maxWidth: '100%',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
                                }}
                            />
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
                                Para tu equipo
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', maxWidth: '300px' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Tablet del Staff</h3>
                            <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Genera tickets, llama turnos y gestiona la cola con un solo toque.</p>
                        </div>
                    </div>

                    {/* Impresora de Tickets */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                        <div style={{ position: 'relative' }}>
                            <TerminalMockup nextTicket="A053" />
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
                                Para clientes
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', maxWidth: '300px' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Impresora de Tickets</h3>
                            <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Genera tickets automáticamente para que tus clientes tomen turno.</p>
                        </div>
                    </div>
                </div>

                {/* What's Included */}
                <div style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px',
                    padding: '2.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>
                        Incluido en Setup Completo
                    </h3>
                    <p style={{ textAlign: 'center', opacity: 0.8, marginBottom: '2rem', fontSize: '0.9375rem' }}>
                        Hardware profesional + instalación en una sola mensualidad
                    </p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1rem',
                        fontSize: '1rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                                width: '24px',
                                height: '24px',
                                background: '#dcfce7',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#16a34a',
                                flexShrink: 0
                            }}>✓</div>
                            <span>Tablet del staff</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                                width: '24px',
                                height: '24px',
                                background: '#dcfce7',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#16a34a',
                                flexShrink: 0
                            }}>✓</div>
                            <span>Impresora de tickets</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                                width: '24px',
                                height: '24px',
                                background: '#dcfce7',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#16a34a',
                                flexShrink: 0
                            }}>✓</div>
                            <span>Instalación y configuración</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                                width: '24px',
                                height: '24px',
                                background: '#dcfce7',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#16a34a',
                                flexShrink: 0
                            }}>✓</div>
                            <span>Soporte técnico 24/7</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EstablishmentView;
