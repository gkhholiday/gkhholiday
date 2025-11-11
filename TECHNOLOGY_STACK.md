# Technology Stack & Dependencies

This document lists all the technologies, libraries, and tools used in this React travel agency website project.

## 🚀 Core Framework & Build Tools

### React & React DOM
- **Version:** ^19.2.0
- **Purpose:** Core UI library for building user interfaces
- **Link:** https://react.dev/

### Create React App (CRA)
- **Tool:** react-scripts
- **Version:** 5.0.1
- **Purpose:** Build tooling, webpack, Babel, ESLint, and development server
- **Link:** https://create-react-app.dev/
- **Features Provided:**
  - Hot module reloading
  - Build optimization
  - Code splitting
  - Production builds
  - Jest testing framework

---

## 🎨 UI & Animation Libraries

### Framer Motion
- **Version:** ^12.23.24
- **Purpose:** Smooth animations and transitions
- **Usage:** Page transitions, scroll animations, staggered animations
- **Link:** https://www.framer.com/motion/

### React Icons
- **Version:** ^5.5.0
- **Purpose:** Icon library (Feather Icons, Font Awesome)
- **Icons Used:**
  - `FiPhone`, `FiMail`, `FiMapPin`, `FiClock`, `FiPackage`, etc. (Feather Icons)
  - `FaWhatsapp`, `FaFacebook`, `FaInstagram`, `FaYoutube` (Font Awesome)
- **Link:** https://react-icons.github.io/react-icons/

---

## 🧭 Routing

### React Router DOM
- **Version:** ^6.30.1
- **Purpose:** Client-side routing and navigation
- **Features Used:**
  - `BrowserRouter` - Main router component
  - `Routes`, `Route` - Route definitions
  - `NavLink` - Navigation links with active states
  - `useNavigate`, `useLocation` - Navigation hooks
- **Link:** https://reactrouter.com/

---

## 🎯 CSS & Styling

### Custom CSS (No Framework)
- **Method:** Traditional CSS with CSS Variables
- **Key Features:**
  - CSS Custom Properties for theming
  - Mobile-first responsive design
  - Media queries for breakpoints
  - Flexbox and CSS Grid layouts
  - CSS animations and transitions

### CSS Variables Used:
```css
--bg: White background
--card: Card background
--muted: Secondary text color
--text: Primary text color
--brand, --brand2: Green theme colors
--accentA, --accentB: Gradient accent colors
```

---

## 📦 Data Management

### JSON Data File
- **File:** `src/data/siteData.json`
- **Purpose:** Centralized content management
- **Contains:**
  - Site metadata (name, tagline, theme colors)
  - Navigation links
  - Featured cabs and tour packages
  - Contact information
  - Social media links
  - Terms and conditions
  - Section descriptions and content

---

## 🧪 Testing Libraries

### React Testing Library
- **Version:** ^16.3.0
- **Purpose:** Component testing utilities

### DOM Testing Library
- **Version:** ^10.4.1
- **Purpose:** DOM query utilities

### Jest DOM
- **Version:** ^6.9.1
- **Purpose:** Custom Jest matchers for DOM assertions

### User Event
- **Version:** ^13.5.0
- **Purpose:** Simulate user interactions in tests

---

## 📊 Web Vitals

### Web Vitals
- **Version:** ^2.1.4
- **Purpose:** Measure and report on Core Web Vitals (LCP, FID, CLS)
- **Link:** https://web.dev/vitals/

---

## 🔧 Development Tools

### ESLint
- **Configuration:** react-app, react-app/jest
- **Purpose:** Code linting and quality checks

### Git & Version Control
- **Repository:** GitHub
- **Hosting:** Netlify (for deployment)

---

## 🌐 Browser Support

### Production Browsers
- >0.2% market share
- Not dead browsers
- Not Opera Mini

### Development Browsers
- Latest Chrome
- Latest Firefox
- Latest Safari

---

## 📱 Key Features Implemented

1. **Responsive Design**
   - Mobile-first approach
   - Breakpoints: 640px (tablet), 1024px (desktop)

2. **Animations**
   - Scroll-triggered animations
   - Staggered text animations
   - Smooth page transitions
   - Hero banner animations

3. **Routing**
   - 5 main pages: Home, About, Cabs, Packages, Contact
   - Dynamic detail pages for each cab/package
   - Booking page with form

4. **External Integrations**
   - WhatsApp integration (`https://wa.me/`)
   - Phone call integration (`tel:`)
   - Email integration (`mailto:`)
   - Embedded Google Maps

5. **Performance Optimizations**
   - Code splitting
   - Lazy loading images
   - Minified production builds
   - Optimized bundle sizes

---

## 📁 Project Structure

```
cab/
├── public/
│   ├── images/          # All image assets
│   ├── index.html       # HTML template
│   └── manifest.json    # PWA manifest
├── src/
│   ├── components/      # Reusable components
│   │   ├── ProductCard.js
│   │   └── Footer.js
│   ├── pages/          # Page components
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Cabs.js
│   │   ├── Packages.js
│   │   ├── Contact.js
│   │   ├── Booking.js
│   │   ├── CabDetail.js
│   │   └── PackageDetail.js
│   ├── data/
│   │   └── siteData.json  # All content data
│   ├── App.js          # Main app component
│   ├── index.js        # Entry point
│   ├── index.css       # Global styles
│   └── App.css         # App-specific styles
├── package.json        # Dependencies and scripts
└── README.md          # Project documentation
```

---

## 🚀 Commands

### Development
```bash
npm start        # Start dev server at http://localhost:3000
```

### Production
```bash
npm run build    # Build optimized production bundle
```

### Testing
```bash
npm test         # Run test suite
```

### Deployment
- **Platform:** Netlify
- **Build Command:** `npm run build`
- **Publish Directory:** `build`
- **Node Version:** 18.x (recommended)

---

## 📝 Additional Notes

- **No CSS Framework:** The project uses custom CSS instead of Tailwind, Bootstrap, or Material-UI
- **No State Management Library:** Uses React's built-in `useState` and React Router's location state
- **No API Integration:** Static site with all data in JSON file
- **PWA Ready:** Can be converted to Progressive Web App if needed
- **SEO Friendly:** Server-side rendering can be added with Next.js if required

---

## 🔗 Important Links

- **React:** https://react.dev/
- **React Router:** https://reactrouter.com/
- **Framer Motion:** https://www.framer.com/motion/
- **React Icons:** https://react-icons.github.io/react-icons/
- **Create React App:** https://create-react-app.dev/
- **Netlify:** https://www.netlify.com/

