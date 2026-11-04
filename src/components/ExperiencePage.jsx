
import { useState } from 'react';
import {
  ArrowLeft, ArrowRight, ArrowUpRight,
  Sparkles, Clock, CheckCircle2, Heart, Briefcase, GraduationCap,
  Code2, Palette, Layers, Terminal, Leaf, Compass, Coffee, Smile
} from 'lucide-react';
import skillsBg from '../assets/skills-bg.jpg';

export default function ExperiencePage({ handleNavClick }) {
  const [activeFilter, setActiveFilter] = useState('experience');

  const timeline = [
    {
      id: 'codetrend',
      period: '01/2026 — 06/2026',
      role: 'Stage Développeuse Web & Full Stack',
      company: 'CodeTrend',
      type: 'Stage',
      typeColor: 'active',
      category: 'experience',
      icon: <Code2 size={16} />,
      projects: [
        { name: '🚗 Location Abderrahmane Car', desc: 'Réservation automobile et gestion de flotte en temps réel' },
        { name: '📦 Scobe', desc: 'Gestion de fournitures, matériel de bureau et catalogue' },
        { name: '🏛️ Indiana Decor', desc: 'Site vitrine immersif pour architecture & aménagement intérieur' },
        { name: '🌿 Cooperative Sahara', desc: 'E-commerce bilingue produits cosmétiques et naturels du Sahara' },
        { name: '💄 ParaForYou', desc: 'E-commerce moderne dédié aux produits de beauté & parapharmacie' },
      ],
      tags: ['React', 'Node.js', 'E-commerce', 'Full Stack', 'Tailwind CSS'],
    },
    {
      id: '2mcrafters',
      period: '28/04/2025 — 31/05/2025',
      role: 'Stage Développeuse Web (Remote)',
      company: '2mCrafters',
      type: 'Stage',
      typeColor: 'internship',
      category: 'experience',
      icon: <Layers size={16} />,
      projects: [
        { name: '👥 SIRH – Pointage & Absences', desc: 'Gestion des présences et temps de travail (SMEE & DCT Dozal)' },
        { name: '🎯 Coach Me', desc: "Plateforme d'accompagnement pro réalisée pour Horizon RH" },
      ],
      tags: ['SIRH', 'React', 'Management RH', 'Remote Work', 'Web App'],
    },
    {
      id: 'ismontic',
      period: '2023 — 2025',
      role: 'Technicienne Spécialisée en Développement Digital - Full Stack',
      company: "Institut Spécialisé dans les Métiers de l'Offshoring et des NTIC (ISMONTIC), Tanger",
      type: 'Diplôme',
      typeColor: 'education',
      category: 'education',
      icon: <Terminal size={16} />,
      bullets: [
        "Conception & développement d'applications web Full Stack modernes (Frontend & Backend)",
        "Maîtrise des technologies JavaScript, React, Node.js, bases relationnelles et NoSQL",
        "Architecture d'APIs REST, intégration responsive soignée et méthodologies agiles (Git/GitHub)",
      ],
      tags: ['Full Stack', 'React', 'Node.js', 'JavaScript', 'SQL', 'Git'],
    },
    {
      id: 'fst',
      period: '2019 — 2022',
      role: 'Licence en Génie des Procédés',
      company: 'Faculté des Sciences et Techniques (FST), Tanger',
      type: 'Formation',
      typeColor: 'education',
      category: 'education',
      icon: <Compass size={16} />,
      bullets: [
        'Formation scientifique axée sur la modélisation, le calcul et la rigueur méthodique',
        "Développement d'un esprit d'analyse aiguisé et d'une approche méthodique de résolution de problèmes",
      ],
      tags: ['FST Tanger', 'Génie des Procédés', 'Analyse & Méthode', 'Rigueur'],
    },
    {
      id: 'lycee',
      period: '2018 — 2019',
      role: 'Baccalauréat en Science Physique',
      company: 'Lycée Abdelkrim Al Khattabi, Tanger',
      type: 'Diplôme',
      typeColor: 'education',
      category: 'education',
      icon: <Sparkles size={16} />,
      bullets: [
        'Baccalauréat scientifique avec dominante en sciences physiques et mathématiques',
        'Acquisition des bases du raisonnement logique et de la démarche scientifique déductive',
      ],
      tags: ['Sciences Physiques', 'Mathématiques', 'Raisonnement Logique'],
    },
  ];

  const filteredTimeline = timeline.filter(
    (exp) => activeFilter === 'all' || exp.category === activeFilter
  );

  return (
    <section id="experience-page" className="exp-page-view">
      {/* Background */}
      <div className="exp-page-bg-wrap" aria-hidden="true">
        <img src={skillsBg} alt="" className="exp-page-bg-img" />
        <div className="exp-page-bg-overlay" />
        <div className="exp-page-ambient-flare flare-top-right" />
        <div className="exp-page-ambient-flare flare-bottom-left" />
        <div className="exp-page-bokeh-dot bokeh-1" />
        <div className="exp-page-bokeh-dot bokeh-2" />
        <div className="exp-page-bokeh-dot bokeh-3" />
      </div>

      <div className="exp-page-content">

        {/* Top Nav */}
        <div className="exp-page-top-bar">
          <button type="button" className="exp-back-btn" onClick={() => handleNavClick('home')}>
            <ArrowLeft size={16} />
            <span>Retour à l'accueil</span>
          </button>
          <div className="exp-header-badge">
            <span className="exp-code-bracket">&lt;</span>
            <span className="exp-badge-title">Mon Parcours &amp; Expérience</span>
            <span className="exp-code-bracket">/&gt;</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="exp-hero-banner">
          <div className="exp-banner-text">
            <div className="exp-pill-tag">
              <Sparkles size={14} />
              <span>Parcours Professionnel &amp; Académique</span>
            </div>
            <h1 className="exp-page-title">
              Un chemin façonné par la curiosité, le code et la rigueur.
            </h1>
            <p className="exp-page-desc">
              De mes premiers pas scientifiques à mes réalisations Full Stack actuelles, chaque étape a nourri ma vision du développement web : créer des solutions alliant performance technique, rigueur et design soigné.
            </p>
          </div>
          <div className="exp-highlights-box">
            <div className="exp-highlight-item">
              <span className="exp-hl-num">2</span>
              <span className="exp-hl-lbl">Stages Entreprise</span>
            </div>
            <div className="exp-highlight-sep" />
            <div className="exp-highlight-item">
              <span className="exp-hl-num">7+</span>
              <span className="exp-hl-lbl">Projets Réalisés</span>
            </div>
            <div className="exp-highlight-sep" />
            <div className="exp-highlight-item">
              <span className="exp-hl-num">Full Stack</span>
              <span className="exp-hl-lbl">Spécialisation</span>
            </div>
          </div>
        </div>

        {/* Main layout: Timeline + Side panels */}
        <div className="exp-main-grid">

          {/* LEFT: Vertical Timeline */}
          <div className="exp-timeline-column">
            
            {/* Header + Filter Pills Bar */}
            <div className="exp-col-header">
              <h2 className="exp-col-title">
                <Clock size={16} />
                <span>Ligne du temps</span>
              </h2>

              <div className="exp-filter-pills">
                <button
                  type="button"
                  className={`filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('all')}
                >
                  <Sparkles size={13} />
                  <span>Tout ({timeline.length})</span>
                </button>
                <button
                  type="button"
                  className={`filter-pill ${activeFilter === 'experience' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('experience')}
                >
                  <Briefcase size={13} />
                  <span>Expériences ({timeline.filter(t => t.category === 'experience').length})</span>
                </button>
                <button
                  type="button"
                  className={`filter-pill ${activeFilter === 'education' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('education')}
                >
                  <GraduationCap size={13} />
                  <span>Formations ({timeline.filter(t => t.category === 'education').length})</span>
                </button>
              </div>
            </div>

            {filteredTimeline.map((exp, idx) => (
              <div key={exp.id} className={`exp-timeline-item exp-type-${exp.typeColor}`}>
                <div className="exp-timeline-dot">
                  <div className="exp-dot-icon">{exp.icon}</div>
                  {idx < filteredTimeline.length - 1 && <div className="exp-dot-line" />}
                </div>
                <div className="exp-timeline-card">
                  <div className="exp-card-top">
                    <div className="exp-card-meta">
                      <span className={`exp-type-badge badge-${exp.typeColor}`}>{exp.type}</span>
                      <span className="exp-period">{exp.period}</span>
                    </div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>

                  {/* Micro-grid of projects for internships */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="exp-projects-mini-grid">
                      {exp.projects.map((proj, pIdx) => (
                        <div key={pIdx} className="exp-proj-chip">
                          <span className="exp-proj-name">{proj.name}</span>
                          <span className="exp-proj-desc">{proj.desc}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bullets list for education */}
                  {exp.bullets && exp.bullets.length > 0 && (
                    <ul className="exp-bullets">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="exp-bullet-item">
                          <CheckCircle2 size={13} className="exp-bullet-icon" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="exp-tags-row">
                    {exp.tags.map((t) => (
                      <span key={t} className="exp-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Side panels (Sticky) */}
          <div className="exp-side-column">

            {/* Chiffres clés */}
            <div className="exp-side-card">
              <div className="exp-side-card-header">
                <div className="exp-side-icon-box"><Sparkles size={16} /></div>
                <h3 className="exp-side-title">Chiffres Clés</h3>
              </div>
              <div className="exp-metrics-grid">
                {[
                  { num: '2',    lbl: 'Stages réalisés' },
                  { num: '7+',   lbl: 'Projets livrés' },
                  { num: '12+',  lbl: 'Technologies' },
                  { num: '100%', lbl: 'Satisfaction clients' },
                ].map((m) => (
                  <div key={m.lbl} className="exp-metric-item">
                    <span className="exp-metric-num">{m.num}</span>
                    <span className="exp-metric-lbl">{m.lbl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Valeurs de travail */}
            <div className="exp-side-card">
              <div className="exp-side-card-header">
                <div className="exp-side-icon-box"><Heart size={16} /></div>
                <h3 className="exp-side-title">Ce qui m'anime</h3>
              </div>
              <div className="exp-values-list">
                {[
                  { icon: <Leaf size={14} />,    text: 'Éco-conception & performance web' },
                  { icon: <Compass size={14} />, text: 'Architecture propre et maintenable' },
                  { icon: <Palette size={14} />, text: 'Design émotionnel & micro-interactions' },
                  { icon: <Coffee size={14} />,  text: 'Deep work & rigueur technique' },
                  { icon: <Smile size={14} />,   text: 'Esprit d\'équipe et bienveillance' },
                ].map((v, i) => (
                  <div key={i} className="exp-value-row">
                    <div className="exp-value-icon">{v.icon}</div>
                    <span className="exp-value-text">{v.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Formations */}
            {/* <div className="exp-side-card">
              <div className="exp-side-card-header">
                <div className="exp-side-icon-box"><CheckCircle2 size={16} /></div>
                <h3 className="exp-side-title">Certifications &amp; Veille</h3>
              </div>
              <div className="exp-certs-list">
                {[
                  { name: 'Meta Front-End Developer',      org: 'Coursera / Meta',   year: '2023' },
                  { name: 'Node.js Application Developer', org: 'OpenJS Foundation', year: '2023' },
                  { name: 'UI/UX Design Foundations',      org: 'Google / Coursera', year: '2022' },
                  { name: 'PostgreSQL Advanced Queries',    org: 'Udemy',             year: '2024' },
                ].map((c) => (
                  <div key={c.name} className="exp-cert-item">
                    <div className="exp-cert-dot" />
                    <div className="exp-cert-info">
                      <span className="exp-cert-name">{c.name}</span>
                      <span className="exp-cert-org">{c.org} · {c.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Disponibilité */}
            <div className="exp-availability-card">
              <div className="exp-avail-dot" />
              <div className="exp-avail-text">
                <span className="exp-avail-status">Disponible pour de nouveaux projets</span>
                <span className="exp-avail-sub">Freelance · Full Remote · Temps plein</span>
              </div>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="exp-cta-box">
          <div className="exp-cta-content">
            <h3 className="exp-cta-title">Travaillons ensemble sur votre prochain projet !</h3>
            <p className="exp-cta-subtitle">
              Mon parcours m'a appris à m'adapter, à apprendre vite et à livrer un travail soigné. Discutons de votre vision.
            </p>
          </div>
          <div className="exp-cta-buttons">
            <button type="button" className="cta-talk-btn" onClick={() => handleNavClick('contact')}>
              <span>Me contacter</span>
              <ArrowUpRight size={16} />
            </button>
            <button type="button" className="filter-pill" onClick={() => handleNavClick('projects')}>
              <span>Voir mes projets</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
