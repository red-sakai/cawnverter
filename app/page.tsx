export default function Home() {
  const targets = [
    {
      name: "Word",
      format: ".docx",
      description: "Keeps paragraphs, headings, and list structure.",
    },
    {
      name: "JPG",
      format: ".jpg",
      description: "Great for slides, social posts, and previews.",
    },
    {
      name: "PNG",
      format: ".png",
      description: "Lossless pages with transparent-safe quality.",
    },
    {
      name: "HTML",
      format: ".html",
      description: "Export content as web-ready markup.",
    },
  ];

  return (
    <div className="site-shell">
      <header className="topbar container">
        <div className="brand-block">
          <p className="brand-kicker">Cawnverter Studio</p>
          <h1>PDF Converter</h1>
        </div>
        <p className="status-pill" aria-label="Service status">
          Live and ready
        </p>
      </header>

      <main className="container page-grid">
        <section className="hero">
          <p className="eyebrow">Fast document transformations</p>
          <h2>Convert your PDF to Word, JPG, PNG, or HTML in one place.</h2>
          <p className="hero-copy">
            Upload once, choose your target format, and export clean files in a
            few clicks. The interface is optimized for both desktop and mobile
            workflows.
          </p>

          <div className="target-grid" role="list" aria-label="Supported output types">
            {targets.map((target) => (
              <article key={target.name} className="target-card" role="listitem">
                <p className="target-title">{target.name}</p>
                <p className="target-format">{target.format}</p>
                <p className="target-description">{target.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="convert-panel" aria-labelledby="convert-heading">
          <h3 id="convert-heading">Start conversion</h3>
          <form className="convert-form" action="#" method="post">
            <label htmlFor="pdf-upload">1) Upload PDF file</label>
            <input id="pdf-upload" name="pdf-upload" type="file" accept="application/pdf" required />

            <label htmlFor="target-format">2) Choose output type</label>
            <select id="target-format" name="target-format" defaultValue="docx" required>
              <option value="docx">Word (.docx)</option>
              <option value="jpg">JPG (.jpg)</option>
              <option value="png">PNG (.png)</option>
              <option value="html">HTML (.html)</option>
            </select>

            <label htmlFor="email">3) Optional delivery email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
            />

            <button type="submit">Convert PDF</button>
            <p className="form-note">
              Front-end demo is ready. Connect this form to your conversion API
              or worker to process files server-side.
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}
