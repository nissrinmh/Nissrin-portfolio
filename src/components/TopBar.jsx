
import { Search, ArrowUpRight } from 'lucide-react';

export default function TopBar({ setIsSearchOpen, handleNavClick }) {
  return (
    <header className="top-nav">
      <div className="tagline-code">
        &#123; <span>Innovation</span> | <span>Design</span> | <span>Code</span> | <span>Impact</span> &#125;
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
