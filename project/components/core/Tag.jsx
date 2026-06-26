import React from "react";

/**
 * AURION Tag — a pill chip for sectors/markets. Default is a hairline
 * outline that colours gold on hover; `solid` is an ink square chip.
 */
export function Tag({ children, variant = "outline", style = {} }) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "var(--font-body)",
    fontWeight: variant === "solid" ? 600 : 500,
    fontSize: variant === "solid" ? 14 : 15.5,
    lineHeight: 1,
    transition: "color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)",
    ...style,
  };
  const variants = {
    outline: {
      border: "1px solid var(--border-strong)",
      borderRadius: "var(--radius-pill)",
      padding: "13px 22px",
      color: hover ? "var(--accent)" : "var(--text-primary)",
      borderColor: hover ? "var(--accent)" : "var(--border-strong)",
    },
    dashed: {
      border: "1px dashed rgba(21,18,14,.3)",
      borderRadius: "var(--radius-pill)",
      padding: "13px 22px",
      color: "var(--text-muted)",
    },
    solid: {
      background: "var(--ink-800)",
      color: "var(--parchment-100)",
      borderRadius: "var(--radius-xs)",
      padding: "9px 16px",
      letterSpacing: "0.02em",
    },
  };
  return (
    <span
      style={{ ...base, ...variants[variant] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </span>
  );
}
