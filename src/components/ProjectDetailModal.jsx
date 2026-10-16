import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, ArrowRight, CheckCircle2, Circle, DollarSign, Users, Award, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProjectDetailModal({ project, projects, onClose, onSelectProject }) {
  // Tandem interactive prototype state
  const [billTotal, setBillTotal] = useState(project.prototypeData?.total || 248.60);
  const [participants, setParticipants] = useState(
    project.prototypeData?.participants || [
      { name: "Robin (You)", share: 41.43, paid: true },
      { name: "Sarah J.", share: 41.43, paid: false },
      { name: "Mike L.", share: 41.44, paid: true },
      { name: "Emily R.", share: 41.43, paid: false },
      { name: "Ben W.", share: 41.44, paid: false },
      { name: "David K.", share: 41.43, paid: false }
    ]
  );
  const [splitMessage, setSplitMessage] = useState('');

  // Forge interactive prototype state
  const [checklist, setChecklist] = useState(
    project.prototypeData?.checklist || [
      { id: 1, title: "Setup Dev Environment & SSH Keys", status: "completed" },
      { id: 2, title: "Install Node.js 22 & Docker Desktop", status: "completed" },
      { id: 3, title: "Clone core monorepo repository", status: "completed" },
      { id: 4, title: "Configure IDE extensions & Linting rules", status: "active" },
      { id: 5, title: "Run local development server & test suite", status: "pending" },
      { id: 6, title: "Submit first Good First Issue pull request", status: "pending" }
    ]
  );

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // Toggle participant paid status in Tandem
  const togglePaid = (index) => {
    const updated = [...participants];
    updated[index].paid = !updated[index].paid;
    setParticipants(updated);
  };

  // Trigger Tandem payment request
  const handleRequestPayment = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }
    setSplitMessage('✨ Payment requests sent to 5 friends via Apple Pay & Venmo!');
    setTimeout(() => setSplitMessage(''), 4500);
  };

  // Toggle checklist item in Forge
  const toggleChecklistItem = (id) => {
    const updated = checklist.map(item => {
      if (item.id === id) {
        return {
          ...item,
          status: item.status === 'completed' ? 'pending' : 'completed'
        };
      }
      return item;
    });
    setChecklist(updated);
  };

  const completedCount = checklist.filter(c => c.status === 'completed').length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  // Next / Prev Project logic
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="project-detail-sheet" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Sticky Header Bar */}
        <div className="modal-header-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '11px', 
              fontWeight: '700',
              padding: '2px 8px',
              borderRadius: '3px',
              background: '#111418',
              color: '#ffffff'
            }}>
              CASE STUDY
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#6b7280' }}>
              / {project.title}
            </span>
          </div>

          <button 
            id="close-modal-btn"
            className="modal-close-btn"
            onClick={onClose}
          >
            <X size={14} />
            <span>ESC / CLOSE</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body-content">
          {/* Hero Banner */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              fontFamily: 'var(--font-mono)', 
              fontSize: '11px', 
              color: '#4b5563',
              marginBottom: '8px' 
            }}>
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.date}</span>
            </div>

            <h2 style={{ 
              fontFamily: 'var(--font-sans)', 
              fontSize: '36px', 
              fontWeight: '800', 
              letterSpacing: '-0.02em',
              marginBottom: '10px',
              color: '#111418'
            }}>
              {project.title}
            </h2>

            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.5', 
              color: '#4b5563',
              maxWidth: '680px'
            }}>
              {project.subtitle}
            </p>
          </div>

          {/* Featured Image with Scotch Tape */}
          <div style={{ position: 'relative', margin: '20px 0 32px' }}>
            <div className="mockup-tape-corner tape-tl"></div>
            <div className="mockup-tape-corner tape-tr"></div>
            <img 
              src={project.image} 
              alt={project.title} 
              style={{ 
                width: '100%', 
                borderRadius: '8px', 
                border: '1.5px solid #111418',
                boxShadow: '4px 6px 0px #111418',
                display: 'block'
              }} 
            />
          </div>

          {/* Impact Stats Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '14px',
            marginBottom: '32px' 
          }}>
            {project.stats.map((stat, idx) => (
              <div 
                key={idx}
                style={{ 
                  background: '#f8fafc', 
                  border: '1.5px solid #111418', 
                  borderRadius: '6px', 
                  padding: '16px',
                  boxShadow: '2px 2px 0px #111418'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', color: '#6b7280' }}>
                  {stat.label}
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '24px', fontWeight: '800', color: '#111418', marginTop: '4px' }}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          {/* Overview Section */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: '#111418' }}>
              Project Overview
            </h4>
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#374151' }}>
              {project.overview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '20px',
            marginBottom: '32px' 
          }}>
            <div style={{ 
              background: '#fef2f2', 
              border: '1.5px solid #ef4444', 
              borderRadius: '6px', 
              padding: '20px' 
            }}>
              <h5 style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', color: '#dc2626', fontWeight: '700', marginBottom: '6px' }}>
                🚨 The Problem
              </h5>
              <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#7f1d1d' }}>
                {project.problem}
              </p>
            </div>

            <div style={{ 
              background: '#f0fdf4', 
              border: '1.5px solid #16a34a', 
              borderRadius: '6px', 
              padding: '20px' 
            }}>
              <h5 style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', color: '#15803d', fontWeight: '700', marginBottom: '6px' }}>
                💡 The Solution
              </h5>
              <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#14532d' }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* INTERACTIVE PROTOTYPE SIMULATOR */}
          {project.id === 'tandem' && (
            <div className="prototype-sandbox">
              <div className="prototype-title">
                ⚡ Interactive Prototype: Live Group Split Simulator
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#9ca3af' }}>BILL NAME</div>
                  <div style={{ fontSize: '16px', fontWeight: '700' }}>Dinner at La Table</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '12px', color: '#9ca3af' }}>Total Amount:</span>
                  <div style={{ display: 'inline-flex', alignItems: 'center', background: '#1e2229', border: '1px solid #374151', borderRadius: '4px', padding: '4px 10px' }}>
                    <span style={{ color: '#10b981', fontWeight: '700', marginRight: '4px' }}>$</span>
                    <input 
                      type="number"
                      value={billTotal}
                      onChange={(e) => setBillTotal(Number(e.target.value) || 0)}
                      style={{ 
                        background: 'transparent', 
                        border: 'none', 
                        color: '#ffffff', 
                        fontWeight: '700', 
                        width: '80px',
                        outline: 'none',
                        fontFamily: 'var(--font-mono)'
                      }} 
                    />
                  </div>
                </div>
              </div>

              {/* Participants Split List */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginBottom: '18px' }}>
                {participants.map((person, idx) => {
                  const share = (billTotal / participants.length).toFixed(2);
                  return (
                    <div 
                      key={idx}
                      onClick={() => togglePaid(idx)}
                      style={{ 
                        background: person.paid ? 'rgba(16, 185, 129, 0.15)' : '#181b20', 
                        border: person.paid ? '1px solid #10b981' : '1px solid #2b303c',
                        borderRadius: '6px',
                        padding: '10px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {person.paid ? (
                          <CheckCircle2 size={16} color="#10b981" />
                        ) : (
                          <Circle size={16} color="#6b7280" />
                        )}
                        <span style={{ fontSize: '13px', fontWeight: '600' }}>{person.name}</span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: person.paid ? '#34d399' : '#cbd5e1' }}>
                        ${share}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Action Button & Confirmation */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <button
                  id="tandem-simulate-btn"
                  onClick={handleRequestPayment}
                  style={{ 
                    background: '#10b981', 
                    color: '#064e3b', 
                    border: 'none', 
                    borderRadius: '4px', 
                    padding: '8px 18px', 
                    fontWeight: '700',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <DollarSign size={14} />
                  <span>REQUEST PAYMENT (${(billTotal / participants.length).toFixed(2)}/person)</span>
                </button>

                {splitMessage && (
                  <span style={{ color: '#34d399', fontSize: '12px', fontWeight: '600' }}>
                    {splitMessage}
                  </span>
                )}
              </div>
            </div>
          )}

          {project.id === 'forge' && (
            <div className="prototype-sandbox">
              <div className="prototype-title">
                ⚡ Interactive Prototype: Engineer Onboarding Checklist ({progressPercent}% Complete)
              </div>

              {/* Progress Bar */}
              <div style={{ height: '8px', background: '#27272a', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
                <div 
                  style={{ 
                    width: `${progressPercent}%`, 
                    height: '100%', 
                    background: '#facc15',
                    transition: 'width 0.3s ease' 
                  }}
                ></div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                {checklist.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleChecklistItem(item.id)}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      padding: '8px 12px',
                      borderRadius: '4px',
                      background: item.status === 'completed' ? 'rgba(250, 204, 21, 0.1)' : '#181b20',
                      border: item.status === 'completed' ? '1px solid #facc15' : '1px solid #27272a',
                      cursor: 'pointer'
                    }}
                  >
                    {item.status === 'completed' ? (
                      <CheckCircle2 size={16} color="#facc15" />
                    ) : (
                      <Circle size={16} color="#71717a" />
                    )}
                    <span style={{ 
                      fontSize: '13px', 
                      textDecoration: item.status === 'completed' ? 'line-through' : 'none',
                      color: item.status === 'completed' ? '#fef08a' : '#e4e4e7' 
                    }}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: '11px', color: '#a1a1aa' }}>
                💡 Click any task above to simulate completing an engineering milestone!
              </div>
            </div>
          )}

          {/* Deliverables List */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px', color: '#111418' }}>
              Key Deliverables & Artifacts
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
              {project.deliverables?.map((item, idx) => (
                <div 
                  key={idx}
                  style={{ 
                    padding: '10px 14px', 
                    borderRadius: '4px', 
                    border: '1px solid #e2e8f0', 
                    background: '#f8fafc',
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span style={{ color: '#2563eb' }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Bar at Bottom: Prev / Next Case Study */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            paddingTop: '20px', 
            borderTop: '1.5px solid #e2e8f0',
            flexWrap: 'wrap',
            gap: '12px' 
          }}>
            <button
              onClick={() => onSelectProject(prevProject)}
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px',
                background: 'transparent',
                border: '1.5px solid #111418',
                borderRadius: '4px',
                padding: '6px 14px',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              <ArrowLeft size={13} />
              <span>PREV: {prevProject.title}</span>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px',
                background: '#111418',
                color: '#ffffff',
                border: '1.5px solid #111418',
                borderRadius: '4px',
                padding: '6px 14px',
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              <span>NEXT: {nextProject.title}</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
