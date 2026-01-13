import React from 'react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer style={{ background: '#0f172a', color: '#94a3b8', padding: '4rem 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>

                    <div>
                        <div style={{ marginBottom: '1rem' }}>
                            <Logo size="small" variant="white" />
                        </div>
                        <p style={{ lineHeight: '1.6' }}>
                            Sistema de gestión de turnos inteligente para negocios que valoran el tiempo de sus clientes.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Producto</h4>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#">Características</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#">Integraciones</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#">Precios</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#">Demo</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Compañía</h4>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#">Sobre Nosotros</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#">Blog</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Legal</h4>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#">Privacidad</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="#">Términos</a></li>
                        </ul>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid #1e293b', paddingTop: '2rem', textAlign: 'center', fontSize: '0.875rem' }}>
                    &copy; {new Date().getFullYear()} TurnoLibre. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
