import { useState, useEffect, useRef } from 'react';
import siteData from '../data/siteData.json';
import { motion } from 'framer-motion';
import { Gallery } from './Gallery';
import { Reviews } from '../components/Reviews';
import { FiCheck } from 'react-icons/fi';

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {items.map((item, idx) => (
          <div
            key={item.id}
            className={`carousel-slide ${idx === currentIndex ? 'active' : ''}`}
          >
            <img src={item.image} alt={item.name} />
            <div className="carousel-content">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {items.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="faq-item"
      style={{
        background: '#ffffff',
        borderRadius: '12px',
        border: '1px solid rgba(0,0,0,0.08)',
        overflow: 'hidden',
        marginBottom: '12px',
        transition: 'all 0.3s ease'
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '20px 24px',
          background: 'transparent',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          transition: 'background 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(0,0,0,0.02)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
        }}
      >
        <h3 style={{
          fontSize: '16px',
          fontWeight: 600,
          color: 'var(--text)',
          margin: 0,
          flex: 1,
          lineHeight: 1.4
        }}>
          {question}
        </h3>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            color: 'var(--brand)',
            flexShrink: 0,
            transition: 'transform 0.3s'
          }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ overflow: 'hidden' }}
      >
        <div style={{
          padding: '0 24px 20px 24px',
          color: 'var(--muted)',
          fontSize: '14px',
          lineHeight: 1.7
        }}>
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function About() {
  const { about, services, featuredCabs } = siteData;
  const statsRef = useRef(null);

  const faqs = [
    {
      question: "How do I book Taxi Service in Kochi?",
      answer: "You can book our Taxi Service in Kochi through phone, WhatsApp, or our website. Instant confirmation is provided."
    },
    {
      question: "Are Kerala Tour Packages customisable?",
      answer: "Yes. All our Kerala Tour Packages can be customised based on your budget, number of days, and preferred destinations."
    },
    {
      question: "What is included in Sabarimala Taxi Packages?",
      answer: "Our Sabarimala Taxi Packages include pickup, drop, flexible halts, safe drivers, and well-maintained vehicles."
    },
    {
      question: "Do you provide Cochin Airport Pickup & Drop at midnight?",
      answer: "Yes. Our Cochin Airport Pickup & Drop service operates 24/7."
    },
    {
      question: "Are outstation cabs available on a per-day basis?",
      answer: "Yes. Our outstation cabs can be booked for one-way, round trip, or multi-day travel."
    },
    {
      question: "How many people can travel in a tempo traveller?",
      answer: "Our tempo traveller rent in Ernakulam includes 12, 17, and 26-seater options depending on your group size."
    },
    {
      question: "Is the Cab Service in Kerala suitable for families?",
      answer: "Absolutely. Our Cab Service in Kerala offers safe, clean, and family-friendly vehicles."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-count');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      const statNumbers = statsRef.current.querySelectorAll('.stat-number');
      statNumbers.forEach((stat) => observer.observe(stat));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero Banner */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="about-hero"
      >
        <div
          className="about-hero-image"
          style={{ backgroundImage: `url(${about.heroImage})` }}
        >
          <div className="about-hero-overlay">
            <div className="container">
              <h1 className="about-hero-title">{about.heroTitle}</h1>
              <p className="about-hero-text">{about.heroText}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mission-content"
          >
            <div className="mission-main">
              <h2 className="section-title-large">Our Mission</h2>
              <p className="mission-text">
                Since day one, our mission has been simple: safe, punctual, and comfortable travel at honest prices. 
                We combine a modern fleet with experienced, courteous drivers and transparent communication.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="about-gallery-section" style={{ padding: '40px 0' }}>
        <div className="container">
          <Gallery />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section" style={{ padding: '60px 0', background: 'linear-gradient(135deg, var(--accentA), var(--accentB))' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 40 }}
          >
            <h2 className="section-title-modern" style={{ justifyContent: 'center', marginBottom: 16 }}>
              <span className="title-main">{about.whyChoose.title}</span>
            </h2>
          </motion.div>
          
          <div style={{ 
            maxWidth: '900px', 
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: 32
          }}>
            {about.whyChoose.features.map((feature, idx) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 20px',
                  background: '#ffffff',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                }}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--brand)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <FiCheck size={16} />
                </div>
                <span style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: 'var(--text)',
                  lineHeight: 1.5
                }}>
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              textAlign: 'center',
              padding: '24px',
              background: '#ffffff',
              borderRadius: '12px',
              maxWidth: '800px',
              margin: '0 auto',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}
          >
            <p style={{
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'var(--text)',
              margin: 0
            }}>
              {about.whyChoose.eeatText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="stats-section"
        ref={statsRef}
      >
        <div className="container">
          <div className="stats-grid">
            {about.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="stat-item"
              >
                <div className="stat-number" data-target={stat.value.replace(/[^0-9]/g, '')}>
                  {stat.value}
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Fleet Carousel */}
      <section className="fleet-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title-with-line">
              Our Fleet
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Carousel items={featuredCabs.slice(0, 4)} />
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title-with-line">
              What We Offer
            </h2>
          </motion.div>
          
          <div className="services-grid">
            <div className="service-category">
              <h3>Our Highlights</h3>
              <div className="services-list">
                {about.highlights.map((h, idx) => (
                  <motion.span
                    key={h}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="service-tag"
                  >
                    {h}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="service-category">
              <h3>Our Services</h3>
              <div className="services-list">
                {services.map((s, idx) => (
                  <motion.span
                    key={s.name || s}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="service-tag"
                  >
                    {s.name || s}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" style={{ padding: '60px 0', background: '#f8f9fa' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title-with-line" style={{ marginBottom: 32 }}>
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
