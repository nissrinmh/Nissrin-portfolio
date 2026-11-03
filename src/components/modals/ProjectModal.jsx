
import { X, ArrowUpRight, ExternalLink, Globe } from 'lucide-react';

export default function ProjectModal({ project, onClose, onContact }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h3>{project.title}</h3>
            {project.badge && (
              <span
                style={{
                  fontSize: '11.5px',
                  padding: '3px 9px',
                  borderRadius: '9999px',
                  background: 'rgba(226, 148, 98, 0.15)',
                  border: '1px solid rgba(226, 148, 98, 0.35)',
                  color: '#fed7aa',
                  fontWeight: '500',
                }}
              >
                {project.badge}
              </span>
            )}
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Fermer la modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '14px', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '240px', objectFit: 'cover' }}
            />
          </div>

          {project.liveUrl && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '14px',
              padding: '9px 14px',
              background: 'rgba(226, 148, 98, 0.08)',
              borderRadius: '10px',
              border: '1px solid rgba(226, 148, 98, 0.22)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--accent-amber)' }}>
                <Globe size={15} />
                <span style={{ fontWeight: '600' }}>{project.liveUrl.replace('https://', '').replace(/\/$/, '')}</span>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '12px',
                  color: '#fed7aa',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.06)',
                }}
              >
                <span>Visiter</span>
                <ExternalLink size={12} />
              </a>
            </div>
          )}

          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
            {project.tags.map((t) => (
              <span
                key={t}
                className="project-tag"
                style={{ background: 'rgba(245, 158, 11, 0.15)', borderColor: 'rgba(245, 158, 11, 0.35)', color: '#fed7aa' }}
              >
                {t}
              </span>
            ))}
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px', fontSize: '14px' }}>
            {project.detailedDesc}
          </p>

          <div style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '20px' }}>
            <div style={{ fontSize: '13px', color: 'var(--accent-amber)', fontWeight: '600', marginBottom: '4px' }}>Statistiques &amp; Performance</div>
            <div style={{ fontSize: '13.5px', color: '#fff' }}>{project.stats}</div>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
            <button type="button" className="filter-pill" onClick={onClose}>
              Fermer
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-primary-btn"
                style={{
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 18px',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #e29462, #c86835)',
                  color: '#ffffff',
                  fontWeight: '600',
                  fontSize: '13px',
                  boxShadow: '0 4px 14px rgba(226, 148, 98, 0.35)',
                  cursor: 'pointer',
                }}
              >
                <span>Visiter le site</span>
                <ExternalLink size={14} />
              </a>
            )}
            <button
              type="button"
              className="cta-talk-btn"
              onClick={onContact}
            >
              <span>Discuter de ce projet</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
