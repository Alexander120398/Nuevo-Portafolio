const services = [
  {
    id: 1,
    icon: "🖥️",
    title: "Web Development",
    description: "Building responsive and performant web applications with modern frameworks.",
  },
  {
    id: 2,
    icon: "🎨",
    title: "UI/UX Design",
    description: "Designing clean and intuitive interfaces focused on user experience.",
  },
  {
    id: 3,
    icon: "☁️",
    title: "Cloud & Backend",
    description: "Developing scalable backend systems and deploying on cloud platforms.",
  },
  {
    id: 4,
    icon: "📱",
    title: "Mobile-First",
    description: "Creating applications that work seamlessly across all devices.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services section">
      <h2 className="section__title">Services</h2>
      <div className="services__grid">
        {services.map(({ id, icon, title, description }) => (
          <div key={id} className="service__card">
            <span className="service__icon">{icon}</span>
            <h3 className="service__title">{title}</h3>
            <p className="service__description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
