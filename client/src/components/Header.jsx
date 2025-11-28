import { useState } from 'react';
import HeaderCSS from '../styles/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={HeaderCSS.Header}>
      <div className={HeaderCSS.logo}>
        <span className={HeaderCSS.logoAccent}>M</span>on
        <span className={HeaderCSS.logoAccent}>P</span>ortfolio
      </div>
      <button
        className={HeaderCSS.hamburger}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className={HeaderCSS.hamburgerBar}></span>
        <span className={HeaderCSS.hamburgerBar}></span>
        <span className={HeaderCSS.hamburgerBar}></span>
      </button>
      {/* Overlay pour fermer le menu en cliquant à l'extérieur */}
      {isMenuOpen && <div className={HeaderCSS.overlay} onClick={() => setIsMenuOpen(false)}></div>}
      <nav className={`${HeaderCSS.navbarLinks} ${isMenuOpen ? HeaderCSS.navbarOpen : ''}`}>
        <button className={HeaderCSS.navbarLinksbtn} onClick={() => scrollToSection("hero")}>Accueil</button>
        <button className={HeaderCSS.navbarLinksbtn} onClick={() => scrollToSection("about")}>À propos</button>
        <button className={HeaderCSS.navbarLinksbtn} onClick={() => scrollToSection("projects")}>Projets</button>
        <button className={HeaderCSS.navbarLinksbtn} onClick={() => scrollToSection("skills")}>Compétences</button>
        <button className={HeaderCSS.navbarLinksbtn} onClick={() => scrollToSection("experience")}>Expériences</button>
        <button className={HeaderCSS.navbarLinksbtn} onClick={() => scrollToSection("contact")}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
