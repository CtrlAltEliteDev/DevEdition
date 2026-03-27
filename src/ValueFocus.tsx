import "./value-focus.css";

const skillCards = [
  { label: "Multi-Agent", hot: true },
  { label: "RAG Architect", hot: true },
  { label: "MERN/MEAN", hot: true },
  { label: "TypeScript", hot: false },
  { label: "AWS CDK", hot: false },
  { label: "LLM Ops", hot: false },
];

const techTags = [
  "Node.js",
  "PostgreSQL",
  "Docker",
  "React Native",
  "Next.js 14",
  "Vercel AI SDK",
];

export default function ValueFocus() {
  return (
    <section className="arsenal-section">
      <div className="arsenal-inner">
        <div className="arsenal-head">
          <div className="arsenal-copy">
            <p className="arsenal-kicker">Core Competencies</p>
            <h2>
              Expertly Crafted
              <br />
              Technical Arsenal
            </h2>
            <p className="arsenal-body">
              My specialization lies in the intersection of robust web architectures and emerging AI
              capabilities. Whether it&apos;s the <b>MERN stack</b> for rapid scalability or <b>MEAN
              stack</b> for enterprise-grade rigidity, the focus is always on high-integrity systems.
            </p>
          </div>

          <div className="arsenal-flags">
            <span><i /> PRODUCTION READY</span>
            <span><i className="muted" /> CORE TECH</span>
          </div>
        </div>

        <div className="arsenal-grid">
          {skillCards.map((card, index) => (
            <article key={card.label} className={card.hot ? "skill-card hot" : "skill-card"}>
              <small>
                <img src={`/figure${index + 1}.svg`} alt={`Figure ${index + 1}`} />
              </small>
              <b>{card.label}</b>
            </article>
          ))}
        </div>

        <div className="arsenal-tags">
          {techTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
