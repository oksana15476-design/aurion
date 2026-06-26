import React from "react";

/**
 * AURION StatBlock — a big Archivo numeral over a short label.
 * Used in the proof band and the dark approach steps.
 */
export function StatBlock({ value, label, onDark = false, size = "md", style = {} }) {
  const sizes = { md: 33, lg: 30 };
  return (
    <div style={style}>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: sizes[size] || 33,
          letterSpacing: "-0.02em",
          color: onDark ? "var(--accent-on-dark)" : "var(--text-primary)",
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: 8,
          fontFamily: "var(--font-body)",
          fontSize: 14,
          lineHeight: 1.45,
          color: onDark ? "var(--text-on-inverse-dim)" : "var(--text-secondary)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
