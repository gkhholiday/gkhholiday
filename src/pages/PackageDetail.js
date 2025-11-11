import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import siteData from '../data/siteData.json';
import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export function PackageDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state?.item;

  if (!item) {
    return (
      <div>
        <div className="card" style={{ padding: 20 }}>
          <p>Package not found. <button onClick={() => navigate('/packages')}>Go back</button></p>
        </div>
      </div>
    );
  }

  const phone = siteData.site.primaryPhone;
  const wa = siteData.site.whatsapp.replace(/\D/g, '');
  const message = encodeURIComponent(`Hello, I'm interested in ${item.title} tour package from ${siteData.site.name}.`);

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
              alt={item.title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                marginBottom: '16px'
              }}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <h1 style={{ margin: 0, fontSize: 24, fontWeight: 800 }}>{item.title}</h1>
            <p className="muted" style={{ fontSize: 16, marginTop: 8 }}>{item.description}</p>
            <p className="muted" style={{ fontSize: 14, marginTop: 4 }}>{item.duration}</p>
          </div>

          <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
            <div className="card" style={{ padding: 16 }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: 18 }}>Route</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                {item.route.map((city, idx) => (
                  <React.Fragment key={city}>
                    <span style={{ fontWeight: 600 }}>{city}</span>
                    {idx < item.route.length - 1 && <span className="muted">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 16 }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: 18 }}>Highlights</h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {item.highlights.map(h => (
                  <span className="pill" key={h} style={{ fontSize: 14 }}>{h}</span>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 16 }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: 18 }}>Service Terms</h3>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {(item.serviceTerms || []).map((term, idx) => (
                  <li key={idx} style={{ marginBottom: 8, color: '#6b7280', fontSize: 14, lineHeight: 1.6 }}>
                    {term}
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
              onClick={() => navigate('/booking', { state: { item, type: 'package' } })}
            >
              Book Now →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

