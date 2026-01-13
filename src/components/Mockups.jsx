import React from 'react';

// CSS-based QR Code Pattern generator
const QRPattern = () => {
    const cells = [];
    for (let i = 0; i < 64; i++) {
        cells.push(
            <div key={i} style={{
                width: '10px',
                height: '10px',
                background: Math.random() > 0.5 ? '#000' : 'transparent'
            }}></div>
        );
    }
    return (
        <div style={{
            width: '100px',
            height: '100px',
            background: '#fff',
            margin: '1rem auto',
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            padding: '10px',
            border: '4px solid #fff'
        }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '25px', height: '25px', border: '5px solid #000' }}><div style={{ width: '9px', height: '9px', background: '#000', margin: '3px' }}></div></div>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '25px', height: '25px', border: '5px solid #000' }}><div style={{ width: '9px', height: '9px', background: '#000', margin: '3px' }}></div></div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '25px', height: '25px', border: '5px solid #000' }}><div style={{ width: '9px', height: '9px', background: '#000', margin: '3px' }}></div></div>
            <div style={{ width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap', overflow: 'hidden', opacity: 0.8 }}>{cells}</div>
        </div>
    );
};

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
            <QRPattern />
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
                    <div style={{ background: '#000', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <div style={{ width: '150px', height: '150px', border: '2px solid rgba(255,255,255,0.5)', borderRadius: '12px' }}></div>
                        <div style={{ position: 'absolute', bottom: '40px', color: '#fff', fontSize: '0.875rem' }}>Escaneando QR...</div>
                    </div>
                )}
                {(state.startsWith('chat')) && (
                    <>
                        <div style={{ background: '#075E54', padding: '35px 15px 15px 15px', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '32px', height: '32px', background: '#fff', borderRadius: '50%' }}></div>
                            <div><div style={{ fontSize: '0.9rem', fontWeight: '600' }}>Nexus Bot</div></div>
                        </div>
                        <div style={{ flex: 1, background: '#E5DDD5', padding: '15px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {state === 'chat_welcome' && (
                                <>
                                    <div style={{ alignSelf: 'flex-end', background: '#DCF8C6', padding: '8px 12px', borderRadius: '8px 0 8px 8px', fontSize: '0.85rem' }}>Quiero suscribirme al turno <strong>A047</strong></div>
                                    <div style={{ alignSelf: 'flex-start', maxWidth: '85%' }}>
                                        <div style={{ background: '#fff', padding: '8px 12px', borderRadius: '0 8px 8px 8px', fontSize: '0.85rem' }}>👋 ¡Bienvenido! Te avisaremos.</div>
                                        <div style={{ marginTop: '4px', background: '#fff', borderRadius: '8px', padding: '10px', textAlign: 'center', color: '#0ea5e9', fontWeight: '500', fontSize: '0.9rem', boxShadow: '0 1px 1px rgba(0,0,0,0.1)' }}>Ver estatus actual</div>
                                    </div>
                                </>
                            )}
                            {state === 'chat_alert' && (
                                <div style={{ alignSelf: 'flex-start', background: '#fff', padding: '8px 12px', borderRadius: '0 8px 8px 8px', fontSize: '0.85rem', marginTop: 'auto' }}>🔔 <strong>Es tu turno: A047</strong></div>
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
        width: '400px',
        height: '280px',
        background: '#09090b', // Darker bezel
        borderRadius: '24px',
        border: '12px solid #09090b',
        boxShadow:
            '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 0 2px rgba(255,255,255,0.1)', // Glass reflection inset
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
    }}>
        {/* Screen Glare Reflection */}
        <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.03) 50%, transparent 55%)',
            pointerEvents: 'none',
            zIndex: 20
        }}></div>

        {/* Sidebar Nav (SaaS Style) */}
        <div style={{ width: '70px', background: '#1e293b', borderRight: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 0', gap: '24px', zIndex: 1 }}>
            <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}></div>
            <div style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px' }}></div>
            <div style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px' }}></div>
            <div style={{ marginTop: 'auto', width: '24px', height: '24px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)' }}></div>
        </div>

        {/* App Content */}
        <div style={{ flex: 1, background: '#f1f5f9', display: 'flex', flexDirection: 'column', zIndex: 1 }}>
            {/* App Header */}
            <div style={{ height: '50px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', padding: '0 20px', justifyContent: 'space-between', background: '#fff' }}>
                <span style={{ fontWeight: '600', color: '#0f172a', fontSize: '0.9rem' }}>Control Desk</span>
                <span style={{ fontSize: '0.7rem', color: '#22c55e', background: '#dcfce7', padding: '2px 8px', borderRadius: '12px' }}>● Online</span>
            </div>

            <div style={{ padding: '20px', display: 'flex', gap: '20px', height: '100%' }}>
                {/* Main Action Card */}
                <div style={{ flex: 1, background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '600' }}>TURNO ACTUAL</div>
                    <div style={{ fontSize: '2.25rem', fontWeight: '800', color: '#0f172a' }}>A048</div>
                    <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                        <div style={{ flex: 1, height: '36px', background: '#0f172a', borderRadius: '6px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: '500', boxShadow: '0 4px 6px rgba(15, 23, 42, 0.2)' }}>Llamar</div>
                        <div style={{ width: '36px', height: '36px', border: '1px solid #e2e8f0', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>✓</div>
                    </div>
                </div>

                {/* Secondary List */}
                <div style={{ width: '100px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ height: '32px', background: '#3b82f6', borderRadius: '6px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: '600', boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)' }}>+ Ticket</div>
                    <div style={{ flex: 1, background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '10px' }}>
                        <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginBottom: '8px' }}>EN ESPERA</div>
                        <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#334155', borderBottom: '1px solid #f1f5f9', paddingBottom: '6px', marginBottom: '6px' }}>A049 <span style={{ fontSize: '0.6rem', color: '#94a3b8' }}>2m</span></div>
                        <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#334155' }}>A050 <span style={{ fontSize: '0.6rem', color: '#94a3b8' }}>5m</span></div>
                    </div>
                </div>
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
