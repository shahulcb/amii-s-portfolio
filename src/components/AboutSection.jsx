import React from 'react';

export default function AboutSection({ designer, skills, onSkillClick }) {
  return (
    <div id="about">
      {/* Hand-drawn pencil curve divider with "about me!" */}
      <div className="divider-section">
        <svg className="pencil-curve-svg" viewBox="0 0 900 32" preserveAspectRatio="none">
          <path
            d="M 10 16 Q 450 30 890 14"
            fill="none"
            stroke="rgba(100, 116, 139, 0.35)"
            strokeWidth="1.2"
            strokeDasharray="4 2"
          />
        </svg>
        <span className="about-me-annotation">about me!</span>
      </div>

      {/* Main About / Profile Section */}
      <section className="about-section">
        {/* "what's up" outline badge */}
        <div className="whats-up-badge-wrapper">
          <span className="whats-up-badge">what's up</span>
        </div>

        {/* 3-Column Content Grid: Left Polaroid, Center Text & Badges, Right Polaroid */}
        <div className="about-content-grid">
          {/* Left Polaroid: Robin Portrait with Washi Tape */}
          <div className="polaroid-card polaroid-left" title="Robin in the Pacific Northwest">
            <div className="washi-tape tape-top-left"></div>
            <div className="washi-tape tape-bottom-right"></div>
            <div className="polaroid-img-wrapper">
              <img src={designer.avatar} alt="Robin outdoors" />
            </div>
            <div className="polaroid-caption">1016</div>
          </div>

          {/* Center Column: Handwritten bio + 4 Scalloped / Wavy Badges */}
          <div className="about-center-col">
            <p className="about-bio-text">
              {designer.bio}
            </p>

            {/* 4 colorful wavy/scalloped skill badges */}
            <div className="skills-badge-grid">
              {skills.map((skill, index) => {
                const colors = ['yellow', 'green', 'pink', 'blue'];
                const colorClass = colors[index % colors.length];
                return (
                  <div 
                    key={skill.id} 
                    className="skill-pill-pair"
                    onClick={() => onSkillClick && onSkillClick(skill)}
                    title={skill.description}
                  >
                    <div className={`wavy-badge wavy-${colorClass}`}>
                      {skill.name}
                    </div>
                    <div className={`stamp-badge stamp-${colorClass}`} title={`${skill.name} stamp`}>
                      {skill.stampEmoji}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Polaroid: Workspace Desk Setup with Washi Tape */}
          <div className="polaroid-card polaroid-right" title="Robin's Studio Workspace">
            <div className="washi-tape tape-top-left"></div>
            <div className="washi-tape tape-top-right"></div>
            <div className="polaroid-img-wrapper">
              <img src={designer.workspace} alt="My Workspace" />
            </div>
            <div className="polaroid-caption">my workspace</div>
          </div>
        </div>
      </section>
    </div>
  );
}
