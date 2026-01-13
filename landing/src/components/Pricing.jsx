import React from 'react';
import { CONFIG } from '../../../shared/constants';

// Professional SVG Icons
const Icons = {
    Monitor: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
            <circle cx="9" cy="9" r="1.5" fill="currentColor"></circle>
            <circle cx="15" cy="9" r="1.5" fill="currentColor"></circle>
        </svg>
    ),
    WhatsApp: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
    ),
    QrCode: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1"></rect>
            <rect x="14" y="3" width="7" height="7" rx="1"></rect>
            <rect x="3" y="14" width="7" height="7" rx="1"></rect>
            <rect x="5.5" y="5.5" width="2" height="2" fill="currentColor"></rect>
            <rect x="16.5" y="5.5" width="2" height="2" fill="currentColor"></rect>
            <rect x="5.5" y="16.5" width="2" height="2" fill="currentColor"></rect>
            <path d="M14 14h3v3h-3z"></path>
            <path d="M18 14h3v3h-3z"></path>
            <path d="M14 18h3v3h-3z"></path>
        </svg>
    ),
    Settings: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        </svg>
    ),
    Printer: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
            <line x1="9" y1="17" x2="15" y2="17"></line>
            <line x1="9" y1="20" x2="15" y2="20"></line>
        </svg>
    ),
    Tablet: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="9" y1="19" x2="15" y2="19"></line>
            <path d="M8 6h8"></path>
            <path d="M8 9h5"></path>
        </svg>
    ),
    Code: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
            <line x1="12" y1="2" x2="12" y2="22"></line>
        </svg>
    ),
    Email: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
    ),
    Shield: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M9 12l2 2 4-4"></path>
        </svg>
    ),
    Zap: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
    ),
    Users: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
    )
};

const Pricing = () => {
    const plans = [
        {
            name: CONFIG.pricing.basic.name,
            subtitle: 'Para empezar',
            price: CONFIG.pricing.basic.price,
            description: 'Perfecto para negocios que quieren empezar hoy. Usa tu celular o tablet.',
            cta: 'Probar Gratis 14 Días',
            popular: false,
            categories: [
                {
                    title: 'Software',
                    features: [
                        { text: 'Dashboard para gestionar turnos', included: true, icon: 'Monitor', desc: 'Accede desde cualquier computadora o móvil del staff' },
                        { text: `${CONFIG.pricing.basic.turnLimit.toLocaleString()} turnos/mes via WhatsApp`, included: true, icon: 'WhatsApp', desc: 'Alertas automáticas a tus clientes' },
                        { text: 'Código QR digital', included: true, icon: 'QrCode', desc: 'Muestra el QR en tu celular o tablet' }
                    ]
                },
                {
                    title: 'Configuración',
                    features: [
                        { text: 'Setup guiado en 10 minutos', included: true, icon: 'Zap', desc: 'Empieza a operar hoy mismo' }
                    ]
                },
                {
                    title: 'Hardware',
                    features: [
                        { text: 'Usa tu celular o tablet existente', included: true, icon: 'Tablet', desc: 'No necesitas comprar hardware adicional' }
                    ]
                },
                {
                    title: 'Integraciones',
                    features: [
                        { text: 'API REST', included: false, icon: 'Code', note: 'Solo en Profesional' }
                    ]
                },
                {
                    title: 'Soporte',
                    features: [
                        { text: 'Email (respuesta en 24-48hrs)', included: true, icon: 'Email' }
                    ]
                }
            ],
            badge: 'Ideal para Empezar',
            badgeColor: '#3b82f6',
            ctaStyle: 'secondary'
        },
        {
            name: CONFIG.pricing.professional.name,
            subtitle: 'Software Premium',
            price: CONFIG.pricing.professional.price,
            description: 'WhatsApp ilimitado, API completa e integraciones avanzadas',
            cta: 'Empezar con Profesional',
            popular: true,
            categories: [
                {
                    title: 'Software',
                    features: [
                        { text: 'Todo de Básico incluido', included: true, icon: 'Monitor', bold: true },
                        { text: 'WhatsApp ILIMITADO', included: true, icon: 'WhatsApp', highlight: true, desc: 'Sin límites de turnos mensuales' }
                    ]
                },
                {
                    title: 'Configuración',
                    features: [
                        { text: 'Onboarding personalizado', included: true, icon: 'Settings', desc: 'Asistencia 1-a-1 para configurar tu cuenta' },
                        { text: 'Capacitación del equipo', included: true, icon: 'Users', desc: 'Entrenamos a tu staff vía videollamada' },
                        { text: 'Setup asistido completo', included: true, icon: 'Zap', desc: 'Te ayudamos paso a paso hasta que estés operando' }
                    ]
                },
                {
                    title: 'Hardware',
                    features: [
                        { text: 'Compatible con cualquier dispositivo', included: true, icon: 'Tablet', desc: 'Celular, tablet, monitor o TV - tú decides' }
                    ]
                },
                {
                    title: 'Integraciones',
                    features: [
                        { text: 'API REST completa', included: true, icon: 'Code', highlight: true, desc: 'Conecta TurnoLibre con tus sistemas actuales' }
                    ]
                },
                {
                    title: 'Soporte Premium',
                    features: [
                        { text: 'WhatsApp 24/7 prioritario', included: true, icon: 'WhatsApp', desc: 'Línea directa, respuesta inmediata' },
                        { text: 'Garantía de uptime 99.99%', included: true, icon: 'Shield', desc: 'Sistema siempre disponible con SLA' }
                    ]
                }
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
                        Elige tu plan
                    </h2>
                    <p style={{
                        fontSize: '1.125rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.6'
                    }}>
                        Mismo software poderoso. Tú decides el nivel de soporte.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
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
                            {/* Badge */}
                            {(plan.popular || plan.badge) && (
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
                                    boxShadow: plan.popular ? '0 4px 12px rgba(37, 211, 102, 0.3)' : '0 4px 12px rgba(59, 130, 246, 0.3)'
                                }}>
                                    {plan.badge}
                                </div>
                            )}

                            {/* Plan Header */}
                            <div style={{ marginBottom: '2rem', paddingTop: '0.5rem' }}>
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
                                        /mes
                                    </span>
                                </div>

                                <p style={{
                                    fontSize: '0.9375rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.5',
                                    minHeight: '3rem'
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
                                    fontSize: '1.0625rem',
                                    padding: '1rem',
                                    fontWeight: '700'
                                }}
                            >
                                {plan.cta}
                            </button>

                            {/* Features by Category */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.75rem'
                            }}>
                                {plan.categories.map((category, catIdx) => (
                                    <div key={catIdx}>
                                        {/* Category Title */}
                                        <div style={{
                                            fontSize: '0.75rem',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            color: '#64748b',
                                            marginBottom: '0.75rem'
                                        }}>
                                            {category.title}
                                        </div>

                                        {/* Category Features */}
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '0.875rem'
                                        }}>
                                            {category.features.map((feature, idx) => {
                                                const IconComponent = Icons[feature.icon];
                                                return (
                                                    <div key={idx} style={{
                                                        display: 'flex',
                                                        alignItems: 'flex-start',
                                                        gap: '0.75rem',
                                                        opacity: feature.included ? 1 : 0.6
                                                    }}>
                                                        {/* Icon */}
                                                        <div style={{
                                                            width: '20px',
                                                            height: '20px',
                                                            color: feature.included ? (feature.highlight ? 'var(--primary-color)' : '#16a34a') : '#94a3b8',
                                                            flexShrink: 0,
                                                            marginTop: '2px'
                                                        }}>
                                                            {IconComponent && <IconComponent />}
                                                        </div>

                                                        {/* Text */}
                                                        <div style={{ flex: 1 }}>
                                                            <div style={{
                                                                color: feature.included ? 'var(--text-main)' : 'var(--text-secondary)',
                                                                fontSize: '0.9375rem',
                                                                lineHeight: '1.5',
                                                                fontWeight: feature.bold ? '700' : '500'
                                                            }}>
                                                                {feature.text}
                                                                {feature.highlight && (
                                                                    <span style={{
                                                                        marginLeft: '0.5rem',
                                                                        background: 'var(--primary-color)',
                                                                        color: '#fff',
                                                                        padding: '0.125rem 0.5rem',
                                                                        borderRadius: '4px',
                                                                        fontSize: '0.75rem',
                                                                        fontWeight: '700',
                                                                        textTransform: 'uppercase',
                                                                        letterSpacing: '0.5px'
                                                                    }}>
                                                                        Pro
                                                                    </span>
                                                                )}
                                                            </div>
                                                            {feature.desc && (
                                                                <div style={{
                                                                    fontSize: '0.8125rem',
                                                                    color: '#64748b',
                                                                    marginTop: '0.25rem',
                                                                    lineHeight: '1.4'
                                                                }}>
                                                                    {feature.desc}
                                                                </div>
                                                            )}
                                                            {feature.note && (
                                                                <div style={{
                                                                    fontSize: '0.8125rem',
                                                                    color: '#94a3b8',
                                                                    marginTop: '0.25rem',
                                                                    fontStyle: 'italic'
                                                                }}>
                                                                    {feature.note}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Signals */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '3rem',
                    flexWrap: 'wrap',
                    marginTop: '3rem',
                    fontSize: '0.9375rem',
                    color: 'var(--text-secondary)',
                    fontWeight: '500'
                }}>
                    <span>✓ Cancela cuando quieras</span>
                    <span>✓ Sin contratos anuales</span>
                    <span>✓ Datos 100% seguros</span>
                </div>

                {/* Upsell Message */}
                <div style={{
                    maxWidth: '700px',
                    margin: '3rem auto 0',
                    background: 'linear-gradient(135deg, #dcfce7 0%, #d1fae5 100%)',
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
                        Empieza gratis hoy, escala cuando quieras
                    </div>
                    <div style={{
                        fontSize: '1rem',
                        color: '#15803d',
                        lineHeight: '1.6'
                    }}>
                        Prueba Básico 14 días gratis. Upgrade a Profesional en cualquier momento sin penalización.
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
