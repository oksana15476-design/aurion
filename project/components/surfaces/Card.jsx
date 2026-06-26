import React from "react";

/**
 * AURION Card — near-square parchment card with a hairline border.
 * `numbered` shows a gold slash-numeral; `meta` shows a pill kicker
 * (engagement cards). No drop shadow by brand convention.
 */
export function Card({ number, meta, title, children, onDark = false, style = {} }) {
  return (
    <div
      style={{
        background: onDark ? "var(--ink-700)" : "var(--surface-card)",
        border: `1px solid ${onDark ? "var(--border-on-dark)" : "var(--border)"}`,
        borderRadius: "var(--radius-sm)",
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {number && (
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 14,
            color: "var(--accent)",
            letterSpacing: "0.1em",
          }}
        >
          {number}
        </div>
      )}
      {meta && (
        <div
          style={{
            alignSelf: "flex-start",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "var(--accent)",
            border: "1px solid rgba(168,124,61,.45)",
            borderRadius: "var(--radius-pill)",
            padding: "5px 12px",
          }}
        >
          {meta}
        </div>
      )}
      {title && (
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 24,
            letterSpacing: "-0.01em",
            margin: `${number || meta ? 22 : 0}px 0 0`,
            color: onDark ? "var(--text-on-inverse)" : "var(--text-primary)",
          }}
        >
          {title}
        </h3>
      )}
      {children && (
        <p
          style={{
            margin: "14px 0 0",
            fontSize: "var(--body-sm)",
            lineHeight: "var(--leading-relaxed)",
            color: onDark ? "var(--text-on-inverse-dim)" : "var(--text-secondary)",
          }}
        >
          {children}
        </p>
      )}
    </div>
  );
}
