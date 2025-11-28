import { NavLink } from "react-router-dom";

const BottomNav = () => {
  const navStyle = "flex flex-col items-center justify-center w-full h-full text-xs gap-1";
  
  // Fonction pour gérer la classe active
  const getLinkClass = ({ isActive }) => 
    isActive ? "text-blue-600 font-bold" : "text-gray-500";

  return (
    <nav style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, 
      height: 'var(--nav-height-mobile)', background: 'white', 
      borderTop: '1px solid #e2e8f0', display: 'flex', 
      justifyContent: 'space-around', alignItems: 'center', zIndex: 1000
    }} className="mobile-nav">
      
      {/* Accueil */}
      <NavLink to="/" className={getLinkClass} style={{display:'flex', flexDirection:'column', alignItems:'center', textDecoration:'none'}}>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        <span style={{fontSize:'0.75rem', marginTop:'4px'}}>Accueil</span>
      </NavLink>

      {/* Projets */}
      <NavLink to="/projects" className={getLinkClass} style={{display:'flex', flexDirection:'column', alignItems:'center', textDecoration:'none'}}>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
        <span style={{fontSize:'0.75rem', marginTop:'4px'}}>Projets</span>
      </NavLink>

      {/* Compétences */}
      <NavLink to="/skills" className={getLinkClass} style={{display:'flex', flexDirection:'column', alignItems:'center', textDecoration:'none'}}>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        <span style={{fontSize:'0.75rem', marginTop:'4px'}}>Skills</span>
      </NavLink>

      {/* Profil/Contact */}
      <NavLink to="/contact" className={getLinkClass} style={{display:'flex', flexDirection:'column', alignItems:'center', textDecoration:'none'}}>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        <span style={{fontSize:'0.75rem', marginTop:'4px'}}>Contact</span>
      </NavLink>
      
    </nav>
  );
};

export default BottomNav;