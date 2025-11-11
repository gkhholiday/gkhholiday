import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import siteData from '../data/siteData.json';
import { FiPhone, FiMail, FiMapPin, FiArrowUp, FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="scroll-to-top"
      aria-label="Scroll to top"
    >
      <FiArrowUp/>
    </button>
  );
}

function WhatsAppFloat() {
  const wa = siteData.site.whatsapp.replace(/\D/g, '');
  const message = encodeURIComponent(`Hello, I'm interested in ${siteData.site.name} services.`);
  
  return (
    <a
      href={`https://wa.me/${wa}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp/>
    </a>
  );
}

export function Footer() {
  const { site, nav, services } = siteData;
  const footer = site.footer || {};
  const phones = [site.primaryPhone, ...site.secondaryPhones];
  
  // Extract pin from address
  const addressMatch = site.address.match(/(.+?)\s+(\d{6})$/);
  const addressText = addressMatch ? addressMatch[1] : site.address;
  const pin = addressMatch ? addressMatch[2] : null;

  return (
    <>
      <footer className="main-footer" style={{ 
        background: 'var(--footerBg)',
        color: 'var(--footerText)'
      }}>
        <div className="container" style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div className="footer-grid">
            {/* Company Column */}
            <div className="footer-col">
              <div className="footer-logo">
                {site.logoImage ? (
                  <img 
                    src={site.logoImage} 
                    alt={site.name} 
                    style={{ height: 60, width: 'auto', objectFit: 'contain', marginBottom: 12 }}
                  />
                ) : (
                  <>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <div style={{ fontSize: 28, fontWeight: 900, color: '#111', letterSpacing: 1 }}>{site.logoText}</div>
                      <svg width="48" height="24" viewBox="0 0 48 24" fill="none" style={{ marginLeft: 4 }}>
                        <path d="M2 18 Q12 6, 24 12 T46 8" stroke={site.theme?.brand || '#16a34a'} strokeWidth="2.5" fill="none"/>
                        <circle cx="10" cy="12" r="2.5" fill="#111"/>
                      </svg>
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 12, letterSpacing: 0.5 }}>{site.name.toUpperCase()}</div>
                  </>
                )}
                <p className="muted" style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
                  {footer.companyDescription || site.description}
                </p>
                <div style={{ display: 'flex', gap: 8 }}>
                  {site.social.facebook && (
                    <a href={site.social.facebook} target="_blank" rel="noreferrer" className="social-icon">
                      <FiFacebook/>
                    </a>
                  )}
                  {site.social.instagram && (
                    <a href={site.social.instagram} target="_blank" rel="noreferrer" className="social-icon">
                      <FiInstagram/>
                    </a>
                  )}
                  {site.social.youtube && (
                    <a href={site.social.youtube} target="_blank" rel="noreferrer" className="social-icon">
                      <FiYoutube/>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div className="footer-col hide-mobile">
              <h4 className="footer-heading">Our Services</h4>
              <ul className="footer-list">
                {services.map(service => (
                  <li key={service}>
                    <Link to="/cabs">{service}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-list">
                {nav.map(link => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-col">
              <h4 className="footer-heading">Contact Us</h4>
              <ul className="footer-list">
                {phones.map(phone => (
                  <li key={phone} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span className="footer-icon">
                      <FiPhone/>
                    </span>
                    <a href={`tel:${phone}`}>{phone}</a>
                  </li>
                ))}
                <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="footer-icon">
                    <FiMail/>
                  </span>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span className="footer-icon">
                    <FiMapPin/>
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: 4 }}>Office</div>
                    <div style={{ fontSize: 12, lineHeight: 1.5 }}>
                      Door number : {addressText}{pin ? `, Pin : ${pin}` : ''}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="footer-bottom" style={{ 
        background: 'var(--footerBottomBg)',
        color: 'var(--footerBottomText)'
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          paddingTop: 12,
          paddingBottom: 12,
          flexWrap: 'wrap',
          gap: 8
        }}>
          <div style={{ fontSize: 13 }}>{footer.copyright || `©${new Date().getFullYear()}. ${site.name} All Rights Reserved.`}</div>
          <div style={{ fontSize: 13 }}>
            <a href={footer.poweredByLink || '#'} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
              {footer.poweredBy || 'Powered by auraweblabs.com'}
            </a>
          </div>
        </div>
      </div>

      <WhatsAppFloat/>
      <ScrollToTop/>
    </>
  );
}

