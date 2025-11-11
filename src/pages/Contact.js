import { motion } from 'framer-motion';
import siteData from '../data/siteData.json';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export function Contact() {
  const phones = [siteData.site.primaryPhone, ...siteData.site.secondaryPhones];
  const wa = siteData.site.whatsapp.replace(/\D/g, '');
  const { contact } = siteData;
  
  return (
    <div>
      {/* Hero Banner */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-hero"
      >
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Get In Touch</h1>
          <p className="contact-hero-subtitle">We're here to help you plan your perfect journey across Kerala</p>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">
                  <FiPhone/>
                </div>
                <h3>Phone Numbers</h3>
                <div className="contact-list">
                  {phones.map(p => (
                    <a key={p} href={`tel:${p}`} className="contact-link">{p}</a>
                  ))}
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <FaWhatsapp/>
                </div>
                <h3>WhatsApp</h3>
                <a href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer" className="contact-link">{siteData.site.whatsapp}</a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <FiMail/>
                </div>
                <h3>Email</h3>
                <a href={`mailto:${siteData.site.email}`} className="contact-link">{siteData.site.email}</a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <FiClock/>
                </div>
                <h3>Business Hours</h3>
                <p className="contact-text">{contact.hours}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="quick-actions">
              <a className="action-btn primary-btn" href={`tel:${siteData.site.primaryPhone}`}>
                <FiPhone/> Call Now
              </a>
              <a className="action-btn success-btn" href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer">
                <FaWhatsapp/> WhatsApp Us
              </a>
              <a className="action-btn outline-btn" href={`mailto:${siteData.site.email}`}>
                <FiMail/> Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Map */}
      <section className="map-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="map-container">
              <iframe 
                title="map" 
                src={contact.mapUrl} 
                style={{ width: '100%', height: '100%', border: 0, borderRadius: '16px' }} 
                loading="lazy" 
                allowFullScreen
              />
            </div>
            <div className="map-address">
              <FiMapPin/>
              <div className="map-address-text">
                <div style={{ fontWeight: 600, marginBottom: 4 }}>Office Address</div>
                <div className="muted">{siteData.site.address}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
