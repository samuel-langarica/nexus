import React from 'react';

const Solution = () => {
    const containerStyle = {
        padding: '6rem 0',
        backgroundColor: '#fff',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '4rem',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
    };

    const cardStyle = {
        padding: '2rem',
        borderRadius: 'var(--radius-md)',
        background: 'var(--bg-secondary)',
        border: '1px solid #e2e8f0',
        transition: 'transform 0.2s ease',
    };

    const solutions = [
        {
            title: '1. Ticket Impreso',
            desc: 'Simple y accesible para todos. Genera un ticket físico con un código QR para quienes no usan smartphone.',
            detail: 'Inclusión garantizada'
        },
        {
            title: '2. Pantalla Digital',
            desc: 'Muestra el estado de la cola en tiempo real. Reduce la ansiedad mostrando claramente a quién le toca.',
            detail: 'Claridad visual'
        },
        {
            title: '3. Notificaciones WhatsApp',
            desc: 'La magia de Nexus. Avisa al cliente cuando su turno se acerca para que pueda aprovechar su tiempo.',
            detail: 'Libertad de espera'
        }
    ];

    return (
        <section id="solucion" style={containerStyle}>
            <div className="container">
                <div style={headerStyle}>
                    <span style={{ color: 'var(--primary-color)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>La Solución Nexus</span>
                    <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', color: 'var(--text-main)' }}>Tres pilares, cero caos</h2>
                </div>

                <div style={gridStyle}>
                    {solutions.map((item, index) => (
                        <div key={index} style={cardStyle}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'var(--primary-color)',
                                color: '#fff',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                marginBottom: '1.5rem'
                            }}>
                                {index + 1}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>{item.desc}</p>
                            <div style={{
                                display: 'inline-block',
                                padding: '0.25rem 0.75rem',
                                background: '#dcfce7',
                                color: '#166534',
                                borderRadius: '100px',
                                fontSize: '0.875rem',
                                fontWeight: '500'
                            }}>
                                {item.detail}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;
