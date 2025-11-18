import { Link } from 'react-router-dom';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">MonPortfolio</div>
      <nav className="navbar-links">
        <button onClick={() => scrollToSection("hero")}>Accueil</button>
        <button onClick={() => scrollToSection("about")}>À propos</button>
        <button onClick={() => scrollToSection("projects")}>Projets</button>
        <button onClick={() => scrollToSection("skills")}>Compétences</button>
        <button onClick={() => scrollToSection("experience")}>Expériences</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
