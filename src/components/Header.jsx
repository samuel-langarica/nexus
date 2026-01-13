import React, { useEffect, useState } from 'react';
import Button from './Button';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '32px', height: '32px', background: 'var(--primary-color)', borderRadius: '6px' }}></div>
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary-color)', letterSpacing: '-0.05em' }}>Nexus</span>
                </div>

                <nav className="nav-links">
                    <a href="#como-funciona">Cómo Funciona</a>
                    <a href="#problema">Beneficios</a>
                    <a href="#solucion">Características</a>
                </nav>

                <div>
                    <Button variant="accent" size="small">Empezar Ahora</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
