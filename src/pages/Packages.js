import { motion } from 'framer-motion';
import siteData from '../data/siteData.json';
import { ProductCard } from '../components/ProductCard';

export function Packages() {
  const { packages, sections } = siteData;
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ paddingTop: 16 }}
      >
        <div style={{ marginBottom: 16 }}>
          <h2 className="section-title-modern">
            <span className="title-main">Tour</span>
            <span className="title-accent">Packages</span>
          </h2>
        </div>
        <div className="muted" style={{ marginBottom: 16, fontSize: 14, lineHeight: 1.6 }}>
          {sections.packages.description}
        </div>
        <div className="grid grid-sm-2 grid-lg-3 grid-xl-4">
          {packages.map((pkg, idx) => (
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


