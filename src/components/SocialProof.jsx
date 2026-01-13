import React from 'react';

// Logos SVG simplificados - marcas ficticias
const logos = [
    {
        name: "MediCenter",
        svg: <svg width="140" height="50" viewBox="0 0 140 50" fill="none">
            <rect x="10" y="15" width="12" height="20" fill="#475569" rx="2" />
            <rect x="14" y="11" width="4" height="28" fill="#475569" rx="1" />
            <text x="35" y="33" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="700" fill="#1e293b">MediCenter</text>
        </svg>
    },
    {
        name: "BancoNacional",
        svg: <svg width="140" height="50" viewBox="0 0 140 50" fill="none">
            <circle cx="18" cy="25" r="10" stroke="#475569" strokeWidth="2.5" fill="none" />
            <text x="6" y="32" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="800" fill="#475569">$</text>
            <text x="35" y="33" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill="#1e293b">BancoNacional</text>
        </svg>
    },
    {
        name: "RetailPlus",
        svg: <svg width="140" height="50" viewBox="0 0 140 50" fill="none">
            <path d="M12 20L18 15L24 20V33C24 34 23 35 22 35H14C13 35 12 34 12 33V20Z" fill="#475569" />
            <rect x="15" y="26" width="6" height="9" fill="#f8fafc" />
            <text x="35" y="33" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="700" fill="#1e293b">RetailPlus</text>
        </svg>
    },
    {
        name: "GobDigital",
        svg: <svg width="140" height="50" viewBox="0 0 140 50" fill="none">
            <rect x="10" y="18" width="16" height="16" stroke="#475569" strokeWidth="2.5" fill="none" rx="2" />
            <circle cx="18" cy="26" r="2" fill="#475569" />
            <text x="35" y="33" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="700" fill="#1e293b">GobDigital</text>
        </svg>
    },
    {
        name: "RestauGroup",
        svg: <svg width="140" height="50" viewBox="0 0 140 50" fill="none">
            <path d="M14 15V35M18 15V35M22 15V35M14 22H22" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
            <text x="35" y="33" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill="#1e293b">RestauGroup</text>
        </svg>
    },
    {
        name: "TechMart",
        svg: <svg width="140" height="50" viewBox="0 0 140 50" fill="none">
            <rect x="10" y="17" width="18" height="16" rx="2" fill="none" stroke="#475569" strokeWidth="2.5" />
            <rect x="13" y="20" width="12" height="7" fill="#475569" />
            <text x="35" y="33" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="700" fill="#1e293b">TechMart</text>
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
