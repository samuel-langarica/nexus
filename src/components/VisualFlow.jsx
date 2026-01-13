import React from 'react';
import { TicketMockup, PhoneMockup } from './Mockups';

const VisualFlow = () => {
    const steps = [
        {
            id: 1,
            title: "Llegas y tomas tu ticket",
            desc: "Sin aplicaciones, sin registros. Solo presiona un botón.",
            component: <TicketMockup number="A052" />
        },
        {
            id: 2,
            title: "Escaneas para ser libre",
            desc: "Escanea el QR para vincular tu turno a WhatsApp y sal a caminar.",
            component: <PhoneMockup state="scan" />
        },
        {
            id: 3,
            title: "Espera donde quieras",
            desc: "Confirmación instantánea. Ve al bar, da una vuelta o relájate. Nosotros le avisamos a tus clientes.",
            component: <PhoneMockup state="chat_welcome" preset="restaurant" />
        }
    ];

    return (
        <section id="como-funciona" style={{ padding: '6rem 0', background: 'var(--bg-secondary)', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{
                        color: 'var(--primary-color)',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        display: 'block',
                        marginBottom: '1rem'
                    }}>
                        Cómo funciona
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-main)', maxWidth: '600px', margin: '0 auto' }}>
                        La experiencia más fluida para tus clientes
                    </h2>
                </div>

                <div className="flow-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '4rem',
                    position: 'relative'
                }}>
                    {/* Connecting line for desktop - simplified visual cue */}
                    <div className="flow-line" style={{
                        position: 'absolute',
                        top: '150px',
                        left: '0',
                        width: '100%',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, #cbd5e1 20%, #cbd5e1 80%, transparent)',
                        zIndex: 0,
                        display: 'none' // Hidden by default, shown in media query via CSS if needed
                    }}></div>

                    {steps.map((step, index) => (
                        <div key={index} style={{
                            position: 'relative',
                            zIndex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            {/* Step Number Badge */}
                            <div style={{
                                width: '40px',
                                height: '40px',
                                background: 'var(--primary-color)',
                                color: '#fff',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                fontSize: '1.25rem',
                                marginBottom: '2rem',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}>
                                {step.id}
                            </div>

                            {/* Visual Component Container */}
                            <div style={{
                                marginBottom: '2rem',
                                minHeight: '300px', // Reserve space for alignment
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {step.component}
                            </div>

                            {/* Text Content */}
                            <div style={{ textAlign: 'center', maxWidth: '85%' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>{step.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VisualFlow;
