import { useState } from "react";

const links = ["Home", "About", "Services", "Skills", "Projects", "Certifications", "Timeline", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">Alexander</div>

      <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
