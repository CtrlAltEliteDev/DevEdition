import "./experience.css";

export default function Experience() {
  return (
    <section className="exp-page" id="experience">
      <main className="exp-main">
        <div className="exp-dot-grid" />

        <header className="exp-header">
          <div className="exp-header-copy">
            <span className="exp-kicker">PROFESSIONAL TRAJECTORY</span>
            <h1>
              Clinical <em>Execution</em> &amp; Neural Design.
            </h1>
            <p>
              Mapping the intersection of high-performance engineering and autonomous agent
              architecture.
            </p>
          </div>
          <div className="exp-peak-card">
            <div className="exp-peak-icon">◔</div>
            <div>
              <span>PEAK OPTIMIZATION</span>
              <p>30s → 2s</p>
            </div>
          </div>
        </header>

        <section className="exp-content-grid">
          <div className="exp-timeline-col">
            <h2><span /> Journey Log</h2>
            <div className="exp-timeline">
              <article className="exp-node active">
                <span className="date">MAY 2023 — PRESENT</span>
                <h3>MuSigma</h3>
                <p className="role">Senior Technical Architect (Autonomous Systems)</p>
                <div className="exp-note-card">
                  <p>
                    Leading the development of multi-agent orchestration frameworks. Successfully
                    re-engineered the legacy data processing backend, reducing latency by <b>93%</b>.
                  </p>
                  <ul>
                    <li>Implemented distributed neural nodes for real-time agent coordination.</li>
                    <li>Engineered a proprietary LLM gateway for secure enterprise data flows.</li>
                  </ul>
                </div>
              </article>

              <article className="exp-node muted">
                <span className="date">PRIOR ARCHITECTURE</span>
                <h3>Systems Engineering</h3>
                <p className="role">Legacy Systems Specialist</p>
              </article>
            </div>
          </div>

          <div className="exp-arsenal-col">
            <h2><span /> Technical Arsenal</h2>
            <div className="arsenal-grid1">
              <div>
                <h4>LANGUAGES</h4>
                <div className="pill-wrap">
                  <span className="pill hot">Python</span>
                  <span className="pill hot">TypeScript</span>
                  <span className="pill hot">Java</span>
                  <span className="pill">Rust</span>
                  <span className="pill">Go</span>
                  <span className="pill">C++</span>
                </div>
              </div>
              <div>
                <h4>FRAMEWORKS &amp; STACKS</h4>
                <div className="pill-wrap">
                  <span className="pill hot">MERN</span>
                  <span className="pill hot">MEAN</span>
                  <span className="pill hot">Next.js</span>
                  <span className="pill">FastAPI</span>
                  <span className="pill">TailwindCSS</span>
                  <span className="pill">GraphQL</span>
                </div>
              </div>
              <div className="ai-card">
                <div className="ai-top">
                  <h4>AI &amp; AUTONOMOUS AGENTS</h4>
                  <small>Core Focus</small>
                </div>
                <div className="pill-wrap">
                  <span className="pill glow">LangChain</span>
                  <span className="pill glow">AutoGPT</span>
                  <span className="pill">Semantic Kernel</span>
                  <span className="pill">PyTorch</span>
                  <span className="pill">HuggingFace</span>
                  <span className="pill">Agentic RAG</span>
                </div>
              </div>
              <div>
                <h4>DATA &amp; INFRASTRUCTURE</h4>
                <div className="pill-wrap">
                  <span className="pill hot">Redis</span>
                  <span className="pill hot">SQL</span>
                  <span className="pill hot">Vector DBs</span>
                  <span className="pill">Docker</span>
                  <span className="pill">Kubernetes</span>
                  <span className="pill">AWS / Azure</span>
                  <span className="pill">GitHub Actions</span>
                  <span className="pill">Terraform</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="exp-stats">
          <article className="stat-card">
            <h5>15+</h5>
            <p>AUTONOMOUS AGENTS DEPLOYED</p>
          </article>
          <article className="stat-card accent">
            <h5>99.8%</h5>
            <p>ORCHESTRATION ACCURACY</p>
          </article>
          <article className="stat-card">
            <h5>Global</h5>
            <p>DISTRIBUTED SYSTEMS SCALE</p>
          </article>
        </section>
      </main>

    </section>
  );
}
