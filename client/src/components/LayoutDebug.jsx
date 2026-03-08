import { useEffect, useState } from 'react';

/**
 * LayoutDebug — Responsive breakpoint overlay for test sessions.
 * Enable by setting VITE_LAYOUT_DEBUG=true in .env
 *
 * Shows:
 *   - Current breakpoint label (Mobile / Small Tablet / Tablet / Desktop)
 *   - Live viewport dimensions (updates on resize)
 *   - Red outline on ALL elements to expose overflow (debug mode only)
 */

const ENABLED = import.meta.env.VITE_LAYOUT_DEBUG === 'true';

const getBreakpoint = (w) => {
    if (w <= 480) return { label: 'MOBILE', color: '#ff4444' };
    if (w <= 768) return { label: 'SM TABLET', color: '#ff9900' };
    if (w <= 1024) return { label: 'TABLET', color: '#ffdd00' };
    return { label: 'DESKTOP', color: '#44ff88' };
};

const LayoutDebug = () => {
    const [vp, setVp] = useState({ w: window.innerWidth, h: window.innerHeight });

    useEffect(() => {
        if (!ENABLED) return;
        const handler = () => setVp({ w: window.innerWidth, h: window.innerHeight });
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, []);

    useEffect(() => {
        if (!ENABLED) return;
        const styleId = 'layout-debug-outlines';
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = '* { outline: 1px solid rgba(255,0,0,0.15) !important; }';
        document.head.appendChild(style);
        return () => document.getElementById(styleId)?.remove();
    }, []);

    if (!ENABLED) return null;

    const bp = getBreakpoint(vp.w);

    return (
        <div style={{
            position: 'fixed',
            bottom: '1rem',
            left: '1rem',
            background: 'rgba(0,0,0,0.85)',
            border: `2px solid ${bp.color}`,
            borderRadius: '6px',
            padding: '0.5rem 0.75rem',
            zIndex: 99999,
            fontFamily: 'monospace',
            fontSize: '12px',
            color: bp.color,
            lineHeight: 1.6,
            pointerEvents: 'none',
            userSelect: 'none',
        }}>
            <div style={{ fontWeight: 'bold', letterSpacing: '0.1em' }}>{bp.label}</div>
            <div style={{ color: '#aaa' }}>{vp.w} × {vp.h}</div>
        </div>
    );
};

export default LayoutDebug;
