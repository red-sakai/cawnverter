const targets = [
  {
    name: "Word",
    format: ".docx",
    description: "Best for editing with preserved structure.",
  },
  {
    name: "JPG",
    format: ".jpg",
    description: "Great for decks, social media, and previews.",
  },
  {
    name: "PNG",
    format: ".png",
    description: "Lossless output with consistent page quality.",
  },
  {
    name: "HTML",
    format: ".html",
    description: "Publish to web platforms with minimal cleanup.",
  },
];

export default function ConvertPage() {
  return (
    <div className="site-shell">
      <section className="container convert-layout">
        <div className="convert-intro">
          <p className="eyebrow">Conversion workspace</p>
          <h1>Convert your PDF into the format you actually need.</h1>
          <p>
            This screen is focused on execution. Upload a file, choose target
            output, and send it through your API or background worker.
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
        </div>

        <section className="convert-panel" aria-labelledby="convert-heading">
          <h2 id="convert-heading">Start conversion</h2>
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
            <input id="email" name="email" type="email" placeholder="you@example.com" />

            <button type="submit">Convert PDF</button>
            <p className="form-note">
              Front-end workflow is ready. Connect this form to your conversion
              endpoint for production processing.
            </p>
          </form>
        </section>
      </section>
    </div>
  );
}