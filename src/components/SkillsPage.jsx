
import {
  ArrowLeft, ArrowRight, ArrowUpRight,
  Sparkles, Globe, Server, Database, PenTool,
  Zap, Compass, Leaf, Heart, Star
} from 'lucide-react';
import {
  ReactIcon, NextIcon, LaravelIcon, NodeIcon, TSIcon, JSIcon,
  TailwindIcon, MongoIcon, MySQLIcon, PostgresIcon, GitIcon, FigmaIcon
} from './icons/TechIcons';
import skillsBg from '../assets/skills-bg.jpg';

export default function SkillsPage({ handleNavClick }) {
  return (
    <section id="skills-page" className="skills-page-view">
      {/* Background Botanical Bokeh */}
      <div className="skills-page-bg-wrap" aria-hidden="true">
        <img src={skillsBg} alt="" className="skills-page-bg-img" />
        <div className="skills-page-bg-overlay" />
        <div className="skills-page-ambient-flare flare-top-left" />
        <div className="skills-page-ambient-flare flare-middle-right" />
        <div className="skills-page-ambient-flare flare-bottom-left" />
        <div className="skills-page-bokeh-dot bokeh-1" />
        <div className="skills-page-bokeh-dot bokeh-2" />
        <div className="skills-page-bokeh-dot bokeh-3" />
      </div>

      <div className="skills-page-content">

        {/* Top Navigation */}
        <div className="skills-page-top-bar">
          {/* <button
            type="button"
            className="skills-back-btn"
            onClick={() => handleNavClick('home')}
          >
            <ArrowLeft size={16} />
            <span>Retour à l'accueil</span>
          </button> */}
          <div className="skills-header-badge">
            <span className="skills-code-bracket">&lt;</span>
            <span className="skills-badge-title">Mes Compétences &amp; Outils</span>
            <span className="skills-code-bracket">/&gt;</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="skills-hero-banner">
          <div className="skills-banner-text">
            <div className="skills-pill-tag">
              <Sparkles size={14} />
              <span>Stack Technique &amp; Expertise</span>
            </div>
            <h1 className="skills-page-title">
              Des outils choisis avec soin, maîtrisés avec passion.
            </h1>
            <p className="skills-page-desc">
              Full Stack Developer &amp; UI Designer, j'utilise un écosystème technique moderne et cohérent pour créer des applications web robustes, élégantes et performantes. Chaque outil est choisi pour sa fiabilité et son adéquation aux projets.
            </p>
          </div>
          <div className="skills-highlights-box">
            <div className="skills-highlight-item">
              <span className="sk-highlight-num">12+</span>
              <span className="sk-highlight-lbl">Technologies</span>
            </div>
            <div className="skills-highlight-sep" />
            <div className="skills-highlight-item">
              <span className="sk-highlight-num">1+</span>
              <span className="sk-highlight-lbl">Années d'expérience</span>
            </div>
            <div className="skills-highlight-sep" />
            <div className="skills-highlight-item">
              <span className="sk-highlight-num">Full</span>
              <span className="sk-highlight-lbl">Stack</span>
            </div>
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="skills-categories-grid">

          {/* Frontend */}
          <div className="skill-category-card">
            <div className="skill-cat-header">
              <div className="skill-cat-icon-box" style={{ background: 'rgba(99, 179, 237, 0.12)', borderColor: 'rgba(99, 179, 237, 0.3)', color: '#63b3ed' }}>
                <Globe size={18} />
              </div>
              <div>
                <h2 className="skill-cat-title">Frontend &amp; UI</h2>
                <p className="skill-cat-subtitle">Interfaces &amp; Expériences visuelles</p>
              </div>
            </div>
            <div className="skill-items-grid">
              {[
                { name: 'React',        icon: <ReactIcon />,    level: 95, desc: 'Composants réutilisables, hooks, performance' },
                { name: 'Next.js',      icon: <NextIcon />,     level: 90, desc: 'SSR, SSG, App Router, API Routes' },
                { name: 'TypeScript',   icon: <TSIcon />,       level: 88, desc: 'Typage strict, interfaces, généricité' },
                { name: 'JavaScript',   icon: <JSIcon />,       level: 96, desc: 'ES2024+, async/await, closures, DOM' },
                { name: 'Tailwind CSS', icon: <TailwindIcon />, level: 92, desc: 'Design system, responsive, dark mode' },
              ].map((sk) => (
                <div key={sk.name} className="skill-item-row">
                  <div className="skill-item-meta">
                    <div className="skill-item-title-group">
                      {sk.icon && <span className="skill-item-icon-pill">{sk.icon}</span>}
                      <span className="skill-item-name">{sk.name}</span>
                    </div>
                    <span className="skill-item-pct">{sk.level}%</span>
                  </div>
                  <p className="skill-item-desc">{sk.desc}</p>
                  <div className="skill-progress-track">
                    <div className="skill-progress-fill skill-fill-blue" style={{ width: `${sk.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="skill-category-card">
            <div className="skill-cat-header">
              <div className="skill-cat-icon-box" style={{ background: 'rgba(104, 211, 145, 0.12)', borderColor: 'rgba(104, 211, 145, 0.3)', color: '#68d391' }}>
                <Server size={18} />
              </div>
              <div>
                <h2 className="skill-cat-title">Backend &amp; API</h2>
                <p className="skill-cat-subtitle">Architecture &amp; Logique serveur</p>
              </div>
            </div>
            <div className="skill-items-grid">
              {[
                { name: 'Node.js',    icon: <NodeIcon />,    level: 88, desc: 'APIs REST, middleware, streams' },
                { name: 'Laravel',    icon: <LaravelIcon />, level: 85, desc: 'MVC, Eloquent ORM, Blade, Artisan' },
                { name: 'Express.js', icon: <NodeIcon />,    level: 86, desc: 'Routing, auth JWT, middlewares' },
                { name: 'REST APIs',                         level: 93, desc: 'Design, documentation, versioning' },
                { name: 'GraphQL',                           level: 72, desc: 'Queries, mutations, Apollo Client' },
              ].map((sk) => (
                <div key={sk.name} className="skill-item-row">
                  <div className="skill-item-meta">
                    <div className="skill-item-title-group">
                      {sk.icon && <span className="skill-item-icon-pill">{sk.icon}</span>}
                      <span className="skill-item-name">{sk.name}</span>
                    </div>
                    <span className="skill-item-pct">{sk.level}%</span>
                  </div>
                  <p className="skill-item-desc">{sk.desc}</p>
                  <div className="skill-progress-track">
                    <div className="skill-progress-fill skill-fill-green" style={{ width: `${sk.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="skill-category-card">
            <div className="skill-cat-header">
              <div className="skill-cat-icon-box" style={{ background: 'rgba(246, 173, 85, 0.12)', borderColor: 'rgba(246, 173, 85, 0.3)', color: '#f6ad55' }}>
                <Database size={18} />
              </div>
              <div>
                <h2 className="skill-cat-title">Bases de Données</h2>
                <p className="skill-cat-subtitle">Stockage &amp; modélisation des données</p>
              </div>
            </div>
            <div className="skill-items-grid">
              {[
                { name: 'PostgreSQL', icon: <PostgresIcon />, level: 84, desc: 'Relations, triggers, indexing avancé' },
                { name: 'MongoDB',    icon: <MongoIcon />,    level: 82, desc: 'Aggregation pipeline, schémas flexibles' },
                { name: 'MySQL',      icon: <MySQLIcon />,    level: 88, desc: 'Requêtes complexes, procédures stockées' },
                { name: 'Prisma ORM',                         level: 80, desc: 'Schema-first, migrations, type safety' },
                { name: 'Firebase',                           level: 78, desc: 'Realtime DB, Auth, Firestore, Storage' },
              ].map((sk) => (
                <div key={sk.name} className="skill-item-row">
                  <div className="skill-item-meta">
                    <div className="skill-item-title-group">
                      {sk.icon && <span className="skill-item-icon-pill">{sk.icon}</span>}
                      <span className="skill-item-name">{sk.name}</span>
                    </div>
                    <span className="skill-item-pct">{sk.level}%</span>
                  </div>
                  <p className="skill-item-desc">{sk.desc}</p>
                  <div className="skill-progress-track">
                    <div className="skill-progress-fill skill-fill-amber" style={{ width: `${sk.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design & Tools */}
          <div className="skill-category-card">
            <div className="skill-cat-header">
              <div className="skill-cat-icon-box" style={{ background: 'rgba(183, 148, 246, 0.12)', borderColor: 'rgba(183, 148, 246, 0.3)', color: '#b794f4' }}>
                <PenTool size={18} />
              </div>
              <div>
                <h2 className="skill-cat-title">Design &amp; Outils</h2>
                <p className="skill-cat-subtitle">UI/UX, versionning &amp; déploiement</p>
              </div>
            </div>
            <div className="skill-items-grid">
              {[
                { name: 'Figma',            icon: <FigmaIcon />, level: 90, desc: 'Prototypage, design systems, auto-layout' },
                { name: 'Git & GitHub',     icon: <GitIcon />,   level: 93, desc: 'Branching, PR reviews, CI/CD workflows' },
                { name: 'Docker',                                level: 74, desc: 'Conteneurisation, docker-compose, images' },
                { name: 'Vercel / Netlify',                      level: 88, desc: 'Déploiement continu, edge functions' },
                { name: 'Jest / Vitest',                         level: 76, desc: 'Tests unitaires, integration, mocking' },
              ].map((sk) => (
                <div key={sk.name} className="skill-item-row">
                  <div className="skill-item-meta">
                    <div className="skill-item-title-group">
                      {sk.icon && <span className="skill-item-icon-pill">{sk.icon}</span>}
                      <span className="skill-item-name">{sk.name}</span>
                    </div>
                    <span className="skill-item-pct">{sk.level}%</span>
                  </div>
                  <p className="skill-item-desc">{sk.desc}</p>
                  <div className="skill-progress-track">
                    <div className="skill-progress-fill skill-fill-purple" style={{ width: `${sk.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Currently Learning Banner */}
        <div className="skills-learning-banner">
          <div className="skills-learning-header">
            <div className="skills-learning-icon">
              <Zap size={18} />
            </div>
            <h3 className="skills-learning-title">En cours d'apprentissage &amp; veille technologique</h3>
          </div>
          <div className="skills-learning-chips">
            {['Rust', 'Three.js', 'WebGL', 'Astro', 'Bun.js', 'tRPC', 'Drizzle ORM'].map((tech) => (
              <span key={tech} className="skills-learning-chip">{tech}</span>
            ))}
          </div>
        </div>

        {/* Soft Skills Strip */}
        <div className="skills-soft-strip">
          <h3 className="skills-soft-title">Ce qui va au-delà du code</h3>
          <div className="skills-soft-grid">
            {[
              { icon: <Compass size={16} />, label: 'Problem Solving',       desc: 'Décomposer les problèmes complexes avec clarté et méthode.' },
              { icon: <Leaf size={16} />,    label: 'Attention aux détails', desc: 'Chaque pixel, chaque ligne de code, chaque interaction compte.' },
              { icon: <Heart size={16} />,   label: 'Empathie & UX',         desc: 'Concevoir pour les utilisateurs réels, pas pour les spécifications.' },
              { icon: <Star size={16} />,    label: 'Autonomie & Initiative', desc: 'Anticiper les besoins, proposer des solutions sans attendre.' },
            ].map((soft) => (
              <div key={soft.label} className="skills-soft-item">
                <div className="skills-soft-icon">{soft.icon}</div>
                <h4 className="skills-soft-label">{soft.label}</h4>
                <p className="skills-soft-desc">{soft.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="skills-cta-box">
          <div className="skills-cta-content">
            <h3 className="skills-cta-title">Un projet qui correspond à mon profil ?</h3>
            <p className="skills-cta-subtitle">
              Je suis toujours ouverte à de nouvelles collaborations stimulantes. Discutons de votre idée et de comment je peux y contribuer.
            </p>
          </div>
          <div className="skills-cta-buttons">
            <button
              type="button"
              className="cta-talk-btn"
              onClick={() => handleNavClick('contact')}
            >
              <span>Me contacter</span>
              <ArrowUpRight size={16} />
            </button>
            <button
              type="button"
              className="filter-pill"
              onClick={() => handleNavClick('projects')}
            >
              <span>Voir mes projets</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
