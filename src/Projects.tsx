import "./projects.css";

type ProjectsProps = {
  onBackSystems: () => void;
  onOpenExperience: () => void;
  onOpenAiSystems: () => void;
};

export default function Projects({ onBackSystems, onOpenExperience, onOpenAiSystems }: ProjectsProps) {
  return (
    <section className="proj-page" id="projects">
      <nav className="proj-nav">
        <div className="proj-brand">ARCHITECT.AI</div>
        <div className="proj-links">
          <button onClick={onBackSystems}>HERO</button>
          <button onClick={onOpenExperience}>EXPERIENCE</button>
          <button onClick={onOpenAiSystems}>AI SYSTEMS</button>
          <a className="active">PROJECTS</a>
          <a>GAME</a>
        </div>
        <button className="proj-menu">|||</button>
      </nav>

      <main className="proj-main">
        <header className="proj-header">
          <div className="proj-kicker">
            <span className="line" />
            <span>SYSTEM PORTFOLIO 04</span>
          </div>
          <h1>
            Technical <br />
            Engineering <br />
            <em>Excellence.</em>
          </h1>
          <p>
            Curated high-frequency systems focused on extreme latency optimization and cryptographic
            identity protocols.
          </p>
        </header>

        <div className="proj-grid">
          <article className="project-card case-lg">
            <div>
              <div className="case-top">
                <span className="case-pill">CASE STUDY 01</span>
                <div className="tech-tags">
                  <span>PYTHON</span>
                  <span>CUDA</span>
                </div>
              </div>
              <h2>MuSigma Engine</h2>
              <p>Recursive data processing architecture for global supply chain forecasting.</p>
              <a className="link">VIEW TECHNICAL DETAILS →</a>
            </div>

            <div className="impact-row">
              <div>
                <small>ORIGINAL RUNTIME</small>
                <div className="metric-muted">30s</div>
              </div>
              <div className="trend">↘</div>
              <div>
                <small className="accent">OPTIMIZED IMPACT</small>
                <div className="metric-accent">02s</div>
              </div>
            </div>
          </article>

          <article className="project-card case-dark">
            <div>
              <div className="icon">◉</div>
              <h3>
                Identity <br />
                Protocol V3
              </h3>
              <p>ZKP-based authentication system for decentralized financial networks.</p>
              <a className="link">EXPLORE ARCHITECTURE →</a>
            </div>
            <button className="outline-btn">EXPLORE NODE</button>
          </article>

          <article className="project-card telemetry">
            <div className="telemetry-left">
              <div className="telemetry-icon">▣</div>
              <div>
                <h4>Telemetry Stream</h4>
                <small>REAL-TIME NODE MONITORING</small>
              </div>
            </div>
          </article>

          <article className="project-card stat-box">
            <small>99TH PERCENTILE</small>
            <div>12ms</div>
          </article>

          <article className="project-card repo-box">
            <div className="repo-icon">⌘</div>
            <h5>SOURCE ARCHIVE</h5>
            <small>248 Commits / 12 Forks</small>
            <a className="link">BROWSE REPO →</a>
          </article>
        </div>

        <footer className="proj-footer">
          <span>© 2024 DIGITAL ARCHITECT / ALL SYSTEMS OPERATIONAL</span>
          <nav>
            <a>NEURAL FLOW</a>
            <a>DOCUMENTATION</a>
            <a>SECURITY</a>
            <a>CHANGELOG</a>
          </nav>
        </footer>
      </main>

      <div className="floating-nav-proj">
        <button>GAME</button>
        <button className="active">PROJECTS</button>
        <button onClick={onOpenAiSystems}>AI SYSTEMS</button>
        <button onClick={onOpenExperience}>EXPERIENCE</button>
        <button onClick={onBackSystems}>HERO</button>
      </div>

      <div className="vline left" />
      <div className="vline right" />
    </section>
  );
}
