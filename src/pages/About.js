import { useState, useEffect, useRef } from 'react';
import siteData from '../data/siteData.json';
import { motion } from 'framer-motion';
import { Gallery } from './Gallery';
import { Reviews } from '../components/Reviews';

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

export function About() {
  const { about, services, featuredCabs } = siteData;
  const statsRef = useRef(null);

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
      <section className="why-choose-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title-with-line">
              Why Choose Us
            </h2>
          </motion.div>
          <div className="features-grid">
            {about.whyChoose.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="feature-item"
              >
                <div className="feature-number">{(idx + 1).toString().padStart(2, '0')}</div>
                <div className="feature-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
                    key={s}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="service-tag"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
