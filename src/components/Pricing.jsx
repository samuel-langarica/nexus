import React from 'react';

const Pricing = () => {
    const features = [
        'Hardware completo incluido',
        'Impresora de tickets térmica',
        'Tablet para el staff',
        'Terminal de métricas',
        'Notificaciones por WhatsApp ilimitadas',
        'Pantalla digital en tiempo real',
        'Instalación y configuración',
        'Soporte técnico prioritario',
        'Actualizaciones automáticas',
        'Sin contratos forzosos'
    ];

    return (
        <section id="pricing" style={{ padding: '6rem 0', background: '#f8fafc' }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
                    <span style={{
                        color: 'var(--primary-color)',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        fontSize: '0.875rem',
                        display: 'block',
                        marginBottom: '1rem'
                    }}>
                        Precio Simple
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        lineHeight: '1.1',
                        marginBottom: '1rem',
                        color: 'var(--text-main)',
                        fontWeight: '800'
                    }}>
                        Todo incluido. Un solo precio.
                    </h2>
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6'
                    }}>
                        Sin sorpresas, sin costos ocultos. Paga solo por lo que usas.
                    </p>
                </div>

                {/* Pricing Card */}
                <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                    <div style={{
                        background: '#fff',
                        borderRadius: '24px',
                        padding: '3rem',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                        border: '2px solid var(--primary-color)',
                        position: 'relative'
                    }}>
                        {/* Popular Badge */}
                        <div style={{
                            position: 'absolute',
                            top: '-16px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: 'var(--primary-color)',
                            color: '#fff',
                            padding: '0.5rem 2rem',
                            borderRadius: '100px',
                            fontWeight: '700',
                            fontSize: '0.875rem',
                            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
                        }}>
                            Plan Profesional
                        </div>

                        {/* Price */}
                        <div style={{ textAlign: 'center', marginBottom: '2.5rem', marginTop: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.5rem' }}>
                                <span style={{
                                    fontSize: '4rem',
                                    fontWeight: '800',
                                    color: 'var(--text-main)',
                                    lineHeight: '1'
                                }}>
                                    $1,999
                                </span>
                                <span style={{
                                    fontSize: '1.25rem',
                                    color: 'var(--text-secondary)',
                                    fontWeight: '600'
                                }}>
                                    MXN/mes
                                </span>
                            </div>
                            <p style={{
                                marginTop: '1rem',
                                color: 'var(--text-secondary)',
                                fontSize: '1rem'
                            }}>
                                Facturado mensualmente. Cancela cuando quieras.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <button style={{
                            width: '100%',
                            background: 'var(--primary-color)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '12px',
                            padding: '1.25rem',
                            fontSize: '1.125rem',
                            fontWeight: '700',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            marginBottom: '2.5rem'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 211, 102, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)';
                        }}>
                            Comenzar Ahora
                        </button>

                        {/* Features List */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            <div style={{
                                fontSize: '0.875rem',
                                fontWeight: '700',
                                color: 'var(--text-main)',
                                marginBottom: '0.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                Incluye:
                            </div>
                            {features.map((feature, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem'
                                }}>
                                    <div style={{
                                        width: '20px',
                                        height: '20px',
                                        background: '#dcfce7',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#16a34a',
                                        fontSize: '0.75rem',
                                        fontWeight: 'bold',
                                        flexShrink: 0
                                    }}>
                                        ✓
                                    </div>
                                    <span style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '1rem',
                                        lineHeight: '1.5'
                                    }}>
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Trust Badge */}
                        <div style={{
                            marginTop: '2.5rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid #e2e8f0',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                fontSize: '0.875rem',
                                color: 'var(--text-secondary)',
                                lineHeight: '1.6'
                            }}>
                                🔒 Pago seguro · Sin contratos largos · Soporte 24/7
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Hint */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '3rem',
                    fontSize: '1rem',
                    color: 'var(--text-secondary)'
                }}>
                    ¿Tienes preguntas? <a href="#" style={{
                        color: 'var(--primary-color)',
                        textDecoration: 'none',
                        fontWeight: '600',
                        borderBottom: '2px solid transparent',
                        transition: 'border-color 0.2s'
                    }}>Contáctanos</a>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
