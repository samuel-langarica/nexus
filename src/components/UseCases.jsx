import React from 'react';
import { PhoneMockup } from './Mockups';

const UseCases = () => {
    const industries = [
        {
            preset: 'government',
            icon: '🏛️',
            title: 'Trámites Gubernamentales',
            subtitle: 'Esperas de 2 horas sin estar parado',
            description: 'El ciudadano NO necesita estar presente. Puede volver en 1 hora o esperar afuera. Se acaba el caos de gente amontonada.',
            stats: [
                { label: 'Tiempo de espera', value: '90 min' },
                { label: 'Reducción de quejas', value: '-92%' }
            ],
            color: '#dc2626',
            bg: '#fef2f2'
        },
        {
            preset: 'restaurant',
            icon: '🍽️',
            title: 'Restaurantes',
            subtitle: 'Espera en el bar o da una vuelta',
            description: 'Tus clientes esperan cómodamente en el bar tomando algo, o dan una vuelta por la zona. Les avisas 9 minutos antes.',
            stats: [
                { label: 'Satisfacción del cliente', value: '4.9/5' },
                { label: 'Consumo en bar', value: '+35%' }
            ],
            color: '#f59e0b',
            bg: '#fffbeb'
        }
    ];

    return (
        <section id="casos-uso" style={{
            padding: '8rem 0',
            background: 'linear-gradient(180deg, #fff 0%, #f8fafc 100%)'
        }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 5rem' }}>
                    <span style={{
                        color: 'var(--primary-color)',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        fontSize: '0.875rem',
                        display: 'block',
                        marginBottom: '1rem'
                    }}>
                        Casos de Uso
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        color: 'var(--text-main)',
                        fontWeight: '800'
                    }}>
                        Desde trámites de gobierno hasta <span style={{ color: 'var(--primary-color)' }}>restaurantes llenos</span>
                    </h2>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6'
                    }}>
                        Los casos más extremos: esperas de 2 horas vs. mesas que se llenan en minutos. TurnoLibre funciona en ambos.
                    </p>
                </div>

                {/* Use Cases Grid */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6rem'
                }}>
                    {industries.map((industry, index) => (
                        <div key={index} style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '4rem',
                            alignItems: 'center',
                            flexDirection: index % 2 === 1 ? 'row-reverse' : 'row'
                        }}>
                            {/* Content Side */}
                            <div style={{
                                order: index % 2 === 1 ? 2 : 1,
                                maxWidth: '500px',
                                margin: index % 2 === 1 ? '0 0 0 auto' : '0 auto 0 0'
                            }}>
                                {/* Icon Badge */}
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '16px',
                                    background: industry.bg,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2rem',
                                    marginBottom: '1.5rem',
                                    border: `2px solid ${industry.color}20`
                                }}>
                                    {industry.icon}
                                </div>

                                <h3 style={{
                                    fontSize: '2rem',
                                    fontWeight: '800',
                                    color: 'var(--text-main)',
                                    marginBottom: '0.5rem'
                                }}>
                                    {industry.title}
                                </h3>

                                <p style={{
                                    fontSize: '1.125rem',
                                    color: industry.color,
                                    fontWeight: '600',
                                    marginBottom: '1.5rem'
                                }}>
                                    {industry.subtitle}
                                </p>

                                <p style={{
                                    fontSize: '1.125rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.7',
                                    marginBottom: '2rem'
                                }}>
                                    {industry.description}
                                </p>

                                {/* Stats */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '1.5rem'
                                }}>
                                    {industry.stats.map((stat, idx) => (
                                        <div key={idx} style={{
                                            background: industry.bg,
                                            padding: '1.5rem',
                                            borderRadius: '12px',
                                            border: `1px solid ${industry.color}20`
                                        }}>
                                            <div style={{
                                                fontSize: '2rem',
                                                fontWeight: '800',
                                                color: industry.color,
                                                marginBottom: '0.25rem'
                                            }}>
                                                {stat.value}
                                            </div>
                                            <div style={{
                                                fontSize: '0.875rem',
                                                color: 'var(--text-secondary)',
                                                fontWeight: '500'
                                            }}>
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Phone Mockup Side */}
                            <div style={{
                                order: index % 2 === 1 ? 1 : 2,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative'
                            }}>
                                {/* Background Glow */}
                                <div style={{
                                    position: 'absolute',
                                    width: '300px',
                                    height: '300px',
                                    background: `radial-gradient(circle, ${industry.color}15 0%, transparent 70%)`,
                                    borderRadius: '50%',
                                    filter: 'blur(40px)',
                                    zIndex: 0
                                }}></div>

                                <div style={{
                                    position: 'relative',
                                    zIndex: 1,
                                    transform: 'scale(1.15)',
                                    filter: 'drop-shadow(20px 30px 50px rgba(0,0,0,0.15))'
                                }}>
                                    <PhoneMockup state="chat_welcome" preset={industry.preset} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{
                    marginTop: '6rem',
                    textAlign: 'center',
                    padding: '3rem',
                    background: 'linear-gradient(135deg, var(--primary-color)10 0%, var(--accent-color)10 100%)',
                    borderRadius: '20px',
                    border: '2px solid var(--primary-color)20'
                }}>
                    <h3 style={{
                        fontSize: '1.75rem',
                        fontWeight: '700',
                        color: 'var(--text-main)',
                        marginBottom: '1rem'
                    }}>
                        ¿Tu negocio tiene filas?
                    </h3>
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem',
                        maxWidth: '600px',
                        margin: '0 auto 2rem'
                    }}>
                        Bancos, clínicas, tiendas, spas, talleres mecánicos... Si tus clientes esperan, TurnoLibre elimina la frustración.
                    </p>
                    <button className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
                        Agenda una Demo
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UseCases;
