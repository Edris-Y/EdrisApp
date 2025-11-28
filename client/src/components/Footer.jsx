import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        
        <div className="footer-grid">
          
          {/* COLONNE 1 : MARQUE & BIO */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{ 
                width: "36px", height: "36px", background: "#2563eb", 
                borderRadius: "10px", color: "white", 
                display: "flex", alignItems: "center", justifyContent: "center", 
                fontWeight: "bold", fontSize: "1.2rem" 
              }}>
                E
              </div>
              <span style={{ fontWeight: "800", fontSize: "1.3rem", color: "#0f172a" }}>Edris Youssef</span>
            </div>
            <p className="footer-desc">
              Étudiant en informatique passionné par la Data, l'IA et le développement web moderne.
              Transformons vos idées en réalité.
            </p>
          </div>

          {/* COLONNE 2 : NAVIGATION RAPIDE */}
          <div>
            <h4 className="footer-title">Plan du site</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">→ Accueil</Link>
              <Link to="/projects" className="footer-link">→ Mes Projets</Link>
              <Link to="/skills" className="footer-link">→ Compétences</Link>
              <Link to="/about" className="footer-link">→ À propos & Parcours</Link>
              <Link to="/contact" className="footer-link">→ Me Contacter</Link>
            </div>
          </div>

          {/* COLONNE 3 : RÉSEAUX SOCIAUX */}
          <div>
            <h4 className="footer-title">Me suivre</h4>
            <div className="social-row">
              {/* LinkedIn */}
              <a href="https://linkedin.com/in/edris-youssef" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              
              {/* GitHub */}
              <a href="https://github.com/votre-pseudo" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              
              {/* Email */}
              <a href="mailto:edris.youssef@exemple.com" className="social-btn" aria-label="Email">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>© {currentYear} Edris Youssef. Tous droits réservés.</p>
          <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            Fait avec <span style={{ color: "#ef4444", fontSize: "1.2rem" }}>♥</span> et React
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;