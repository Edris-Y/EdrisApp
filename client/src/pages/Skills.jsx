import { useState } from "react";
import { skills } from "../data/skills";

const Skills = () => {
  const [filter, setFilter] = useState("Tout");
  const categories = ["Tout", "Langages", "Frameworks", "Outils","Automatisation"];

  const filteredSkills = filter === "Tout" 
    ? skills 
    : skills.filter(s => s.category === filter);

  // Couleurs dynamiques pour les icônes
  const getColor = (category) => {
    switch (category) {
      case "Langages": return { bg: "#dbeafe", text: "#2563eb" }; // Bleu
      case "Frameworks": return { bg: "#f3e8ff", text: "#9333ea" }; // Violet
      case "Outils": return { bg: "#dcfce7", text: "#16a34a" }; // Vert
      default: return { bg: "#f1f5f9", text: "#475569" };
    }
  };

  return (
    <div className="container" style={{ paddingTop: "40px", paddingBottom: "80px" }}>
      
      {/* En-tête simple */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#0f172a", marginBottom: "10px" }}>
          Mes Compétences
        </h2>
        <p style={{ color: "#64748b" }}>Les outils et technologies que je maîtrise.</p>
      </div>
      
      {/* Filtres modernes */}
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

      {/* Grille BENTO responsive */}
      <div className="bento-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))" }}>
        {filteredSkills.map((skill) => {
          const colors = getColor(skill.category);
          
          return (
            <div key={skill.id} className="bento-card" style={{ padding: "20px", alignItems: "center", textAlign: "center", minHeight: "auto" }}>
              
              {/* Icône colorée */}
              <div style={{ 
                width: "60px", height: "60px", 
                background: colors.bg, color: colors.text,
                borderRadius: "20px", // Squircle
                display: "flex", alignItems: "center", justifyContent: "center", 
                fontWeight: "bold", fontSize: "1.5rem",
                marginBottom: "15px",
                boxShadow: "0 4px 10px -2px rgba(0,0,0,0.05)"
              }}>
                {skill.name.charAt(0)}
              </div>
              
              <div style={{ width: "100%" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#0f172a", marginBottom: "5px" }}>
                  {skill.name}
                </h3>
                <span style={{ fontSize: "0.8rem", color: "#94a3b8", fontWeight: "500", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  {skill.category}
                </span>

                {/* Barre de progression stylisée */}
                <div style={{ width: "100%", height: "6px", background: "#f1f5f9", borderRadius: "99px", overflow: "hidden", marginTop: "15px" }}>
                  <div style={{ 
                    width: `${skill.level}%`, 
                    height: "100%", 
                    background: colors.text, 
                    borderRadius: "99px",
                    transition: "width 1s ease-in-out"
                  }}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;