import React from 'react';

/**
 * Logo component for TurnoLibre
 * @param {string} size - Size variant: 'small' (24px), 'medium' (32px, default), 'large' (48px)
 * @param {boolean} iconOnly - Show only the icon without text
 * @param {string} variant - Color variant: 'default' (dark), 'white' (for dark backgrounds)
 */
const Logo = ({ size = 'medium', iconOnly = false, variant = 'default' }) => {
    const sizes = {
        small: { icon: 24, fontSize: '1.125rem' },
        medium: { icon: 32, fontSize: '1.5rem' },
        large: { icon: 48, fontSize: '2.25rem' }
    };

    const config = sizes[size];
    const textColor = variant === 'white' ? '#fff' : 'var(--primary-color)';
    const accentColor = variant === 'white' ? '#dcfce7' : 'var(--accent-color)';

    // Sin fondo - el ticket es el contenedor visual
    const iconStyle = {
        width: `${config.icon}px`,
        height: `${config.icon}px`,
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flexShrink: 0
    };

    const textStyle = {
        fontSize: config.fontSize,
        fontWeight: '800',
        color: textColor,
        letterSpacing: '-0.05em',
        whiteSpace: 'nowrap'
    };

    // Ticket realista con muescas semicirculares características
    const TicketLogo = () => {
        const width = config.icon * 1.4;
        const height = config.icon * 0.9;
        const notchRadius = config.icon * 0.12; // Radio de la muesca
        const notchY = height / 2; // Posición vertical de la muesca (centro)

        return (
            <svg
                width={width}
                height={height}
                viewBox={`0 0 ${width} ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Ticket con forma realista - path con muescas semicirculares */}
                <path
                    d={`
                        M ${notchRadius * 2} 2
                        L ${width - notchRadius * 2} 2
                        Q ${width - notchRadius} 2 ${width - notchRadius} ${2 + notchRadius}
                        L ${width - notchRadius} ${notchY - notchRadius * 1.5}
                        A ${notchRadius} ${notchRadius} 0 0 1 ${width - notchRadius} ${notchY + notchRadius * 1.5}
                        L ${width - notchRadius} ${height - 2 - notchRadius}
                        Q ${width - notchRadius} ${height - 2} ${width - notchRadius * 2} ${height - 2}
                        L ${notchRadius * 2} ${height - 2}
                        Q ${notchRadius} ${height - 2} ${notchRadius} ${height - 2 - notchRadius}
                        L ${notchRadius} ${notchY + notchRadius * 1.5}
                        A ${notchRadius} ${notchRadius} 0 0 1 ${notchRadius} ${notchY - notchRadius * 1.5}
                        L ${notchRadius} ${2 + notchRadius}
                        Q ${notchRadius} 2 ${notchRadius * 2} 2
                        Z
                    `}
                    stroke={accentColor}
                    strokeWidth="2"
                    fill="none"
                />

                {/* Palomita (check mark) */}
                <path
                    d={`
                        M ${width * 0.25} ${height * 0.5}
                        L ${width * 0.42} ${height * 0.68}
                        L ${width * 0.75} ${height * 0.32}
                    `}
                    stroke={accentColor}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer'
        }}>
            {/* Icon */}
            <div style={iconStyle}>
                <TicketLogo />
            </div>

            {/* Text - Only show if not iconOnly */}
            {!iconOnly && (
                <span style={textStyle}>
                    Turno<span style={{ color: accentColor }}>Libre</span>
                </span>
            )}
        </div>
    );
};

export default Logo;
