import { useState } from "react";
import { projects } from "../data/projects";

const Projects = () => {
  const [filter, setFilter] = useState("Tous");
  const categories = ["Tous", "Mobile", "Web", "AI"];

  const filteredProjects = filter === "Tous" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="container" style={{ paddingTop: "40px", paddingBottom: "80px" }}>
      
      {/* En-tête */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#0f172a", marginBottom: "10px" }}>
          Mes Projets
        </h2>
        <p style={{ color: "#64748b" }}>Une sélection de mes travaux récents.</p>
      </div>

      {/* Filtres */}
      <div className="filter-tabs" style={{ justifyContent: "center" }}>
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`filter-chip ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille BENTO */}
      <div className="bento-grid">
        {filteredProjects.map((project) => (
          <a href={project.link || "#"} key={project.id} className="bento-card" style={{ padding: "0", border: "none", overflow: "hidden" }}>
            
            {/* Image (prend toute la largeur haute) */}
            <div style={{ height: "200px", width: "100%", overflow: "hidden", position: "relative" }}>
              <img 
                src={project.image || "https://placehold.co/600x400/f1f5f9/94a3b8?text=Project"} 
                alt={project.title} 
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.target.style.transform = "scale(1)"}
              />
              <div style={{ position: "absolute", top: "15px", right: "15px", background: "rgba(255,255,255,0.9)", padding: "4px 10px", borderRadius: "8px", fontSize: "0.75rem", fontWeight: "700", color: "#0f172a", backdropFilter: "blur(4px)" }}>
                {project.category}
              </div>
            </div>

            {/* Contenu */}
            <div style={{ padding: "25px", flex: 1, display: "flex", flexDirection: "column", border: "1px solid #e2e8f0", borderTop: "none", borderRadius: "0 0 24px 24px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#0f172a", marginBottom: "10px" }}>{project.title}</h3>
              <p style={{ fontSize: "0.95rem", color: "#64748b", marginBottom: "20px", flex: 1 }}>{project.description}</p>
              
              {/* Tags Tech */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                {project.tech.map(t => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              {/* Bouton Voir */}
              <div className="btn btn-primary" style={{ width: "100%", marginTop: "auto" }}>
                Voir le projet
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;