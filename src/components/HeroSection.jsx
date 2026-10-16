import React from 'react';

export default function HeroSection({ designer, onContactClick }) {
  return (
    <section id="home" className="hero-section">
      {/* "my name is" handwritten label with double underline */}
      <div className="my-name-is-wrapper">
        <span className="my-name-is-text">my name is</span>
        <svg className="hand-double-underline" viewBox="0 0 40 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2C12 1.5 28 2.2 38 1.8" stroke="#111418" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M4 4.5C14 4.2 26 4.8 36 4.3" stroke="#111418" strokeWidth="1.1" strokeLinecap="round" />
        </svg>
      </div>

      {/* Top floating pill stickers */}
      <div className="hero-stickers-row">
        <span className="pill-sticker sticker-made-things">MADE THINGS</span>
        <span className="pill-sticker sticker-sweat-details">SWEAT THE DETAILS</span>
      </div>

      {/* Hand-drawn Orange Box with Pixel ROBIN */}
      <div className="robin-box-wrapper">
        <div className="robin-box">
          <h1 className="robin-title">{designer.name}</h1>
        </div>

        {/* Bottom-left: Arrow + Product Designer badge */}
        <div className="badge-product-designer">
          {/* Hand drawn arrow pointing from box corner down-left */}
          <svg className="hand-arrow-left" viewBox="0 0 36 28" fill="none">
            <path
              d="M32 4C24 10 16 18 6 22M6 22L12 16M6 22L8 27"
              stroke="#111418"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="tag-product-designer">
            {designer.role}
          </div>
        </div>

        {/* Bottom-right: Arrow + Chicago, IL badge */}
        <div className="badge-chicago">
          {/* Hand drawn arrow pointing from box corner down-right */}
          <svg className="hand-arrow-right" viewBox="0 0 36 28" fill="none">
            <path
              d="M4 4C12 10 20 18 30 22M30 22L24 16M30 22L28 27"
              stroke="#111418"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="tag-chicago">
            {designer.location}
          </div>
        </div>
      </div>

      {/* Center Subtext: ● OPEN TO NEW WORK AND GOOD PROBLEMS */}
      <div className="subtext-open-to-work">
        <span className="dot-blue"></span>
        <span>{designer.status}</span>
      </div>

      {/* Headline with Flanking Avatar Stamps */}
      <div className="headline-row">
        <div className="avatar-stamp" title="Robin in the mountains">
          <img src={designer.avatar} alt="Robin" />
        </div>

        <h2 className="main-tagline">
          {designer.tagline.line1} <span className="emoji-icon">🎯</span>
          <br />
          {designer.tagline.line2} <span className="emoji-icon">🌸</span>
        </h2>

        <div className="avatar-stamp" title="Robin">
          <img src={designer.avatar} alt="Robin" />
        </div>
      </div>

      {/* CTA Button: > CONTACT ME */}
      <div>
        <button
          id="hero-contact-btn"
          className="hero-cta-btn"
          onClick={onContactClick}
        >
          <span className="cta-icon-box">&gt;</span>
          <span>CONTACT ME</span>
        </button>
      </div>
    </section>
  );
}
