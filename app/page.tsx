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
