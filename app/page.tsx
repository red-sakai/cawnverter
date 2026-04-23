import Link from "next/link";

const features = [
  {
    title: "Structured Word output",
    text: "Keeps headings, paragraph flow, and list hierarchy intact.",
  },
  {
    title: "High quality images",
    text: "Generate JPG or PNG pages with predictable rendering.",
  },
  {
    title: "Web ready HTML",
    text: "Export clean markup for publishing and CMS workflows.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <section className="landing-hero container">
        <div className="hero-grid">
          <div className="hero-copy-block">
            <p className="eyebrow">PDF conversion without friction</p>
            <h1>From upload to usable files in minutes, not hours.</h1>
            <p className="hero-copy">
              Cawnverter is built for teams that need fast exports with reliable
              formatting. Start with a focused landing experience, then move into
              the conversion workspace only when you are ready.
            </p>

            <div className="hero-actions">
              <Link href="/convert" className="hero-primary">
                Open converter
              </Link>
              <Link href="/#features" className="hero-secondary">
                Explore features
              </Link>
            </div>

            <div className="hero-stats" role="list" aria-label="Product highlights">
              <div className="hero-stat" role="listitem">
                <p className="stat-value">3.2x</p>
                <p className="stat-label">Faster turnaround</p>
              </div>
              <div className="hero-stat" role="listitem">
                <p className="stat-value">99.4%</p>
                <p className="stat-label">Format fidelity</p>
              </div>
              <div className="hero-stat" role="listitem">
                <p className="stat-value">120+</p>
                <p className="stat-label">Teams onboarded</p>
              </div>
            </div>
          </div>

          <div className="hero-preview" aria-hidden="true">
            <div className="preview-card">
              <div className="preview-header">
                <div>
                  <p className="preview-title">Latest run</p>
                  <p className="preview-subtitle">Project Atlas · 14 pages</p>
                </div>
                <span className="preview-pill">Ready</span>
              </div>
              <div className="preview-body">
                <div className="preview-column">
                  <p className="preview-label">Input</p>
                  <p className="preview-value">Quarterly_Report.pdf</p>
                  <p className="preview-metric">00:38</p>
                </div>
                <div className="preview-column">
                  <p className="preview-label">Output</p>
                  <p className="preview-value">Word · HTML</p>
                  <p className="preview-metric">2 targets</p>
                </div>
              </div>
              <div className="preview-progress">
                <span />
              </div>
              <div className="preview-tags">
                <span>Preserve headings</span>
                <span>Smart images</span>
                <span>Instant download</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container feature-section" aria-labelledby="features-title">
        <div className="section-heading">
          <p className="brand-kicker">What you get</p>
          <h2 id="features-title">Purpose built for practical file workflows</h2>
        </div>

        <div className="feature-grid" role="list" aria-label="Platform features">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card" role="listitem">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="container steps-section" aria-labelledby="steps-title">
        <div className="section-heading">
          <p className="brand-kicker">Simple process</p>
          <h2 id="steps-title">Three steps to convert and ship</h2>
        </div>

        <ol className="steps-grid">
          <li>
            <span>1</span>
            Upload your PDF and set an output target.
          </li>
          <li>
            <span>2</span>
            Run conversion and validate the preview.
          </li>
          <li>
            <span>3</span>
            Download instantly or route via email.
          </li>
        </ol>
      </section>
    </div>
  );
}
