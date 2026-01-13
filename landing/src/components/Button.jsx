import React from 'react';

const Button = ({ children, variant = 'primary', size = 'medium', className = '', ...props }) => {
    const baseStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        borderRadius: 'var(--radius-sm)',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        border: 'none',
        fontFamily: 'inherit',
    };

    const variants = {
        primary: {
            backgroundColor: 'var(--primary-color)',
            color: '#fff',
        },
        accent: {
            backgroundColor: 'var(--accent-color)',
            color: '#fff',
        },
        outline: {
            backgroundColor: 'transparent',
            border: '2px solid var(--primary-color)',
            color: 'var(--primary-color)',
        },
        ghost: {
            backgroundColor: 'transparent',
            color: 'var(--text-main)',
        }
    };

    const sizes = {
        small: {
            padding: '0.5rem 1rem',
            fontSize: '0.875rem',
        },
        medium: {
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
        },
        large: {
            padding: '1rem 2rem',
            fontSize: '1.125rem',
        }
    };

    const styles = {
        ...baseStyle,
        ...variants[variant],
        ...sizes[size],
    };

    return (
        <button style={styles} className={className} {...props}>
            {children}
        </button>
    );
};

export default Button;
