import { NavLink } from "react-router-dom";
import logoImage from '../assets/LogoMain.png';

const TopNav = () => {
  const links = [
    { path: "/", label: "Accueil" },
    { path: "/projects", label: "Projets" },
    { path: "/experience", label: "Expérience" },
    { path: "/skills", label: "Compétences" },
    { path: "/about", label: "À propos" },
  ];

  return (
    <header 
      className="desktop-nav"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: 'var(--nav-height-desktop)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 max(20px, 5%)',
        zIndex: 1000
      }} 
    >
      
      {/* ZONE LOGO */}
      <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        
        {/* Votre Image de Logo (Agrandie) */}
        <img 
          src={logoImage} 
          alt="Edris Youssef" 
          style={{ 
            height: '50px', // Agrandie de 32px à 50px
            maxHeight: '100%', // Sécurité pour ne pas dépasser la navbar
            width: 'auto', 
            objectFit: 'contain',
            display: 'block'
          }} 
        />
      </NavLink>

      {/* LIENS DE NAVIGATION */}
      <nav style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
        {links.map((link) => (
          <NavLink 
            key={link.path} 
            to={link.path} 
            className={({ isActive }) => `nav-link-desktop ${isActive ? 'active' : ''}`}
          >
            {link.label}
          </NavLink>
        ))}

        {/* Séparateur */}
        <div style={{ width: '1px', height: '20px', background: '#e2e8f0', margin: '0 10px' }}></div>

        {/* Bouton Contact */}
        <NavLink 
          to="/contact" 
          className="btn-primary" 
          style={{
            padding: '10px 20px', borderRadius: '10px', fontSize: '0.9rem', 
            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px',
            fontWeight: '600',
            boxShadow: '0 4px 6px rgba(37, 99, 235, 0.2)',
            transition: 'all 0.2s'
          }}
        >
          <span>Me Contacter</span>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </NavLink>
      </nav>

    </header>
  );
};

export default TopNav;