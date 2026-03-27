import { useEffect, useRef, useState } from "react";

const arrow = "https://www.figma.com/api/mcp/asset/41d6815c-6262-4d2a-b15c-7cf2d5376934";

const TARGET_SCORE = 98;
const FRAME_MS = 18;

export default function Hero() {
  const [score, setScore] = useState(0);
  const [showDeploymentModal, setShowDeploymentModal] = useState(false);
  const [showBootOverlay, setShowBootOverlay] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const stopAnimation = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMetricEnter = () => {
    stopAnimation();
    setScore(0);

    let current = 0;
    intervalRef.current = window.setInterval(() => {
      current += 1;
      if (current >= TARGET_SCORE) {
        setScore(TARGET_SCORE);
        stopAnimation();
        return;
      }
      setScore(current);
    }, FRAME_MS);
  };

  const handleMetricLeave = () => {
    stopAnimation();
    setScore(0);
  };

  useEffect(() => {
    return () => {
      stopAnimation();
    };
  }, []);

  return (
    <>
      <section className="hero">
        <div className="ring" />
        <div className="hero-left">
          <div className="tag">
            <span className="dot" />
            SYSTEMS ARCHITECT // FULL-STACK EXPERT
          </div>
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
            <button className="cta-primary" onClick={() => setShowBootOverlay(true)}>
              Initialize Session <img src={arrow} alt="" />
            </button>
            <button className="cta-ghost" onClick={() => setShowDeploymentModal(true)}>
              View Deployment Stack
            </button>
          </div>
        </div>

        <div className="hero-right">
          <article className="terminal" onMouseEnter={handleMetricEnter} onMouseLeave={handleMetricLeave}>
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
                  <strong>{score}%</strong>
                </div>
                <div className="bar">
                  <i style={{ width: `${score}%` }} />
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

        {showBootOverlay ? (
          <div className="terminal-boot-overlay">
            <div className="terminal-boot-head">
              <span>SYSTEM_BOOT_SEQUENCE_V2.4</span>
              <button onClick={() => setShowBootOverlay(false)}>[ABORT]</button>
            </div>
            <div className="terminal-boot-lines">
              <p>&gt; INITIALIZING KERNEL...</p>
              <p>&gt; LOADING NEURAL MODULES... [DONE]</p>
              <p>&gt; ESTABLISHING SECURE TUNNEL... [OK]</p>
              <p>&gt; SYNCING MERN_STACK_V4.2... 82%</p>
              <p className="pulse">&gt; AUTHENTICATING ARCHITECT ACCESS...</p>
            </div>
          </div>
        ) : null}

        {showDeploymentModal ? (
          <div className="deployment-modal-overlay" onClick={() => setShowDeploymentModal(false)}>
            <div className="deployment-modal" onClick={(e) => e.stopPropagation()}>
              <header>
                <h3>TECHNICAL DEPLOYMENT MAP</h3>
                <button className="close-x" onClick={() => setShowDeploymentModal(false)}>×</button>
              </header>

              <div className="deploy-top-row">
                <div className="deploy-node-col">
                  <div className="deploy-node">DB</div>
                  <small>MONGODB</small>
                </div>
                <span className="deploy-arrow">→</span>
                <div className="deploy-node-col">
                  <div className="deploy-node">API</div>
                  <small>EXPRESS</small>
                </div>
                <span className="deploy-arrow">→</span>
                <div className="deploy-node-col">
                  <div className="deploy-node">UI</div>
                  <small>REACT/ANGULAR</small>
                </div>
              </div>

              <div className="deploy-vertical-link" />

              <div className="deploy-bottom-row">
                <div className="runtime-col">
                  <div className="runtime-node">Node.js Runtime</div>
                  <small>EXECUTION ENVIRONMENT</small>
                </div>
                <div className="deploy-dashed-link" />
                <div className="cache-col">
                  <div className="cache-node">Redis</div>
                  <small>CACHE</small>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}
