import React from "react";

/**
 * AURION Eyebrow — the gold rule + uppercase tracked label that
 * precedes every section heading. Omit the rule on dark via `onDark`.
 */
export function Eyebrow({ children, onDark = false, rule = true, style = {} }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 14,
        ...style,
      }}
    >
      {rule && (
        <span
          style={{
            width: 30,
            height: 1,
            background: onDark ? "var(--accent-on-dark)" : "var(--accent)",
          }}
        />
      )}
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--eyebrow-size)",
          fontWeight: 600,
          letterSpacing: "var(--eyebrow-tracking)",
          textTransform: "uppercase",
          color: onDark ? "var(--accent-on-dark)" : "var(--accent)",
        }}
      >
        {children}
      </span>
    </div>
  );
}
