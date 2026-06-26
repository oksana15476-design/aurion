// AURION website — Services (hairline grid). Attaches to window.AurionKit.
window.AurionKit = window.AurionKit || {};
window.AurionKit.Services = function Services({ DS }) {
  const { Eyebrow } = DS;
  const services = [
    { n: "01", t: "Market Entry", d: "Company registration, licensing, banking and compliance — a local entity that is ready to operate, not a slide deck." },
    { n: "02", t: "Sales Launch", d: "Distribution, first customers and a working revenue pipeline. We sell — we don't just advise." },
    { n: "03", t: "Venture Building", d: "We co-build and run the business on the ground with you, sharing the risk and the upside." },
  ];
  return (
    <section id="services" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "108px 32px" }}>
      <div style={{ marginBottom: 56 }}>
        <Eyebrow>What we do</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--display-sm)", lineHeight: "var(--leading-snug)", letterSpacing: "var(--tracking-heading)", maxWidth: "18ch", margin: 0, color: "var(--text-primary)" }}>
          Three ways we get you into the market.
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
        {services.map((s) => (
          <div key={s.n} style={{ background: "var(--surface-card)", padding: "40px 34px 46px", minHeight: 300, display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--accent)", letterSpacing: "0.1em" }}>{s.n}</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--heading-card)", letterSpacing: "-0.01em", marginTop: 26, color: "var(--text-primary)" }}>{s.t}</h3>
            <p style={{ marginTop: 16, fontSize: "var(--body-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-secondary)" }}>{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
