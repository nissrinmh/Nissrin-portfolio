import { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowUpRight, Loader2, AlertCircle } from 'lucide-react';
import { sendContactMessage, getMailtoFallback, TARGET_EMAIL } from '../../services/contactService';

export default function ContactModal({ isOpen, onClose, project }) {
  const [contactForm, setContactForm] = useState(() => ({
    name: '',
    email: '',
    message: project ? `Bonjour Nissrin,\n\nJe souhaiterais échanger avec vous au sujet de votre projet "${project.title}"...` : '',
  }));
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await sendContactMessage({
        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message,
        project: project ? project.title : undefined,
      });
      setFormSent(true);
      setTimeout(() => {
        setFormSent(false);
        onClose();
        setContactForm({
          name: '',
          email: '',
          message: project ? `Bonjour Nissrin,\n\nJe souhaiterais échanger avec vous au sujet de votre projet "${project.title}"...` : '',
        });
      }, 2500);
    } catch (err) {
      console.error('Erreur envoi modal:', err);
      setSubmitError(
        err.message || "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou utiliser l'envoi direct par email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Sparkles size={18} color="var(--accent-amber)" />
            <h3>{project ? `Projet : ${project.title}` : 'Parlons de votre projet'}</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {formSent ? (
            <div style={{ textAlign: 'center', padding: '30px 20px' }}>
              <CheckCircle2 size={48} color="#10b981" style={{ margin: '0 auto 16px' }} />
              <h4 style={{ color: '#fff', fontSize: '20px', marginBottom: '8px' }}>Message envoyé avec succès !</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.5' }}>
                Merci de m'avoir contactée. Votre message a bien été transmis à <strong>{TARGET_EMAIL}</strong>. Je vous répondrai sous 24h.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Votre Nom</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  placeholder="Ex: Sarah Martin"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Votre Email</label>
                <input
                  type="email"
                  required
                  className="form-input"
                  placeholder="sarah@example.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Votre Message ou Projet</label>
                <textarea
                  required
                  className="form-textarea"
                  placeholder="Décrivez brièvement vos besoins, vos idées ou votre projet..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="form-submit-btn"
                disabled={isSubmitting}
                style={{
                  opacity: isSubmitting ? 0.75 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
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
                    <ArrowUpRight size={18} />
                  </>
                )}
              </button>

              {submitError && (
                <div
                  style={{
                    marginTop: '14px',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    background: 'rgba(239, 68, 68, 0.12)',
                    border: '1px solid rgba(239, 68, 68, 0.35)',
                    color: '#fca5a5',
                    fontSize: '13px',
                    lineHeight: '1.5',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AlertCircle size={15} color="#ef4444" style={{ flexShrink: 0 }} />
                    <span>{submitError}</span>
                  </div>
                  <a
                    href={getMailtoFallback({
                      name: contactForm.name,
                      email: contactForm.email,
                      message: contactForm.message,
                      subject: project ? `[Portfolio] Discussion sur ${project.title}` : `[Portfolio] Message de ${contactForm.name || 'Client'}`,
                    })}
                    style={{
                      color: '#fed7aa',
                      textDecoration: 'underline',
                      fontWeight: '600',
                      fontSize: '12.5px',
                    }}
                  >
                    ✉️ Ouvrir directement dans votre messagerie ({TARGET_EMAIL})
                  </a>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
