import { useState } from 'react';
import {
  ArrowLeft, ArrowRight,
  Sparkles, Mail, MapPin, Calendar,
  Clock, Heart, CheckCircle2, Copy, Check, Send,
  Loader2, AlertCircle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './icons/SocialIcons';
import skillsBg from '../assets/skills-bg.jpg';
import { sendContactMessage, getMailtoFallback, TARGET_EMAIL } from '../services/contactService';

const serviceLabels = {
  fullstack: '💻 Application Full Stack',
  uiux: '✨ UI/UX Design',
  refonte: '⚡ Refonte & Optimisation',
  autre: '☕ Échange / Autre',
};

export default function ContactPage({ handleNavClick }) {
  const [contactForm, setContactForm]       = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent]             = useState(false);
  const [isSubmitting, setIsSubmitting]     = useState(false);
  const [submitError, setSubmitError]       = useState(null);
  const [copiedEmail, setCopiedEmail]       = useState(false);
  const [contactService, setContactService] = useState('fullstack');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(TARGET_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await sendContactMessage({
        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message,
        service: serviceLabels[contactService] || contactService,
      });
      setFormSent(true);
      setContactForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Erreur envoi contact:', err);
      setSubmitError(
        err.message || "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou m'écrire directement par email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-page" className="contact-page-view">
      {/* Background Botanical Bokeh */}
      <div className="contact-page-bg-wrap" aria-hidden="true">
        <img src={skillsBg} alt="" className="contact-page-bg-img" />
        <div className="contact-page-bg-overlay" />
        <div className="contact-page-ambient-flare flare-top-right" />
        <div className="contact-page-ambient-flare flare-bottom-left" />
        <div className="contact-page-bokeh-dot bokeh-1" />
        <div className="contact-page-bokeh-dot bokeh-2" />
        <div className="contact-page-bokeh-dot bokeh-3" />
      </div>

      <div className="contact-page-content">

        {/* Top Navigation */}
        <div className="contact-page-top-bar">
          <button
            type="button"
            className="contact-back-btn"
            onClick={() => handleNavClick('home')}
          >
            <ArrowLeft size={16} />
            <span>Retour à l'accueil</span>
          </button>
          <div className="contact-header-badge">
            <span className="contact-code-bracket">&lt;</span>
            <span className="contact-badge-title">Contact &amp; Collaborations</span>
            <span className="contact-code-bracket">/&gt;</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="contact-hero-banner">
          <div className="contact-banner-text">
            <div className="contact-pill-tag">
              <Sparkles size={14} />
              <span>Un projet ? Une idée ? Donnons-lui vie</span>
            </div>
            <h1 className="contact-page-title">
              Construisons ensemble une expérience web mémorable.
            </h1>
            <p className="contact-page-desc">
              Que vous souhaitiez concevoir une application Full Stack de A à Z, redéfinir votre identité visuelle ou échanger sur une opportunité de collaboration, mon inbox est toujours ouverte.
            </p>
          </div>
          <div className="contact-status-box">
            <div className="contact-status-dot-wrap">
              <span className="contact-pulse-ring" />
              <span className="contact-pulse-core" />
            </div>
            <div className="contact-status-details">
              <span className="contact-status-title">Statut : Disponible</span>
              <span className="contact-status-desc">Freelance · Missions Full Remote · CDI</span>
            </div>
          </div>
        </div>

        {/* Main Content: Form + Information Column */}
        <div className="contact-main-grid">

          {/* LEFT: Formulaire immersif */}
          <div className="contact-form-card">
            <div className="contact-card-heading">
              <div className="contact-card-icon-wrap">
                <Mail size={18} />
              </div>
              <div>
                <h2 className="contact-form-title">M'écrire un message</h2>
                <p className="contact-form-sub">Remplissez le formulaire ci-dessous. Réponse sous 24h garantie.</p>
              </div>
            </div>

            {formSent ? (
              <div className="contact-success-state">
                <div className="contact-success-icon-wrap">
                  <CheckCircle2 size={46} className="contact-success-check" />
                </div>
                <h3 className="contact-success-heading">Message envoyé avec succès !</h3>
                <p className="contact-success-desc">
                  Merci beaucoup pour votre message. Il a été transmis directement à <strong>{TARGET_EMAIL}</strong>. Je vous répondrai dans les plus brefs délais (souvent sous 24h).
                </p>
                <button
                  type="button"
                  className="contact-another-btn"
                  onClick={() => {
                    setFormSent(false);
                    setSubmitError(null);
                  }}
                >
                  <span>Envoyer un autre message</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ) : (
              <form className="contact-form-element" onSubmit={handleContactSubmit}>

                {/* Project service chips */}
                <div className="contact-group">
                  <label className="contact-field-label">Quel est votre besoin ?</label>
                  <div className="contact-chips-row">
                    {[
                      { id: 'fullstack', label: '💻 Application Full Stack' },
                      { id: 'uiux',      label: '✨ UI/UX Design' },
                      { id: 'refonte',   label: '⚡ Refonte & Optimisation' },
                      { id: 'autre',     label: '☕ Échange / Autre' },
                    ].map((chip) => (
                      <button
                        key={chip.id}
                        type="button"
                        className={`contact-chip-btn ${contactService === chip.id ? 'active' : ''}`}
                        onClick={() => setContactService(chip.id)}
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email inputs */}
                <div className="contact-two-cols">
                  <div className="contact-group">
                    <label htmlFor="contact-inpage-name" className="contact-field-label">Votre Nom ou Entreprise</label>
                    <input
                      id="contact-inpage-name"
                      type="text"
                      required
                      placeholder="ex: Alex Dupont"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="contact-text-input"
                    />
                  </div>
                  <div className="contact-group">
                    <label htmlFor="contact-inpage-email" className="contact-field-label">Votre Adresse Email</label>
                    <input
                      id="contact-inpage-email"
                      type="email"
                      required
                      placeholder="ex: alex@company.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="contact-text-input"
                    />
                  </div>
                </div>

                {/* Message area */}
                <div className="contact-group">
                  <label htmlFor="contact-inpage-message" className="contact-field-label">Votre Message</label>
                  <textarea
                    id="contact-inpage-message"
                    required
                    rows={6}
                    placeholder="Détaillez vos attentes, les fonctionnalités souhaitées, les délais ou posez vos questions..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="contact-textarea-input"
                  />
                </div>

                {/* Submit action */}
                <div className="contact-form-actions">
                  <button
                    type="submit"
                    className="contact-send-action-btn"
                    disabled={isSubmitting}
                    style={{
                      opacity: isSubmitting ? 0.75 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span>Envoi en cours...</span>
                        <Loader2 size={16} className="spinner-icon" />
                      </>
                    ) : (
                      <>
                        <span>Envoyer le message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                  {/* <div className="contact-safe-note">
                    <span>🔒 Transmission directe à {TARGET_EMAIL}</span>
                  </div> */}
                </div>

                {/* Error Banner with Mailto Fallback */}
                {submitError && (
                  <div style={{
                    marginTop: '16px',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(239, 68, 68, 0.12)',
                    border: '1px solid rgba(239, 68, 68, 0.35)',
                    color: '#fca5a5',
                    fontSize: '13.5px',
                    lineHeight: '1.5',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <AlertCircle size={16} color="#ef4444" style={{ flexShrink: 0 }} />
                      <span>{submitError}</span>
                    </div>
                    <a
                      href={getMailtoFallback({
                        name: contactForm.name,
                        email: contactForm.email,
                        message: contactForm.message,
                        subject: `[Portfolio] Message de ${contactForm.name || 'Client'}`
                      })}
                      style={{
                        color: '#fed7aa',
                        textDecoration: 'underline',
                        fontWeight: '600',
                        fontSize: '13px'
                      }}
                    >
                      ✉️ Cliquez ici pour envoyer directement via votre messagerie ({TARGET_EMAIL})
                    </a>
                  </div>
                )}
              </form>
            )}
          </div>

          {/* RIGHT: Contact Information & Direct Channels */}
          <div className="contact-info-column">

            {/* Direct Contact Card */}
            <div className="contact-side-panel">
              <h3 className="contact-side-heading">Coordonnées Directes</h3>

              <div className="contact-direct-list">
                {/* Email Row with Copy */}
                <div className="contact-direct-card">
                  <div className="contact-direct-icon"><Mail size={16} /></div>
                  <div className="contact-direct-content">
                    <span className="contact-direct-sub">Email officiel</span>
                    <span className="contact-direct-primary">nissrinmahan02@gmail.com</span>
                  </div>
                  <button
                    type="button"
                    className="contact-copy-action"
                    onClick={handleCopyEmail}
                    title="Copier l'email"
                  >
                    {copiedEmail ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                    <span>{copiedEmail ? 'Copié !' : 'Copier'}</span>
                  </button>
                </div>

                {/* Location Row */}
                <div className="contact-direct-card">
                  <div className="contact-direct-icon"><MapPin size={16} /></div>
                  <div className="contact-direct-content">
                    <span className="contact-direct-sub">Localisation</span>
                    <span className="contact-direct-primary">Tanger, Maroc (UTC+1 / GMT+1)</span>
                  </div>
                </div>

                {/* Visio / Meeting Row */}
                <div className="contact-direct-card">
                  <div className="contact-direct-icon"><Calendar size={16} /></div>
                  <div className="contact-direct-content">
                    <span className="contact-direct-sub">Visio &amp; Rencontres</span>
                    <span className="contact-direct-primary">Google Meet · Zoom · Slack</span>
                  </div>
                </div>
              </div>

              {/* Social networks block */}
              <div className="contact-social-channels">
                <span className="contact-social-label">Réseaux &amp; Plateformes pro :</span>
                <div className="contact-social-tags">
                  <a href="https://github.com/nissrinmh" target="_blank" rel="noreferrer" className="contact-social-link">
                    <GithubIcon />
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/nissrin-mahan-2965781ba" target="_blank" rel="noreferrer" className="contact-social-link">
                    <LinkedinIcon />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="contact-social-link">
                    <InstagramIcon />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Collaboration Steps Panel */}
            <div className="contact-side-panel">
              <h3 className="contact-side-heading">Comment nous collaborons</h3>
              <div className="contact-steps-flow">
                {[
                  { num: '01', title: 'Prise de contact',           desc: 'Analyse de votre besoin et premier échange visio sous 48h.' },
                  { num: '02', title: 'Proposition & Design',       desc: 'Devis détaillé, wireframes et validation du design system.' },
                  { num: '03', title: 'Développement & Livraison',  desc: 'Sprints courts, retours continus et mise en production sereine.' },
                ].map((item) => (
                  <div key={item.num} className="contact-step-row">
                    <div className="contact-step-number">{item.num}</div>
                    <div className="contact-step-text">
                      <span className="contact-step-title">{item.title}</span>
                      <span className="contact-step-desc">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Assurance Strip */}
        <div className="contact-assurance-strip">
          <div className="contact-assurance-item">
            <Clock size={16} className="contact-assurance-icon" />
            <span>Réponse sous 24 heures</span>
          </div>
          <div className="contact-assurance-sep" />
          <div className="contact-assurance-item">
            <Heart size={16} className="contact-assurance-icon" />
            <span>Démarche bienveillante et transparente</span>
          </div>
          <div className="contact-assurance-sep" />
          <div className="contact-assurance-item">
            <CheckCircle2 size={16} className="contact-assurance-icon" />
            <span>Devis clair et sans engagement</span>
          </div>
        </div>

      </div>
    </section>
  );
}
