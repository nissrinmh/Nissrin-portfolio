
import { X, Search, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function SearchModal({ isOpen, searchQuery, setSearchQuery, onClose, onSelectProject }) {
  if (!isOpen) return null;

  const searchResults = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Recherche rapide</h3>
          <button type="button" className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <div className="search-modal-box">
            <Search size={18} color="var(--accent-amber)" />
            <input
              type="text"
              autoFocus
              placeholder="Rechercher projets, compétences, mots-clés..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {searchResults.length > 0 ? (
              searchResults.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => onSelectProject(proj)}
                  style={{
                    padding: '10px 14px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(226, 148, 98, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(226, 148, 98, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  }}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '8px',
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                      <span style={{ fontWeight: '600', color: '#fff', fontSize: '14px' }}>{proj.title}</span>
                      {proj.badge && (
                        <span style={{ fontSize: '10.5px', padding: '1px 6px', borderRadius: '4px', background: 'rgba(226, 148, 98, 0.15)', color: '#fed7aa' }}>
                          {proj.badge.split(' ')[0]}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {proj.description}
                    </div>
                  </div>
                  <ArrowRight size={16} color="var(--accent-amber)" style={{ flexShrink: 0 }} />
                </div>
              ))
            ) : (
              <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '16px' }}>
                Aucun résultat trouvé pour "{searchQuery}".
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
