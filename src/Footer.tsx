import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer" data-node-id="5:464">
      <div className="footer-left" data-node-id="5:465">
        © {year} RIYA BISWAS / SYSTEMS ARCHITECT EDITION
      </div>

      <nav className="footer-nav" data-node-id="5:467">
        <a href="#home" data-node-id="5:468">MANIFESTO</a>
        <a href="#experience" data-node-id="5:470">INFRASTRUCTURE</a>
        <a href="#projects" data-node-id="5:472">SECURE LINK</a>
      </nav>

      <div className="footer-badge" data-node-id="5:474">
        <span className="badge-dot" data-node-id="5:475" />
        <span className="badge-text" data-node-id="5:477">SYSTEM SYNCHRONIZED</span>
      </div>
    </footer>
  );
}
