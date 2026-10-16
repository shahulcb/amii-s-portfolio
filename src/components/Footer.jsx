import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ designer }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-notebook">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontWeight: '700', color: '#111418' }}>© 2026 {designer.name}</span>
        <span>•</span>
        <span>{designer.location}</span>
      </div>

      <div style={{ fontStyle: 'italic', fontFamily: 'var(--font-hand)', fontSize: '16px', color: '#4b5563' }}>
        "sweat the details, make complicated things feel simple."
      </div>

      <div>
        <button
          onClick={scrollToTop}
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '4px',
            background: '#ffffff',
            border: '1.5px solid #111418',
            borderRadius: '9999px',
            padding: '4px 12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '1px 1px 0px #111418'
          }}
        >
          <ArrowUp size={11} />
          <span>TOP</span>
        </button>
      </div>
    </footer>
  );
}
