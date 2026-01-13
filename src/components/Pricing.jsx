import React from 'react';

const Pricing = () => {
    const plans = [
        {
            name: 'Setup Rápido',
            subtitle: 'Configúralo tú mismo',
            price: '399',
            description: 'Perfecto para negocios pequeños que quieren empezar hoy',
            cta: 'Empezar Ahora',
            popular: false,
            features: [
                { text: 'Dashboard web responsive', included: true },
                { text: 'QR impreso para clientes', included: true },
                { text: 'Notificaciones WhatsApp ilimitadas', included: true },
                { text: 'Configuración en 10 minutos', included: true },
                { text: 'Soporte por email', included: true },
                { text: 'API de integración', included: true },
                { text: 'Tablet física para staff', included: false, note: 'Usa tu propio dispositivo' },
                { text: 'Impresora térmica de tickets', included: false, note: 'QR estático incluido' },
                { text: 'Instalación profesional', included: false, note: 'Autoservicio' }
            ],
            badge: 'Ideal para empezar',
            badgeColor: '#3b82f6',
            ctaStyle: 'secondary'
        },
        {
            name: 'Setup Completo',
            subtitle: 'Instalación profesional',
            price: '1,999',
            description: 'Para negocios que quieren la experiencia premium completa',
            cta: 'Solicitar Demo',
            popular: true,
            features: [
                { text: 'Todo de Setup Rápido, más:', included: true, bold: true },
                { text: 'Tablet Android 10" para staff', included: true },
                { text: 'Impresora térmica de tickets', included: true },
                { text: 'Instalación y configuración completa', included: true },
                { text: 'Capacitación del equipo presencial', included: true },
                { text: 'Setup en 3 horas (en tu negocio)', included: true },
                { text: 'Soporte técnico 24/7 por WhatsApp', included: true },
                { text: 'Garantía de uptime 99.99%', included: true },
                { text: 'Actualizaciones de hardware incluidas', included: true }
            ],
            badge: 'Más Popular',
            badgeColor: 'var(--primary-color)',
            ctaStyle: 'primary'
        }
    ];

    return (
        <section id="pricing" style={{ padding: '6rem 0', background: '#f8fafc' }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
                    <span style={{
                        color: 'var(--primary-color)',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        fontSize: '0.875rem',
                        display: 'block',
                        marginBottom: '1rem'
                    }}>
                        Precios Transparentes
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        lineHeight: '1.1',
                        marginBottom: '1rem',
                        color: 'var(--text-main)',
                        fontWeight: '800'
                    }}>
                        ¿Cómo quieres empezar?
                    </h2>
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6'
                    }}>
                        Mismo software poderoso. Elige el nivel de soporte que necesitas.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {plans.map((plan, index) => (
                        <div key={index} style={{
                            background: '#fff',
                            borderRadius: '24px',
                            padding: '2.5rem',
                            boxShadow: plan.popular ? '0 25px 70px rgba(37, 211, 102, 0.15)' : '0 10px 40px rgba(0, 0, 0, 0.08)',
                            border: plan.popular ? '3px solid var(--primary-color)' : '2px solid #e2e8f0',
                            position: 'relative',
                            transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                            transition: 'transform 0.3s, box-shadow 0.3s'
                        }}>
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-16px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: plan.badgeColor,
                                    color: '#fff',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '100px',
                                    fontWeight: '700',
                                    fontSize: '0.875rem',
                                    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
                                }}>
                                    {plan.badge}
                                </div>
                            )}

                            {/* Plan Header */}
                            <div style={{ marginBottom: '2rem', paddingTop: plan.popular ? '0.5rem' : '0' }}>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: '800',
                                    color: 'var(--text-main)',
                                    marginBottom: '0.25rem'
                                }}>
                                    {plan.name}
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '1.5rem'
                                }}>
                                    {plan.subtitle}
                                </p>

                                {/* Price */}
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <span style={{
                                        fontSize: '3.5rem',
                                        fontWeight: '800',
                                        color: 'var(--text-main)',
                                        lineHeight: '1'
                                    }}>
                                        ${plan.price}
                                    </span>
                                    <span style={{
                                        fontSize: '1.125rem',
                                        color: 'var(--text-secondary)',
                                        fontWeight: '600'
                                    }}>
                                        MXN/mes
                                    </span>
                                </div>

                                <p style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.5'
                                }}>
                                    {plan.description}
                                </p>
                            </div>

                            {/* CTA Button */}
                            <button
                                className={`btn btn-${plan.ctaStyle}`}
                                style={{
                                    width: '100%',
                                    marginBottom: '2rem',
                                    fontSize: '1.125rem',
                                    padding: '1rem'
                                }}
                            >
                                {plan.cta}
                            </button>

                            {/* Features List */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.875rem'
                            }}>
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.75rem',
                                        opacity: feature.included ? 1 : 0.5
                                    }}>
                                        <div style={{
                                            width: '20px',
                                            height: '20px',
                                            background: feature.included ? '#dcfce7' : '#f1f5f9',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: feature.included ? '#16a34a' : '#94a3b8',
                                            fontSize: '0.75rem',
                                            fontWeight: 'bold',
                                            flexShrink: 0,
                                            marginTop: '2px'
                                        }}>
                                            {feature.included ? '✓' : '−'}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <span style={{
                                                color: feature.included ? 'var(--text-main)' : 'var(--text-secondary)',
                                                fontSize: '0.9375rem',
                                                lineHeight: '1.5',
                                                fontWeight: feature.bold ? '700' : '400'
                                            }}>
                                                {feature.text}
                                            </span>
                                            {feature.note && (
                                                <div style={{
                                                    fontSize: '0.8125rem',
                                                    color: 'var(--text-secondary)',
                                                    marginTop: '0.25rem',
                                                    fontStyle: 'italic'
                                                }}>
                                                    {feature.note}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Upsell Message */}
                <div style={{
                    maxWidth: '700px',
                    margin: '3rem auto 0',
                    background: '#dcfce7',
                    border: '2px solid #86efac',
                    borderRadius: '16px',
                    padding: '1.75rem',
                    textAlign: 'center'
                }}>
                    <div style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        color: '#166534',
                        marginBottom: '0.5rem'
                    }}>
                        💡 Empieza rápido, crece después
                    </div>
                    <div style={{
                        fontSize: '1rem',
                        color: '#15803d',
                        lineHeight: '1.6'
                    }}>
                        Comienza con Setup Rápido y upgradea a Setup Completo en cualquier momento. Sin penalización, sin fricción.
                    </div>
                </div>

                {/* FAQ Hint */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '3rem',
                    fontSize: '1rem',
                    color: 'var(--text-secondary)'
                }}>
                    ¿No sabes cuál elegir? <a href="#" style={{
                        color: 'var(--primary-color)',
                        textDecoration: 'none',
                        fontWeight: '600',
                        borderBottom: '2px solid transparent',
                        transition: 'border-color 0.2s'
                    }}>Habla con nosotros</a>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
