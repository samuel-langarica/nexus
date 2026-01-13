import React, { useState } from 'react';

const ImagePlaceholder = ({
    prompt,
    icon = '🖼️',
    fileName = 'image.png',
    height = '200px',
    description = 'Imagen placeholder'
}) => {
    const [copied, setCopied] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    const copyPrompt = () => {
        navigator.clipboard.writeText(prompt).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const togglePreview = () => {
        setShowPreview(!showPreview);
    };

    return (
        <div style={{
            width: '100%',
            height: height,
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px dashed var(--text-secondary)',
            position: 'relative',
            overflow: 'hidden',
            padding: '1.5rem'
        }}>
            <div style={{
                textAlign: 'center',
                color: '#64748b',
                fontSize: '0.875rem',
                maxWidth: '90%'
            }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.75rem', opacity: 0.5 }}>
                    {icon}
                </div>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                    {fileName}
                </div>
                <div style={{ fontSize: '0.75rem', opacity: 0.7, marginBottom: '1rem' }}>
                    {description}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {/* Copy Prompt Button */}
                    <button
                        onClick={copyPrompt}
                        style={{
                            background: copied ? 'var(--primary-color)' : '#fff',
                            color: copied ? '#fff' : 'var(--text-main)',
                            border: copied ? 'none' : '2px solid var(--text-secondary)',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                        onMouseEnter={(e) => {
                            if (!copied) {
                                e.currentTarget.style.background = 'var(--bg-secondary)';
                                e.currentTarget.style.borderColor = 'var(--primary-color)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!copied) {
                                e.currentTarget.style.background = '#fff';
                                e.currentTarget.style.borderColor = 'var(--text-secondary)';
                            }
                        }}
                    >
                        <span>{copied ? '✓' : '📋'}</span>
                        <span>{copied ? 'Copiado!' : 'Copiar Prompt'}</span>
                    </button>

                    {/* Preview Toggle Button */}
                    <button
                        onClick={togglePreview}
                        style={{
                            background: showPreview ? 'var(--primary-color)' : '#fff',
                            color: showPreview ? '#fff' : 'var(--text-main)',
                            border: showPreview ? 'none' : '2px solid var(--text-secondary)',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                        onMouseEnter={(e) => {
                            if (!showPreview) {
                                e.currentTarget.style.background = 'var(--bg-secondary)';
                                e.currentTarget.style.borderColor = 'var(--primary-color)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!showPreview) {
                                e.currentTarget.style.background = '#fff';
                                e.currentTarget.style.borderColor = 'var(--text-secondary)';
                            }
                        }}
                    >
                        <span>{showPreview ? '👁️' : '👁️'}</span>
                        <span>{showPreview ? 'Ocultar' : 'Ver Preview'}</span>
                    </button>
                </div>

                {/* Preview Text (toggled) */}
                {showPreview && (
                    <div style={{
                        marginTop: '1rem',
                        padding: '1rem',
                        background: 'rgba(15, 23, 42, 0.95)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.75rem',
                        lineHeight: '1.6',
                        textAlign: 'left',
                        maxHeight: '150px',
                        overflowY: 'auto',
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
                    }}>
                        <div style={{
                            fontSize: '0.65rem',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            opacity: 0.7,
                            marginBottom: '0.5rem',
                            letterSpacing: '0.5px'
                        }}>
                            Prompt para AI:
                        </div>
                        {prompt}
                    </div>
                )}
            </div>

        </div>
    );
};

export default ImagePlaceholder;
