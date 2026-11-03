
import { useState } from 'react';
import {
  ArrowLeft, ArrowRight, ArrowUpRight,
  Search, Sparkles, Compass, X
} from 'lucide-react';
import { projects } from './data/portfolioData';
import skillsBg from '../assets/skills-bg.jpg';

export default function ProjectsPage({ setSelectedProject, handleNavClick }) {
  const [projectFilter, setProjectFilter] = useState('all');
  const [projectSearch, setProjectSearch] = useState('');

  const displayedProjects = projects.filter((p) => {
    const matchesCategory = projectFilter === 'all' || p.category === projectFilter;
    const matchesSearch =
      !projectSearch ||
      p.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
      p.description.toLowerCase().includes(projectSearch.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(projectSearch.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects-page" className="projects-page-view">
      {/* Background Botanical Bokeh */}
      <div className="projects-page-bg-wrap" aria-hidden="true">
        <img src={skillsBg} alt="" className="projects-page-bg-img" />
        <div className="projects-page-bg-overlay" />
        <div className="projects-page-ambient-flare flare-top-right" />
        <div className="projects-page-ambient-flare flare-middle-left" />
        <div className="projects-page-ambient-flare flare-bottom-right" />
        <div className="projects-page-bokeh-dot bokeh-1" />
        <div className="projects-page-bokeh-dot bokeh-2" />
        <div className="projects-page-bokeh-dot bokeh-3" />
      </div>

      <div className="projects-page-content">
        {/* Top Navigation & Breadcrumb */}
        <div className="projects-page-top-bar">
          {/* <button
            type="button"
            className="projects-back-btn"
            onClick={() => handleNavClick('home')}
          >
            <ArrowLeft size={16} />
            <span>Retour à l'accueil</span>
          </button> */}

          <div className="projects-header-badge">
            <span className="projects-code-bracket">&lt;</span>
            <span className="projects-badge-title">Mes Projets &amp; Créations</span>
            <span className="projects-code-bracket">/&gt;</span>
          </div>
        </div>

        {/* Header Intro Banner */}
        <div className="projects-hero-banner">
          <div className="projects-banner-text">
            <div className="projects-pill-tag">
              <Sparkles size={14} />
              <span>Portfolio &amp; Travaux Récents</span>
            </div>
            <h1 className="projects-page-title">
              Des créations nées de la passion, du code et du design.
            </h1>
            <p className="projects-page-desc">
              Explorez une sélection d'applications web complètes, de plateformes interactives et d'expériences numériques alliant architecture technique robuste et esthétique apaisante.
            </p>
          </div>

          <div className="projects-highlights-box">
            <div className="projects-highlight-item">
              <span className="highlight-num">{projects.length}</span>
              <span className="highlight-lbl">Projets Phares</span>
            </div>
            <div className="projects-highlight-sep" />
            <div className="projects-highlight-item">
              <span className="highlight-num">100%</span>
              <span className="highlight-lbl">Sur-Mesure</span>
            </div>
            <div className="projects-highlight-sep" />
            <div className="projects-highlight-item">
              <span className="highlight-num">Full Stack</span>
              <span className="highlight-lbl">&amp; UI/UX</span>
            </div>
          </div>
        </div>

        {/* Filters & Search Control Bar */}
        <div className="projects-control-bar">
          <div className="projects-filter-pills">
            <button
              type="button"
              className={`filter-pill ${projectFilter === 'all' ? 'active' : ''}`}
              onClick={() => setProjectFilter('all')}
            >
              Tous ({projects.length})
            </button>
            <button
              type="button"
              className={`filter-pill ${projectFilter === 'saas' ? 'active' : ''}`}
              onClick={() => setProjectFilter('saas')}
            >
              Web Apps &amp; SaaS
            </button>
            <button
              type="button"
              className={`filter-pill ${projectFilter === 'ecommerce' ? 'active' : ''}`}
              onClick={() => setProjectFilter('ecommerce')}
            >
              E-Commerce &amp; B2B
            </button>
            <button
              type="button"
              className={`filter-pill ${projectFilter === 'vitrine' ? 'active' : ''}`}
              onClick={() => setProjectFilter('vitrine')}
            >
              Vitrines &amp; Agences
            </button>
          </div>

          <div className="projects-search-input-box">
            <Search size={15} color="var(--accent-amber)" />
            <input
              type="text"
              placeholder="Filtrer par mot-clé, tech..."
              value={projectSearch}
              onChange={(e) => setProjectSearch(e.target.value)}
            />
            {projectSearch && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setProjectSearch('')}
                aria-label="Effacer la recherche"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-showcase-grid">
          {displayedProjects.map((project) => (
            <article
              key={project.id}
              className="projects-showcase-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="projects-showcase-img-box">
                <img src={project.image} alt={project.title} className="projects-showcase-img" />
                <div className="projects-showcase-overlay" />
                <div className="projects-card-badge">
                  <span>{project.badge || (project.category === 'saas' ? '⚡ SaaS & Web App' : '✨ Vitrine & E-Commerce')}</span>
                </div>
                <div
                  className="projects-card-arrow-btn"
                  title={project.liveUrl ? "Visiter le site en ligne" : "Voir le projet"}
                  onClick={(e) => {
                    if (project.liveUrl) {
                      e.stopPropagation();
                      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="projects-showcase-info">
                <div className="projects-showcase-meta">
                  <h3 className="projects-showcase-title">{project.title}</h3>
                  <span className="projects-showcase-stats">{project.stats.split('•')[0]}</span>
                </div>
                <p className="projects-showcase-description">{project.description}</p>

                <div className="project-tags-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="projects-card-footer">
                  <span className="projects-view-details">Voir les détails &amp; démo</span>
                  <ArrowRight size={14} className="details-arrow" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {displayedProjects.length === 0 && (
          <div className="projects-empty-state">
            <p>Aucun projet ne correspond à votre recherche "{projectSearch}".</p>
            <button
              type="button"
              className="filter-pill"
              onClick={() => { setProjectFilter('all'); setProjectSearch(''); }}
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Creative Process Showcase */}
        <div className="projects-process-banner">
          <div className="process-header">
            <div className="process-icon-box">
              <Compass size={18} />
            </div>
            <h3 className="process-title">Mon Processus de Création</h3>
          </div>
          <div className="process-steps-grid">
            <div className="process-step-item">
              <span className="process-num">01</span>
              <h4>Écoute &amp; Idéation</h4>
              <p>Comprendre vos objectifs réels, définir l'expérience utilisateur et prototyper sur Figma.</p>
            </div>
            <div className="process-step-item">
              <span className="process-num">02</span>
              <h4>Architecture &amp; Code</h4>
              <p>Développement Full Stack modulaire, performant et typé avec React, Next.js et bases de données fiables.</p>
            </div>
            <div className="process-step-item">
              <span className="process-num">03</span>
              <h4>Micro-Détails &amp; Émotion</h4>
              <p>Animations fluides, typographies élégantes, accessibilité et design chaleureux inspiré de la nature.</p>
            </div>
            <div className="process-step-item">
              <span className="process-num">04</span>
              <h4>Lancement &amp; Suivi</h4>
              <p>Déploiement continu, optimisation du référencement (SEO), performance optimale et accompagnement serein.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="projects-cta-box">
          <div className="projects-cta-content">
            <h3 className="projects-cta-title">Vous avez une idée ou un projet à concrétiser ?</h3>
            <p className="projects-cta-subtitle">
              Que ce soit pour créer une nouvelle application web, redéfinir votre identité numérique ou collaborer, je serai ravie d'échanger avec vous.
            </p>
          </div>
          <div className="projects-cta-buttons">
            <button
              type="button"
              className="cta-talk-btn"
              onClick={() => handleNavClick('contact')}
            >
              <span>Lancer la discussion</span>
              <ArrowUpRight size={16} />
            </button>
            <button
              type="button"
              className="filter-pill"
              onClick={() => handleNavClick('about')}
            >
              <span>Découvrir mon histoire</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
