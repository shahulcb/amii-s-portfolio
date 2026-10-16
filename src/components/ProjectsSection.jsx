import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsSection({ projects, onSelectProject }) {
  const [activeProjectTab, setActiveProjectTab] = useState(projects[0]?.id || 'tandem');

  const tandemProject = projects.find(p => p.id === 'tandem') || projects[0];
  const forgeProject = projects.find(p => p.id === 'forge') || projects[1];
  const nebulaProject = projects.find(p => p.id === 'nebula') || projects[2];

  return (
    <section id="projects" className="projects-section">
      {/* =========================================================================
          PROJECT 01: TANDEM (Dark Brutalist Folder Style)
          ========================================================================= */}
      <div className="project-card-container">
        {/* Folder Tabs at top */}
        <div className="folder-tabs-bar">
          <button 
            className={`folder-tab tab-blue`}
            onClick={() => onSelectProject(tandemProject)}
          >
            <span>◆ PROJECT 01</span>
          </button>
          <button 
            className="folder-tab tab-inactive-dark"
            onClick={() => onSelectProject(forgeProject)}
          >
            <span>+ PROJECT 02</span>
          </button>
        </div>

        {/* Main Card Body */}
        <div className="project-card-dark">
          {/* Left Column: Metadata, Title, Subtitle, CTA */}
          <div className="project-card-left">
            <div className="project-meta-date">
              <span className="dot-blue" style={{ background: '#3b82f6' }}></span>
              <span>{tandemProject.date}</span>
            </div>

            <h3 className="project-title">{tandemProject.title}</h3>

            <p className="project-subtitle">
              {tandemProject.subtitle}
            </p>

            <div className="project-tags-row">
              {tandemProject.tags.slice(0, 3).map((tag, idx) => (
                <span key={idx} className="project-tag" style={{ borderColor: 'rgba(255,255,255,0.25)' }}>
                  {tag}
                </span>
              ))}
            </div>

            <button
              id="view-tandem-btn"
              className="view-project-btn"
              onClick={() => onSelectProject(tandemProject)}
            >
              <span>VIEW PROJECT</span>
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </button>
          </div>

          {/* Right Column: Mobile App Mockup taped with translucent tape */}
          <div 
            className="project-mockup-wrapper"
            onClick={() => onSelectProject(tandemProject)}
            title="Click to view full Tandem case study & prototype"
          >
            <div className="mockup-tape-corner tape-tl"></div>
            <div className="mockup-tape-corner tape-tr"></div>
            <div className="mockup-tape-corner tape-bl"></div>
            <div className="mockup-tape-corner tape-br"></div>

            <img
              src={tandemProject.image}
              alt="Tandem App Mockup"
              className="project-mockup-img"
            />
          </div>
        </div>
      </div>

      {/* =========================================================================
          PROJECT 02: FORGE (Warm Golden Yellow Folder Style)
          ========================================================================= */}
      <div className="project-card-container">
        {/* Folder Tab at top */}
        <div className="folder-tabs-bar">
          <button 
            className="folder-tab tab-yellow"
            onClick={() => onSelectProject(forgeProject)}
          >
            <span>+ PROJECT 03</span>
          </button>
        </div>

        {/* Main Card Body */}
        <div className="project-card-yellow">
          {/* Left Column: Metadata, Title, Subtitle, CTA */}
          <div className="project-card-left">
            <div className="project-meta-date">
              <span className="dot-blue" style={{ background: '#111418' }}></span>
              <span>{forgeProject.date}</span>
            </div>

            <h3 className="project-title" style={{ color: '#111418' }}>
              {forgeProject.title}
            </h3>

            <p className="project-subtitle">
              {forgeProject.subtitle}
            </p>

            <div className="project-tags-row">
              {forgeProject.tags.slice(0, 3).map((tag, idx) => (
                <span key={idx} className="project-tag" style={{ borderColor: 'rgba(0,0,0,0.35)', color: '#111418' }}>
                  {tag}
                </span>
              ))}
            </div>

            <button
              id="view-forge-btn"
              className="view-project-btn"
              onClick={() => onSelectProject(forgeProject)}
            >
              <span>VIEW PROJECT</span>
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </button>
          </div>

          {/* Right Column: Dev Platform Mockup taped with translucent tape */}
          <div 
            className="project-mockup-wrapper"
            onClick={() => onSelectProject(forgeProject)}
            title="Click to view full Forge case study & roadmap"
          >
            <div className="mockup-tape-corner tape-tl"></div>
            <div className="mockup-tape-corner tape-tr"></div>
            <div className="mockup-tape-corner tape-bl"></div>
            <div className="mockup-tape-corner tape-br"></div>

            <img
              src={forgeProject.image}
              alt="Forge Platform Mockup"
              className="project-mockup-img"
            />
          </div>
        </div>
      </div>

      {/* =========================================================================
          PROJECT 03: NEBULA DS (Interactive Extra Feature)
          ========================================================================= */}
      {nebulaProject && (
        <div className="project-card-container" style={{ marginTop: '20px' }}>
          <div className="folder-tabs-bar">
            <button 
              className="folder-tab"
              style={{ background: '#7c3aed', color: '#ffffff' }}
              onClick={() => onSelectProject(nebulaProject)}
            >
              <span>◆ BONUS CASE STUDY • NEBULA DS</span>
            </button>
          </div>

          <div 
            className="project-card-dark"
            style={{ 
              background: '#15102a', 
              border: '1.5px solid #7c3aed' 
            }}
          >
            <div className="project-card-left">
              <div className="project-meta-date" style={{ color: '#c4b5fd' }}>
                <span className="dot-blue" style={{ background: '#a78bfa' }}></span>
                <span>{nebulaProject.date}</span>
              </div>

              <h3 className="project-title" style={{ color: '#ffffff' }}>
                {nebulaProject.title}
              </h3>

              <p className="project-subtitle" style={{ color: '#e2e8f0' }}>
                {nebulaProject.subtitle}
              </p>

              <div className="project-tags-row">
                {nebulaProject.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag" style={{ borderColor: 'rgba(255,255,255,0.25)', color: '#ddd6fe' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <button
                id="view-nebula-btn"
                className="view-project-btn"
                onClick={() => onSelectProject(nebulaProject)}
              >
                <span>VIEW PROJECT</span>
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </button>
            </div>

            <div 
              className="project-mockup-wrapper"
              onClick={() => onSelectProject(nebulaProject)}
              title="Click to view Nebula Design System case study"
            >
              <div className="mockup-tape-corner tape-tl"></div>
              <div className="mockup-tape-corner tape-tr"></div>
              <div className="mockup-tape-corner tape-bl"></div>
              <div className="mockup-tape-corner tape-br"></div>

              <img
                src={nebulaProject.image}
                alt="Nebula Design System Mockup"
                className="project-mockup-img"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
