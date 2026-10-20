import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 13, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectsSection({ projects, onSelectProject }) {
  const hospitalProject = projects.find(p => p.id === 'hospital-dashboard') || projects[0];
  const attritionProject = projects.find(p => p.id === 'employee-attrition') || projects[1];
  const eyeGazeProject = projects.find(p => p.id === 'eye-gaze') || projects[2];

  return (
    <section id="projects" className="projects-section">
      {/* =========================================================================
          PROJECT 01: HOSPITAL MANAGEMENT DASHBOARD (Power BI & DAX)
          ========================================================================= */}
      {hospitalProject && (
        <div className="project-card-container">
          {/* Folder Tabs at top */}
          <div className="folder-tabs-bar">
            <button 
              className="folder-tab tab-blue"
              onClick={() => onSelectProject(hospitalProject)}
            >
              <span>◆ PROJECT 01 • POWER BI</span>
            </button>
            <button 
              className="folder-tab tab-inactive-dark"
              onClick={() => onSelectProject(attritionProject)}
            >
              <span>+ PROJECT 02</span>
            </button>
            <button 
              className="folder-tab tab-inactive-dark"
              onClick={() => onSelectProject(eyeGazeProject)}
            >
              <span>+ PROJECT 03</span>
            </button>
          </div>

          {/* Main Card Body */}
          <div className="project-card-dark" style={{ background: '#0b1320', borderColor: '#0284c7' }}>
            {/* Left Column: Metadata, Title, Subtitle, Bullet Points, CTA */}
            <div className="project-card-left">
              <div className="project-meta-date" style={{ color: '#38bdf8' }}>
                <span className="dot-blue" style={{ background: '#38bdf8' }}></span>
                <span>{hospitalProject.category.toUpperCase()}</span>
                <span style={{ opacity: 0.5 }}>|</span>
                <span>{hospitalProject.date}</span>
              </div>

              <h3 className="project-title" style={{ color: '#ffffff' }}>
                {hospitalProject.title}
              </h3>

              <p className="project-subtitle" style={{ color: '#94a3b8' }}>
                {hospitalProject.subtitle}
              </p>

              {/* Technologies Badges */}
              <div className="project-tags-row">
                {hospitalProject.technologies?.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="project-tag" 
                    style={{ borderColor: 'rgba(56, 189, 248, 0.4)', color: '#bae6fd', background: 'rgba(2, 132, 199, 0.15)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Concise Bullet Points */}
              <div 
                style={{ 
                  background: 'rgba(15, 23, 42, 0.75)', 
                  border: '1px solid rgba(56, 189, 248, 0.25)', 
                  borderRadius: '6px', 
                  padding: '14px 16px', 
                  marginBottom: '20px' 
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', color: '#38bdf8', letterSpacing: '0.08em', marginBottom: '8px', fontWeight: '700' }}>
                  KEY PROJECT HIGHLIGHTS:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {hospitalProject.bulletPoints?.slice(1, 6).map((point, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px', lineHeight: '1.45', color: '#e2e8f0' }}>
                      <span style={{ color: '#38bdf8', fontSize: '14px', lineHeight: '1' }}>•</span>
                      <span>{point.replace(/^[•\s\\]+/, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions Row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                <button
                  id="view-hospital-btn"
                  className="view-project-btn"
                  onClick={() => onSelectProject(hospitalProject)}
                >
                  <span>VIEW FULL CASE STUDY & SIMULATOR</span>
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </button>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <a
                    href={hospitalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      background: 'rgba(255,255,255,0.1)',
                      color: '#ffffff',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderRadius: '4px',
                      padding: '5px 12px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: '700',
                      textDecoration: 'none'
                    }}
                  >
                    <GithubIcon size={13} />
                    <span>GitHub</span>
                  </a>

                  {hospitalProject.liveUrl && (
                    <a
                      href={hospitalProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        background: '#0284c7',
                        color: '#ffffff',
                        border: '1px solid #38bdf8',
                        borderRadius: '4px',
                        padding: '5px 12px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        fontWeight: '700',
                        textDecoration: 'none'
                      }}
                    >
                      <ExternalLink size={13} />
                      <span>Live Dashboard</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Dashboard Mockup taped with translucent tape */}
            <div 
              className="project-mockup-wrapper"
              onClick={() => onSelectProject(hospitalProject)}
              title="Click to view full Hospital Management Dashboard case study & interactive simulator"
            >
              <div className="mockup-tape-corner tape-tl"></div>
              <div className="mockup-tape-corner tape-tr"></div>
              <div className="mockup-tape-corner tape-bl"></div>
              <div className="mockup-tape-corner tape-br"></div>

              <img
                src={hospitalProject.image}
                alt="Hospital Management Dashboard Preview"
                className="project-mockup-img"
              />
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PROJECT 02: EMPLOYEE ATTRITION PREDICTION (Machine Learning)
          ========================================================================= */}
      {attritionProject && (
        <div className="project-card-container">
          {/* Folder Tab at top */}
          <div className="folder-tabs-bar">
            <button 
              className="folder-tab tab-yellow"
              onClick={() => onSelectProject(attritionProject)}
            >
              <span>◆ PROJECT 02 • MACHINE LEARNING</span>
            </button>
            <button 
              className="folder-tab tab-inactive-dark"
              onClick={() => onSelectProject(hospitalProject)}
            >
              <span>+ PROJECT 01</span>
            </button>
            <button 
              className="folder-tab tab-inactive-dark"
              onClick={() => onSelectProject(eyeGazeProject)}
            >
              <span>+ PROJECT 03</span>
            </button>
          </div>

          {/* Main Card Body */}
          <div className="project-card-yellow">
            {/* Left Column: Metadata, Title, Subtitle, Bullet Points, CTA */}
            <div className="project-card-left">
              <div className="project-meta-date">
                <span className="dot-blue" style={{ background: '#111418' }}></span>
                <span>{attritionProject.category.toUpperCase()}</span>
                <span style={{ opacity: 0.5 }}>|</span>
                <span>{attritionProject.date}</span>
              </div>

              <h3 className="project-title" style={{ color: '#111418' }}>
                {attritionProject.title}
              </h3>

              <p className="project-subtitle" style={{ color: '#27272a' }}>
                {attritionProject.subtitle}
              </p>

              {/* Technologies Badges */}
              <div className="project-tags-row">
                {attritionProject.technologies?.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="project-tag" 
                    style={{ borderColor: 'rgba(0,0,0,0.4)', color: '#111418', background: 'rgba(255,255,255,0.4)', fontWeight: '600' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Concise Bullet Points */}
              <div 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.65)', 
                  border: '1.5px solid rgba(0, 0, 0, 0.25)', 
                  borderRadius: '6px', 
                  padding: '14px 16px', 
                  marginBottom: '20px' 
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', color: '#111418', letterSpacing: '0.08em', marginBottom: '8px', fontWeight: '800' }}>
                  KEY PROJECT HIGHLIGHTS:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {attritionProject.bulletPoints?.slice(1, 6).map((point, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px', lineHeight: '1.45', color: '#18181b' }}>
                      <span style={{ color: '#111418', fontSize: '14px', lineHeight: '1', fontWeight: 'bold' }}>•</span>
                      <span>{point.replace(/^[•\s\\]+/, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions Row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                <button
                  id="view-attrition-btn"
                  className="view-project-btn"
                  onClick={() => onSelectProject(attritionProject)}
                >
                  <span>VIEW FULL CASE STUDY & ML APP</span>
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </button>

                <a
                  href={attritionProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#111418',
                    color: '#ffffff',
                    border: '1.5px solid #111418',
                    borderRadius: '4px',
                    padding: '5px 12px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: '700',
                    textDecoration: 'none'
                  }}
                >
                  <GithubIcon size={13} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Right Column: Dev Platform Mockup taped with translucent tape */}
            <div 
              className="project-mockup-wrapper"
              onClick={() => onSelectProject(attritionProject)}
              title="Click to view full Employee Attrition case study & interactive Streamlit predictor"
            >
              <div className="mockup-tape-corner tape-tl"></div>
              <div className="mockup-tape-corner tape-tr"></div>
              <div className="mockup-tape-corner tape-bl"></div>
              <div className="mockup-tape-corner tape-br"></div>

              <img
                src={attritionProject.image}
                alt="Employee Attrition Prediction App Mockup"
                className="project-mockup-img"
              />
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PROJECT 03: REAL-TIME EYE GAZE DIRECTION DETECTION (Computer Vision)
          ========================================================================= */}
      {eyeGazeProject && (
        <div className="project-card-container">
          <div className="folder-tabs-bar">
            <button 
              className="folder-tab"
              style={{ background: '#0891b2', color: '#ffffff' }}
              onClick={() => onSelectProject(eyeGazeProject)}
            >
              <span>◆ PROJECT 03 • COMPUTER VISION</span>
            </button>
            <button 
              className="folder-tab tab-inactive-dark"
              onClick={() => onSelectProject(hospitalProject)}
            >
              <span>+ PROJECT 01</span>
            </button>
            <button 
              className="folder-tab tab-inactive-dark"
              onClick={() => onSelectProject(attritionProject)}
            >
              <span>+ PROJECT 02</span>
            </button>
          </div>

          <div 
            className="project-card-dark"
            style={{ 
              background: '#09131d', 
              border: '1.5px solid #0891b2' 
            }}
          >
            <div className="project-card-left">
              <div className="project-meta-date" style={{ color: '#67e8f9' }}>
                <span className="dot-blue" style={{ background: '#06b6d4' }}></span>
                <span>{eyeGazeProject.category.toUpperCase()}</span>
                <span style={{ opacity: 0.5 }}>|</span>
                <span>{eyeGazeProject.date}</span>
              </div>

              <h3 className="project-title" style={{ color: '#ffffff' }}>
                {eyeGazeProject.title}
              </h3>

              <p className="project-subtitle" style={{ color: '#94a3b8' }}>
                {eyeGazeProject.subtitle}
              </p>

              {/* Technologies Badges */}
              <div className="project-tags-row">
                {eyeGazeProject.technologies?.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="project-tag" 
                    style={{ borderColor: 'rgba(6, 182, 212, 0.4)', color: '#a5f3fc', background: 'rgba(8, 145, 178, 0.15)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Concise Bullet Points */}
              <div 
                style={{ 
                  background: 'rgba(15, 23, 42, 0.75)', 
                  border: '1px solid rgba(6, 182, 212, 0.25)', 
                  borderRadius: '6px', 
                  padding: '14px 16px', 
                  marginBottom: '20px' 
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', color: '#22d3ee', letterSpacing: '0.08em', marginBottom: '8px', fontWeight: '700' }}>
                  KEY PROJECT HIGHLIGHTS:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {eyeGazeProject.bulletPoints?.slice(1, 6).map((point, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px', lineHeight: '1.45', color: '#e2e8f0' }}>
                      <span style={{ color: '#22d3ee', fontSize: '14px', lineHeight: '1' }}>•</span>
                      <span>{point.replace(/^[•\s\\]+/, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions Row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                <button
                  id="view-eyegaze-btn"
                  className="view-project-btn"
                  style={{ color: '#67e8f9' }}
                  onClick={() => onSelectProject(eyeGazeProject)}
                >
                  <span>VIEW FULL CASE STUDY & CV DEMO</span>
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </button>

                <a
                  href={eyeGazeProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: 'rgba(255,255,255,0.1)',
                    color: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '4px',
                    padding: '5px 12px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: '700',
                    textDecoration: 'none'
                  }}
                >
                  <GithubIcon size={13} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            <div 
              className="project-mockup-wrapper"
              onClick={() => onSelectProject(eyeGazeProject)}
              title="Click to view Real-Time Eye Gaze Detection case study & interactive visualizer"
            >
              <div className="mockup-tape-corner tape-tl"></div>
              <div className="mockup-tape-corner tape-tr"></div>
              <div className="mockup-tape-corner tape-bl"></div>
              <div className="mockup-tape-corner tape-br"></div>

              <img
                src={eyeGazeProject.image}
                alt="Eye Gaze Direction Detection Mockup"
                className="project-mockup-img"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
