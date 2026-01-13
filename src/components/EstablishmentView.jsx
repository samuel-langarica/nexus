import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

const EstablishmentView = () => {
    const plans = [
        {
            name: 'Setup Rápido',
            price: '$399',
            period: '/mes',
            subtitle: 'Perfecto para empezar hoy',
            description: 'Usa tus propios dispositivos y configura en 10 minutos.',
            badge: 'Ideal para empezar',
            badgeColor: '#3b82f6',
            features: [
                { icon: '📱', title: 'Usa tu celular o tablet', desc: 'No necesitas comprar hardware nuevo' },
                { icon: '🖨️', title: 'QR estático impreso', desc: 'Lo imprimimos y te lo enviamos' },
                { icon: '⚡', title: 'Setup en 10 minutos', desc: 'Configuras todo desde tu dispositivo' },
                { icon: '📧', title: 'Soporte por email', desc: 'Te ayudamos cuando lo necesites' }
            ],
            cta: 'Empezar Ahora',
            ctaStyle: 'secondary',
            imagePlaceholder: {
                fileName: 'setup-rapido-mockup.png',
                icon: '📱',
                description: 'Mockup del plan Setup Rápido',
                prompt: 'Professional product mockup showing a modern smartphone displaying a queue management dashboard app, next to a printed QR code poster on a clean white surface. The phone screen shows a clean interface with queue numbers and customer notifications. Soft shadows, minimalist style, light blue and white color scheme, high quality 3D render, professional SaaS product photography style.'
            }
        },
        {
            name: 'Setup Completo',
            price: '$1,999',
            period: '/mes',
            subtitle: 'Experiencia premium completa',
            description: 'Hardware incluido e instalación profesional en tu negocio.',
            badge: 'Más Popular',
            badgeColor: 'var(--primary-color)',
            isPopular: true,
            features: [
                { icon: '📱', title: 'Tablet Android 10" incluida', desc: 'Configurada y lista para usar' },
                { icon: '🖨️', title: 'Impresora térmica de tickets', desc: 'Profesional, rápida, sin tinta' },
                { icon: '🛠️', title: 'Instalación en 3 horas', desc: 'Nuestro equipo va a tu negocio' },
                { icon: '💬', title: 'Soporte 24/7 por WhatsApp', desc: 'Siempre disponibles para ti' }
            ],
            cta: 'Solicitar Demo',
            ctaStyle: 'primary',
            imagePlaceholder: {
                fileName: 'setup-completo-mockup.png',
                icon: '🖥️',
                description: 'Mockup del plan Setup Completo',
                prompt: 'Professional product mockup showing a 10-inch Android tablet and a thermal receipt printer side by side on a clean surface. The tablet displays a modern queue management dashboard with green accents. The thermal printer is compact and professional-looking, with a printed ticket coming out showing a QR code. Soft shadows, minimalist style, green and white color scheme matching brand color #25D366, high quality 3D render, professional SaaS product photography style.'
            }
        }
    ];

    return (
        <section id="planes" style={{ padding: '6rem 0', background: '#f8fafc' }}>
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
                        Dos Formas de Empezar
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        lineHeight: '1.1',
                        marginBottom: '1rem',
                        color: 'var(--text-main)',
                        fontWeight: '800'
                    }}>
                        Mismo software. Tú decides el soporte.
                    </h2>
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6'
                    }}>
                        Ambos planes incluyen el sistema completo de gestión de filas con WhatsApp. Elige autoservicio o instalación profesional.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1100px',
                    margin: '0 auto 3rem'
                }}>
                    {plans.map((plan, index) => (
                        <div key={index} style={{
                            background: '#fff',
                            borderRadius: '24px',
                            padding: '2.5rem',
                            boxShadow: plan.isPopular ? '0 25px 70px rgba(37, 211, 102, 0.15)' : '0 10px 40px rgba(0, 0, 0, 0.08)',
                            border: plan.isPopular ? '3px solid var(--primary-color)' : '2px solid #e2e8f0',
                            position: 'relative',
                            transform: plan.isPopular ? 'scale(1.05)' : 'scale(1)',
                            transition: 'transform 0.3s, box-shadow 0.3s'
                        }}>
                            {/* Badge */}
                            <div style={{
                                position: 'absolute',
                                top: '-12px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: plan.badgeColor,
                                color: '#fff',
                                padding: '0.4rem 1.25rem',
                                borderRadius: '100px',
                                fontWeight: '700',
                                fontSize: '0.8rem',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                whiteSpace: 'nowrap'
                            }}>
                                {plan.badge}
                            </div>

                            {/* Image Placeholder */}
                            <div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                                <ImagePlaceholder
                                    prompt={plan.imagePlaceholder.prompt}
                                    icon={plan.imagePlaceholder.icon}
                                    fileName={plan.imagePlaceholder.fileName}
                                    description={plan.imagePlaceholder.description}
                                    height="200px"
                                />
                            </div>

                            {/* Header */}
                            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: '800',
                                    color: 'var(--text-main)',
                                    marginBottom: '0.5rem'
                                }}>
                                    {plan.name}
                                </h3>
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '1.5rem'
                                }}>
                                    {plan.subtitle}
                                </p>

                                {/* Price */}
                                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <span style={{
                                        fontSize: '3.5rem',
                                        fontWeight: '800',
                                        color: 'var(--text-main)',
                                        lineHeight: '1'
                                    }}>
                                        {plan.price}
                                    </span>
                                    <span style={{
                                        fontSize: '1.125rem',
                                        color: 'var(--text-secondary)',
                                        fontWeight: '600'
                                    }}>
                                        {plan.period}
                                    </span>
                                </div>

                                <p style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.5',
                                    marginBottom: '1.5rem'
                                }}>
                                    {plan.description}
                                </p>

                                <button
                                    className={`btn btn-${plan.ctaStyle}`}
                                    style={{
                                        width: '100%',
                                        fontSize: '1.05rem',
                                        padding: '0.9rem'
                                    }}
                                >
                                    {plan.cta}
                                </button>
                            </div>

                            {/* Features */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.25rem',
                                paddingTop: '1.5rem',
                                borderTop: '1px solid #e2e8f0'
                            }}>
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <div style={{
                                            fontSize: '1.75rem',
                                            flexShrink: 0,
                                            lineHeight: '1'
                                        }}>
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <div style={{
                                                fontSize: '0.95rem',
                                                fontWeight: '700',
                                                color: 'var(--text-main)',
                                                marginBottom: '0.25rem'
                                            }}>
                                                {feature.title}
                                            </div>
                                            <div style={{
                                                fontSize: '0.875rem',
                                                color: 'var(--text-secondary)',
                                                lineHeight: '1.5'
                                            }}>
                                                {feature.desc}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Message */}
                <div style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                    background: '#fff',
                    border: '2px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '2rem',
                    textAlign: 'center'
                }}>
                    <div style={{
                        fontSize: '1.125rem',
                        fontWeight: '700',
                        color: 'var(--text-main)',
                        marginBottom: '0.5rem'
                    }}>
                        💡 Empieza rápido, crece después
                    </div>
                    <div style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6'
                    }}>
                        Comienza con Setup Rápido y upgradea a Setup Completo en cualquier momento. Sin penalización, sin fricción.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EstablishmentView;
