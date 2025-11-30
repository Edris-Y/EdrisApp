import { useState } from "react";
import { Link } from "react-router-dom";
import { experiences } from "../data/experience";
import profilePic from '../assets/PhotoEdris.png';
const About = () => {
  const [openSection, setOpenSection] = useState("parcours");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="container" style={{ paddingTop: "40px", paddingBottom: "40px", maxWidth: "800px", margin: "0 auto" }}>
      
      {/* 1. En-tête Profil Moderne (Style Squircle) */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        
        {/* Photo avec effet de halo */}
        <div className="profile-wrapper">
          <img 
            src={profilePic} 
            alt="Profil" 
            className="profile-img"
          />
        </div>

        <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#0f172a", marginBottom: "15px" }}>Edris Youssef</h2>
        
        <p style={{ color: "#64748b", fontSize: "1rem", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto" }}>
          Étudiant en informatique à l'Université Évry Paris-Saclay, je suis avant tout <strong>passionné par l'Intelligence Artificielle et la gestion de données</strong>. Je combine ces intérêts avec une solide expérience en Webflow et administration système.
        </p>
      </div>

      {/* 2. Sections Accordéons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

        {/* --- SECTION MON PARCOURS --- */}
        <div className="bento-card" style={{ padding: "0", minHeight: "auto", overflow: "hidden" }}>
          <button 
            onClick={() => toggleSection("parcours")}
            style={{ width: "100%", padding: "20px 25px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "white", border: "none", cursor: "pointer" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div style={{ background: "#dbeafe", color: "#2563eb", padding: "8px", borderRadius: "10px" }}>🎓</div>
              <span style={{ fontWeight: "700", color: "#0f172a", fontSize: "1.1rem" }}>Mon Parcours</span>
            </div>
            <span style={{ transform: openSection === "parcours" ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s", color: "#94a3b8" }}>▼</span>
          </button>

          {openSection === "parcours" && (
            <div style={{ padding: "0 25px 25px 25px", animation: "fadeInUp 0.3s ease-out" }}>
              <div style={{ position: "relative", paddingLeft: "20px", borderLeft: "2px solid #e2e8f0", marginLeft: "15px" }}>
                {experiences.map((exp) => (
                  <div key={exp.id} style={{ marginBottom: "25px", position: "relative" }}>
                    <div style={{ position: "absolute", left: "-27px", top: "5px", width: "12px", height: "12px", borderRadius: "50%", background: exp.type === 'education' ? "#2563eb" : "#10b981", border: "2px solid white", boxShadow: "0 0 0 2px #e2e8f0" }}></div>
                    <h4 style={{ margin: 0, fontSize: "1.05rem", color: "#0f172a", fontWeight: "600" }}>{exp.role}</h4>
                    <div style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "8px", fontWeight: "500" }}>{exp.company} • {exp.period}</div>
                    {/* Détails optionnels (si vous voulez afficher les puces) */}
                    {/* <ul style={{ fontSize: "0.9rem", color: "#475569", paddingLeft: "15px", margin: "5px 0" }}>
                      {exp.details.slice(0,2).map((d, i) => <li key={i}>{d}</li>)}
                    </ul> */}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* --- SECTION MES PASSIONS --- */}
        <div className="bento-card" style={{ padding: "0", minHeight: "auto", overflow: "hidden" }}>
          <button 
            onClick={() => toggleSection("passions")}
            style={{ width: "100%", padding: "20px 25px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "white", border: "none", cursor: "pointer" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div style={{ background: "#fce7f3", color: "#db2777", padding: "8px", borderRadius: "10px" }}>🎨</div>
              <span style={{ fontWeight: "700", color: "#0f172a", fontSize: "1.1rem" }}>Mes Passions</span>
            </div>
            <span style={{ transform: openSection === "passions" ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s", color: "#94a3b8" }}>▼</span>
          </button>
          
          {openSection === "passions" && (
            <div style={{ padding: "0 25px 25px 25px", color: "#475569", fontSize: "0.95rem", animation: "fadeInUp 0.3s ease-out" }}>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "10px" }}>
                {[
                  "Intelligence Artificielle & Machine Learning",
                  "Gestion de Bases de Données (SQL/NoSQL)",
                  "Développement No-Code (Webflow)",
                  "Administration Système"
                ].map((passion, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", background: "#f8fafc", padding: "10px 15px", borderRadius: "10px" }}>
                    <span style={{ color: "#2563eb", fontWeight: "bold" }}>•</span> {passion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* --- SECTION MES OBJECTIFS --- */}
        <div className="bento-card" style={{ padding: "0", minHeight: "auto", overflow: "hidden" }}>
          <button 
            onClick={() => toggleSection("objectifs")}
            style={{ width: "100%", padding: "20px 25px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "white", border: "none", cursor: "pointer" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div style={{ background: "#dcfce7", color: "#16a34a", padding: "8px", borderRadius: "10px" }}>🚀</div>
              <span style={{ fontWeight: "700", color: "#0f172a", fontSize: "1.1rem" }}>Mes Objectifs</span>
            </div>
            <span style={{ transform: openSection === "objectifs" ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s", color: "#94a3b8" }}>▼</span>
          </button>
          
          {openSection === "objectifs" && (
            <div style={{ padding: "0 25px 25px 25px", color: "#475569", fontSize: "0.95rem", lineHeight: "1.6", animation: "fadeInUp 0.3s ease-out" }}>
               <p>Mon objectif principal est de me spécialiser dans la Data et l'IA en intégrant une alternance où je pourrai manipuler des données complexes.</p>
               <p style={{ marginTop: "10px" }}>Je souhaite également continuer à développer des solutions web performantes en parallèle.</p>
            </div>
          )}
        </div>

      </div>

      {/* 3. Boutons du bas */}
      <div style={{ display: "flex", gap: "15px", marginTop: "40px" }}>
        <a href="/cv.pdf" target="_blank" className="btn btn-secondary" style={{ flex: 1 }}>
          📄 Télécharger mon CV
        </a>
        <Link to="/contact" className="btn btn-primary" style={{ flex: 1 }}>
          ✉️ Me Contacter
        </Link>
      </div>

    </div>
  );
};

export default About;