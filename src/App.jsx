import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

import Sidebar        from './components/Sidebar';
import TopBar         from './components/TopBar';
import HomePage       from './components/HomePage';
import AboutPage      from './components/AboutPage';
import SkillsPage     from './components/SkillsPage';
import ProjectsPage   from './components/ProjectsPage';
import ExperiencePage from './components/ExperiencePage';
import ContactPage    from './components/ContactPage';
import ProjectModal   from './components/modals/ProjectModal';
import SearchModal    from './components/modals/SearchModal';
import ContactModal   from './components/modals/ContactModal';

import botanicalTopCorners    from './assets/botanical-top-corners.jpg';
import botanicalBottomCorners from './assets/botanical-bottom-corners.jpg';

import './App.css';

export default function App() {
  const [activeNav,        setActiveNav]        = useState('home');
  const [selectedProject,  setSelectedProject]  = useState(null);
  const [isContactOpen,    setIsContactOpen]    = useState(false);
  const [contactProject,   setContactProject]   = useState(null);
  const [isSearchOpen,     setIsSearchOpen]     = useState(false);
  const [searchQuery,      setSearchQuery]      = useState('');
  const [projectFilter,    setProjectFilter]    = useState('all');

  // ── Keyboard shortcut: Cmd/Ctrl + K  &  Escape ──────────────────────────
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setSelectedProject(null);
        setIsContactOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // ── Navigation ───────────────────────────────────────────────────────────
  const handleNavClick = (sectionId) => {
    setActiveNav(sectionId);
    if (['about', 'projects', 'skills', 'experience', 'contact'].includes(sectionId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setTimeout(() => {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const elem = document.getElementById(sectionId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }, 60);
  };

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Site-wide Corner Botanicals & Fairy Lights ── */}
      <div className="site-corner-botanicals" aria-hidden="true">
        <div className="corner-botanical-wrap corner-top">
          <img src={botanicalTopCorners} alt="" className="corner-botanical-img" />
        </div>
        <div className="corner-botanical-wrap corner-bottom">
          <img src={botanicalBottomCorners} alt="" className="corner-botanical-img" />
        </div>
        <div className="site-botanical-vignette" />
      </div>

      <div className="portfolio-container">
        {/* ── Left Sidebar ── */}
        <Sidebar activeNav={activeNav} handleNavClick={handleNavClick} />

      {/* ── Main Content Area ── */}
      <main className="main-content">

        {/* Top Bar */}
        <TopBar setIsSearchOpen={setIsSearchOpen} handleNavClick={handleNavClick} />

        {/* Page Routing */}
        {activeNav === 'about' ? (
          <AboutPage handleNavClick={handleNavClick} />

        ) : activeNav === 'skills' ? (
          <SkillsPage handleNavClick={handleNavClick} />

        ) : activeNav === 'projects' ? (
          <ProjectsPage
            setSelectedProject={setSelectedProject}
            handleNavClick={handleNavClick}
          />

        ) : activeNav === 'experience' ? (
          <ExperiencePage handleNavClick={handleNavClick} />

        ) : activeNav === 'contact' ? (
          <ContactPage handleNavClick={handleNavClick} />

        ) : (
          <HomePage
            setSelectedProject={setSelectedProject}
            projectFilter={projectFilter}
            setProjectFilter={setProjectFilter}
            handleNavClick={handleNavClick}
          />
        )}

        {/* Footer */}
        <footer className="footer-bar">
          <div className="footer-credits">
            Made with <Heart className="heart-icon" size={14} fill="#f43f5e" /> by <strong>Nissrin Dev</strong>
          </div>
          <div className="footer-links">
            <button type="button" className="footer-link-item" onClick={() => handleNavClick('home')}>Home</button>
            <button type="button" className="footer-link-item" onClick={() => handleNavClick('about')}>About</button>
            <button type="button" className="footer-link-item" onClick={() => handleNavClick('projects')}>Projects</button>
            <button type="button" className="footer-link-item" onClick={() => handleNavClick('contact')}>Contact</button>
          </div>
        </footer>
      </main>

      {/* ── Modals ── */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContact={() => {
          setContactProject(selectedProject);
          setSelectedProject(null);
          setIsContactOpen(true);
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onClose={() => setIsSearchOpen(false)}
        onSelectProject={(proj) => {
          setSelectedProject(proj);
          setIsSearchOpen(false);
        }}
      />

      <ContactModal
        key={contactProject ? contactProject.id : (isContactOpen ? 'open' : 'closed')}
        isOpen={isContactOpen}
        project={contactProject}
        onClose={() => {
          setIsContactOpen(false);
          setContactProject(null);
        }}
      />

    </div>
    </>
  );
}
