const Contact = () => {
  return (
    <div style={{ paddingTop: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Me Contacter</h2>
      
      <p style={{ textAlign: "center", marginBottom: "30px" }}>Une question, une proposition ? N'hésitez pas.</p>

      <form>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "600", fontSize: "0.9rem" }}>Nom</label>
        <input type="text" placeholder="Entrez votre nom" className="input-field" />
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "600", fontSize: "0.9rem" }}>Email</label>
        <input type="email" placeholder="Entrez votre adresse email" className="input-field" />

        <label style={{ display: "block", marginBottom: "5px", fontWeight: "600", fontSize: "0.9rem" }}>Message</label>
        <textarea placeholder="Votre message..." rows="5" className="input-field" style={{ resize: "none" }}></textarea>

        <button type="submit" className="btn" style={{ background: "#0f172a", color: "white", width: "100%" }}>Envoyer</button>
      </form>

      <div style={{ display: "flex", alignItems: "center", margin: "30px 0", color: "#94a3b8" }}>
        <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }}></div>
        <span style={{ padding: "0 10px", fontSize: "0.8rem" }}>OU</span>
        <div style={{ flex: 1, height: "1px", background: "#e2e8f0" }}></div>
      </div>

      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>Me retrouver sur</h3>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <a href="mailto:email@example.com" style={{ display: "flex", alignItems: "center", background: "white", padding: "15px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <div style={{ width: "40px", height: "40px", background: "#f1f5f9", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "15px" }}>@</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: "600" }}>Email</div>
            <div style={{ fontSize: "0.85rem", color: "#64748b" }}>mon.email@exemple.com</div>
          </div>
          <div style={{ color: "#cbd5e1" }}>&gt;</div>
        </a>
        {/* Ajouter les autres liens (LinkedIn, GitHub) ici de la même manière */}
      </div>
      
      {/* Spacer pour ne pas être caché par le menu du bas sur mobile */}
      <div style={{ height: "40px" }}></div>
    </div>
  );
};

export default Contact;