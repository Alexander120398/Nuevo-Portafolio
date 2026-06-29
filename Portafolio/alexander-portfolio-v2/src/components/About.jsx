const About = () => {
  return (
    <section id="about" className="about section">
      <h2 className="section__title">About Me</h2>
      <div className="about__content">
        <div className="about__image">
          <img src="/profile.png" alt="Alexander" />
        </div>
        <div className="about__text">
          <p>
            I'm a passionate Full Stack Developer with experience building
            web applications using modern technologies like React, Node.js,
            and cloud services.
          </p>
          <p>
            I love solving complex problems and turning ideas into functional,
            beautiful digital experiences.
          </p>
          <a href="/cv.pdf" download className="btn btn--primary">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
