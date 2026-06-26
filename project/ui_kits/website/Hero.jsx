// AURION website — Hero + proof band. Attaches to window.AurionKit.
window.AurionKit = window.AurionKit || {};
window.AurionKit.Hero = function Hero({ DS }) {
  const { Eyebrow, Button, StatBlock } = DS;
  const proof = [
    { k: "90 days", v: "to a working local entity, typically" },
    { k: "Day one", v: "a sales motion, not a slide deck" },
    { k: "6+", v: "sectors we operate in" },
    { k: "One team", v: "entry, sales and operations" },
  ];
  return (
    <>
      <section id="top" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "84px 32px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 60, alignItems: "center" }}>
          <div>
            <Eyebrow>Market entry into Russia</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--display-hero)", lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-display)", maxWidth: "13ch", margin: 0, color: "var(--text-primary)" }}>
              We help companies enter Russia through execution, not theory.
            </h1>
            <p style={{ marginTop: 28, fontSize: "var(--body-lg)", lineHeight: "var(--leading-normal)", color: "var(--text-secondary)", maxWidth: "46ch" }}>
              Market entry, sales launch and venture building across technology, manufacturing, agriculture and more.
            </p>
            <div style={{ marginTop: 38, display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Button href="#contact">Start your entry</Button>
              <Button variant="ghost" href="#services">See how we work</Button>
            </div>
            <p style={{ marginTop: 34, fontSize: 14, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
              On the ground in Russia for companies entering from abroad.
            </p>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", border: "1px solid var(--line)", borderRadius: "var(--radius-sm)", padding: 14, background: "linear-gradient(160deg,#EFE9DD,#F3EFE7)" }}>
              <div style={{ width: "100%", height: 460, borderRadius: "var(--radius-xs)", background: "var(--parchment-300)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Photo — Moscow / factory / handshake
              </div>
              <div style={{ position: "absolute", insetInlineStart: 26, bottom: 26, background: "rgba(21,18,14,.86)", color: "var(--parchment-100)", fontSize: 11.5, fontWeight: 600, letterSpacing: "0.14em", padding: "7px 12px", borderRadius: "var(--radius-xs)", backdropFilter: "var(--blur-caption)" }}>
                MOSCOW · 55.75°N 37.62°E
              </div>
            </div>
            <div style={{ position: "absolute", top: -16, insetInlineEnd: -12, background: "var(--accent)", color: "var(--ink-800)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", padding: "10px 14px", borderRadius: "var(--radius-xs)", transform: "rotate(2deg)" }}>RU</div>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
          {proof.map((p, i) => (
            <div key={i} style={{ background: "var(--surface-card)", padding: "30px 26px" }}>
              <StatBlock value={p.k} label={p.v} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
