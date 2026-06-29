import certifications from "../data/certifications";

const Certifications = () => {
  return (
    <section id="certifications" className="certifications section">
      <h2 className="section__title">Certifications</h2>
      <div className="certifications__grid">
        {certifications.map(({ id, title, issuer, date, image, url }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="certification__card"
          >
            <div className="certification__image">
              <img src={image} alt={title} />
            </div>
            <div className="certification__info">
              <h3 className="certification__title">{title}</h3>
              <p className="certification__issuer">{issuer}</p>
              <span className="certification__date">{date}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
