import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, ArrowRight, CheckCircle2, Circle, TrendingUp, BarChart3, Calculator, ShieldCheck, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProjectDetailModal({ project, projects, onClose, onSelectProject }) {
  // FinFlow Ledger BA Simulator state (ROI & Reconciliation)
  const [txVolume, setTxVolume] = useState(25000);
  const [matchRate, setMatchRate] = useState(99.4);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [simMessage, setSimMessage] = useState('');

  // Forge Ops BA Simulator state (Agile Sprint Scope & Milestones)
  const [milestones, setMilestones] = useState(
    project.prototypeData?.milestones || [
      { id: 1, title: "Stakeholder Discovery & Problem Definition", points: 8, status: "completed" },
      { id: 2, title: "Historical Jira Delivery Data Extraction & SQL Querying", points: 13, status: "completed" },
      { id: 3, title: "AS-IS Process Flowchart & Value Stream Map", points: 8, status: "completed" },
      { id: 4, title: "Draft BRD & User Stories with Acceptance Criteria", points: 13, status: "active" },
      { id: 5, title: "UAT Test Scripts Execution & Defect Triage", points: 13, status: "pending" },
      { id: 6, title: "Post-Implementation ROI & Velocity Audit", points: 5, status: "pending" }
    ]
  );

  // Prism BI Simulator state (Churn Health Score)
  const [activityDrop, setActivityDrop] = useState(45);
  const [accountARR, setAccountARR] = useState(84000);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // FinFlow Reconciliation ROI calculation
  const manualTimePerTxMinutes = 3.5;
  const legacyHours = (txVolume * manualTimePerTxMinutes) / 60;
  const modernHours = ((txVolume * (1 - (matchRate / 100))) * manualTimePerTxMinutes) / 60;
  const hoursSaved = Math.max(0, Math.round(legacyHours - modernHours));
  const annualSavings = Math.round(hoursSaved * hourlyRate * 12);

  const handleRunReconSim = () => {
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch {}
    setSimMessage(`✨ Business Case Validated: Project saves ${hoursSaved} hrs/mo and $${annualSavings.toLocaleString()}/yr!`);
    setTimeout(() => setSimMessage(''), 5000);
  };

  // Toggle milestone in Forge Ops
  const toggleMilestone = (id) => {
    const updated = milestones.map(m => {
      if (m.id === id) {
        return {
          ...m,
          status: m.status === 'completed' ? 'pending' : 'completed'
        };
      }
      return m;
    });
    setMilestones(updated);
  };

  const completedPoints = milestones
    .filter(m => m.status === 'completed')
    .reduce((sum, m) => sum + (m.points || 10), 0);
  const totalPoints = milestones.reduce((sum, m) => sum + (m.points || 10), 0);
  const progressPercent = Math.round((completedPoints / totalPoints) * 100);

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
              BA CASE STUDY
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
              Business Analysis Scope & Overview
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
                🚨 Business Problem & Pain Points
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
                💡 BA Solution & Implementation
              </h5>
              <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#14532d' }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* INTERACTIVE BA SIMULATORS */}
          {project.id === 'tandem' && (
            <div className="prototype-sandbox">
              <div className="prototype-title">
                ⚡ Interactive BA Tool: Financial Reconciliation ROI & Labor Model
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ fontSize: '11px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>
                    MONTHLY TRANSACTIONS:
                  </label>
                  <input
                    type="number"
                    value={txVolume}
                    onChange={(e) => setTxVolume(Number(e.target.value) || 0)}
                    style={{
                      background: '#181b20',
                      border: '1px solid #374151',
                      color: '#ffffff',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      width: '100%'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '11px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>
                    AUTO-MATCH ACCURACY ({matchRate}%):
                  </label>
                  <input
                    type="range"
                    min="85"
                    max="99.9"
                    step="0.1"
                    value={matchRate}
                    onChange={(e) => setMatchRate(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#10b981', marginTop: '8px' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '11px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>
                    HOURLY OPS LABOR RATE:
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', background: '#181b20', border: '1px solid #374151', borderRadius: '4px', padding: '0 10px' }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>$</span>
                    <input
                      type="number"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(Number(e.target.value) || 0)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#ffffff',
                        padding: '8px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '13px',
                        width: '100%',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Dynamic ROI Metrics Display */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '18px' }}>
                <div style={{ background: '#181b20', border: '1px solid #2b303c', padding: '12px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '11px', color: '#9ca3af' }}>MONTHLY TIME SAVED</div>
                  <div style={{ fontSize: '20px', fontWeight: '800', color: '#34d399', marginTop: '2px' }}>
                    {hoursSaved} Hours / mo
                  </div>
                </div>

                <div style={{ background: '#181b20', border: '1px solid #2b303c', padding: '12px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '11px', color: '#9ca3af' }}>PROJECTED ANNUAL SAVINGS</div>
                  <div style={{ fontSize: '20px', fontWeight: '800', color: '#60a5fa', marginTop: '2px' }}>
                    ${annualSavings.toLocaleString()}
                  </div>
                </div>

                <div style={{ background: '#181b20', border: '1px solid #2b303c', padding: '12px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '11px', color: '#9ca3af' }}>PAYBACK PERIOD</div>
                  <div style={{ fontSize: '20px', fontWeight: '800', color: '#facc15', marginTop: '2px' }}>
                    ~2.2 Months
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <button
                  id="run-recon-sim-btn"
                  onClick={handleRunReconSim}
                  style={{ 
                    background: '#2563eb', 
                    color: '#ffffff', 
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
                  <Calculator size={14} />
                  <span>VALIDATE BUSINESS CASE</span>
                </button>

                {simMessage && (
                  <span style={{ color: '#34d399', fontSize: '12px', fontWeight: '600' }}>
                    {simMessage}
                  </span>
                )}
              </div>
            </div>
          )}

          {project.id === 'forge' && (
            <div className="prototype-sandbox">
              <div className="prototype-title">
                ⚡ Interactive BA Tool: Agile Deliverables & Value-Stream Milestone Progress ({progressPercent}%)
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
                {milestones.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleMilestone(item.id)}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      background: item.status === 'completed' ? 'rgba(250, 204, 21, 0.1)' : '#181b20',
                      border: item.status === 'completed' ? '1px solid #facc15' : '1px solid #27272a',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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

                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#9ca3af' }}>
                      {item.points} pts
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: '11px', color: '#a1a1aa' }}>
                💡 Click any milestone above to simulate sign-off on BA discovery, BRD approval, and UAT execution!
              </div>
            </div>
          )}

          {project.id === 'nebula' && (
            <div className="prototype-sandbox">
              <div className="prototype-title">
                ⚡ Interactive BA Tool: Churn Risk Health Algorithm Matrix
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ fontSize: '11px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>
                    ENTERPRISE ACCOUNT ARR:
                  </label>
                  <input
                    type="number"
                    value={accountARR}
                    onChange={(e) => setAccountARR(Number(e.target.value) || 0)}
                    style={{
                      background: '#181b20',
                      border: '1px solid #374151',
                      color: '#ffffff',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      width: '100%'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '11px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>
                    30-DAY ACTIVE USAGE DROP: {activityDrop}%
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="80"
                    value={activityDrop}
                    onChange={(e) => setActivityDrop(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#a78bfa', marginTop: '8px' }}
                  />
                </div>
              </div>

              <div style={{ 
                background: activityDrop > 40 ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                border: activityDrop > 40 ? '1px solid #ef4444' : '1px solid #10b981',
                padding: '14px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', color: activityDrop > 40 ? '#fca5a5' : '#86efac' }}>
                    CHURN RISK LEVEL: {activityDrop > 40 ? 'HIGH RISK (TRIGGER PLAYBOOK 4)' : 'HEALTHY RETENTION'}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: '600', marginTop: '4px' }}>
                    {activityDrop > 40 ? '⚠️ Automated CS notification sent: Schedule executive review with sponsor.' : '✅ Account engagement within healthy benchmark.'}
                  </div>
                </div>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', fontWeight: '800' }}>
                  ${(accountARR * (activityDrop / 100)).toLocaleString()} At-Risk
                </div>
              </div>
            </div>
          )}

          {/* Deliverables List */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px', color: '#111418' }}>
              Key BA Deliverables & Artifacts
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
