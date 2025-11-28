import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <div style={{ paddingTop: "20px", paddingBottom: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Mon Parcours</h2>

      <div style={{ position: "relative", paddingLeft: "20px" }}>
        {/* Ligne verticale de la timeline */}
        <div style={{ 
          position: "absolute", 
          left: "29px", // Ajusté pour centrer avec les icônes
          top: "10px", 
          bottom: "0", 
          width: "2px", 
          background: "#e2e8f0" 
        }}></div>

        {experiences.map((exp) => (
          <div key={exp.id} style={{ display: "flex", gap: "20px", marginBottom: "40px", position: "relative" }}>
            
            {/* Icône de la Timeline (Rond) */}
            <div style={{ 
              width: "40px", 
              height: "40px", 
              borderRadius: "50%", 
              background: exp.type === 'education' ? "#eff6ff" : "#f0fdf4", // Bleu pour école, Vert pour travail (subtil)
              border: `2px solid ${exp.type === 'education' ? "#2563eb" : "#16a34a"}`,
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              zIndex: 1, // Pour être au-dessus de la ligne
              flexShrink: 0
            }}>
              {/* Icône SVG conditionnelle */}
              {exp.type === 'education' ? (
                // Chapeau Diplômé
                <svg width="20" height="20" fill="none" stroke={exp.type === 'education' ? "#2563eb" : "#16a34a"} strokeWidth="2" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              ) : (
                // Valise Travail
                <svg width="20" height="20" fill="none" stroke={exp.type === 'education' ? "#2563eb" : "#16a34a"} strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              )}
            </div>

            {/* Carte de contenu */}
            <div style={{ 
              flex: 1, 
              background: "white", 
              padding: "20px", 
              borderRadius: "16px", 
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "baseline", marginBottom: "10px" }}>
                <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#0f172a" }}>{exp.role}</h3>
                <span style={{ fontSize: "0.85rem", padding: "4px 8px", background: "#f8fafc", borderRadius: "6px", color: "#64748b", fontWeight: "500", border: "1px solid #e2e8f0" }}>
                  {exp.period}
                </span>
              </div>
              
              <div style={{ fontSize: "0.95rem", color: "#2563eb", fontWeight: "600", marginBottom: "15px" }}>
                {exp.company}
              </div>

              <ul style={{ paddingLeft: "20px", listStyleType: "disc", color: "#475569", fontSize: "0.95rem" }}>
                {exp.details.map((detail, index) => (
                  <li key={index} style={{ marginBottom: "5px" }}>{detail}</li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;