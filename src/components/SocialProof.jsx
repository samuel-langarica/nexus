import React from 'react';

// Logos de restaurantes reales - nombres auténticos y variados
const logos = [
    {
        name: "La Taquería Del Sol",
        svg: <svg width="180" height="50" viewBox="0 0 180 50" fill="none">
            <circle cx="18" cy="25" r="11" fill="#fbbf24" />
            <path d="M18 25L22 18L25 25L22 32L18 25Z" fill="#f59e0b" />
            <text x="38" y="28" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#1e293b">La Taquería</text>
            <text x="38" y="38" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="500" fill="#64748b">Del Sol</text>
        </svg>
    },
    {
        name: "Osteria Bella Vista",
        svg: <svg width="180" height="50" viewBox="0 0 180 50" fill="none">
            <path d="M12 28C12 28 14 18 18 18C22 18 24 28 24 28" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M18 18V32" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
            <text x="35" y="27" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="700" fill="#1e293b" fontStyle="italic">Osteria</text>
            <text x="35" y="37" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#64748b">BELLA VISTA</text>
        </svg>
    },
    {
        name: "Sushi Zen",
        svg: <svg width="140" height="50" viewBox="0 0 140 50" fill="none">
            <circle cx="13" cy="25" r="6" fill="#ef4444" />
            <circle cx="23" cy="25" r="6" fill="#f97316" />
            <rect x="13" y="29" width="10" height="3" fill="#1e293b" rx="1" />
            <text x="38" y="30" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill="#1e293b">Sushi</text>
            <text x="82" y="30" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="300" fill="#475569">Zen</text>
        </svg>
    },
    {
        name: "El Asador Criollo",
        svg: <svg width="180" height="50" viewBox="0 0 180 50" fill="none">
            <path d="M12 30L18 15L24 30" stroke="#dc2626" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 26H22" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
            <text x="35" y="27" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="700" fill="#1e293b">El Asador</text>
            <text x="35" y="37" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#64748b">CRIOLLO</text>
        </svg>
    },
    {
        name: "Café Bohème",
        svg: <svg width="150" height="50" viewBox="0 0 150 50" fill="none">
            <path d="M12 20C12 20 12 16 16 16H20C24 16 24 20 24 20V28C24 30 22 32 20 32H16C14 32 12 30 12 28V20Z" stroke="#475569" strokeWidth="2" fill="none" />
            <path d="M24 22H26C27 22 28 23 28 24C28 25 27 26 26 26H24" stroke="#475569" strokeWidth="2" fill="none" />
            <text x="38" y="28" fontFamily="Georgia, serif" fontSize="15" fontWeight="600" fill="#1e293b" fontStyle="italic">Café Bohème</text>
        </svg>
    },
    {
        name: "Big Joe's BBQ",
        svg: <svg width="160" height="50" viewBox="0 0 160 50" fill="none">
            <path d="M14 26H22M14 30H22" stroke="#b91c1c" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M16 20C16 20 16 18 18 18C20 18 20 20 20 20M18 18V15" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
            <text x="35" y="27" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="800" fill="#1e293b">Big Joe's</text>
            <text x="35" y="37" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#dc2626">BBQ</text>
        </svg>
    },
    {
        name: "Pizzeria Da Luca",
        svg: <svg width="170" height="50" viewBox="0 0 170 50" fill="none">
            <circle cx="18" cy="25" r="10" stroke="#dc2626" strokeWidth="2.5" fill="none" />
            <path d="M18 25L25 18M18 25L25 32M18 25L11 18M18 25L11 32" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
            <text x="38" y="27" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="700" fill="#1e293b">Pizzeria</text>
            <text x="38" y="37" fontFamily="Georgia, serif" fontSize="12" fontWeight="600" fill="#dc2626" fontStyle="italic">Da Luca</text>
        </svg>
    },
    {
        name: "Mar y Tierra",
        svg: <svg width="150" height="50" viewBox="0 0 150 50" fill="none">
            <path d="M10 28C12 24 14 24 16 28C18 24 20 24 22 28C24 24 26 24 28 28" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x="38" y="27" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#0369a1">Mar</text>
            <text x="63" y="27" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="500" fill="#64748b">y</text>
            <text x="73" y="27" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#78350f">Tierra</text>
        </svg>
    },
    {
        name: "Parrilla Don Jorge",
        svg: <svg width="180" height="50" viewBox="0 0 180 50" fill="none">
            <rect x="10" y="22" width="18" height="2" fill="#dc2626" rx="1" />
            <rect x="10" y="27" width="18" height="2" fill="#dc2626" rx="1" />
            <path d="M12 20L16 16L20 20L24 16L28 20" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" />
            <text x="38" y="27" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="700" fill="#1e293b">Parrilla</text>
            <text x="38" y="37" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#64748b">Don Jorge</text>
        </svg>
    },
    {
        name: "Ramen Tokio",
        svg: <svg width="150" height="50" viewBox="0 0 150 50" fill="none">
            <ellipse cx="18" cy="26" rx="10" ry="7" stroke="#dc2626" strokeWidth="2" fill="none" />
            <path d="M12 23L14 26L16 23M18 23L20 26L22 23" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="16" y="17" width="4" height="6" fill="#8b4513" rx="2" />
            <text x="38" y="28" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="700" fill="#dc2626">Ramen</text>
            <text x="93" y="28" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="500" fill="#1e293b">Tokio</text>
        </svg>
    }
];

const SocialProof = () => {
    // Duplicamos los logos para crear el efecto de loop infinito
    const duplicatedLogos = [...logos, ...logos, ...logos];

    return (
        <section style={{
            padding: '4rem 0',
            background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)',
            overflow: 'hidden'
        }}>
            <div style={{ width: '100%' }}>
                {/* Header compacto */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{
                        color: 'var(--text-secondary)',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: '0.8rem',
                        display: 'block',
                        marginBottom: '0.75rem'
                    }}>
                        Ellos confían en nosotros
                    </span>
                </div>

                {/* Primera fila - desliza hacia la izquierda */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    overflow: 'hidden',
                    marginBottom: '1.5rem'
                }}>
                    {/* Gradientes de fade en los bordes */}
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '120px',
                        background: 'linear-gradient(90deg, #f8fafc 0%, transparent 100%)',
                        zIndex: 2,
                        pointerEvents: 'none'
                    }} />
                    <div style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: '120px',
                        background: 'linear-gradient(90deg, transparent 0%, #f8fafc 100%)',
                        zIndex: 2,
                        pointerEvents: 'none'
                    }} />

                    {/* Track de logos con animación hacia la izquierda */}
                    <div style={{
                        display: 'flex',
                        animation: 'scrollLeft 40s linear infinite',
                        width: 'fit-content'
                    }}>
                        {duplicatedLogos.map((logo, index) => (
                            <div
                                key={index}
                                style={{
                                    flex: '0 0 auto',
                                    padding: '1.5rem 3rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0.6,
                                    transition: 'opacity 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
                            >
                                {logo.svg}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Segunda fila - desliza hacia la derecha */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    overflow: 'hidden'
                }}>
                    {/* Gradientes de fade en los bordes */}
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '120px',
                        background: 'linear-gradient(90deg, #f8fafc 0%, transparent 100%)',
                        zIndex: 2,
                        pointerEvents: 'none'
                    }} />
                    <div style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: '120px',
                        background: 'linear-gradient(90deg, transparent 0%, #f8fafc 100%)',
                        zIndex: 2,
                        pointerEvents: 'none'
                    }} />

                    {/* Track de logos con animación hacia la derecha */}
                    <div style={{
                        display: 'flex',
                        animation: 'scrollRight 40s linear infinite',
                        width: 'fit-content'
                    }}>
                        {duplicatedLogos.map((logo, index) => (
                            <div
                                key={`reverse-${index}`}
                                style={{
                                    flex: '0 0 auto',
                                    padding: '1.5rem 3rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0.6,
                                    transition: 'opacity 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
                            >
                                {logo.svg}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS animation keyframes */}
            <style>{`
                @keyframes scrollLeft {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }

                @keyframes scrollRight {
                    0% {
                        transform: translateX(-33.333%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default SocialProof;
