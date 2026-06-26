import React from "react";

/**
 * AURION Field — labelled text input / textarea for the contact form.
 * Uppercase tracked label above a hairline input on white.
 */
export function Field({ label, value, onChange, multiline = false, rows = 3, type = "text", style = {} }) {
  const inputStyle = {
    border: "1px solid rgba(21,18,14,.2)",
    borderRadius: "var(--radius-sm)",
    padding: "12px 14px",
    fontFamily: "var(--font-body)",
    fontSize: 15,
    color: "var(--text-primary)",
    background: "#fff",
    width: "100%",
    boxSizing: "border-box",
    resize: multiline ? "vertical" : undefined,
  };
  return (
    <label
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 7,
        fontSize: "var(--label-size)",
        fontWeight: 600,
        letterSpacing: "var(--label-tracking)",
        textTransform: "uppercase",
        color: "var(--text-muted)",
        ...style,
      }}
    >
      {label}
      {multiline ? (
        <textarea value={value} onChange={onChange} rows={rows} style={inputStyle} />
      ) : (
        <input value={value} onChange={onChange} type={type} style={inputStyle} />
      )}
    </label>
  );
}
