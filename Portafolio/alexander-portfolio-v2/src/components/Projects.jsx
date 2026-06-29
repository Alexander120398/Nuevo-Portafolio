import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <h2 className="section__title">Projects</h2>
      <div className="projects__grid">
        {projects.map(({ id, title, description, image, tags, liveUrl, repoUrl }) => (
          <div key={id} className="project__card">
            <div className="project__image">
              <img src={image} alt={title} />
            </div>
            <div className="project__info">
              <h3 className="project__title">{title}</h3>
              <p className="project__description">{description}</p>
              <div className="project__tags">
                {tags.map((tag) => (
                  <span key={tag} className="project__tag">{tag}</span>
                ))}
              </div>
              <div className="project__links">
                <a href={liveUrl} target="_blank" rel="noreferrer" className="btn btn--primary">
                  Live
                </a>
                <a href={repoUrl} target="_blank" rel="noreferrer" className="btn btn--outline">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
