const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <p className="hero__greeting">Hi, I'm</p>
        <h1 className="hero__name">Alexander</h1>
        <h2 className="hero__role">Full Stack Developer</h2>
        <p className="hero__description">
          I build modern, responsive and scalable web applications.
        </p>
        <div className="hero__buttons">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href="#contact" className="btn btn--outline">Contact Me</a>
        </div>
      </div>
      <div className="hero__image">
        <img src="/profile.png" alt="Alexander" />
      </div>
    </section>
  );
};

export default Hero;
