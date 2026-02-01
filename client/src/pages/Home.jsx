import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { experiences } from "../data/experience";
import profilePic from '../assets/PhotoEdris.png';

const Home = () => {
const recentProjects = projects.slice(0, 3);
  const currentJob = experiences && experiences.length > 0 ? experiences[0] : null;

  return (
    <div className="container" style={{ paddingBottom: "80px" }}>
      
      {/* --- HERO SECTION --- */}
      {/* Ajout de padding-top plus grand pour éviter l'effet "collé" en haut */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "60px 0 20px" }}>
        
        <div className="profile-wrapper">
          <img 
            src={profilePic}
            alt="Profil" 
            className="profile-img"
          />
        </div>

        <h1 style={{ fontSize: "2rem", fontWeight: "800", color: "#0f172a", marginBottom: "8px", lineHeight: "1.2" }}>
          Edris Youssef
        </h1>
        
        <h2 style={{ fontSize: "1rem", color: "#64748b", marginBottom: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "8px" }}>
          Étudiant en Informatique 
          <span style={{ display: "inline-block", width: "4px", height: "4px", background: "#cbd5e1", borderRadius: "50%" }}></span> 
          Data & IA
        </h2>

        <div style={{
          background: "#eff6ff", color: "#2563eb", padding: "8px 16px", borderRadius: "99px",
          fontSize: "0.85rem", fontWeight: "600", border: "1px solid #dbeafe",
          display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "25px",
          maxWidth: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
        }}>
          <span style={{ position: "relative", display: "flex", height: "8px", width: "8px", flexShrink: 0 }}>
            <span style={{ animation: "ping 1.5s infinite", position: "absolute", height: "100%", width: "100%", borderRadius: "50%", background: "#3b82f6", opacity: 0.75 }}></span>
            <span style={{ position: "relative", borderRadius: "50%", height: "8px", width: "8px", background: "#2563eb" }}></span>
          </span>
          À la recherche d'une alternance
        </div>

        <p style={{ maxWidth: "500px", margin: "0 auto", color: "#475569", lineHeight: "1.6", fontSize: "0.95rem", padding: "0 10px" }}>
          Je conçois des solutions intelligentes. Passionné par l'IA, la Data et le Web.
        </p>
      </div>


      {/* --- BENTO GRID --- */}
      <div className="bento-grid">

        {/* 1. CARTE COMPÉTENCES */}
        <Link to="/skills" className="bento-card">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
              <div style={{ background: "#dbeafe", color: "#2563eb", padding: "8px", borderRadius: "10px", flexShrink: 0 }}>⚡</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#0f172a", margin: 0 }}>Stack Technique</h3>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["UML", "Python", "Modelisation Objet", "SQL", "Analyse de Données"].slice(0,5).map(tag => (
                <span key={tag} style={{ 
                  background: "#f8fafc", border: "1px solid #e2e8f0", padding: "6px 10px", 
                  borderRadius: "8px", fontSize: "0.8rem", color: "#475569", fontWeight: "500"
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "20px", fontSize: "0.9rem", color: "#2563eb", fontWeight: "600" }}>Voir tout →</div>
        </Link>

        {/* 2. CARTE EXPÉRIENCE */}
        <Link to="/about" className="bento-card" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
              <div style={{ background: "#dcfce7", color: "#16a34a", padding: "8px", borderRadius: "10px", flexShrink: 0 }}>🎓</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#0f172a", margin: 0 }}>Parcours</h3>
            </div>
            {currentJob ? (
              <>
                <p style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", fontWeight: "bold", marginBottom: "5px" }}>Récemment</p>
                <div style={{ fontWeight: "700", color: "#0f172a", fontSize: "1rem" }}>{currentJob.role}</div>
                <div style={{ color: "#2563eb", fontSize: "0.9rem" }}>chez {currentJob.company}</div>
              </>
            ) : (
              <p>Découvrir mon parcours.</p>
            )}
          </div>
          <div style={{ marginTop: "20px", fontSize: "0.9rem", color: "#2563eb", fontWeight: "600" }}>Voir l'historique →</div>
        </Link>

        {/* 3. CARTE CONTACT */}
        <Link to="/contact" className="bento-card" style={{ background: "#0f172a", color: "white", border: "none", justifyContent: "center", alignItems: "center", textAlign: "center", minHeight: "160px" }}>
          <div style={{ fontSize: "2rem", marginBottom: "10px" }}>👋</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "5px", color: "white" }}>Me contacter</h3>
          <p style={{ color: "#94a3b8", fontSize: "0.85rem", margin: 0 }}>Disponible pour vos projets.</p>
        </Link>

        {/* SEPARATEUR PROJETS */}
        <div style={{ gridColumn: "1 / -1", marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#0f172a", margin: 0 }}>Projets Récents</h3>
          <Link to="/projects" style={{ fontSize: "0.9rem", color: "#64748b" }}>Voir tout</Link>
        </div>

        {/* 4. CARTES PROJETS (Compactes) */}
        {recentProjects.map((project) => (
          <Link to="/projects" key={project.id} className="bento-card" style={{ padding: "15px" }}>
            <img 
              src={project.image || "https://placehold.co/600x400/f1f5f9/94a3b8?text=Projet"} 
              alt={project.title} 
              className="project-card-img"
            />
            
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <h4 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0f172a", marginBottom: "5px" }}>
                {project.title}
              </h4>
              <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: "1.4", marginBottom: "15px", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {project.description}
              </p>
              
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "auto" }}>
                {project.tech && project.tech.slice(0, 2).map(t => (
                  <span key={t} style={{ fontSize: "0.75rem", background: "#f1f5f9", padding: "4px 8px", borderRadius: "4px", color: "#475569", fontWeight: "600" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default Home;