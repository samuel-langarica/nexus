import React from 'react';

const Problem = () => {
    const cards = [
        {
            icon: '😡',
            title: 'Clientes Frustrados',
            text: 'La incertidumbre del tiempo de espera genera ansiedad y molesta a tus clientes.'
        },
        {
            icon: '📉',
            title: 'Pérdida de Ventas',
            text: 'Filas largas y desorganizadas ahuyentan a nuevos clientes potenciales.'
        },
        {
            icon: '🤯',
            title: 'Caos Operativo',
            text: 'Empleados estresados gestionando quejas en lugar de dar un buen servicio.'
        }
    ];

    return (
        <section id="problema" style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                        El problema de las filas tradicionales
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        ¿Cuánto dinero estás perdiendo por una mala gestión de la espera?
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {cards.map((card, index) => (
                        <div key={index} style={{
                            background: '#fff',
                            padding: '2.5rem',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: 'var(--shadow-sm)',
                            border: '1px solid #f1f5f9'
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{card.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{card.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;
