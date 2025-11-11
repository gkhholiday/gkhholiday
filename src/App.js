import './App.css';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Cabs } from './pages/Cabs';
import { Packages } from './pages/Packages';
import { Contact } from './pages/Contact';
import { Booking } from './pages/Booking';
import { CabDetail } from './pages/CabDetail';
import { PackageDetail } from './pages/PackageDetail';
import { Footer } from './components/Footer';
import siteData from './data/siteData.json';
import { useEffect } from 'react';
import { FiHome, FiUsers, FiTruck, FiPackage, FiPhone } from 'react-icons/fi';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function Header() {
  return (
    <div className="header">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, paddingBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {siteData.site.logoImage ? (
            <img 
              src={siteData.site.logoImage} 
              alt={siteData.site.name} 
              style={{ height: 50, width: 'auto', objectFit: 'contain' }}
            />
          ) : (
            <div className="pill" style={{ fontWeight: 700 }}>{siteData.site.logoText}</div>
          )}
          <div>
            <div style={{ fontSize: 18, fontWeight: 800 }}>{siteData.site.name}</div>
            <div className="muted" style={{ fontSize: 12 }}>{siteData.site.tagline}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <nav className="top-nav">
            {siteData.nav.map(n => (
              <NavLink key={n.path} to={n.path} className={({ isActive }) => isActive ? 'active' : ''}>{n.label}</NavLink>
            ))}
          </nav>
          <a className="btn ghost desktop-only" href={`tel:${siteData.site.primaryPhone}`}><FiPhone/> Call</a>
        </div>
      </div>
    </div>
  );
}

function MobileNav() {
  const nav = [
    { to: '/', label: 'Home', icon: <FiHome/> },
    { to: '/about', label: 'About', icon: <FiUsers/> },
    { to: '/cabs', label: 'Cabs', icon: <FiTruck/> },
    { to: '/packages', label: 'Packages', icon: <FiPackage/> },
    { to: '/contact', label: 'Contact', icon: <FiPhone/> }
  ];
  return (
    <nav className="mobile-nav">
      <ul className="container" style={{ paddingLeft: 8, paddingRight: 8 }}>
        {nav.map(item => (
          <li key={item.to}>
            <NavLink to={item.to} className={({ isActive }) => isActive ? 'active' : ''}>
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function App() {
  useEffect(() => {
    const t = siteData.site.theme;
    if (t) {
      const r = document.documentElement;
      r.style.setProperty('--bg', t.bg);
      r.style.setProperty('--card', t.card);
      r.style.setProperty('--muted', t.muted);
      r.style.setProperty('--text', t.text);
      r.style.setProperty('--brand', t.brand);
      r.style.setProperty('--brand-2', t.brand2);
      r.style.setProperty('--accentA', t.accentA || 'rgba(0,0,0,0.04)');
      r.style.setProperty('--accentB', t.accentB || 'rgba(0,0,0,0.02)');
      r.style.setProperty('--footerBg', t.footerBg || '#f5f5f0');
      r.style.setProperty('--footerBottomBg', t.footerBottomBg || '#8b6f47');
      r.style.setProperty('--footerText', t.footerText || '#111111');
      r.style.setProperty('--footerBottomText', t.footerBottomText || '#ffffff');
    }
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      <div className="container" style={{ paddingBottom: 80 }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/cabs" element={<Cabs/>} />
          <Route path="/packages" element={<Packages/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/cab-detail" element={<CabDetail/>} />
          <Route path="/package-detail" element={<PackageDetail/>} />
        </Routes>
      </div>
      <Footer/>
      <MobileNav/>
    </BrowserRouter>
  );
}

export default App;
