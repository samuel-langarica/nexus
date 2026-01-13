import React, { useEffect, useState } from 'react';
import Button from './Button';
import Logo from './Logo';

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
                <Logo size="medium" />

                <nav className="nav-links">
                    <a href="#como-funciona">Cómo Funciona</a>
                    <a href="#pricing">Precios</a>
                    <a href="#instalacion">Instalación</a>
                </nav>

                <div>
                    <Button variant="accent" size="small">Empezar Ahora</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
