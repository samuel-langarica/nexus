import React from 'react';

const HowItWorks = () => {
    const steps = [
        { title: 'Llegada', desc: 'Cliente obtiene ticket físico' },
        { title: 'Escaneo', desc: 'Cliente escanea QR (opcional)' },
        { title: 'WhatsApp', desc: 'Recibe alertas en su móvil' },
        { title: 'Atención', desc: 'Acude cuando es su turno' }
    ];

    return (
        <section id="como-funciona" style={{ padding: '6rem 0', background: 'var(--primary-color)', color: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Flujo sin fricción</h2>
                    <p style={{ opacity: 0.9, fontSize: '1.2rem' }}>Desde la llegada hasta la atención en 4 pasos</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {steps.map((step, i) => (
                        <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            background: 'rgba(255,255,255,0.1)',
                            padding: '1.5rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                marginRight: '1.5rem',
                                opacity: 0.5
                            }}>0{i + 1}</div>
                            <div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{step.title}</h3>
                                <p style={{ opacity: 0.8 }}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
