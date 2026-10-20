import React, { useState } from 'react';
import { Star, User, LayoutGrid, Sparkles, Heart, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activeSection, onNavigate, onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    onOpenContact();
    setMobileMenuOpen(false);
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        {/* Left: Avatar icon & Main navigation buttons */}
        <div className="nav-left">
          <div 
            className="nav-avatar-badge" 
            title="Ameena Fathima • Data Analyst & ML Engineer"
            onClick={() => handleNavClick('home')}
          >
            <span style={{ fontSize: '11px', color: '#fff', fontWeight: 'bold' }}>✦</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="nav-links desktop-only">
            <button
              id="nav-home"
              className={`nav-btn ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              <Star size={11} fill={activeSection === 'home' ? '#111418' : 'none'} strokeWidth={2.5} />
              <span>HOME</span>
            </button>

            <button
              id="nav-about"
              className={`nav-btn ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              <User size={11} strokeWidth={2.5} />
              <span>ABOUT</span>
            </button>

            <button
              id="nav-case-study"
              className={`nav-btn ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => handleNavClick('projects')}
            >
              <LayoutGrid size={11} strokeWidth={2.5} />
              <span>PROJECTS</span>
            </button>

            <button
              id="nav-playground"
              className={`nav-btn ${activeSection === 'playground' ? 'active' : ''}`}
              onClick={() => handleNavClick('playground')}
            >
              <Sparkles size={11} strokeWidth={2.5} />
              <span>PLAYGROUND</span>
            </button>
          </div>

          {/* Mobile active indicator title */}
          <div className="mobile-brand-title mobile-only" onClick={() => handleNavClick('home')}>
            <span className="brand-pixel-name">AMEENA</span>
            <span className="brand-dot">•</span>
            <span className="brand-role-text">DATA/ML</span>
          </div>
        </div>

        {/* Right: Social icons & Contact Button (Desktop) + Mobile Menu Toggle */}
        <div className="nav-right">
          <div className="social-links desktop-only">
            <a
              href="https://github.com/ameenafathimawork"
              target="_blank"
              rel="noreferrer"
              className="social-circle social-linkedin"
              title="GitHub Profile"
              style={{ background: '#111418', color: '#ffffff', fontWeight: '700' }}
            >
              gh
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-circle social-linkedin"
              title="LinkedIn"
            >
              in
            </a>
            <a
              href="mailto:ameenafathimawork@gmail.com"
              className="social-circle social-instagram"
              title="Email Ameena"
            >
              @
            </a>
          </div>

          <button
            id="nav-contact-btn"
            className="contact-pill-btn"
            onClick={handleContactClick}
          >
            <Heart size={12} fill="#ef4444" color="#ef4444" />
            <span>CONTACT</span>
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            className={`mobile-menu-toggle-btn mobile-only ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Card (Authentic Lined Notebook Paper Look) */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown-menu mobile-only">
          <div className="mobile-menu-scotch-tape"></div>

          <div className="mobile-nav-links-list">
            <button
              className={`mobile-nav-item ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              <div className="mobile-nav-item-left">
                <Star size={14} fill={activeSection === 'home' ? '#111418' : 'none'} />
                <span>HOME</span>
              </div>
              <ArrowUpRight size={13} opacity={0.6} />
            </button>

            <button
              className={`mobile-nav-item ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              <div className="mobile-nav-item-left">
                <User size={14} />
                <span>ABOUT & SKILLS</span>
              </div>
              <ArrowUpRight size={13} opacity={0.6} />
            </button>

            <button
              className={`mobile-nav-item ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => handleNavClick('projects')}
            >
              <div className="mobile-nav-item-left">
                <LayoutGrid size={14} />
                <span>CASE STUDIES & PROJECTS</span>
              </div>
              <ArrowUpRight size={13} opacity={0.6} />
            </button>

            <button
              className={`mobile-nav-item ${activeSection === 'playground' ? 'active' : ''}`}
              onClick={() => handleNavClick('playground')}
            >
              <div className="mobile-nav-item-left">
                <Sparkles size={14} />
                <span>PLAYGROUND & STICKERS</span>
              </div>
              <ArrowUpRight size={13} opacity={0.6} />
            </button>
          </div>

          <div className="mobile-dropdown-divider"></div>

          {/* Mobile Socials & Direct Contact */}
          <div className="mobile-dropdown-bottom">
            <div className="mobile-socials-row">
              <span className="mobile-socials-label">CONNECT:</span>
              <div className="social-links-mobile">
                <a href="https://github.com/ameenafathimawork" target="_blank" rel="noreferrer" className="social-circle social-linkedin" title="GitHub" style={{ background: '#111418', color: '#ffffff', fontWeight: '700' }}>gh</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-circle social-linkedin" title="LinkedIn">in</a>
                <a href="mailto:ameenafathimawork@gmail.com" className="social-circle social-instagram" title="Email Ameena">@</a>
              </div>
            </div>

            <button className="mobile-dropdown-contact-btn" onClick={handleContactClick}>
              <Heart size={14} fill="#ef4444" color="#ef4444" />
              <span>SEND A MESSAGE</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
