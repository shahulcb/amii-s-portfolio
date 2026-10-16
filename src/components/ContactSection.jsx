import React, { useState } from 'react';
import { Send, Copy, Check, Mail, MapPin, Calendar, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ designer }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Design & Prototyping',
    timeline: 'Within 1-2 months',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(designer.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out your name, email, and message!');
      return;
    }

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      {/* Sticky Note Box */}
      <div className="sticky-note-contact">
        <div className="sticky-tape-top"></div>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '6px', 
            fontFamily: 'var(--font-mono)', 
            fontSize: '11px', 
            fontWeight: '700',
            background: '#ffffff',
            padding: '3px 10px',
            borderRadius: '9999px',
            border: '1.5px solid #111418',
            marginBottom: '10px'
          }}>
            <span className="dot-blue"></span>
            <span>{designer.availability}</span>
          </div>

          <h3 style={{ 
            fontFamily: 'var(--font-sans)', 
            fontSize: '28px', 
            fontWeight: '800', 
            color: '#111418',
            letterSpacing: '-0.02em' 
          }}>
            Let's build something genuinely good.
          </h3>
          <p style={{ fontFamily: 'var(--font-hand)', fontSize: '18px', color: '#4b5563', marginTop: '4px' }}>
            Have a project in mind, an edge case to solve, or just want to chat design? Say hello!
          </p>
        </div>

        {submitted ? (
          <div style={{ 
            background: '#ffffff', 
            border: '1.5px solid #111418', 
            borderRadius: '8px', 
            padding: '36px', 
            textAlign: 'center',
            boxShadow: '3px 3px 0px #111418'
          }}>
            <div style={{ fontSize: '42px', marginBottom: '12px' }}>🎉</div>
            <h4 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>
              Message sent! Thanks for reaching out.
            </h4>
            <p style={{ color: '#4b5563', fontSize: '14px', marginBottom: '18px' }}>
              I'll get back to you within 24 hours at <strong>{formData.email}</strong>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', projectType: 'Design & Prototyping', timeline: 'Within 1-2 months', message: '' });
              }}
              style={{ 
                background: '#111418', 
                color: '#ffffff', 
                border: 'none', 
                borderRadius: '4px', 
                padding: '8px 18px', 
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                cursor: 'pointer'
              }}
            >
              SEND ANOTHER NOTE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
              <div className="contact-form-group">
                <label className="contact-label">Your Name</label>
                <input
                  type="text"
                  placeholder="Alex Rivera"
                  className="contact-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label className="contact-label">Your Email</label>
                <input
                  type="email"
                  placeholder="alex@company.com"
                  className="contact-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
              <div className="contact-form-group">
                <label className="contact-label">Project Scope</label>
                <select
                  className="contact-input"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                >
                  <option>End-to-End Business Analysis & BRD</option>
                  <option>Process Optimization & BPMN Mapping</option>
                  <option>SQL & BI Dashboards (Power BI / Tableau)</option>
                  <option>Agile Scrum Product Owner / BA</option>
                  <option>Financial Feasibility & ROI Modeling</option>
                  <option>Full-Time Business Analyst Role</option>
                </select>
              </div>

              <div className="contact-form-group">
                <label className="contact-label">Timeline</label>
                <select
                  className="contact-input"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                >
                  <option>ASAP (Next 2-3 weeks)</option>
                  <option>Within 1-2 months</option>
                  <option>Q1 2027</option>
                  <option>Flexible / Exploring</option>
                </select>
              </div>
            </div>

            <div className="contact-form-group">
              <label className="contact-label">What are you working on?</label>
              <textarea
                rows="4"
                placeholder="Tell me a bit about your product, team, and goals..."
                className="contact-textarea"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>

            <button type="submit" id="submit-contact-btn" className="contact-submit-btn">
              <Send size={14} />
              <span>SEND MESSAGE</span>
            </button>
          </form>
        )}

        {/* Quick Contact & Direct Details */}
        <div style={{ 
          marginTop: '28px', 
          paddingTop: '20px', 
          borderTop: '1px dashed rgba(0,0,0,0.2)',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Mail size={15} color="#111418" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: '700' }}>
              {designer.email}
            </span>
            <button
              type="button"
              onClick={handleCopyEmail}
              title="Copy email to clipboard"
              style={{ 
                background: '#ffffff', 
                border: '1px solid #111418', 
                borderRadius: '3px', 
                padding: '3px 8px', 
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              {copied ? <Check size={11} color="#16a34a" /> : <Copy size={11} />}
              <span>{copied ? 'COPIED!' : 'COPY'}</span>
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#4b5563' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={13} /> {designer.location}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={13} /> CT (UTC-5)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
