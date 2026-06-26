// AURION website — Engagement / deal models (sunken section). Attaches to window.AurionKit.
window.AurionKit = window.AurionKit || {};
window.AurionKit.Engagement = function Engagement({ DS }) {
  const { Eyebrow, Card } = DS;
  const deals = [
    { meta: "Advisory · fixed fee", t: "Market Entry", d: "A fixed-scope mandate: entity, licensing, banking and compliance for a clear fee. You own 100% of the result." },
    { meta: "Sales launch · retainer + success", t: "Sales Launch", d: "A monthly retainer plus a success fee tied to revenue and first signed deals. We are paid when you sell." },
    { meta: "Venture · shared equity", t: "Venture Building", d: "We co-invest time and capital for a minority stake. Aligned for the long term — your upside is our upside." },
  ];
  return (
    <section id="engagement" style={{ background: "var(--surface-sunken)", borderTop: "1px solid var(--line-weak)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "108px 32px" }}>
        <div style={{ maxWidth: 620, marginBottom: 54 }}>
          <Eyebrow>Engagement</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--display-md)", lineHeight: "var(--leading-snug)", letterSpacing: "var(--tracking-heading)", margin: 0, color: "var(--text-primary)" }}>
            How we work — and how we're paid.
          </h2>
          <p style={{ marginTop: 20, fontSize: "var(--body-md)", lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)", maxWidth: "52ch" }}>
            Choose the model that fits your risk appetite. Most clients start with one and grow into the next.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
          {deals.map((d) => (
            <Card key={d.t} meta={d.meta} title={d.t} style={{ minHeight: 230 }}>{d.d}</Card>
          ))}
        </div>
      </div>
    </section>
  );
};
