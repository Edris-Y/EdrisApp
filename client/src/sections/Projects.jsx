import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projets</h2>
      <div className="cards-grid">
        {projects.map((project) => (
          <article key={project.id} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="card-tech">{project.tech.join(" • ")}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="card-link"
              >
                Voir le projet
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
