import React from 'react';

/**
 * Showcase de variaciones del logo tipo "Ticket con Palomita"
 * Explora diferentes estilos, colores, formas y composiciones
 */
const TicketLogoVariations = () => {

    // Variación 1: Original - Ticket horizontal con perforaciones
    const V1_Original = ({ size = 32, accent = '#25D366' }) => (
        <svg width={size * 1.3} height={size} viewBox="0 0 32 24" fill="none">
            <rect x="2" y="4" width="28" height="16" rx="2" stroke={accent} strokeWidth="2" />
            <circle cx="2" cy="12" r="2" fill="white" />
            <circle cx="30" cy="12" r="2" fill="white" />
            <path d="M8 12 L13 17 L24 8" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Variación 2: Ticket vertical (como ticket real de máquina)
    const V2_Vertical = ({ size = 32, accent = '#25D366' }) => (
        <svg width={size * 0.7} height={size * 1.3} viewBox="0 0 18 32" fill="none">
            <rect x="2" y="2" width="14" height="28" rx="2" stroke={accent} strokeWidth="2" />
            <circle cx="9" cy="2" r="1.5" fill="white" />
            <circle cx="9" cy="30" r="1.5" fill="white" />
            <path d="M5 14 L8 17 L13 11" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Variación 3: Ticket con esquinas más redondeadas (suave)
    const V3_Rounded = ({ size = 32, accent = '#25D366' }) => (
        <svg width={size * 1.3} height={size} viewBox="0 0 32 24" fill="none">
            <rect x="2" y="4" width="28" height="16" rx="4" stroke={accent} strokeWidth="2" />
            <circle cx="2" cy="12" r="2" fill="white" />
            <circle cx="30" cy="12" r="2" fill="white" />
            <path d="M8 12 L13 17 L24 8" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Variación 4: Ticket relleno (sólido) con palomita blanca
    const V4_Filled = ({ size = 32, accent = '#25D366' }) => (
        <svg width={size * 1.3} height={size} viewBox="0 0 32 24" fill="none">
            <rect x="2" y="4" width="28" height="16" rx="2" fill={accent} />
            <circle cx="2" cy="12" r="2" fill="white" />
            <circle cx="30" cy="12" r="2" fill="white" />
            <path d="M8 12 L13 17 L24 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Variación 5: Ticket con borde punteado (perforado)
    const V5_Dashed = ({ size = 32, accent = '#25D366' }) => (
        <svg width={size * 1.3} height={size} viewBox="0 0 32 24" fill="none">
            <rect x="2" y="4" width="28" height="16" rx="2" stroke={accent} strokeWidth="2" strokeDasharray="3 2" />
            <circle cx="2" cy="12" r="2" fill="white" />
            <circle cx="30" cy="12" r="2" fill="white" />
            <path d="M8 12 L13 17 L24 8" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Variación 6: Ticket minimalista (sin perforaciones)
    const V6_Minimal = ({ size = 32, accent = '#25D366' }) => (
        <svg width={size * 1.3} height={size} viewBox="0 0 32 24" fill="none">
            <rect x="3" y="5" width="26" height="14" rx="2" stroke={accent} strokeWidth="2" />
            <path d="M9 12 L13 16 L23 9" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Variación 7: Ticket con palomita en círculo (badge)
    const V7_Badge = ({ size = 32, accent = '#25D366' }) => (
        <svg width={size * 1.4} height={size} viewBox="0 0 36 24" fill="none">
            <rect x="2" y="4" width="24" height="16" rx="2" stroke={accent} strokeWidth="2" />
            <circle cx="2" cy="12" r="2" fill="white" />
            <circle cx="26" cy="12" r="2" fill="white" />
            <circle cx="30" cy="8" r="6" fill={accent} />
            <path d="M27 8 L29 10 L33 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Variación 8: Ticket cuadrado (más compacto)
    const V8_Square = ({ size = 32, accent = '#25D366' }) => (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="3" stroke={accent} strokeWidth="2" />
            <circle cx="2" cy="12" r="1.5" fill="white" />
            <circle cx="22" cy="12" r="1.5" fill="white" />
            <path d="M7 12 L10 15 L17 9" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Variación 9: Ticket con palomita grande (protagonista)
    const V9_BigCheck = ({ size = 32, accent = '#25D366' }) => (
        <svg width={size * 1.3} height={size} viewBox="0 0 32 24" fill="none">
            <rect x="2" y="4" width="28" height="16" rx="2" stroke={accent} strokeWidth="1.5" opacity="0.5" />
            <circle cx="2" cy="12" r="2" fill="white" />
            <circle cx="30" cy="12" r="2" fill="white" />
            <path d="M6 12 L13 19 L26 7" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Variación 10: Ticket con número + palomita
    const V10_WithNumber = ({ size = 32, accent = '#25D366' }) => (
        <svg width={size * 1.3} height={size} viewBox="0 0 32 24" fill="none">
            <rect x="2" y="4" width="28" height="16" rx="2" stroke={accent} strokeWidth="2" />
            <circle cx="2" cy="12" r="2" fill="white" />
            <circle cx="30" cy="12" r="2" fill="white" />
            <text x="10" y="15" fill={accent} fontSize="10" fontWeight="bold">1</text>
            <path d="M18 10 L20 12 L24 8" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Variación 11: Ticket outline grueso
    const V11_Bold = ({ size = 32, accent = '#25D366' }) => (
        <svg width={size * 1.3} height={size} viewBox="0 0 32 24" fill="none">
            <rect x="2" y="4" width="28" height="16" rx="2" stroke={accent} strokeWidth="3" />
            <circle cx="2" cy="12" r="2.5" fill="white" />
            <circle cx="30" cy="12" r="2.5" fill="white" />
            <path d="M8 12 L13 17 L24 8" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Variación 12: Ticket con bordes serrados (rasgado)
    const V12_Torn = ({ size = 32, accent = '#25D366' }) => (
        <svg width={size * 1.3} height={size} viewBox="0 0 32 24" fill="none">
            <path d="M4 4 L30 4 L30 20 L4 20 L4 4 Z" stroke={accent} strokeWidth="2" />
            <path d="M0 10 L2 11 L0 12 L2 13 L0 14" stroke={accent} strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M32 10 L30 11 L32 12 L30 13 L32 14" stroke={accent} strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M8 12 L13 17 L24 8" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Variación 13: Doble palomita (confirmado x2)
    const V13_DoubleCheck = ({ size = 32, accent = '#25D366' }) => (
        <svg width={size * 1.3} height={size} viewBox="0 0 32 24" fill="none">
            <rect x="2" y="4" width="28" height="16" rx="2" stroke={accent} strokeWidth="2" />
            <circle cx="2" cy="12" r="2" fill="white" />
            <circle cx="30" cy="12" r="2" fill="white" />
            <path d="M6 12 L10 16 L18 9" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
            <path d="M11 12 L15 16 L24 8" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Variación 14: Ticket en perspectiva 3D
    const V14_3D = ({ size = 32, accent = '#25D366' }) => (
        <svg width={size * 1.4} height={size * 1.1} viewBox="0 0 34 26" fill="none">
            <path d="M3 6 L29 4 L29 20 L3 22 Z" stroke={accent} strokeWidth="2" fill="white" />
            <circle cx="3" cy="14" r="2" fill="white" stroke={accent} strokeWidth="1" />
            <circle cx="29" cy="12" r="2" fill="white" stroke={accent} strokeWidth="1" />
            <path d="M9 13 L14 18 L24 9" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Variación 15: Ticket con sombra (depth)
    const V15_Shadow = ({ size = 32, accent = '#25D366' }) => (
        <svg width={size * 1.4} height={size * 1.1} viewBox="0 0 34 26" fill="none">
            <rect x="4" y="6" width="28" height="16" rx="2" fill="#e2e8f0" />
            <rect x="2" y="4" width="28" height="16" rx="2" stroke={accent} strokeWidth="2" fill="white" />
            <circle cx="2" cy="12" r="2" fill="#f8fafc" />
            <circle cx="30" cy="12" r="2" fill="#f8fafc" />
            <path d="M8 12 L13 17 L24 8" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const variations = [
        { id: 'v1', component: V1_Original, name: 'Original', desc: 'Horizontal con perforaciones', accent: '#25D366' },
        { id: 'v2', component: V2_Vertical, name: 'Vertical', desc: 'Como ticket de máquina', accent: '#25D366' },
        { id: 'v3', component: V3_Rounded, name: 'Redondeado', desc: 'Esquinas más suaves', accent: '#25D366' },
        { id: 'v4', component: V4_Filled, name: 'Relleno', desc: 'Sólido con palomita blanca', accent: '#25D366' },
        { id: 'v5', component: V5_Dashed, name: 'Punteado', desc: 'Borde perforado', accent: '#25D366' },
        { id: 'v6', component: V6_Minimal, name: 'Minimalista', desc: 'Sin perforaciones', accent: '#25D366' },
        { id: 'v7', component: V7_Badge, name: 'Con Badge', desc: 'Palomita en círculo', accent: '#25D366' },
        { id: 'v8', component: V8_Square, name: 'Cuadrado', desc: 'Más compacto', accent: '#25D366' },
        { id: 'v9', component: V9_BigCheck, name: 'Check Grande', desc: 'Palomita protagonista', accent: '#25D366' },
        { id: 'v10', component: V10_WithNumber, name: 'Con Número', desc: 'Número + palomita', accent: '#25D366' },
        { id: 'v11', component: V11_Bold, name: 'Bold', desc: 'Líneas gruesas', accent: '#25D366' },
        { id: 'v12', component: V12_Torn, name: 'Rasgado', desc: 'Bordes serrados', accent: '#25D366' },
        { id: 'v13', component: V13_DoubleCheck, name: 'Doble Check', desc: 'WhatsApp style', accent: '#25D366' },
        { id: 'v14', component: V14_3D, name: '3D', desc: 'Perspectiva', accent: '#25D366' },
        { id: 'v15', component: V15_Shadow, name: 'Con Sombra', desc: 'Profundidad', accent: '#25D366' },
    ];

    // Variaciones de color
    const colorPalettes = [
        { name: 'WhatsApp Verde', color: '#25D366', bg: '#dcfce7' },
        { name: 'Azul Cielo', color: '#0ea5e9', bg: '#e0f2fe' },
        { name: 'Morado', color: '#a855f7', bg: '#f3e8ff' },
        { name: 'Naranja', color: '#f97316', bg: '#ffedd5' },
        { name: 'Rosa', color: '#ec4899', bg: '#fce7f3' },
        { name: 'Verde Esmeralda', color: '#10b981', bg: '#d1fae5' },
        { name: 'Índigo', color: '#6366f1', bg: '#e0e7ff' },
        { name: 'Rojo', color: '#ef4444', bg: '#fee2e2' },
    ];

    return (
        <div style={{ padding: '4rem 0', background: '#f8fafc', minHeight: '100vh' }}>
            <div className="container">
                <h1 style={{
                    fontSize: '3rem',
                    textAlign: 'center',
                    marginBottom: '1rem',
                    color: 'var(--primary-color)'
                }}>
                    🎫 Variaciones Logo: Ticket + Palomita
                </h1>
                <p style={{
                    textAlign: 'center',
                    fontSize: '1.25rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '4rem',
                    maxWidth: '700px',
                    margin: '0 auto 4rem'
                }}>
                    Explora diferentes estilos del concepto ticket. Todas en verde WhatsApp, luego verás variaciones de color.
                </p>

                {/* Sección 1: Variaciones de Forma/Estilo */}
                <h2 style={{
                    fontSize: '2rem',
                    color: 'var(--primary-color)',
                    marginBottom: '2rem',
                    textAlign: 'center'
                }}>
                    Variaciones de Forma
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '5rem'
                }}>
                    {variations.map(v => {
                        const Component = v.component;
                        return (
                            <div key={v.id} style={{
                                background: '#fff',
                                borderRadius: '12px',
                                padding: '2rem',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                border: '2px solid #e2e8f0',
                                transition: 'all 0.2s',
                                cursor: 'pointer',
                                textAlign: 'center'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                                e.currentTarget.style.borderColor = '#25D366';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                                e.currentTarget.style.borderColor = '#e2e8f0';
                            }}>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                                    {v.id.toUpperCase()}
                                </div>
                                <div style={{ fontSize: '1.125rem', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                                    {v.name}
                                </div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                                    {v.desc}
                                </div>

                                {/* Logo en diferentes tamaños */}
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1.5rem'
                                }}>
                                    <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
                                        <Component size={48} accent={v.accent} />
                                    </div>
                                    <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '8px' }}>
                                        <Component size={32} accent={v.accent} />
                                    </div>
                                    <div style={{ padding: '0.5rem', background: '#f8fafc', borderRadius: '8px' }}>
                                        <Component size={24} accent={v.accent} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Sección 2: Variaciones de Color (usando logo favorito) */}
                <h2 style={{
                    fontSize: '2rem',
                    color: 'var(--primary-color)',
                    marginBottom: '1rem',
                    textAlign: 'center'
                }}>
                    Variaciones de Color
                </h2>
                <p style={{
                    textAlign: 'center',
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '3rem'
                }}>
                    El mismo diseño (Original) en diferentes paletas de color
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '5rem'
                }}>
                    {colorPalettes.map((palette, idx) => (
                        <div key={idx} style={{
                            background: palette.bg,
                            borderRadius: '12px',
                            padding: '2rem 1.5rem',
                            border: `2px solid ${palette.color}`,
                            textAlign: 'center',
                            transition: 'transform 0.2s',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                            <div style={{ marginBottom: '1rem' }}>
                                <V1_Original size={40} accent={palette.color} />
                            </div>
                            <div style={{ fontSize: '0.875rem', fontWeight: '600', color: palette.color }}>
                                {palette.name}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sección 3: Con Texto (nombres) */}
                <h2 style={{
                    fontSize: '2rem',
                    color: 'var(--primary-color)',
                    marginBottom: '3rem',
                    textAlign: 'center'
                }}>
                    Mockups con Texto
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {['TurnoLibre', 'MiTurno', 'AvisoYa', 'Anda', 'YaToca', 'CheckTurno'].map((name, idx) => (
                        <div key={idx} style={{
                            background: '#fff',
                            borderRadius: '12px',
                            padding: '2rem',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                                marginBottom: '1rem'
                            }}>
                                <div style={{
                                    background: 'transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <V1_Original size={32} accent="#25D366" />
                                </div>
                                <span style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '800',
                                    color: '#1e293b',
                                    letterSpacing: '-0.05em'
                                }}>
                                    {name.includes('Libre') || name.includes('Turno') || name.includes('Aviso') ?
                                        <>{name.split(/(?=[A-Z][a-z])/)[0]}<span style={{ color: '#25D366' }}>{name.split(/(?=[A-Z][a-z])/).slice(1).join('')}</span></>
                                        : name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Instrucciones finales */}
                <div style={{
                    marginTop: '5rem',
                    padding: '2rem',
                    background: '#dcfce7',
                    borderRadius: '12px',
                    border: '2px solid #25D366'
                }}>
                    <h3 style={{ color: '#166534', marginBottom: '1rem', fontSize: '1.25rem' }}>
                        💡 Próximos pasos
                    </h3>
                    <div style={{ color: '#15803d', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '0.5rem' }}>
                            <strong>1.</strong> Elige tu variación favorita de forma
                        </p>
                        <p style={{ marginBottom: '0.5rem' }}>
                            <strong>2.</strong> Decide si prefieres el verde WhatsApp u otro color
                        </p>
                        <p style={{ marginBottom: '0.5rem' }}>
                            <strong>3.</strong> Combínalo con el nombre que más te guste
                        </p>
                        <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                            ¿Quieres que implemente tu combinación favorita?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketLogoVariations;
