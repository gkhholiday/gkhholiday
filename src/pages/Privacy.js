import { motion } from 'framer-motion';
import siteData from '../data/siteData.json';

export function Privacy() {
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
          <h1 className="contact-hero-title">Privacy Policy</h1>
          <p className="contact-hero-subtitle">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
        </div>
      </motion.section>

      {/* Privacy Policy Content */}
      <section className="privacy-section" style={{ padding: '40px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ 
                background: 'var(--card)', 
                padding: '40px', 
                borderRadius: '16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                lineHeight: 1.8,
                color: 'var(--text)'
              }}>
                <p style={{ marginBottom: '24px', fontSize: '14px', color: 'var(--muted)' }}>
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                <div style={{ marginBottom: '32px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>
                    1. Introduction
                  </h2>
                  <p style={{ marginBottom: '16px', fontSize: '15px' }}>
                    Welcome to {siteData.site.name} ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our cab booking and tour package services.
                  </p>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>
                    2. Information We Collect
                  </h2>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', marginTop: '20px', color: 'var(--text)' }}>
                    2.1 Personal Information
                  </h3>
                  <p style={{ marginBottom: '12px', fontSize: '15px' }}>
                    We may collect personal information that you provide to us when you:
                  </p>
                  <ul style={{ marginLeft: '24px', marginBottom: '16px', fontSize: '15px' }}>
                    <li>Book a cab or tour package</li>
                    <li>Contact us via phone, email, or WhatsApp</li>
                    <li>Subscribe to our newsletter or updates</li>
                    <li>Fill out forms on our website</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                  <p style={{ marginBottom: '16px', fontSize: '15px' }}>
                    This information may include:
                  </p>
                  <ul style={{ marginLeft: '24px', marginBottom: '16px', fontSize: '15px' }}>
                    <li>Name and contact details (phone number, email address)</li>
                    <li>Travel details (pickup location, destination, dates, number of passengers)</li>
                    <li>Payment information (processed securely through third-party payment gateways)</li>
                    <li>Identification documents (if required for certain services)</li>
                  </ul>

                  <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', marginTop: '20px', color: 'var(--text)' }}>
                    2.2 Automatically Collected Information
                  </h3>
                  <p style={{ marginBottom: '12px', fontSize: '15px' }}>
                    When you visit our website, we may automatically collect certain information about your device, including:
                  </p>
                  <ul style={{ marginLeft: '24px', marginBottom: '16px', fontSize: '15px' }}>
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Device information and operating system</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>
                    3. How We Use Your Information
                  </h2>
                  <p style={{ marginBottom: '12px', fontSize: '15px' }}>
                    We use the information we collect to:
                  </p>
                  <ul style={{ marginLeft: '24px', marginBottom: '16px', fontSize: '15px' }}>
                    <li>Process and manage your bookings</li>
                    <li>Communicate with you about your bookings, inquiries, and services</li>
                    <li>Send you booking confirmations, updates, and reminders</li>
                    <li>Improve our services and website experience</li>
                    <li>Send promotional offers, newsletters, and marketing communications (with your consent)</li>
                    <li>Respond to your customer service requests</li>
                    <li>Comply with legal obligations and prevent fraud</li>
                    <li>Analyze website usage and trends</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>
                    4. Information Sharing and Disclosure
                  </h2>
                  <p style={{ marginBottom: '12px', fontSize: '15px' }}>
                    We do not sell your personal information. We may share your information only in the following circumstances:
                  </p>
                  <ul style={{ marginLeft: '24px', marginBottom: '16px', fontSize: '15px' }}>
                    <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website, conducting business, or serving our customers (e.g., payment processors, email service providers)</li>
                    <li><strong>Drivers and Partners:</strong> With our drivers and tour partners to fulfill your bookings</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>
                    5. Data Security
                  </h2>
                  <p style={{ marginBottom: '16px', fontSize: '15px' }}>
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>
                    6. Cookies and Tracking Technologies
                  </h2>
                  <p style={{ marginBottom: '16px', fontSize: '15px' }}>
                    Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie preferences through your browser settings, though this may affect website functionality.
                  </p>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>
                    7. Your Rights and Choices
                  </h2>
                  <p style={{ marginBottom: '12px', fontSize: '15px' }}>
                    You have the right to:
                  </p>
                  <ul style={{ marginLeft: '24px', marginBottom: '16px', fontSize: '15px' }}>
                    <li>Access and receive a copy of your personal information</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to or restrict processing of your information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent where processing is based on consent</li>
                  </ul>
                  <p style={{ marginBottom: '16px', fontSize: '15px' }}>
                    To exercise these rights, please contact us using the contact information provided below.
                  </p>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>
                    8. Data Retention
                  </h2>
                  <p style={{ marginBottom: '16px', fontSize: '15px' }}>
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                  </p>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>
                    9. Third-Party Links
                  </h2>
                  <p style={{ marginBottom: '16px', fontSize: '15px' }}>
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>
                    10. Children's Privacy
                  </h2>
                  <p style={{ marginBottom: '16px', fontSize: '15px' }}>
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>
                    11. Changes to This Privacy Policy
                  </h2>
                  <p style={{ marginBottom: '16px', fontSize: '15px' }}>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                  </p>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>
                    12. Contact Us
                  </h2>
                  <p style={{ marginBottom: '12px', fontSize: '15px' }}>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div style={{ 
                    background: 'var(--accentA)', 
                    padding: '20px', 
                    borderRadius: '12px',
                    marginTop: '16px'
                  }}>
                    <p style={{ marginBottom: '8px', fontSize: '15px' }}>
                      <strong>{siteData.site.name}</strong>
                    </p>
                    <p style={{ marginBottom: '8px', fontSize: '15px' }}>
                      <strong>Address:</strong> {siteData.site.address}
                    </p>
                    <p style={{ marginBottom: '8px', fontSize: '15px' }}>
                      <strong>Phone:</strong> <a href={`tel:${siteData.site.primaryPhone}`} style={{ color: 'var(--brand)', textDecoration: 'none' }}>{siteData.site.primaryPhone}</a>
                    </p>
                    <p style={{ marginBottom: '8px', fontSize: '15px' }}>
                      <strong>Email:</strong> <a href={`mailto:${siteData.site.email}`} style={{ color: 'var(--brand)', textDecoration: 'none' }}>{siteData.site.email}</a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}


