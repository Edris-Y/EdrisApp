import { technicalSkills, softSkills } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Compétences</h2>
      <div className="skills-grid">
        <div>
          <h3>Techniques</h3>
          <ul>
            {technicalSkills.map((skill) => (
              <li key={skill.name}>
                <strong>{skill.name}</strong> — {skill.level}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Soft skills</h3>
          <ul>
            {softSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
