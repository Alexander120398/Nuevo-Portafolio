const timelineItems = [
  {
    id: 1,
    year: "2024",
    title: "Full Stack Developer",
    place: "Company Name",
    description: "Developed and maintained web applications using React and Node.js.",
    type: "work",
  },
  {
    id: 2,
    year: "2023",
    title: "Frontend Developer",
    place: "Another Company",
    description: "Built responsive UI components and improved web performance.",
    type: "work",
  },
  {
    id: 3,
    year: "2022",
    title: "Computer Science Degree",
    place: "University Name",
    description: "Graduated with honors in Computer Science and Software Engineering.",
    type: "education",
  },
  {
    id: 4,
    year: "2020",
    title: "Web Development Bootcamp",
    place: "Bootcamp Name",
    description: "Completed an intensive full stack web development program.",
    type: "education",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="timeline section">
      <h2 className="section__title">Experience & Education</h2>
      <div className="timeline__container">
        {timelineItems.map(({ id, year, title, place, description, type }) => (
          <div key={id} className={`timeline__item timeline__item--${type}`}>
            <div className="timeline__dot" />
            <div className="timeline__content">
              <span className="timeline__year">{year}</span>
              <h3 className="timeline__title">{title}</h3>
              <p className="timeline__place">{place}</p>
              <p className="timeline__description">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
