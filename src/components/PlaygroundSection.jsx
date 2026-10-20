import React, { useState } from 'react';
import { RefreshCw, Plus } from 'lucide-react';
import confetti from 'canvas-confetti';

const STICKER_PRESETS = [
  { text: "POWER BI & DAX 📊", bg: "#fde047", color: "#111418" },
  { text: "RANDOM FOREST 🤖", bg: "#a7f3d0", color: "#111418" },
  { text: "MEDIAPIPE CV 👁️", bg: "#fbcfe8", color: "#111418" },
  { text: "STREAMLIT APP 🚀", bg: "#fed7aa", color: "#111418" },
  { text: "SCIKIT-LEARN 📈", bg: "#bfdbfe", color: "#111418" },
  { text: "AMEENA FATHIMA ✨", bg: "#ddd6fe", color: "#111418" }
];

export default function PlaygroundSection() {
  const [stickers, setStickers] = useState([
    { id: 1, text: "POWER BI & DAX 📊", x: 20, y: 30, rotation: -6, bg: "#fde047" },
    { id: 2, text: "RANDOM FOREST 🤖", x: 180, y: 40, rotation: 7, bg: "#a7f3d0" },
    { id: 3, text: "MEDIAPIPE CV 👁️", x: 60, y: 130, rotation: -4, bg: "#fbcfe8" },
    { id: 4, text: "AMEENA FATHIMA ✨", x: 220, y: 120, rotation: 5, bg: "#ddd6fe" }
  ]);

  const [activeSticker, setActiveSticker] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Add a new sticker to the playground board
  const addSticker = (preset) => {
    try {
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
    } catch {}
    const newSticker = {
      id: Date.now(),
      text: preset.text,
      x: 30 + Math.random() * 160,
      y: 30 + Math.random() * 110,
      rotation: (Math.random() - 0.5) * 18,
      bg: preset.bg
    };
    setStickers([...stickers, newSticker]);
  };

  const resetStickers = () => {
    setStickers([
      { id: 1, text: "DATA DRIVEN 📊", x: 20, y: 30, rotation: -6, bg: "#fde047" },
      { id: 2, text: "SQL QUERY MASTER 🔍", x: 180, y: 40, rotation: 7, bg: "#a7f3d0" },
      { id: 3, text: "GAP ANALYSIS ⚙️", x: 60, y: 130, rotation: -4, bg: "#fbcfe8" },
      { id: 4, text: "BRD APPROVED ✅", x: 220, y: 120, rotation: 5, bg: "#fed7aa" }
    ]);
  };

  // Mouse Dragging
  const handleMouseDown = (id, e) => {
    const sticker = stickers.find(s => s.id === id);
    if (!sticker) return;
    setActiveSticker(id);
    setOffset({
      x: e.clientX - sticker.x,
      y: e.clientY - sticker.y
    });
  };

  const handleMouseMove = (e) => {
    if (activeSticker === null) return;
    setStickers(stickers.map(s => {
      if (s.id === activeSticker) {
        return {
          ...s,
          x: Math.max(5, Math.min(480, e.clientX - offset.x)),
          y: Math.max(5, Math.min(220, e.clientY - offset.y))
        };
      }
      return s;
    }));
  };

  const handleMouseUp = () => {
    setActiveSticker(null);
  };

  // Touch Dragging for Mobile
  const handleTouchStart = (id, e) => {
    const touch = e.touches[0];
    const sticker = stickers.find(s => s.id === id);
    if (!sticker || !touch) return;
    setActiveSticker(id);
    setOffset({
      x: touch.clientX - sticker.x,
      y: touch.clientY - sticker.y
    });
  };

  const handleTouchMove = (e) => {
    if (activeSticker === null) return;
    const touch = e.touches[0];
    if (!touch) return;
    setStickers(stickers.map(s => {
      if (s.id === activeSticker) {
        return {
          ...s,
          x: Math.max(5, Math.min(320, touch.clientX - offset.x)),
          y: Math.max(5, Math.min(210, touch.clientY - offset.y))
        };
      }
      return s;
    }));
  };

  const handleTouchEnd = () => {
    setActiveSticker(null);
  };

  return (
    <section 
      id="playground" 
      className="playground-section"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div style={{ textAlign: 'center', marginBottom: '18px' }}>
        <div style={{ 
          display: 'inline-block',
          padding: '4px 18px',
          border: '1.5px solid #111418',
          background: '#ffffff',
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          fontWeight: '700',
          borderRadius: '2px',
          boxShadow: '1px 1px 0px #111418',
          marginBottom: '8px'
        }}>
          ✦ playground & stickers
        </div>
        <p style={{ fontFamily: 'var(--font-hand)', fontSize: '18px', color: '#4b5563' }}>
          Drag the stickers around on the notebook, or tap to slap new ones on!
        </p>
      </div>

      {/* Preset sticker buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '16px' }}>
        {STICKER_PRESETS.map((preset, idx) => (
          <button
            key={idx}
            onClick={() => addSticker(preset)}
            style={{ 
              background: preset.bg, 
              border: '1.5px solid #111418',
              borderRadius: '9999px',
              padding: '4px 12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              boxShadow: '1px 1px 0px #111418'
            }}
          >
            <Plus size={10} />
            <span>{preset.text}</span>
          </button>
        ))}

        <button
          onClick={resetStickers}
          title="Reset stickers"
          style={{ 
            background: '#ffffff', 
            border: '1.5px solid #111418',
            borderRadius: '9999px',
            padding: '4px 12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            fontWeight: '700',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <RefreshCw size={10} />
          <span>Reset</span>
        </button>
      </div>

      {/* Interactive Sticker Board Canvas */}
      <div className="playground-canvas" style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
        <div style={{ 
          position: 'absolute', 
          bottom: '10px', 
          right: '12px', 
          fontFamily: 'var(--font-mono)', 
          fontSize: '9px', 
          color: '#9ca3af',
          pointerEvents: 'none' 
        }}>
          // INTERACTIVE NOTEPAD CANVAS
        </div>

        {stickers.map((st) => (
          <div
            key={st.id}
            className="draggable-sticker"
            onMouseDown={(e) => handleMouseDown(st.id, e)}
            onTouchStart={(e) => handleTouchStart(st.id, e)}
            style={{ 
              position: 'absolute',
              left: `${st.x}px`,
              top: `${st.y}px`,
              transform: `rotate(${st.rotation}deg)`,
              background: st.bg,
              cursor: activeSticker === st.id ? 'grabbing' : 'grab',
              touchAction: 'none'
            }}
          >
            {st.text}
          </div>
        ))}
      </div>
    </section>
  );
}
