import {
  Sparkles,
  ArrowRight, ArrowUpRight, Briefcase
} from 'lucide-react';
import { projects, skills, experiences } from './data/portfolioData';
import heroBg from '../assets/hero-bg.jpg';
import skillsBg from '../assets/skills-bg.jpg';

export default function HomePage({ setSelectedProject, projectFilter, setProjectFilter, handleNavClick }) {
  const filteredProjects = projects.filter((p) => {
    if (projectFilter === 'all') return true;
    return p.category === projectFilter;
  });

  return (
    <>
      {/* ── Hero Section ── */}
      <section id="home" className="hero-card">
        <div className="hero-bg-wrapper">
          <img
            src={heroBg}
            alt="Atmospheric Conservatory Studio"
            className="hero-bg-image"
          />
        </div>
        <div className="hero-overlay" />

        {/* Arched handwritten conservatory quote on the right */}
        <div className="hero-arch-quote">
          A Kinder Web<br />
          A Brighter Tomorrow
        </div>

        <div className="hero-content">
          <div className="hero-left-column">
            <h1 className="hero-title">
              I build<br />
              bridges between<br />
              <span className="hero-title-italic">ideas and real life.</span>
            </h1>

            <p className="hero-description">
              Je suis une développeuse Full Stack passionnée par la création d'applications web
              modernes, belles et utiles, qui ont un impact positif.
            </p>

            <div className="hero-actions-row">
              <button
                type="button"
                className="hero-primary-btn"
                onClick={() => handleNavClick('projects')}
              >
                <span>Discover my work</span>
                <ArrowRight size={16} />
              </button>

              <div className="hero-handwritten-note">
                Same Girl... Bigger Dreams ♡
              </div>
            </div>
          </div>

          {/* Handwritten note near desk/mug */}
          <div className="hero-handwritten-floating">
            Good Code - Brighter Days ♡
          </div>

          {/* Right Column: Floating Stats & Quote Cards */}
          <div className="hero-right-column">
            <div className="floating-stats-stack">
              {/* <div className="floating-stat-card">
                <div className="stat-icon-box">
                  <Clock size={19} />
                </div>
                <div className="stat-text-box">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div> */}

              {/* <div className="floating-stat-card">
                <div className="stat-icon-box">
                  <CheckCircle2 size={19} />
                </div>
                <div className="stat-text-box">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div> */}

              {/* <div className="floating-stat-card">
                <div className="stat-icon-box">
                  <Smile size={19} />
                </div>
                <div className="stat-text-box">
                  <span className="stat-number">Happy</span>
                  <span className="stat-label">Clients</span>
                </div>
              </div> */}
            </div>

            {/* Floating Quote Card */}
            <div className="floating-quote-card">
              <p className="quote-text">
                "Code is not just logic, it's a form of freedom."
              </p>
              <div className="quote-stars">
                <Sparkles size={13} />
                <Sparkles size={11} />
                <Sparkles size={14} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects Section ── */}
      <section id="projects" className="projects-container-card">
        <div className="section-header-row">
          <h2 className="section-heading-with-icon">
            <Sparkles className="heading-sparkle" size={20} />
            <span>Featured Projects</span>
          </h2>

          <div className="section-header-actions">
            <div className="category-filter-pills">
              <button
                type="button"
                className={`filter-pill ${projectFilter === 'all' ? 'active' : ''}`}
                onClick={() => setProjectFilter('all')}
              >
                Tous
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
                Vitrines
              </button>
            </div>

            <button
              type="button"
              className="view-all-link"
              onClick={() => handleNavClick('projects')}
            >
              <span>Voir tous les projets</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image-box">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                {project.badge && (
                  <div className="projects-card-badge" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                    <span>{project.badge}</span>
                  </div>
                )}
                <div
                  className="project-card-arrow-btn"
                  title={project.liveUrl ? "Visiter le site en ligne" : "Voir le projet"}
                  onClick={(e) => {
                    if (project.liveUrl) {
                      e.stopPropagation();
                      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Lower Bento Grid (Skills & Experience) ── */}
      <div className="bento-lower-grid">
        {/* Skills & Technologies Card */}
        <section id="skills" className="bento-card bento-card-skills">
          {/* Atmospheric Botanical Bokeh Background */}
          <div className="skills-card-bg-wrap" aria-hidden="true">
            <img
              src={skillsBg}
              alt=""
              className="skills-card-bg-img"
            />
            <div className="skills-card-bg-overlay" />
            <div className="skills-card-ambient-flare" />
            <div className="skills-card-bokeh-dot bokeh-1" />
            <div className="skills-card-bokeh-dot bokeh-2" />
            <div className="skills-card-bokeh-dot bokeh-3" />
          </div>

          <div className="skills-card-inner">
            <h2 className="bento-card-title skills-card-title">
              <span className="skills-code-icon" aria-hidden="true">&lt;/&gt;</span>
              <span>Skills &amp; Technologies</span>
            </h2>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-chip" title={`${skill.name} (${skill.category})`}>
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Journey Timeline Card */}
        <section id="experience" className="bento-card">
          <h2 className="bento-card-title">
            <Briefcase className="bento-icon" size={22} />
            <span>My Journey</span>
          </h2>

          <div className="timeline-list">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`timeline-item ${exp.active ? 'active' : ''}`}>
                <div className="timeline-dot" />
                <div className="timeline-year">{exp.period}</div>
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
