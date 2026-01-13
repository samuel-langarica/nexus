import React from 'react';
import installationImage from '../assets/installation.png';

const Solution = () => {
    const steps = [
        {
            number: '1',
            title: 'Agenda tu instalación',
            desc: 'Elegimos el mejor horario para no interrumpir tu operación'
        },
        {
            number: '2',
            title: 'Llega nuestro equipo',
            desc: 'Instalamos y configuramos todo el hardware en 2 horas'
        },
        {
            number: '3',
            title: 'Capacitamos a tu staff',
            desc: '15 minutos de entrenamiento y están listos para operar'
        }
    ];

    return (
        <section id="instalacion" style={{ padding: '6rem 0', background: '#fff' }}>
            <div className="container">
                {/* Split Screen Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    {/* Left Side - Installation Image */}
                    <div style={{
                        position: 'relative',
                        minHeight: '500px',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={installationImage}
                            alt="Técnico instalando Nexus Queue"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '16px',
                                boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15)'
                            }}
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div style={{ maxWidth: '500px' }}>
                        <span style={{
                            color: 'var(--primary-color)',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '1.5px',
                            fontSize: '0.875rem',
                            display: 'block',
                            marginBottom: '1rem'
                        }}>
                            Instalación
                        </span>

                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            lineHeight: '1.1',
                            marginBottom: '1rem',
                            color: 'var(--text-main)',
                            fontWeight: '800'
                        }}>
                            3 horas. Eso es todo lo que necesitamos.
                        </h2>

                        <p style={{
                            fontSize: '1.125rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '3rem',
                            lineHeight: '1.6'
                        }}>
                            Desde que agendas hasta que tu equipo está operando el sistema. Sin complicaciones.
                        </p>

                        {/* Steps List */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
                            {steps.map((step, index) => (
                                <div key={index} style={{ display: 'flex', gap: '1.5rem', alignItems: 'start' }}>
                                    {/* Number Badge */}
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        background: 'var(--primary-color)',
                                        color: '#fff',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.5rem',
                                        fontWeight: '800',
                                        flexShrink: 0,
                                        boxShadow: '0 4px 6px rgba(37, 211, 102, 0.2)'
                                    }}>
                                        {step.number}
                                    </div>

                                    {/* Text Content */}
                                    <div>
                                        <h3 style={{
                                            fontSize: '1.25rem',
                                            fontWeight: '700',
                                            color: 'var(--text-main)',
                                            marginBottom: '0.5rem'
                                        }}>
                                            {step.title}
                                        </h3>
                                        <p style={{
                                            color: 'var(--text-secondary)',
                                            lineHeight: '1.6',
                                            fontSize: '1rem'
                                        }}>
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Included Badge */}
                        <div style={{
                            background: '#dcfce7',
                            border: '1px solid #86efac',
                            borderRadius: '12px',
                            padding: '1.25rem 1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                background: '#16a34a',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                fontWeight: 'bold',
                                flexShrink: 0
                            }}>
                                ✓
                            </div>
                            <div>
                                <div style={{ fontWeight: '700', color: '#166534', marginBottom: '0.25rem' }}>
                                    Instalación sin costo adicional
                                </div>
                                <div style={{ fontSize: '0.875rem', color: '#15803d' }}>
                                    Incluido en tu plan mensual
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
