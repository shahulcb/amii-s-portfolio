import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ProjectDetailModal from './components/ProjectDetailModal';
import ContactSection from './components/ContactSection';
import PlaygroundSection from './components/PlaygroundSection';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'playground', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId === 'contact' ? 'home' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
      // subtle wiggle highlight
      contactElem.style.transition = 'transform 0.3s ease';
      contactElem.style.transform = 'scale(1.02)';
      setTimeout(() => {
        contactElem.style.transform = 'scale(1)';
      }, 400);
    }
  };

  const handleSkillClick = (skill) => {
    // Jump to projects and filter or open first matching project
    handleNavigate('projects');
  };

  return (
    <div className="portfolio-app-root">
      {/* Notebook Paper Canvas */}
      <main className="notebook-container">
        {/* Pinned Top Navigation Bar */}
        <Navbar
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onOpenContact={handleOpenContact}
        />

        {/* Hero Section */}
        <HeroSection
          designer={portfolioData.designer}
          onContactClick={handleOpenContact}
        />

        {/* About / Profile Section ("what's up" + Polaroids + Badges) */}
        <AboutSection
          designer={portfolioData.designer}
          skills={portfolioData.skills}
          onSkillClick={handleSkillClick}
        />

        {/* Projects Section (Folder Tabs + Brutalist Mockup Cards) */}
        <ProjectsSection
          projects={portfolioData.projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Interactive Playground Section (Draggable Stickers on Notebook) */}
        <PlaygroundSection />

        {/* Contact Section (Sticky Note Form + Direct details) */}
        <ContactSection designer={portfolioData.designer} />

        {/* Notebook Footer */}
        <Footer designer={portfolioData.designer} />
      </main>

      {/* Case Study / Project Detail Modal View */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          projects={portfolioData.projects}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      )}
    </div>
  );
}
