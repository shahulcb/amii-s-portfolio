import React from 'react';
import { Star, User, LayoutGrid, Sparkles, Heart } from 'lucide-react';

export default function Navbar({ activeSection, onNavigate, onOpenContact }) {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        {/* Left: Avatar icon & Main navigation buttons */}
        <div className="nav-left">
          <div 
            className="nav-avatar-badge" 
            title="Robin • Product Designer"
            onClick={() => onNavigate('home')}
          >
            <span style={{ fontSize: '11px', color: '#fff', fontWeight: 'bold' }}>✦</span>
          </div>

          <div className="nav-links">
            <button
              id="nav-home"
              className={`nav-btn ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => onNavigate('home')}
            >
              <Star size={11} fill={activeSection === 'home' ? '#111418' : 'none'} strokeWidth={2.5} />
              <span>HOME</span>
            </button>

            <button
              id="nav-about"
              className={`nav-btn ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => onNavigate('about')}
            >
              <User size={11} strokeWidth={2.5} />
              <span>ABOUT</span>
            </button>

            <button
              id="nav-case-study"
              className={`nav-btn ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => onNavigate('projects')}
            >
              <LayoutGrid size={11} strokeWidth={2.5} />
              <span>CASE STUDY</span>
            </button>

            <button
              id="nav-playground"
              className={`nav-btn ${activeSection === 'playground' ? 'active' : ''}`}
              onClick={() => onNavigate('playground')}
            >
              <Sparkles size={11} strokeWidth={2.5} />
              <span>PLAYGROUND</span>
            </button>
          </div>
        </div>

        {/* Right: Social icons & Contact Button */}
        <div className="nav-right">
          <div className="social-links">
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
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="social-circle social-dribbble"
              title="Dribbble"
            >
              dr
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-circle social-instagram"
              title="Instagram"
            >
              ig
            </a>
          </div>

          <button
            id="nav-contact-btn"
            className="contact-pill-btn"
            onClick={onOpenContact}
          >
            <Heart size={12} fill="#ef4444" color="#ef4444" />
            <span>CONTACT</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
