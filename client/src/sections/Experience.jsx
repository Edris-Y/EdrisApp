import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2>Expériences</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <article key={exp.id} className="timeline-item">
            <h3>{exp.role}</h3>
            <p className="timeline-company">{exp.company}</p>
            <p className="timeline-period">{exp.period}</p>
            <ul>
              {exp.details.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
