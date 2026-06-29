import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact section">
      <h2 className="section__title">Contact</h2>
      <div className="contact__container">
        <div className="contact__info">
          <p>Feel free to reach out for collaborations or just a friendly hello!</p>
          <ul>
            <li>📧 <a href="mailto:your@email.com">your@email.com</a></li>
            <li>💼 <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li>🐙 <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
          </ul>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn--primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
