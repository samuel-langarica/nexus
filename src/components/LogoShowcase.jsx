import React from 'react';
import Logo from './Logo';

/**
 * Temporary component to showcase all logo variants
 * Remove this file after choosing a logo variant
 */
const LogoShowcase = () => {
    const variants = [
        { id: 'v1', name: 'Reloj con Check', desc: 'Tiempo liberado - reloj con check mark' },
        { id: 'v2', name: 'Ticket Confirmado', desc: 'Ticket con check - turno validado' },
        { id: 'v3', name: 'T con Flecha', desc: 'Letra T con movimiento/salida' },
        { id: 'v4', name: 'Display con Notificación', desc: 'Pantalla de turno + badge WhatsApp' },
        { id: 'v5', name: 'Badge Circular', desc: 'Minimalista - T dentro de círculo' }
    ];

    return (
        <section style={{
            padding: '4rem 0',
            background: '#f8fafc',
            minHeight: '100vh'
        }}>
            <div className="container">
                <h1 style={{
                    fontSize: '3rem',
                    textAlign: 'center',
                    marginBottom: '1rem',
                    color: 'var(--primary-color)'
                }}>
                    Opciones de Logo - TurnoLibre
                </h1>
                <p style={{
                    textAlign: 'center',
                    fontSize: '1.25rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '4rem',
                    maxWidth: '600px',
                    margin: '0 auto 4rem'
                }}>
                    Selecciona tu diseño favorito. Todos mantienen la identidad visual con el verde WhatsApp.
                </p>

                {/* Grid de logos en fondo claro */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '4rem'
                }}>
                    {variants.map(variant => (
                        <div key={variant.id} style={{
                            background: '#fff',
                            borderRadius: '12px',
                            padding: '2rem',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                            border: '2px solid #e2e8f0',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                                <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                                    Opción {variant.id.toUpperCase()}
                                </div>
                                <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>
                                    {variant.name}
                                </div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                    {variant.desc}
                                </div>
                            </div>

                            {/* Logos en diferentes tamaños */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem',
                                alignItems: 'center'
                            }}>
                                {/* Grande */}
                                <div style={{
                                    padding: '1rem',
                                    background: '#f8fafc',
                                    borderRadius: '8px',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <Logo size="large" logoVariant={variant.id} />
                                </div>

                                {/* Mediano */}
                                <div style={{
                                    padding: '0.75rem',
                                    background: '#f8fafc',
                                    borderRadius: '8px',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <Logo size="medium" logoVariant={variant.id} />
                                </div>

                                {/* Pequeño */}
                                <div style={{
                                    padding: '0.5rem',
                                    background: '#f8fafc',
                                    borderRadius: '8px',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <Logo size="small" logoVariant={variant.id} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sección de logos en fondo oscuro */}
                <div style={{
                    background: '#0f172a',
                    borderRadius: '12px',
                    padding: '3rem',
                    marginTop: '4rem'
                }}>
                    <h3 style={{
                        color: '#fff',
                        fontSize: '1.5rem',
                        textAlign: 'center',
                        marginBottom: '2rem'
                    }}>
                        Vista en Footer (Fondo Oscuro)
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem'
                    }}>
                        {variants.map(variant => (
                            <div key={variant.id} style={{
                                textAlign: 'center',
                                padding: '1.5rem',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '8px'
                            }}>
                                <div style={{ marginBottom: '1rem', color: '#94a3b8', fontSize: '0.875rem' }}>
                                    {variant.name}
                                </div>
                                <Logo size="medium" logoVariant={variant.id} variant="white" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Instrucciones */}
                <div style={{
                    marginTop: '4rem',
                    padding: '2rem',
                    background: '#dcfce7',
                    borderRadius: '8px',
                    border: '2px solid var(--primary-color)'
                }}>
                    <h4 style={{ color: '#166534', marginBottom: '1rem', fontSize: '1.25rem' }}>
                        Cómo usar tu logo favorito:
                    </h4>
                    <div style={{ color: '#15803d', fontSize: '0.95rem', lineHeight: '1.8' }}>
                        <p style={{ marginBottom: '0.5rem' }}>
                            <strong>1.</strong> Elige tu variante favorita (v1, v2, v3, v4 o v5)
                        </p>
                        <p style={{ marginBottom: '0.5rem' }}>
                            <strong>2.</strong> En Header.jsx y Footer.jsx, agrega: <code style={{ background: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>logoVariant="v2"</code>
                        </p>
                        <p style={{ marginBottom: '0.5rem' }}>
                            <strong>3.</strong> Ejemplo: <code style={{ background: '#fff', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>&lt;Logo size="medium" logoVariant="v2" /&gt;</code>
                        </p>
                        <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                            💡 Puedes eliminar el archivo LogoShowcase.jsx después de elegir
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoShowcase;
