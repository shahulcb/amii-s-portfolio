import React, { useState, useEffect } from 'react';
import { 
  X, ArrowLeft, ArrowRight, CheckCircle2, BarChart3, 
  Calculator, ExternalLink, Eye, Cpu, Copy, Check 
} from 'lucide-react';
import confetti from 'canvas-confetti';

const GithubIcon = ({ size = 12, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectDetailModal({ project, projects, onClose, onSelectProject }) {
  const [copiedBullets, setCopiedBullets] = useState(false);

  // --- Hospital Management Dashboard Simulator State ---
  const [dept, setDept] = useState('Cardiology');
  const [admissions, setAdmissions] = useState(12400);
  const [avgStay, setAvgStay] = useState(4.1);
  const billingPerDay = 650;
  const [genderFilter, setGenderFilter] = useState('All');
  const [dischargeFilter, setDischargeFilter] = useState('All');
  const [daxMessage, setDaxMessage] = useState('');

  // --- Employee Attrition Prediction Simulator State ---
  const [monthlyIncome, setMonthlyIncome] = useState(4800);
  const [overtime, setOvertime] = useState('Yes');
  const [yearsAtCompany, setYearsAtCompany] = useState(3);
  const [jobSatisfaction, setJobSatisfaction] = useState(2);

  // --- Real-Time Eye Gaze Detection Simulator State ---
  const [selectedGaze, setSelectedGaze] = useState('Center');
  const [irisOffsetH, setIrisOffsetH] = useState(0.0);
  const [irisOffsetV, setIrisOffsetV] = useState(0.0);
  const [isBlinking, setIsBlinking] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // Next / Prev Project logic
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  // Hospital Dashboard Calculations
  const deptMultiplier = {
    'Cardiology': 1.25,
    'Neurology': 1.35,
    'Orthopedics': 1.15,
    'Pediatrics': 0.85,
    'Emergency': 0.95
  }[dept] || 1.0;

  const totalInpatientDays = Math.round(admissions * avgStay);
  const computedTotalRevenue = Math.round(totalInpatientDays * billingPerDay * deptMultiplier);

  const handleSimulateDax = () => {
    try {
      confetti({ particleCount: 45, spread: 60, origin: { y: 0.6 } });
    } catch {}
    setDaxMessage(`✨ DAX Measures Recalculated: ${admissions.toLocaleString()} Admissions across ${dept} generated $${computedTotalRevenue.toLocaleString()} Revenue!`);
    setTimeout(() => setDaxMessage(''), 5000);
  };

  // Employee Attrition Risk Score Calculation (Random Forest heuristic model)
  const calcAttritionProbability = () => {
    let score = 0.20; // baseline
    if (overtime === 'Yes') score += 0.28;
    if (jobSatisfaction === 1) score += 0.25;
    else if (jobSatisfaction === 2) score += 0.12;
    else if (jobSatisfaction === 4) score -= 0.10;

    if (monthlyIncome < 3500) score += 0.22;
    else if (monthlyIncome > 9000) score -= 0.15;

    if (yearsAtCompany < 2) score += 0.14;
    else if (yearsAtCompany > 8) score -= 0.12;

    const clamped = Math.min(0.96, Math.max(0.04, score));
    return Math.round(clamped * 100);
  };

  const attritionProb = calcAttritionProbability();
  const getRiskLabel = (prob) => {
    if (prob < 25) return { text: 'LOW ATTRITION RISK', color: '#16a34a', bg: 'rgba(22, 163, 74, 0.12)', advice: 'Employee indicates high satisfaction & engagement benchmark.' };
    if (prob <= 50) return { text: 'MODERATE RISK', color: '#ca8a04', bg: 'rgba(202, 138, 4, 0.12)', advice: 'Monitor overtime hours and review salary compensation band.' };
    return { text: 'HIGH RETENTION RISK', color: '#dc2626', bg: 'rgba(220, 38, 38, 0.12)', advice: 'Immediate HR intervention recommended: initiate 1-on-1 career progression review.' };
  };
  const riskInfo = getRiskLabel(attritionProb);

  // Copy Bullet Points to Clipboard
  const handleCopyBullets = () => {
    if (project.bulletPoints) {
      const text = project.bulletPoints.join('\n');
      navigator.clipboard.writeText(text);
      setCopiedBullets(true);
      setTimeout(() => setCopiedBullets(false), 2500);
    }
  };

  // Eye Gaze Direction Helper
  const setDirectionPreset = (dir) => {
    setSelectedGaze(dir);
    if (dir === 'Center') { setIrisOffsetH(0.0); setIrisOffsetV(0.0); }
    else if (dir === 'Left') { setIrisOffsetH(-0.55); setIrisOffsetV(0.0); }
    else if (dir === 'Right') { setIrisOffsetH(0.55); setIrisOffsetV(0.0); }
    else if (dir === 'Up') { setIrisOffsetH(0.0); setIrisOffsetV(-0.45); }
    else if (dir === 'Down') { setIrisOffsetH(0.0); setIrisOffsetV(0.45); }
  };

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
              PROJECT {project.number}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#6b7280' }}>
              / {project.title}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: '#f1f5f9',
                  color: '#111418',
                  border: '1px solid #cbd5e1',
                  borderRadius: '4px',
                  padding: '4px 10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: '700',
                  textDecoration: 'none'
                }}
              >
                <GithubIcon size={12} />
                <span>GitHub</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: '#0284c7',
                  color: '#ffffff',
                  border: '1px solid #0284c7',
                  borderRadius: '4px',
                  padding: '4px 10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: '700',
                  textDecoration: 'none'
                }}
              >
                <ExternalLink size={12} />
                <span>Live</span>
              </a>
            )}

            <button 
              id="close-modal-btn"
              className="modal-close-btn"
              onClick={onClose}
            >
              <X size={14} />
              <span>ESC / CLOSE</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body-content" style={{ padding: '24px 28px' }}>
          {/* Hero Banner */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              fontFamily: 'var(--font-mono)', 
              fontSize: '11px', 
              color: '#4b5563',
              marginBottom: '8px' 
            }}>
              <span style={{ fontWeight: '700', color: '#111418' }}>{project.category}</span>
              <span>•</span>
              <span>{project.date}</span>
            </div>

            <h2 style={{ 
              fontFamily: 'var(--font-sans)', 
              fontSize: 'clamp(26px, 4vw, 36px)', 
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
              maxWidth: '720px'
            }}>
              {project.subtitle}
            </p>
          </div>

          {/* Featured Image with Scotch Tape */}
          <div style={{ position: 'relative', margin: '20px 0 30px' }}>
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

          {/* =========================================================================
              COMPLETE RESUME BULLET POINTS BOX (Exact Match to User's Specification)
              ========================================================================= */}
          <div style={{ 
            background: '#ffffff', 
            border: '2px solid #111418', 
            borderRadius: '8px', 
            padding: '20px', 
            marginBottom: '32px',
            boxShadow: '3px 4px 0px #111418'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#2563eb" />
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '800', color: '#111418', margin: 0 }}>
                  PROJECT SPECIFICATIONS & RESUME BULLET POINTS
                </h4>
              </div>

              <button
                type="button"
                onClick={handleCopyBullets}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: '#f8fafc',
                  border: '1px solid #111418',
                  borderRadius: '4px',
                  padding: '4px 10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                {copiedBullets ? <Check size={12} color="#16a34a" /> : <Copy size={12} />}
                <span>{copiedBullets ? 'COPIED TO CLIPBOARD!' : 'COPY BULLET POINTS'}</span>
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.bulletPoints?.map((item, idx) => {
                const isTech = item.toLowerCase().includes('technologies used');
                return (
                  <div 
                    key={idx}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '10px',
                      background: isTech ? '#eff6ff' : '#fafafa',
                      border: isTech ? '1px solid #bfdbfe' : '1px solid #e5e7eb',
                      borderRadius: '5px',
                      padding: '10px 14px'
                    }}
                  >
                    <span style={{ color: isTech ? '#2563eb' : '#4b5563', fontSize: '14px', lineHeight: '1.4', fontWeight: 'bold' }}>•</span>
                    <span style={{ fontSize: '13.5px', lineHeight: '1.5', color: '#1f2937' }}>
                      {isTech ? (
                        <>
                          <strong style={{ color: '#1d4ed8' }}>Technologies Used: </strong>
                          {project.technologies?.map((tech, tIdx) => (
                            <span 
                              key={tIdx} 
                              style={{ 
                                display: 'inline-block',
                                background: '#dbeafe', 
                                color: '#1e40af', 
                                fontWeight: '700', 
                                padding: '1px 6px', 
                                borderRadius: '3px', 
                                margin: '0 4px 0 0',
                                fontSize: '12px' 
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </>
                      ) : (
                        item.replace(/^[•\s\\]+/, '')
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Overview Section */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', color: '#111418' }}>
              Project Architecture & Overview
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
                🚨 Problem Statement & Operational Challenges
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
                💡 Technical Solution & Implementation
              </h5>
              <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#14532d' }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* =========================================================================
              INTERACTIVE TOOL 1: HOSPITAL MANAGEMENT POWER BI & DAX CALCULATOR
              ========================================================================= */}
          {project.id === 'hospital-dashboard' && (
            <div className="prototype-sandbox" style={{ background: '#09131d', border: '1.5px solid #0284c7', borderRadius: '8px', padding: '24px', marginBottom: '32px', color: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: '700', color: '#38bdf8', marginBottom: '16px' }}>
                <BarChart3 size={18} />
                <span>INTERACTIVE DEMO: POWER BI DAX MEASURES & SLICER SIMULATOR</span>
              </div>

              {/* Department Selector & Slicers */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                    DEPARTMENT (BAR CHART FILTER):
                  </label>
                  <select
                    value={dept}
                    onChange={(e) => setDept(e.target.value)}
                    style={{
                      background: '#152238',
                      border: '1px solid #1e3a5f',
                      color: '#ffffff',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      width: '100%',
                      outline: 'none'
                    }}
                  >
                    <option value="Cardiology">Cardiology (Volume Weight: 1.25x)</option>
                    <option value="Neurology">Neurology (Volume Weight: 1.35x)</option>
                    <option value="Orthopedics">Orthopedics (Volume Weight: 1.15x)</option>
                    <option value="Pediatrics">Pediatrics (Volume Weight: 0.85x)</option>
                    <option value="Emergency">Emergency (Volume Weight: 0.95x)</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                    TOTAL ADMISSIONS ({admissions.toLocaleString()} Patients):
                  </label>
                  <input
                    type="range"
                    min="3000"
                    max="30000"
                    step="500"
                    value={admissions}
                    onChange={(e) => setAdmissions(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#38bdf8', marginTop: '8px' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                    AVG LENGTH OF STAY (ALOS): {avgStay} Days
                  </label>
                  <input
                    type="range"
                    min="1.5"
                    max="9.0"
                    step="0.1"
                    value={avgStay}
                    onChange={(e) => setAvgStay(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#38bdf8', marginTop: '8px' }}
                  />
                </div>
              </div>

              {/* Slicers row */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px', padding: '12px', background: 'rgba(2, 132, 199, 0.1)', borderRadius: '6px', border: '1px dashed #0284c7' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#38bdf8', fontWeight: '700' }}>
                  ACTIVE SLICERS:
                </span>
                
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>Gender:</span>
                  {['All', 'Female', 'Male'].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGenderFilter(g)}
                      style={{
                        background: genderFilter === g ? '#0284c7' : '#152238',
                        color: '#ffffff',
                        border: '1px solid #38bdf8',
                        borderRadius: '3px',
                        padding: '2px 8px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        cursor: 'pointer'
                      }}
                    >
                      {g}
                    </button>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginLeft: 'auto' }}>
                  <span style={{ fontSize: '11px', color: '#94a3b8' }}>Discharge:</span>
                  {['All', 'Recovered', 'Transferred'].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDischargeFilter(d)}
                      style={{
                        background: dischargeFilter === d ? '#0284c7' : '#152238',
                        color: '#ffffff',
                        border: '1px solid #38bdf8',
                        borderRadius: '3px',
                        padding: '2px 8px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        cursor: 'pointer'
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic DAX Measures Outputs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '18px' }}>
                <div style={{ background: '#101a2b', border: '1px solid #1e3a5f', padding: '12px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>[DAX] TOTAL REVENUE MEASURE</div>
                  <div style={{ fontSize: '22px', fontWeight: '800', color: '#38bdf8', marginTop: '2px' }}>
                    ${computedTotalRevenue.toLocaleString()}
                  </div>
                </div>

                <div style={{ background: '#101a2b', border: '1px solid #1e3a5f', padding: '12px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>[DAX] TOTAL INPATIENT DAYS</div>
                  <div style={{ fontSize: '22px', fontWeight: '800', color: '#34d399', marginTop: '2px' }}>
                    {totalInpatientDays.toLocaleString()} Days
                  </div>
                </div>

                <div style={{ background: '#101a2b', border: '1px solid #1e3a5f', padding: '12px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>[DAX] AVG LENGTH OF STAY</div>
                  <div style={{ fontSize: '22px', fontWeight: '800', color: '#facc15', marginTop: '2px' }}>
                    {avgStay} Days
                  </div>
                </div>
              </div>

              {/* DAX Formula Snippet preview */}
              <div style={{ background: '#050b12', border: '1px solid #1e293b', borderRadius: '4px', padding: '10px 14px', marginBottom: '16px', fontFamily: 'var(--font-mono)', fontSize: '11.5px', color: '#a5f3fc' }}>
                <code>
                  Total Revenue = SUMX(Admissions, Admissions[InpatientDays] * RELATED(PhysicianBilling[DailyRate]))
                </code>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <button
                  id="recalculate-dax-btn"
                  onClick={handleSimulateDax}
                  style={{ 
                    background: '#0284c7', 
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
                  <span>RECALCULATE DAX MEASURES</span>
                </button>

                {daxMessage && (
                  <span style={{ color: '#38bdf8', fontSize: '12px', fontWeight: '600' }}>
                    {daxMessage}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* =========================================================================
              INTERACTIVE TOOL 2: EMPLOYEE ATTRITION PREDICTOR (Streamlit & Random Forest)
              ========================================================================= */}
          {project.id === 'employee-attrition' && (
            <div className="prototype-sandbox" style={{ background: '#18181b', border: '1.5px solid #eab308', borderRadius: '8px', padding: '24px', marginBottom: '32px', color: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: '700', color: '#facc15', marginBottom: '16px' }}>
                <Cpu size={18} />
                <span>INTERACTIVE DEMO: STREAMLIT ATTRITION RISK PREDICTOR (RANDOM FOREST)</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <label style={{ fontSize: '11px', color: '#a1a1aa', display: 'block', marginBottom: '4px', fontFamily: 'var(--font-mono)' }}>
                    MONTHLY INCOME: ${monthlyIncome.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="2000"
                    max="15000"
                    step="250"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#facc15', marginTop: '8px' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '11px', color: '#a1a1aa', display: 'block', marginBottom: '4px', fontFamily: 'var(--font-mono)' }}>
                    FREQUENT OVERTIME:
                  </label>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                    {['Yes', 'No'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setOvertime(opt)}
                        style={{
                          flex: 1,
                          padding: '6px',
                          borderRadius: '4px',
                          border: overtime === opt ? '1px solid #facc15' : '1px solid #3f3f46',
                          background: overtime === opt ? '#facc15' : '#27272a',
                          color: overtime === opt ? '#000000' : '#ffffff',
                          fontWeight: '700',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          cursor: 'pointer'
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '11px', color: '#a1a1aa', display: 'block', marginBottom: '4px', fontFamily: 'var(--font-mono)' }}>
                    JOB SATISFACTION (1 = LOW, 4 = VERY HIGH): {jobSatisfaction}/4
                  </label>
                  <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                    {[1, 2, 3, 4].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setJobSatisfaction(rating)}
                        style={{
                          flex: 1,
                          padding: '6px',
                          borderRadius: '4px',
                          border: jobSatisfaction === rating ? '1px solid #facc15' : '1px solid #3f3f46',
                          background: jobSatisfaction === rating ? '#facc15' : '#27272a',
                          color: jobSatisfaction === rating ? '#000000' : '#ffffff',
                          fontWeight: '700',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '11px',
                          cursor: 'pointer'
                        }}
                      >
                        {rating}★
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '11px', color: '#a1a1aa', display: 'block', marginBottom: '4px', fontFamily: 'var(--font-mono)' }}>
                    YEARS AT COMPANY: {yearsAtCompany} Years
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    value={yearsAtCompany}
                    onChange={(e) => setYearsAtCompany(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#facc15', marginTop: '8px' }}
                  />
                </div>
              </div>

              {/* Real-Time Prediction Gauge */}
              <div style={{ 
                background: riskInfo.bg, 
                border: `1.5px solid ${riskInfo.color}`, 
                padding: '16px 20px', 
                borderRadius: '6px', 
                marginBottom: '16px' 
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', textTransform: 'uppercase', color: riskInfo.color, fontWeight: '800' }}>
                    MODEL INFERENCE: {riskInfo.text}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: '800', color: riskInfo.color }}>
                    {attritionProb}% Probability
                  </div>
                </div>

                {/* Meter Bar */}
                <div style={{ height: '8px', background: '#27272a', borderRadius: '4px', overflow: 'hidden', marginBottom: '10px' }}>
                  <div 
                    style={{ 
                      width: `${attritionProb}%`, 
                      height: '100%', 
                      background: riskInfo.color,
                      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' 
                    }}
                  />
                </div>

                <div style={{ fontSize: '12.5px', color: '#e4e4e7', lineHeight: '1.4' }}>
                  💡 <strong>HR Actionable Insight:</strong> {riskInfo.advice}
                </div>
              </div>

              <div style={{ fontSize: '11px', color: '#a1a1aa', fontFamily: 'var(--font-mono)' }}>
                ⚡ Pipeline: ColumnTransformer &gt; StandardScaler &gt; OneHotEncoder &gt; RandomForestClassifier(class_weight='balanced') &gt; Joblib
              </div>
            </div>
          )}

          {/* =========================================================================
              INTERACTIVE TOOL 3: EYE GAZE DIRECTION CLASSIFIER (OpenCV & MediaPipe)
              ========================================================================= */}
          {project.id === 'eye-gaze' && (
            <div className="prototype-sandbox" style={{ background: '#0a1622', border: '1.5px solid #06b6d4', borderRadius: '8px', padding: '24px', marginBottom: '32px', color: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: '700', color: '#22d3ee', marginBottom: '16px' }}>
                <Eye size={18} />
                <span>INTERACTIVE DEMO: 468-POINT MEDIAPIPE FACE MESH & GAZE RATIO SIMULATOR</span>
              </div>

              {/* 5-Direction Clickable Pad */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                    SELECT PRESET GAZE ORIENTATION:
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', maxWidth: '280px' }}>
                    <div></div>
                    <button
                      type="button"
                      onClick={() => setDirectionPreset('Up')}
                      style={{
                        padding: '10px',
                        background: selectedGaze === 'Up' ? '#06b6d4' : '#152e3d',
                        color: selectedGaze === 'Up' ? '#000' : '#fff',
                        border: '1px solid #0891b2',
                        borderRadius: '4px',
                        fontWeight: '700',
                        cursor: 'pointer'
                      }}
                    >
                      ▲ UP
                    </button>
                    <div></div>

                    <button
                      type="button"
                      onClick={() => setDirectionPreset('Left')}
                      style={{
                        padding: '10px',
                        background: selectedGaze === 'Left' ? '#06b6d4' : '#152e3d',
                        color: selectedGaze === 'Left' ? '#000' : '#fff',
                        border: '1px solid #0891b2',
                        borderRadius: '4px',
                        fontWeight: '700',
                        cursor: 'pointer'
                      }}
                    >
                      ◀ LEFT
                    </button>

                    <button
                      type="button"
                      onClick={() => setDirectionPreset('Center')}
                      style={{
                        padding: '10px',
                        background: selectedGaze === 'Center' ? '#06b6d4' : '#152e3d',
                        color: selectedGaze === 'Center' ? '#000' : '#fff',
                        border: '1px solid #0891b2',
                        borderRadius: '4px',
                        fontWeight: '700',
                        cursor: 'pointer'
                      }}
                    >
                      ● CENTER
                    </button>

                    <button
                      type="button"
                      onClick={() => setDirectionPreset('Right')}
                      style={{
                        padding: '10px',
                        background: selectedGaze === 'Right' ? '#06b6d4' : '#152e3d',
                        color: selectedGaze === 'Right' ? '#000' : '#fff',
                        border: '1px solid #0891b2',
                        borderRadius: '4px',
                        fontWeight: '700',
                        cursor: 'pointer'
                      }}
                    >
                      RIGHT ▶
                    </button>

                    <div></div>
                    <button
                      type="button"
                      onClick={() => setDirectionPreset('Down')}
                      style={{
                        padding: '10px',
                        background: selectedGaze === 'Down' ? '#06b6d4' : '#152e3d',
                        color: selectedGaze === 'Down' ? '#000' : '#fff',
                        border: '1px solid #0891b2',
                        borderRadius: '4px',
                        fontWeight: '700',
                        cursor: 'pointer'
                      }}
                    >
                      ▼ DOWN
                    </button>
                    <div></div>
                  </div>
                </div>

                {/* Eye Closure Exception Handling Simulator */}
                <div>
                  <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                    EXCEPTION HANDLING TEST:
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsBlinking(!isBlinking)}
                    style={{
                      padding: '10px 16px',
                      background: isBlinking ? '#dc2626' : '#164e63',
                      color: '#ffffff',
                      border: '1px solid #22d3ee',
                      borderRadius: '4px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      width: '100%',
                      textAlign: 'left'
                    }}
                  >
                    {isBlinking ? '👁️ BLINK ACTIVE: ZERO-DIVISION SAFEGUARD TRIGGERED' : '👀 SIMULATE BLINK / EYE CLOSURE'}
                  </button>

                  <div style={{ marginTop: '10px', fontSize: '12px', color: '#94a3b8', lineHeight: '1.4' }}>
                    {isBlinking ? (
                      <span style={{ color: '#fca5a5' }}>
                        🛡️ Zero-division protection active: When vertical eyelid distance approaches 0, the ratio algorithm suppresses division errors and marks gaze as 'BLINK' without crashing the video pipeline.
                      </span>
                    ) : (
                      <span>
                        Simulate rapid eye blinks to verify that the algorithm gracefully maintains 60 FPS without throwing `ZeroDivisionError`.
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Real-Time Telemetry HUD */}
              <div style={{ 
                background: '#040b11', 
                border: '1px solid #164e63', 
                padding: '14px 18px', 
                borderRadius: '6px', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
                gap: '12px',
                fontFamily: 'var(--font-mono)' 
              }}>
                <div>
                  <div style={{ fontSize: '10px', color: '#67e8f9' }}>GAZE ORIENTATION:</div>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: isBlinking ? '#f87171' : '#22d3ee', marginTop: '2px' }}>
                    {isBlinking ? 'BLINK / CLOSED' : selectedGaze.toUpperCase()}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '10px', color: '#67e8f9' }}>IRIS OFFSET RATIO (H / V):</div>
                  <div style={{ fontSize: '16px', fontWeight: '800', color: '#34d399', marginTop: '2px' }}>
                    {isBlinking ? 'N/A (Blink)' : `H: ${(0.50 + irisOffsetH * 0.25).toFixed(2)} / V: ${(0.50 + irisOffsetV * 0.25).toFixed(2)}`}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '10px', color: '#67e8f9' }}>FACIAL LANDMARKS:</div>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: '#facc15', marginTop: '2px' }}>
                    468 Keypoints
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '10px', color: '#67e8f9' }}>PROCESSING SPEED:</div>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: '#60a5fa', marginTop: '2px' }}>
                    60.1 FPS
                  </div>
                </div>
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

          {/* Navigation Bar at Bottom: Prev / Next Project */}
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
