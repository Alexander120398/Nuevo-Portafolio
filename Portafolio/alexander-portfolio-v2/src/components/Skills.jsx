import skills from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <h2 className="section__title">Skills</h2>
      <div className="skills__grid">
        {skills.map(({ category, items }) => (
          <div key={category} className="skills__category">
            <h3 className="skills__category-title">{category}</h3>
            <ul className="skills__list">
              {items.map((skill) => (
                <li key={skill} className="skills__item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
