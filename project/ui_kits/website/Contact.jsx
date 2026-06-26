// AURION website — Contact / lead form (dark). Attaches to window.AurionKit.
window.AurionKit = window.AurionKit || {};
window.AurionKit.Contact = function Contact({ DS }) {
  const { Eyebrow, Field, Button } = DS;
  const [form, setForm] = React.useState({ company: "", country: "", industry: "", message: "" });
  const [sent, setSent] = React.useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const chip = { display: "flex", alignItems: "center", gap: 8, border: "1px solid var(--border-on-dark)", borderRadius: "var(--radius-pill)", padding: "11px 18px", fontSize: 14, fontWeight: 600, color: "var(--text-on-inverse)", textDecoration: "none" };

  return (
    <section id="contact" style={{ background: "var(--surface-inverse)", color: "var(--text-on-inverse)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "108px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 56, alignItems: "start" }}>
        <div>
          <Eyebrow onDark>Start</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--display-lg)", lineHeight: "var(--leading-snug)", letterSpacing: "var(--tracking-display)", margin: 0 }}>
            Tell us about your entry.
          </h2>
          <p style={{ marginTop: 20, fontSize: "var(--body-md)", lineHeight: "var(--leading-normal)", color: "var(--text-on-inverse-dim)", maxWidth: "42ch" }}>
            Share a few details and we'll come back with a concrete route to revenue.
          </p>
          <div style={{ marginTop: 36 }}>
            <div style={{ fontSize: 13, letterSpacing: "0.04em", color: "rgba(243,239,231,.55)", marginBottom: 14 }}>Message us on</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <a style={chip} href="#">WhatsApp</a>
              <a style={chip} href="#">WeChat</a>
              <a style={chip} href="#">Telegram</a>
              <a style={chip} href="mailto:hello@aurion.fund">hello@aurion.fund</a>
            </div>
          </div>
        </div>
        <div style={{ background: "var(--surface-page)", color: "var(--text-primary)", borderRadius: "var(--radius-md)", padding: "30px 28px" }}>
          {sent ? (
            <div style={{ minHeight: 330, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--accent)", color: "var(--ink-800)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26 }}>✓</div>
              <p style={{ marginTop: 18, fontSize: 18, fontWeight: 600, lineHeight: 1.4, maxWidth: "24ch" }}>Thank you — we'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              <Field label="Company" value={form.company} onChange={set("company")} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 15 }}>
                <Field label="Country" value={form.country} onChange={set("country")} />
                <Field label="Industry" value={form.industry} onChange={set("industry")} />
              </div>
              <Field label="What do you want to achieve in Russia?" multiline value={form.message} onChange={set("message")} />
              <Button type="submit" variant="solid" style={{ marginTop: 6 }}>Request a plan</Button>
              <div style={{ fontSize: 13, color: "var(--text-muted)", textAlign: "center" }}>or reach us directly</div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
