import { useEffect, useRef, useState } from "react";

const arrow = "https://www.figma.com/api/mcp/asset/41d6815c-6262-4d2a-b15c-7cf2d5376934";

const TARGET_SCORE = 98;
const FRAME_MS = 18;

export default function Hero() {
  const [score, setScore] = useState(0);
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

        <article className="mini-card">
          <h4>RB AUTONOMOUS MATRIX</h4>
          <p><span /> Multi-Agent Swarm Logic</p>
          <p><span /> High-Concurrency Core</p>
        </article>
      </section>
    </>
  );
}
