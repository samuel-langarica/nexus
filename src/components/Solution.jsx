import React from 'react';

const Solution = () => {
    const containerStyle = {
        padding: '6rem 0',
        backgroundColor: '#f8fafc',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '5rem',
    };

    const timelineContainer = {
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
    };

    const stepsWrapper = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '2rem',
        position: 'relative',
        flexWrap: 'wrap',
    };

    const progressLine = {
        position: 'absolute',
        top: '80px',
        left: '20%',
        right: '20%',
        height: '4px',
        background: 'linear-gradient(90deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
        zIndex: 0,
    };

    const stepCard = (color, bgColor) => ({
        flex: '1',
        minWidth: '280px',
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
    });

    const iconCircle = (gradient) => ({
        width: '160px',
        height: '160px',
        margin: '0 auto 2rem',
        background: gradient,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        transform: 'scale(1)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
    });

    const contentCard = {
        background: '#fff',
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        minHeight: '200px',
    };

    const solutions = [
        {
            title: 'Consulta Inicial',
            desc: 'Entendemos tus necesidades y personalizamos el plan ideal para tu negocio.',
            detail: 'Sin compromiso',
            icon: '💬',
            gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            badgeColor: '#dcfce7',
            badgeText: '#166534'
        },
        {
            title: 'Instalación de Hardware',
            desc: 'Nuestro equipo instala el sistema completo: impresora de tickets y pantalla digital. Solo necesitas WiFi.',
            detail: 'Mismo día',
            icon: '🔧',
            gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            badgeColor: '#dbeafe',
            badgeText: '#1e40af'
        },
        {
            title: 'Capacitación Express',
            desc: 'Entrenamiento rápido para tu personal y listo. Tu negocio queda operativo de inmediato.',
            detail: 'Listo para usar',
            icon: '🚀',
            gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
            badgeColor: '#ede9fe',
            badgeText: '#6d28d9'
        }
    ];

    return (
        <section id="solucion" style={containerStyle}>
            <div className="container">
                <div style={headerStyle}>
                    <span style={{
                        color: 'var(--primary-color)',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: '0.9rem'
                    }}>
                        Proceso de Instalación
                    </span>
                    <h2 style={{
                        fontSize: '3rem',
                        marginTop: '1rem',
                        color: 'var(--text-main)',
                        fontWeight: '800'
                    }}>
                        Operativo en un solo día
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        marginTop: '1rem',
                        maxWidth: '600px',
                        margin: '1rem auto 0'
                    }}>
                        De la primera llamada a tu sistema funcionando, todo en 24 horas
                    </p>
                </div>

                <div style={timelineContainer}>
                    <div style={progressLine}></div>
                    <div style={stepsWrapper}>
                        {solutions.map((item, index) => (
                            <div key={index} style={stepCard()}>
                                <div
                                    style={iconCircle(item.gradient)}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    <span style={{ fontSize: '5rem' }}>{item.icon}</span>
                                </div>

                                <div style={contentCard}>
                                    <div style={{
                                        fontSize: '2.5rem',
                                        fontWeight: '800',
                                        background: item.gradient,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {index + 1}
                                    </div>

                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        marginBottom: '1rem',
                                        color: 'var(--text-main)',
                                        fontWeight: '700'
                                    }}>
                                        {item.title}
                                    </h3>

                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        marginBottom: '1.5rem',
                                        lineHeight: '1.7',
                                        fontSize: '1rem'
                                    }}>
                                        {item.desc}
                                    </p>

                                    <div style={{
                                        display: 'inline-block',
                                        padding: '0.5rem 1.25rem',
                                        background: item.badgeColor,
                                        color: item.badgeText,
                                        borderRadius: '100px',
                                        fontSize: '0.875rem',
                                        fontWeight: '600'
                                    }}>
                                        ✓ {item.detail}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
