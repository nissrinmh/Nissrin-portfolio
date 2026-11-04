import { Search, ArrowUpRight, Menu, X } from 'lucide-react';
import Logo from './common/Logo';

export default function TopBar({
  setIsSearchOpen,
  handleNavClick,
  onToggleMobileMenu,
  isMobileOpen = false,
}) {
  return (
    <header className="top-nav">
      <div className="top-brand-lockup">
        {/* Hamburger Menu Toggle (Visible on Tablets & Phones <= 1024px) */}
        <button
          type="button"
          className="mobile-menu-trigger-btn"
          onClick={onToggleMobileMenu}
          aria-label={isMobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <Logo size={34} onClick={() => handleNavClick('home')} />

        <div className="tagline-code">
          &#123; <span>Innovation</span> | <span>Design</span> | <span>Code</span> | <span>Impact</span> &#125;
        </div>
      </div>

      <div className="top-actions">
        <button
          type="button"
          className="search-trigger-btn"
          onClick={() => setIsSearchOpen(true)}
          aria-label="Rechercher des projets ou compétences"
        >
          <Search size={15} />
          <span>Search</span>
          <kbd className="search-shortcut-badge">⌘K</kbd>
        </button>

        <button
          type="button"
          className="cta-talk-btn"
          onClick={() => handleNavClick('contact')}
        >
          <span>Let's talk</span>
          <ArrowUpRight size={16} />
        </button>
      </div>
    </header>
  );
}
