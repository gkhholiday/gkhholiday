import { Link } from 'react-router-dom';
import siteData from '../data/siteData.json';
import { FiPhone, FiPackage } from 'react-icons/fi';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'framer-motion';

// Car icon SVG
const CarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.7 8c-.1-.3-.3-.6-.5-.8L16.5 5c-.3-.3-.8-.5-1.2-.5h-6.6c-.4 0-.9.2-1.2.5L5.8 7.2c-.2.2-.4.5-.5.8L3.5 10.1c-.8.2-1.5 1-1.5 1.9v3c0 .6.4 1 1 1h2"/>
    <path d="M8 19h8"/>
    <circle cx="7" cy="17" r="1.5"/>
    <circle cx="17" cy="17" r="1.5"/>
    <path d="M8 11L12 5v6"/>
  </svg>
);

export function Home() {
  const { featuredCabs, packages, sections } = siteData;
  
  // Filter only items that should be shown on home page
  const homeCabs = featuredCabs.filter(cab => cab.showInHome);
  const homePackages = packages.filter(pkg => pkg.showInHome);
  
  return (
    <div className="home">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ paddingTop: 16, paddingBottom: 8 }}
      >
        <div className="hero-banner" style={{ backgroundImage: `url(${sections.welcome.heroImage})` }}>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-title"
            >
              {siteData.site.tagline}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-sub"
            >
              {siteData.site.description}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ marginTop: 12 }}
            >
              <a className="btn primary" href={`tel:${siteData.site.primaryPhone}`}><FiPhone/> Call Now</a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div className="section-header" style={{ flex: 1, borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
            <div className="section-icon">
              <CarIcon/>
            </div>
            <h2 className="section-title-modern">
              <span className="title-main">Featured</span>
              <span className="title-accent">Cabs</span>
            </h2>
          </div>
          <Link to={sections.cabs.viewAllLink} className="btn-view-all">
            View All Cabs →
          </Link>
        </div>
        <div className="muted" style={{ marginBottom: 16, fontSize: 14, lineHeight: 1.6 }}>
          {sections.cabs.description}
        </div>
        <div className="grid grid-sm-2 grid-lg-3 grid-xl-4">
          {homeCabs.map((cab, idx) => (
            <motion.div
              key={cab.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProductCard item={cab} type="cab"/>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ marginTop: 40 }}
      >
        <div className="hero-banner" style={{ backgroundImage: `url(${sections.welcome.heroImage})` }}>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="hero-title">{sections.welcome.title}</div>
            <div className="hero-sub">{sections.welcome.subtitle}</div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3
                  }
                }
              }}
            >
              {sections.welcome.description.split('.').map((sentence, idx) => (
                sentence.trim() && (
                  <motion.span
                    key={idx}
                    className="hero-desc"
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                  >
                    {sentence.trim()}{idx < sections.welcome.description.split('.').length - 2 ? '. ' : '.'}
                    {idx < sections.welcome.description.split('.').length - 2 && <br/>}
                  </motion.span>
                )
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        style={{ marginTop: 32 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div className="section-header" style={{ flex: 1, borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
            <div className="section-icon">
              <FiPackage/>
            </div>
            <h2 className="section-title-modern">
              <span className="title-main">Tour</span>
              <span className="title-accent">Packages</span>
            </h2>
          </div>
          <Link to={sections.packages.viewAllLink} className="btn-view-all">
            View All Packages →
          </Link>
        </div>
        <div className="muted" style={{ marginBottom: 16, fontSize: 14, lineHeight: 1.6 }}>
          {sections.packages.description}
        </div>
        <div className="grid grid-sm-2 grid-lg-3 grid-xl-4">
          {homePackages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProductCard item={pkg} type="package"/>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}


