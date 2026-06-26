import React from "react";

const LANGS = [
  { key: "en", code: "EN", flag: "🇬🇧", label: "English" },
  { key: "ru", code: "RU", flag: "🇷🇺", label: "Русский" },
  { key: "zh", code: "ZH", flag: "🇨🇳", label: "中文" },
  { key: "tr", code: "TR", flag: "🇹🇷", label: "Türkçe" },
  { key: "hi", code: "HI", flag: "🇮🇳", label: "हिन्दी" },
  { key: "ar", code: "AR", flag: "🇸🇦", label: "العربية" },
  { key: "fa", code: "FA", flag: "🇮🇷", label: "فارسی" },
];

/**
 * AURION LangSwitcher — the nav language menu: flag + local name,
 * pill trigger, parchment dropdown. RTL locales (ar/fa) marked.
 */
export function LangSwitcher({ value = "en", onChange, langs = LANGS }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const cur = langs.find((l) => l.key === value) || langs[0];

  return (
    <div ref={ref} style={{ position: "relative", fontFamily: "var(--font-body)" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex", alignItems: "center", gap: 8,
          border: "1px solid var(--border-strong)", borderRadius: "var(--radius-pill)",
          padding: "7px 14px", background: "transparent",
          fontFamily: "inherit", fontSize: 13, fontWeight: 600,
          letterSpacing: "0.02em", cursor: "pointer", color: "var(--text-primary)",
        }}
      >
        <span style={{ fontSize: 15, lineHeight: 1 }}>{cur.flag}</span>
        <span>{cur.label}</span>
        <span style={{ fontSize: 9, opacity: 0.5 }}>▾</span>
      </button>
      {open && (
        <div
          style={{
            position: "absolute", top: "calc(100% + 8px)", insetInlineEnd: 0,
            background: "var(--surface-page)", border: "1px solid var(--border)",
            borderRadius: "9px", padding: 6, minWidth: 184,
            boxShadow: "var(--shadow-dropdown)", zIndex: 60,
            display: "flex", flexDirection: "column", gap: 2,
          }}
        >
          {langs.map((l) => {
            const active = l.key === value;
            return (
              <button
                key={l.key}
                onClick={() => { onChange && onChange(l.key); setOpen(false); }}
                style={{
                  display: "flex", alignItems: "center", gap: 11, width: "100%",
                  textAlign: "start", border: "none", borderRadius: 6,
                  padding: "9px 12px", fontFamily: "inherit", fontSize: 14, fontWeight: 600,
                  cursor: "pointer",
                  background: active ? "var(--ink-800)" : "transparent",
                  color: active ? "var(--parchment-100)" : "var(--text-primary)",
                }}
              >
                <span style={{ fontSize: 16, lineHeight: 1, minWidth: 22 }}>{l.flag}</span>
                <span style={{ fontWeight: 700, fontSize: 10, letterSpacing: "0.1em", opacity: 0.5, minWidth: 22 }}>{l.code}</span>
                <span>{l.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
