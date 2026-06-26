// AURION website — Nav section. Attaches to window.AurionKit.
window.AurionKit = window.AurionKit || {};
window.AurionKit.Nav = function Nav({ DS, lang, setLang }) {
  const { LangSwitcher, Button } = DS;
  const link = { opacity: 0.78, fontSize: 14, fontWeight: 500, letterSpacing: "0.01em", color: "var(--text-primary)", textDecoration: "none", cursor: "pointer" };
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--nav-bg)", backdropFilter: "var(--blur-nav)", borderBottom: "1px solid var(--line-weak)" }}>
      <nav style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "18px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <a href="#top" style={{ display: "flex", alignItems: "baseline", gap: 10, textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 21, letterSpacing: "var(--tracking-wordmark)", color: "var(--text-primary)" }}>AURION</span>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", alignSelf: "center", marginBottom: 1 }} />
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 34 }}>
          <div style={{ display: "flex", gap: 28 }}>
            <a style={link} href="#services">Services</a>
            <a style={link} href="#engagement">Engagement</a>
            <a style={link} href="#contact">Contact</a>
          </div>
          <LangSwitcher value={lang} onChange={setLang} />
          <Button size="sm" href="#contact">Start your entry</Button>
        </div>
      </nav>
    </header>
  );
};
