import "./ai-systems.css";

type AISystemsProps = {
  onBackSystems: () => void;
  onOpenExperience: () => void;
  onOpenProjects: () => void;
};

export default function AISystems({ onBackSystems, onOpenExperience, onOpenProjects }: AISystemsProps) {
  return (
    <section className="ai-page" id="ai-systems">
      <header className="ai-topnav-wrap">
        <nav className="ai-topnav">
          <div className="ai-brand">RIYA.BISWAS</div>
          <div className="ai-links">
            <button onClick={onBackSystems}>HERO</button>
            <button onClick={onOpenExperience}>EXPERIENCE</button>
            <a className="active">AI SYSTEMS</a>
            <button onClick={onOpenProjects}>PROJECTS</button>
          </div>
          <button className="ai-connect">Connect</button>
        </nav>
      </header>

      <aside className="ai-side">
        <span className="dot active" />
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </aside>

      <main className="ai-main">
        <div className="ai-header-row">
          <div>
            <p className="status">SYSTEM STATUS: ACTIVE</p>
            <h1>Multi-Agent Orchestration</h1>
            <p className="sub">
              Architecting autonomous workflows through hierarchical group chat management and
              specialized agent nodes.
            </p>
          </div>
          <div className="identifier">
            <span>NODE IDENTIFIER</span>
            <strong>RB_SYSTEM_01 // AUTO_FLOW</strong>
          </div>
        </div>

        <section className="ai-grid">
          <div className="left-col">
            <article className="card goal">
              <h3>SYSTEM_GOAL_01</h3>
              <blockquote>
                Refactor the core authentication microservice to support multi-tenant OIDC providers
                while maintaining 99.9% uptime.
              </blockquote>
              <p className="tiny">CONTEXT PAYLOAD</p>
              <div className="tags">
                <span>ARCH_V4.PDF</span>
                <span>AUTH_SVC.GO</span>
                <span>OIDC_FLOW.JSON</span>
              </div>
            </article>

            <article className="card resources">
              <h3>SYSTEM RESOURCES</h3>
              <div className="metric">
                <span>COMPUTE_LOAD</span>
                <div className="bar"><i /></div>
              </div>
              <div className="metric">
                <span>AGENT_LATENCY</span>
                <b>142ms</b>
              </div>
            </article>
          </div>

          <div className="center-col">
            <div className="agent-top">
              <div className="node">ARCHITECT_NODE</div>
              <div className="node active">CODE_SPECIALIST</div>
            </div>
            <div className="core">
              <div className="core-inner">
                <h4>GroupChat Manager</h4>
                <small>DECISION ENGINE ACTIVE</small>
              </div>
            </div>
            <div className="node bottom">QA_VALIDATOR</div>
          </div>

          <div className="right-col">
            <article className="card log">
              <h3>AGENT_ROUTING_LOG</h3>
              <pre>
[14:02:11] CALL: Architect_Node
[14:02:14] ACK: Context received.
[14:02:20] ROUTING: Code_Specialist
[14:02:25] PROCESS: diff_gen_v2.go
[14:02:45] WAIT: QA_Validator
              </pre>
            </article>

            <article className="card output">
              <h3>AUTONOMOUS_OUTPUT</h3>
              <div className="preview" />
              <button>COMMIT TO PRODUCTION</button>
            </article>
          </div>
        </section>

        <section className="stats-row">
          <div><span>ORCHESTRATION MODEL</span><b>GPT-4-TURBO-01</b></div>
          <div><span>TOTAL TOKENS</span><b>42,810 KB</b></div>
          <div><span>ACTIVE AGENTS</span><b className="accent">05 ONLINE</b></div>
          <div><span>SAFETY SCORE</span><b>99.8% CERTAINTY</b></div>
        </section>
      </main>

      <footer className="ai-footer">
        <span>© 2024 RIYA BISWAS | FULL STACK AUTONOMY</span>
        <nav>
          <a>GITHUB</a>
          <a>LINKEDIN</a>
          <a className="accent">TECHNICAL DOCS</a>
        </nav>
      </footer>
    </section>
  );
}
