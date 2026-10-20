import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, MapPin, Briefcase, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ designer }) {
  const [copied, setCopied] = useState(false);

  const emailSubject = encodeURIComponent("Data Analyst / ML Engineer Opportunity — Connecting via Portfolio");
  const emailBody = encodeURIComponent("Hi Ameena,\n\nI reviewed your portfolio and projects and would love to connect regarding an opportunity on our team.\n\nBest regards,\n");
  
  const mailtoLink = `mailto:${designer.email}?subject=${emailSubject}&body=${emailBody}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(designer.email)}&su=${emailSubject}&body=${emailBody}`;
  const outlookLink = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(designer.email)}&subject=${emailSubject}&body=${emailBody}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(designer.email);
    setCopied(true);
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // safe fallback
    }
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      {/* Sticky Note Box */}
      <div className="sticky-note-contact" style={{ textAlign: 'center', padding: '36px 24px' }}>
        <div className="sticky-tape-top"></div>

        {/* Top Status Pill */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '6px', 
            fontFamily: 'var(--font-mono)', 
            fontSize: '11px', 
            fontWeight: '700',
            background: '#ffffff',
            padding: '4px 14px',
            borderRadius: '9999px',
            border: '1.5px solid #111418',
            boxShadow: '1px 1px 0px #111418'
          }}>
            <span className="dot-blue"></span>
            <span>{designer.availability}</span>
          </div>
        </div>

        <h3 style={{ 
          fontFamily: 'var(--font-sans)', 
          fontSize: 'clamp(24px, 4vw, 34px)', 
          fontWeight: '800', 
          color: '#111418',
          letterSpacing: '-0.02em',
          marginBottom: '8px'
        }}>
          Get in touch directly.
        </h3>

        <p style={{ 
          fontFamily: 'var(--font-hand)', 
          fontSize: '20px', 
          color: '#4b5563', 
          maxWidth: '560px', 
          margin: '0 auto 28px',
          lineHeight: '1.4'
        }}>
          Recruiters and hiring managers: feel free to reach out directly via email to discuss opportunities or request my full resume!
        </p>

        {/* Prominent Email Card */}
        <div style={{
          background: '#ffffff',
          border: '2px solid #111418',
          borderRadius: '8px',
          padding: '24px 20px',
          maxWidth: '560px',
          margin: '0 auto 24px',
          boxShadow: '4px 5px 0px #111418',
          position: 'relative'
        }}>
          <div style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '11px', 
            color: '#6b7280', 
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '6px'
          }}>
            PRIMARY DIRECT EMAIL
          </div>

          <div style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: 'clamp(18px, 3.5vw, 24px)', 
            fontWeight: '800', 
            color: '#111418',
            marginBottom: '18px',
            wordBreak: 'break-all'
          }}>
            {designer.email}
          </div>

          {/* Primary Action Buttons */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '10px', 
            justifyContent: 'center' 
          }}>
            {/* Opens default mail service */}
            <a
              id="open-mail-client-btn"
              href={mailtoLink}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#111418',
                color: '#ffffff',
                border: '1.5px solid #111418',
                borderRadius: '6px',
                padding: '12px 24px',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                cursor: 'pointer',
                boxShadow: '2px 2px 0px #111418',
                transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#2563eb';
                e.currentTarget.style.transform = 'translate(-1px, -1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#111418';
                e.currentTarget.style.transform = 'translate(0, 0)';
              }}
            >
              <Mail size={16} />
              <span>SEND EMAIL (OPEN MAIL APP)</span>
            </a>

            {/* Copy Email Button */}
            <button
              id="copy-email-btn"
              type="button"
              onClick={handleCopyEmail}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#ffffff',
                color: '#111418',
                border: '1.5px solid #111418',
                borderRadius: '6px',
                padding: '12px 20px',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '2px 2px 0px #111418',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#fef08a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
              }}
            >
              {copied ? <Check size={15} color="#16a34a" /> : <Copy size={15} />}
              <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY EMAIL'}</span>
            </button>
          </div>

          {/* Webmail Shortcuts */}
          <div style={{ 
            marginTop: '16px', 
            paddingTop: '14px', 
            borderTop: '1px dashed #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px'
          }}>
            <span style={{ color: '#6b7280' }}>Webmail:</span>
            <a 
              href={gmailLink} 
              target="_blank" 
              rel="noreferrer"
              style={{ color: '#dc2626', textDecoration: 'none', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              <span>Compose in Gmail</span>
              <ExternalLink size={11} />
            </a>
            <span style={{ color: '#cbd5e1' }}>•</span>
            <a 
              href={outlookLink} 
              target="_blank" 
              rel="noreferrer"
              style={{ color: '#0284c7', textDecoration: 'none', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              <span>Compose in Outlook</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* Quick Candidate Badges for Recruiters */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '20px', 
          flexWrap: 'wrap',
          fontFamily: 'var(--font-mono)', 
          fontSize: '11px', 
          color: '#374151',
          paddingTop: '8px'
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <Briefcase size={14} color="#111418" /> Full-Time Roles
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <MapPin size={14} color="#111418" /> {designer.location}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <Clock size={14} color="#111418" /> &lt; 24h Response
          </span>
          <a
            href={designer.socials.github}
            target="_blank"
            rel="noreferrer"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '4px',
              color: '#111418',
              fontWeight: '700',
              textDecoration: 'none'
            }}
          >
            <span>GitHub Profile</span>
            <ExternalLink size={12} />
          </a>
          <a
            href={designer.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '4px',
              color: '#2563eb',
              fontWeight: '700',
              textDecoration: 'none'
            }}
          >
            <span>LinkedIn</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
