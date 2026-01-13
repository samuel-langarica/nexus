import React from 'react';
import installationDual from '../assets/installation-dual.png';

const Solution = () => {
    const steps = [
        {
            number: '1',
            title: 'Elige tu setup',
            desc: 'Rápido (autoservicio) o Completo (instalación profesional)'
        },
        {
            number: '2',
            title: 'Configura o instalamos',
            desc: 'Configuras en 10 min o nuestro equipo instala en tu negocio'
        },
        {
            number: '3',
            title: 'Ya estás operando',
            desc: 'Tu equipo gestiona la fila desde el primer momento'
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
                        minHeight: '400px',
                        borderRadius: '16px',
                        overflow: 'hidden'
                    }}>
                        <img
                            src={installationDual}
                            alt="Composición dual: autoservicio vs instalación profesional"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '16px'
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
                            Empieza como tú quieras.
                        </h2>

                        <p style={{
                            fontSize: '1.125rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '3rem',
                            lineHeight: '1.6'
                        }}>
                            Setup autoservicio en 10 minutos o instalación profesional completa en 3 horas. Tú decides.
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
                                    Sin costos ocultos
                                </div>
                                <div style={{ fontSize: '0.875rem', color: '#15803d' }}>
                                    Todo incluido en tu plan mensual, sin sorpresas
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
