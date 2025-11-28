import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  // Utilisation du hook Formspree avec votre ID "mwpdrlay"
  const [state, handleSubmit] = useForm("mwpdrlay");

  // Si le formulaire est envoyé avec succès, on affiche ce message stylisé
  if (state.succeeded) {
    return (
      <div className="container" style={{ paddingTop: "60px", paddingBottom: "100px", maxWidth: "700px" }}>
        <div className="bento-card" style={{ padding: "50px", textAlign: "center", cursor: "default" }}>
          <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🎉</div>
          <h2 style={{ fontSize: "2rem", color: "#0f172a", marginBottom: "15px" }}>Message reçu !</h2>
          <p style={{ color: "#64748b", fontSize: "1.1rem" }}>
            Merci de m'avoir contacté. Je reviens vers vous très vite.
          </p>
          <a href="/" className="btn btn-primary" style={{ marginTop: "30px", display: "inline-block", width: "auto" }}>
            Retour à l'accueil
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: "60px", paddingBottom: "100px", maxWidth: "700px" }}>
      
      {/* En-tête */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#0f172a", marginBottom: "15px" }}>
          Me Contacter
        </h2>
        <p style={{ color: "#64748b", fontSize: "1.1rem", lineHeight: "1.5" }}>
          Une idée de projet ou une proposition d'alternance ?<br/>
          Envoyez-moi un message via ce formulaire.
        </p>
      </div>

      {/* --- CARTE FORMULAIRE --- */}
      <div className="bento-card" style={{ padding: "40px", cursor: "default", transform: "none", boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)" }}>
        
        <form onSubmit={handleSubmit}>
          
          {/* Champ Nom (Ajouté pour compléter) */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">Nom complet</label>
            <input 
              id="name"
              type="text" 
              name="name" 
              placeholder="Ex: Jean Dupont" 
              className="form-input"
              required 
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "5px" }} />
          </div>

          {/* Champ Email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">Adresse Email</label>
            <input 
              id="email"
              type="email" 
              name="email" 
              placeholder="jean@exemple.com" 
              className="form-input"
              required 
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "5px" }} />
          </div>

          {/* Champ Message */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">Votre Message</label>
            <textarea 
              id="message"
              name="message" 
              placeholder="Bonjour Edris, je vous contacte car..." 
              rows="5" 
              className="form-input" 
              style={{ resize: "vertical", minHeight: "150px" }}
              required
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "5px" }} />
          </div>

          {/* Bouton Large avec état de chargement */}
          <button 
            type="submit" 
            disabled={state.submitting} 
            className="btn btn-primary" 
            style={{ width: "100%", padding: "16px", fontSize: "1.1rem", borderRadius: "12px", marginTop: "10px", opacity: state.submitting ? 0.7 : 1 }}
          >
            {state.submitting ? "Envoi en cours..." : "Envoyer mon message 🚀"}
          </button>

        </form>
      </div>

      {/* Séparateur */}
      <div style={{ display: "flex", alignItems: "center", margin: "50px 0", color: "#cbd5e1" }}>
        <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }}></div>
        <span style={{ padding: "0 20px", fontSize: "0.9rem", fontWeight: "600", color: "#94a3b8", textTransform: "uppercase" }}>Ou via</span>
        <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }}></div>
      </div>

      {/* --- LIENS SOCIAUX --- */}
      <div>
        <a href="mailto:edris.youssef.pro@gmail.com" className="social-link">
          <div className="social-icon-box" style={{ background: "#eff6ff", color: "#2563eb" }}>@</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: "700", color: "#0f172a" }}>Email</div>
            <div style={{ fontSize: "0.9rem", color: "#64748b" }}>edris.youssef.pro@gmail.com</div>
          </div>
          <div style={{ color: "#cbd5e1" }}>→</div>
        </a>

        <a href="https://linkedin.com/in/edris-youssef" target="_blank" rel="noreferrer" className="social-link">
          <div className="social-icon-box" style={{ background: "#f0f9ff", color: "#0077b5" }}>in</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: "700", color: "#0f172a" }}>LinkedIn</div>
            <div style={{ fontSize: "0.9rem", color: "#64748b" }}>Mon profil professionnel</div>
          </div>
          <div style={{ color: "#cbd5e1" }}>→</div>
        </a>
      </div>

    </div>
  );
};

export default Contact;