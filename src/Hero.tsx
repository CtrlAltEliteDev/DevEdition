const icon1 = "https://www.figma.com/api/mcp/asset/50235a1a-f725-4096-8b53-d0ee256dcaf4";
const icon2 = "https://www.figma.com/api/mcp/asset/460158f8-9896-4eb7-952f-991c6da045ad";
const icon3 = "https://www.figma.com/api/mcp/asset/75eced5e-5256-4e29-a40b-50ce3e53f167";
const menuMain = "https://www.figma.com/api/mcp/asset/3ebdbd78-041a-487a-b73e-f8b3e6bf77ff";
const arrow = "https://www.figma.com/api/mcp/asset/41d6815c-6262-4d2a-b15c-7cf2d5376934";

type HeroProps = {
  onOpenProjects: () => void;
  onOpenExperience: () => void;
  onOpenAiSystems: () => void;
};

export default function Hero({ onOpenProjects, onOpenExperience, onOpenAiSystems }: HeroProps) {
  return (
    <>
      <header className="topbar">
        <div className="brand">
          <span>RIYA BISWAS</span>
          <em>[V2.4]</em>
        </div>
        <nav className="pill-nav">
          <a className="active">SYSTEMS</a>
          <button className="tab-link" onClick={onOpenExperience}>EXPERIENCE</button>
          <button className="tab-link" onClick={onOpenAiSystems}>AI SYSTEMS</button>
          <button className="tab-link" onClick={onOpenProjects}>PROJECTS</button>
          <button>CONNECT</button>
        </nav>
      </header>

      <section className="hero">
        <div className="ring" />
        <div className="hero-left">
          <div className="tag">
            <span className="dot" />
            SYSTEMS ARCHITECT // FULL-STACK EXPERT
          </div>
          <h2>RIYA BISWAS</h2>
          <h1>
            Building High
            <br />
            <span>Integrity AI</span>
            <br />
            Infrastructure
          </h1>
          <p>
            Pioneering MERN &amp; MEAN architectures for autonomous multi-agent swarms and
            high-concurrency digital foundations.
          </p>
          <div className="cta-row">
            <button className="cta-primary">
              Initialize Session <img src={arrow} alt="" />
            </button>
            <button className="cta-ghost">View Stack Details</button>
          </div>
        </div>

        <div className="hero-right">
          <article className="terminal">
            <div className="terminal-head">
              <div className="lights">
                <span />
                <span />
                <span />
              </div>
              <small>RB_NODE.LOG</small>
            </div>
            <div className="terminal-body">
              <p className="line">▶ exec riya_biswas_init --verbose</p>
              <div className="metric">
                <div>
                  <span>Core Integrity Index</span>
                  <strong>98.2%</strong>
                </div>
                <div className="bar">
                  <i />
                </div>
              </div>
              <div className="grid-mini">
                <div>
                  <small>MERN Deployment</small>
                  <b>Scale Optimized</b>
                </div>
                <div>
                  <small>MEAN Enterprise</small>
                  <b>Rigid Architecture</b>
                </div>
              </div>
            </div>
          </article>
        </div>

        <article className="mini-card">
          <h4>RB AUTONOMOUS MATRIX</h4>
          <p><span /> Multi-Agent Swarm Logic</p>
          <p><span /> High-Concurrency Core</p>
        </article>

        <div className="floating-nav">
          <button><img src={icon1} alt="" /></button>
          <button><img src={icon2} alt="" /></button>
          <button><img src={icon3} alt="" /></button>
          <button className="main"><img src={menuMain} alt="" /></button>
        </div>
      </section>
    </>
  );
}
