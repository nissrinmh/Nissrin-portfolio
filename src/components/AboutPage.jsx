
import {
  ArrowLeft, ArrowRight, ArrowUpRight,
  Sparkles, Code2, Leaf, Palette, Compass, Coffee
} from 'lucide-react';
import linaAvatar from '../assets/nina-avatar.png';
import skillsBg from '../assets/skills-bg.jpg';

export default function AboutPage({ handleNavClick }) {
  return (
    <section id="about" className="about-page-view">
      {/* Background Botanical Bokeh */}
      <div className="about-page-bg-wrap" aria-hidden="true">
        <img src={skillsBg} alt="" className="about-page-bg-img" />
        <div className="about-page-bg-overlay" />
        <div className="about-page-ambient-flare flare-top-right" />
        <div className="about-page-ambient-flare flare-middle-right" />
        <div className="about-page-ambient-flare flare-bottom-left" />
        <div className="about-page-bokeh-dot bokeh-1" />
        <div className="about-page-bokeh-dot bokeh-2" />
        <div className="about-page-bokeh-dot bokeh-3" />
      </div>

      <div className="about-page-content">
        {/* Top Navigation & Breadcrumb */}
        <div className="about-page-top-bar">
          {/* <button
            type="button"
            className="about-back-btn"
            onClick={() => handleNavClick('home')}
          >
            <ArrowLeft size={16} />
            <span>Retour à l'accueil</span>
          </button> */}

          <div className="about-header-badge">
            <span className="about-code-bracket">&lt;</span>
            <span className="about-badge-title">À propos de moi</span>
            <span className="about-code-bracket">/&gt;</span>
          </div>
        </div>

        {/* Profile Intro Banner */}
        <div className="about-intro-card">
          <div className="about-avatar-wrapper">
            <img src={linaAvatar} alt="Nissrin Dev" className="about-avatar-img" />
            <div className="about-avatar-status-badge" title="Disponible pour de nouveaux projets">
              <span className="status-pulse-dot" />
            </div>
          </div>

          <div className="about-intro-info">
            <div className="about-intro-tags">
              <span className="about-pill">Full Stack Developer</span>
              <span className="about-pill highlight">UI / UX Designer</span>
            </div>
            <h1 className="about-intro-name">Bonjour, je suis Nissrin 👋</h1>
            <p className="about-intro-tagline">
              Je crée des ponts numériques entre vos idées et la vraie vie, à travers des interfaces soignées, apaisantes, accessibles et performantes.
            </p>
            <div className="about-handwritten-note">
              Same Girl... Bigger Dreams ♡
            </div>
          </div>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="about-content-grid">
          {/* Mon Histoire */}
          <div className="about-card about-story-card">
            <div className="about-card-header">
              <div className="about-card-icon-box">
                <Sparkles size={18} />
              </div>
              <h2>Mon Histoire &amp; Ma Vision</h2>
            </div>
            <div className="about-card-text">
              <p>
                Passionnée par l'harmonie entre rigueur technique et sensibilité visuelle, j'ai débuté le développement avec la curiosité de comprendre comment quelques lignes de code pouvaient créer un univers interactif.
              </p>
              <p>
                Aujourd'hui, je conçois des solutions web modernes, fiables et utiles. Pour moi, le numérique doit apporter de la clarté et du confort : une application réussie est aussi agréable à explorer qu'une parenthèse de calme dans une journée bien remplie.
              </p>
            </div>
          </div>

          {/* Mon Approche Full Stack */}
          <div className="about-card about-approach-card">
            <div className="about-card-header">
              <div className="about-card-icon-box">
                <Code2 size={18} />
              </div>
              <h2>Artisanat &amp; Architecture</h2>
            </div>
            <div className="about-card-text">
              <p>
                Côté <strong>Frontend</strong>, j'affectionne <em>React, Next.js et TypeScript</em> pour concevoir des expériences fluides, des animations subtiles et des interfaces ergonomiques.
              </p>
              <p>
                Côté <strong>Backend</strong>, je structure des architectures robustes et pérennes avec <em>Node.js, Laravel, PostgreSQL et MongoDB</em>, garantissant performance et sérénité.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values / Philosophie */}
        <div className="about-values-section">
          <h3 className="about-section-subtitle">Ce qui guide mon travail au quotidien</h3>
          <div className="about-values-grid">
            <div className="about-value-item">
              <div className="value-icon-box"><Leaf size={18} /></div>
              <h4>A Kinder Web</h4>
              <p>Créer des interfaces bienveillantes, respectueuses de l'attention et intuitives sans friction inutile.</p>
            </div>

            <div className="about-value-item">
              <div className="value-icon-box"><Palette size={18} /></div>
              <h4>Souci du Détail</h4>
              <p>Chaque espacement, micro-interaction, typographie et ombre portée est façonné avec soin et minutie.</p>
            </div>

            <div className="about-value-item">
              <div className="value-icon-box"><Compass size={18} /></div>
              <h4>Évolution Continue</h4>
              <p>Toujours apprendre, expérimenter de nouveaux outils et perfectionner mes pratiques de développement.</p>
            </div>
          </div>
        </div>

        {/* Au-delà du code */}
        <div className="about-card about-beyond-card">
          <div className="about-card-header">
            <div className="about-card-icon-box">
              <Coffee size={18} />
            </div>
            <h2>Au-delà du code &amp; Ambiance</h2>
          </div>
          <div className="about-passions-list">
            <div className="passion-chip">
              <span className="passion-emoji">☕</span>
              <span>Café de spécialité &amp; mélodies Lo-Fi</span>
            </div>
            <div className="passion-chip">
              <span className="passion-emoji">🪴</span>
              <span>Botanique d'intérieur &amp; sérénité végétale</span>
            </div>
            <div className="passion-chip">
              <span className="passion-emoji">📖</span>
              <span>Lectures UI/UX, accessibilité &amp; architecture web</span>
            </div>
            <div className="passion-chip">
              <span className="passion-emoji">✨</span>
              <span>Création d'espaces numériques doux et inspirants</span>
            </div>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="about-stats-bar">
          <div className="about-stat-box">
            <span className="about-stat-num">1+</span>
            <span className="about-stat-lbl">Années d'expérience</span>
          </div>
          <div className="about-stat-sep" />
          <div className="about-stat-box">
            <span className="about-stat-num">8+</span>
            <span className="about-stat-lbl">Projets réalisés</span>
          </div>
          <div className="about-stat-sep" />
          <div className="about-stat-box">
            <span className="about-stat-num">100%</span>
            <span className="about-stat-lbl">Dévouement &amp; Passion</span>
          </div>
          <div className="about-stat-sep" />
          
          <div className="about-stat-box">
            <span className="about-stat-num">∞</span>
            <span className="about-stat-lbl">Idées & lignes de code</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="about-page-actions">
          {/* <button
            type="button"
            className="filter-pill"
            onClick={() => handleNavClick('home')}
          >
            <ArrowLeft size={15} />
            <span>Retour à l'accueil</span>
          </button> */}
          <button
            type="button"
            className="hero-primary-btn"
            onClick={() => handleNavClick('projects')}
          >
            <span>Découvrir mes projets</span>
            <ArrowRight size={16} />
          </button>
          <button
            type="button"
            className="cta-talk-btn"
            onClick={() => handleNavClick('contact')}
          >
            <span>Me contacter</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
