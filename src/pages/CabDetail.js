import { useNavigate, useLocation } from 'react-router-dom';
import siteData from '../data/siteData.json';
import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export function CabDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state?.item;

  if (!item) {
    return (
      <div>
        <div className="card" style={{ padding: 20 }}>
          <p>Cab not found. <button onClick={() => navigate('/cabs')}>Go back</button></p>
        </div>
      </div>
    );
  }

  const phone = siteData.site.primaryPhone;
  const wa = siteData.site.whatsapp.replace(/\D/g, '');
  const message = encodeURIComponent(`Hello, I'm interested in ${item.name} from ${siteData.site.name}.`);

  return (
    <div>
      <section style={{ paddingTop: 16 }}>
        <div className="card" style={{ padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <button
              onClick={() => navigate(-1)}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid rgba(0,0,0,0.12)',
                background: '#fff',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600
              }}
            >
              ← Back
            </button>
          </div>

          <div style={{ marginBottom: 20 }}>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                marginBottom: '16px'
              }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <h1 style={{ margin: 0, fontSize: 24, fontWeight: 800 }}>{item.name}</h1>
            <p className="muted" style={{ fontSize: 16, marginTop: 8 }}>{item.description}</p>
          </div>

          <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
            <div className="card" style={{ padding: 16 }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: 18 }}>Pricing</h3>
              <div style={{ display: 'grid', gap: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="muted">Starting Price:</span>
                  <span style={{ fontWeight: 700, fontSize: 18 }}>₹{item.startingPrice}.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="muted">Initial KM:</span>
                  <span style={{ fontWeight: 600 }}>{item.startingKm} KM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="muted">Per KM Rate:</span>
                  <span style={{ fontWeight: 600 }}>₹{item.perKm}/KM</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="muted">Passengers:</span>
                  <span style={{ fontWeight: 600 }}>{item.passengers} People</span>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 16 }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: 18 }}>Features</h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {item.features.map(f => (
                  <span className="pill" key={f} style={{ fontSize: 14 }}>{f}</span>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 16 }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: 18 }}>Cab Service Terms</h3>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {(item.cabTerms || siteData.cabTerms || []).map((term, idx) => (
                  <li key={idx} style={{ marginBottom: 8, color: '#6b7280', fontSize: 14, lineHeight: 1.6 }}>
                    <strong style={{ color: '#111' }}>{term.split(':')[0]}:</strong>{term.split(':').slice(1).join(':')}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cab-detail-actions">
            <a
              className="btn primary btn-call-mobile"
              href={`tel:${phone}`}
              aria-label="Call Now"
            >
              <FiPhone/>
              <span className="btn-text">Call Now</span>
            </a>
            <a
              className="btn success btn-whatsapp-mobile"
              href={`https://wa.me/${wa}?text=${message}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp/>
              <span className="btn-text">WhatsApp</span>
            </a>
            <button
              className="btn btn-buy"
              onClick={() => navigate('/booking', { state: { item, type: 'cab' } })}
            >
              Book Now →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

