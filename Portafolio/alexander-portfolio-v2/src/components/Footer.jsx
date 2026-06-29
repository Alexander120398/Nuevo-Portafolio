const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Alexander. All rights reserved.</p>
      <div className="footer__links">
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
