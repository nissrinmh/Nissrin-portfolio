import { Home, User, FolderGit2, Wrench, Briefcase, Mail, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './icons/SocialIcons';
import sidebarBotanical from '../assets/sidebar-botanical.jpg';
import linaAvatar from '../assets/nina-avatar.png';

export default function Sidebar({ activeNav, handleNavClick, isMobileOpen = false, onClose }) {
  const onNav = (sectionId) => {
    handleNavClick(sectionId);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      <div
        className={`sidebar-mobile-backdrop ${isMobileOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className={`sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
        {/* Mobile Close Button */}
        <button
          type="button"
          className="sidebar-mobile-close-btn"
          onClick={onClose}
          aria-label="Fermer le menu"
        >
          <X size={18} />
        </button>

        {/* Decorative Top Glowing Pin */}
        <div className="sidebar-top-pin" aria-hidden="true" />

        {/* Profile Card */}
        <div className="profile-section">
          <div className="avatar-wrapper">
            <div className="avatar-frame">
              <img
                src={linaAvatar}
                alt="Nissrin Dev Profile"
                className="avatar-img"
              />
            </div>
            <span className="avatar-status-badge" title="Disponible pour de nouveaux projets" />
          </div>
          <p className="profile-greeting">Hello, I'm</p>
          <h2 className="profile-name">Nissrin Dev</h2>
          <p className="profile-role">Full Stack Developer</p>
          <p className="profile-bio">
            Turning ideas into meaningful digital experiences.
          </p>
        </div>

        {/* Navigation Items */}
        <nav className="sidebar-nav" aria-label="Navigation principale">
          <button
            type="button"
            className={`nav-item ${activeNav === 'home' ? 'active' : ''}`}
            onClick={() => onNav('home')}
          >
            <Home className="nav-icon" />
            <span>Home</span>
          </button>

          <button
            type="button"
            className={`nav-item ${activeNav === 'about' ? 'active' : ''}`}
            onClick={() => onNav('about')}
          >
            <User className="nav-icon" />
            <span>About</span>
          </button>

          <button
            type="button"
            className={`nav-item ${activeNav === 'projects' ? 'active' : ''}`}
            onClick={() => onNav('projects')}
          >
            <FolderGit2 className="nav-icon" />
            <span>Projects</span>
          </button>

          <button
            type="button"
            className={`nav-item ${activeNav === 'skills' ? 'active' : ''}`}
            onClick={() => onNav('skills')}
          >
            <Wrench className="nav-icon" />
            <span>Skills</span>
          </button>

          <button
            type="button"
            className={`nav-item ${activeNav === 'experience' ? 'active' : ''}`}
            onClick={() => onNav('experience')}
          >
            <Briefcase className="nav-icon" />
            <span>Experience</span>
          </button>

          <button
            type="button"
            className={`nav-item ${activeNav === 'contact' ? 'active' : ''}`}
            onClick={() => onNav('contact')}
          >
            <Mail className="nav-icon" />
            <span>Contact</span>
          </button>
        </nav>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/nissrinmh" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/nissrin-mahan-2965781ba" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a
            href="mailto:nissrinmahan02@gmail.com"
            className="social-btn"
            aria-label="Email"
            title="nissrinmahan02@gmail.com"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Botanical Fairy Lights & Handwritten Note */}
        <div className="sidebar-botanical-area">
          <img
            src={sidebarBotanical}
            alt=""
            className="sidebar-botanical-bg"
            aria-hidden="true"
          />
          <div className="sidebar-botanical-overlay" aria-hidden="true" />
          <div className="sidebar-quote-container">
            <span className="sidebar-quote-line line-1">Code</span>
            <span className="sidebar-quote-line line-2">Create</span>
            <span className="sidebar-quote-line line-3">Inspire</span>
            <span className="sidebar-quote-line line-4">Repeat ♡</span>
          </div>
        </div>

        {/* Decorative Bottom Glowing Pin */}
        <div className="sidebar-bottom-pin" aria-hidden="true" />
      </aside>
    </>
  );
}
