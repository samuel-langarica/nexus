import React from 'react';

import qrCode from '../assets/qr_code.png';
import cameraBg from '../assets/camera_bg.jpg';

export const TicketMockup = ({ number = "A047", time = "14:30" }) => (
    <div style={{
        width: '200px',
        background: '#fff',
        padding: '2rem 1.5rem',
        borderRadius: '2px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        position: 'relative',
        transform: 'rotate(-2deg)',
        borderTop: '4px solid var(--accent-color)',
        margin: '2rem auto'
    }}>
        <div style={{ position: 'absolute', top: '-5px', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '20px', background: 'var(--bg-secondary)', borderRadius: '50%', boxShadow: 'inset 0 -2px 5px rgba(0,0,0,0.1)' }}></div>
        <div style={{ textAlign: 'center', fontFamily: 'monospace' }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.5rem', color: '#64748b' }}>Nexus Queue</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', lineHeight: '1' }}>{number}</div>
            <div style={{ fontSize: '0.875rem', margin: '1rem 0', color: '#334155' }}>2 Personas esperan</div>
            <div style={{ margin: '1rem auto' }}>
                <img src={qrCode} alt="Scan to track" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{time} • Escanea para salir</div>
        </div>
    </div>
);

export const PhoneMockup = ({ state = "scan" }) => {
    return (
        <div style={{
            width: '240px',
            height: '480px',
            background: '#fff',
            borderRadius: '32px',
            border: '8px solid #1e293b',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            margin: '0 auto'
        }}>
            <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '24px', background: '#1e293b', borderRadius: '0 0 12px 12px', zIndex: 10 }}></div>
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {state === 'scan' && (
                    <div style={{
                        background: '#000',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        backgroundImage: `url(${cameraBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                        {/* Camera Overlay Darkening */}
                        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }}></div>

                        {/* Camera Viewfinder UI */}
                        <div style={{
                            width: '180px',
                            height: '180px',
                            border: '2px solid rgba(255,255,255,0.5)',
                            borderRadius: '12px',
                            position: 'relative',
                            boxShadow: '0 0 0 9999px rgba(0,0,0,0.5)', // Focus effect
                            zIndex: 2
                        }}>
                            {/* Scanning Line Animation */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '2px',
                                background: '#25D366',
                                boxShadow: '0 0 4px #25D366',
                                animation: 'scan 2s linear infinite'
                            }}>
                                <style>{`
                                    @keyframes scan {
                                        0% { top: 0; opacity: 0; }
                                        10% { opacity: 1; }
                                        90% { opacity: 1; }
                                        100% { top: 100%; opacity: 0; }
                                    }
                                `}</style>
                            </div>
                            {/* Corners */}
                            <div style={{ position: 'absolute', top: '-2px', left: '-2px', width: '20px', height: '20px', borderTop: '4px solid #25D366', borderLeft: '4px solid #25D366', borderRadius: '4px 0 0 0' }}></div>
                            <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '20px', height: '20px', borderTop: '4px solid #25D366', borderRight: '4px solid #25D366', borderRadius: '0 4px 0 0' }}></div>
                            <div style={{ position: 'absolute', bottom: '-2px', left: '-2px', width: '20px', height: '20px', borderBottom: '4px solid #25D366', borderLeft: '4px solid #25D366', borderRadius: '0 0 0 4px' }}></div>
                            <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '20px', height: '20px', borderBottom: '4px solid #25D366', borderRight: '4px solid #25D366', borderRadius: '0 0 4px 0' }}></div>
                        </div>
                        <div style={{ position: 'absolute', bottom: '80px', color: '#fff', fontSize: '0.875rem', fontWeight: '500', background: 'rgba(0,0,0,0.6)', padding: '6px 14px', borderRadius: '20px', zIndex: 5, backdropFilter: 'blur(4px)' }}>Escaneando código...</div>

                        {/* Camera Controls Mockup */}
                        <div style={{ position: 'absolute', bottom: '30px', width: '60px', height: '60px', borderRadius: '50%', border: '4px solid #fff', zIndex: 5 }}></div>
                    </div>
                )}
                {(state.startsWith('chat')) && (
                    <>
                        <div style={{ background: '#075E54', padding: '35px 15px 15px 15px', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '32px', height: '32px', background: '#fff', borderRadius: '50%' }}></div>
                            <div><div style={{ fontSize: '0.9rem', fontWeight: '600' }}>Nexus Bot</div></div>
                        </div>
                        <div style={{ flex: 1, background: '#E5DDD5', padding: '20px 15px', display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto' }}>
                            {state === 'chat_welcome' && (
                                <div style={{ alignSelf: 'flex-start', maxWidth: '85%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <div style={{ background: '#fff', padding: '10px 14px', borderRadius: '0 8px 8px 8px', fontSize: '0.85rem', lineHeight: '1.4' }}>✅ Listo, ya estás en el sistema</div>
                                    <div style={{ background: '#fff', padding: '10px 14px', borderRadius: '0 8px 8px 8px', fontSize: '0.85rem', lineHeight: '1.4' }}>Puedes sentarte, ir al baño o tomar un café ☕</div>
                                    <div style={{ background: '#fff', padding: '10px 14px', borderRadius: '0 8px 8px 8px', fontSize: '0.85rem', lineHeight: '1.4' }}>Te avisamos cuando falten 2 turnos (~8 min)</div>
                                </div>
                            )}
                            {state === 'chat_alert' && (
                                <div style={{ alignSelf: 'flex-start', maxWidth: '85%', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
                                    <div style={{ background: '#fff', padding: '10px 14px', borderRadius: '0 8px 8px 8px', fontSize: '0.85rem', lineHeight: '1.4' }}>⏰ <strong>¡Tu turno está por salir!</strong></div>
                                    <div style={{ background: '#fff', padding: '10px 14px', borderRadius: '0 8px 8px 8px', fontSize: '0.85rem', lineHeight: '1.4' }}>Dirígete a Caja 3 ahora 👉</div>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

// --- UPDATED COMPONENTS FOR REALISM ---

export const TabletMockup = () => (
    <div style={{
        width: '420px',
        height: '300px',
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        border: '2px dashed #cbd5e1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
    }}>
        {/* Image Placeholder */}
        <div style={{ textAlign: 'center', color: '#64748b', maxWidth: '360px' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>📱</div>
            <div style={{ fontWeight: '700', marginBottom: '0.75rem', fontSize: '1.1rem', color: '#334155' }}>
                Tableta de Control para Empleados
            </div>
            <div style={{ fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.25rem', color: '#64748b' }}>
                Mockup de iPad o Samsung Tab en ángulo 3/4, sobre mostrador profesional, con pantalla encendida mostrando la interface de control.
            </div>
            <div style={{
                background: '#fff',
                borderRadius: '10px',
                padding: '1.25rem',
                fontSize: '0.8rem',
                lineHeight: '1.5',
                textAlign: 'left',
                border: '1px solid #e2e8f0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
                <div style={{ fontWeight: '700', marginBottom: '0.75rem', color: '#0f172a', fontSize: '0.85rem' }}>La pantalla debe mostrar:</div>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>Título "Control de Turnos" o "Punto de Atención"</li>
                    <li>Número de turno actual grande (ej: "A048")</li>
                    <li>Botón verde destacado "Llamar Siguiente"</li>
                    <li>Lista de 2-3 turnos en espera con tiempos</li>
                    <li>Indicador de estado "Activo" o "En línea"</li>
                    <li>Diseño limpio, moderno, estilo SaaS</li>
                </ul>
            </div>
        </div>
    </div>
);

export const RichScreenMockup = ({ number = "A047" }) => (
    <div style={{
        width: '420px',
        height: '240px',
        background: '#0f172a',
        borderRadius: '8px',
        boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        border: '1px solid #334155' // Subtle border instead of thick bezel
    }}>
        {/* "Browsesr/System" Bar to show Hardware Agnosticism */}
        <div style={{ height: '24px', background: '#1e293b', display: 'flex', alignItems: 'center', padding: '0 10px', gap: '6px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }}></div>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
            <div style={{ marginLeft: 'auto', fontSize: '0.6rem', color: '#64748b' }}>nexus-display.app</div>
        </div>

        <div style={{ flex: 1, display: 'flex' }}>
            {/* Main Area */}
            <div style={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid #1e293b', background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)' }}>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8', letterSpacing: '2px', textTransform: 'uppercase' }}>TURNO ACTUAL</span>
                <span style={{ fontSize: '4.5rem', fontWeight: '800', color: '#fff', textShadow: '0 0 30px rgba(37, 211, 102, 0.3)' }}>{number}</span>
                <div style={{ marginTop: '0.5rem', padding: '4px 12px', background: 'rgba(37, 211, 102, 0.1)', color: '#25D366', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 'bold', border: '1px solid rgba(37, 211, 102, 0.2)' }}>
                    PASAR A CAJA 3
                </div>
            </div>

            {/* Sidebar List */}
            <div style={{ flex: 1, background: '#0f172a', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ fontSize: '0.6rem', color: '#64748b', fontWeight: 'bold' }}>SIGUIE</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '8px' }}>
                    <span style={{ color: '#e2e8f0', fontWeight: '600' }}>A048</span>
                    <span style={{ color: '#64748b', fontSize: '0.7rem' }}>~5 min</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '8px' }}>
                    <span style={{ color: '#e2e8f0', fontWeight: '600' }}>A049</span>
                    <span style={{ color: '#64748b', fontSize: '0.7rem' }}>~12 min</span>
                </div>
            </div>
        </div>
    </div>
);

// Printer/Ticket Dispenser mockup
export const TerminalMockup = ({ nextTicket = "A053" }) => (
    <div style={{
        width: '420px',
        height: '300px',
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        border: '2px dashed #cbd5e1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
    }}>
        {/* Image Placeholder */}
        <div style={{ textAlign: 'center', color: '#64748b', maxWidth: '360px' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🖨️</div>
            <div style={{ fontWeight: '700', marginBottom: '0.75rem', fontSize: '1.1rem', color: '#334155' }}>
                Impresora Térmica de Tickets
            </div>
            <div style={{ fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.25rem', color: '#64748b' }}>
                Impresora térmica de tickets (estilo Epson TM-T20) montada en pared o mostrador, con ticket saliendo del dispensador.
            </div>
            <div style={{
                background: '#fff',
                borderRadius: '10px',
                padding: '1.25rem',
                fontSize: '0.8rem',
                lineHeight: '1.5',
                textAlign: 'left',
                border: '1px solid #e2e8f0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
                <div style={{ fontWeight: '700', marginBottom: '0.75rem', color: '#0f172a', fontSize: '0.85rem' }}>La imagen debe incluir:</div>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <li>Impresora térmica blanca o negra (hardware real)</li>
                    <li>Ticket físico saliendo del dispensador</li>
                    <li>Número visible en el ticket: "{nextTicket}"</li>
                    <li>LED verde indicando "listo para imprimir"</li>
                    <li>Panel pequeño mostrando "Tome su ticket"</li>
                    <li>Vista frontal clara, fondo de mostrador</li>
                </ul>
            </div>
        </div>
    </div>
);
