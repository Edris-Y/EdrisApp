const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Intéressé(e) par mon profil ou mes projets ? Contactez-moi :</p>
      <div className="contact-info">
        <p>
          Email :{" "}
          <a href="mailto:ton.email@mail.com">ton.email@mail.com</a>
        </p>
        <p>
          LinkedIn :{" "}
          <a
            href="https://www.linkedin.com/in/ton-profil"
            target="_blank"
            rel="noreferrer"
          >
            Mon LinkedIn
          </a>
        </p>
        <p>
          GitHub :{" "}
          <a
            href="https://github.com/ton-github"
            target="_blank"
            rel="noreferrer"
          >
            Mon GitHub
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
