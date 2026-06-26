import React from "react";

/**
 * AURION Button — pill button in the brand's two core treatments.
 * Solid ink that fills gold on hover, or a hairline ghost.
 */
export function Button({
  children,
  variant = "solid",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  style = {},
}) {
  const sizes = {
    sm: { padding: "10px 18px", fontSize: 13.5 },
    md: { padding: "15px 28px", fontSize: 15 },
    lg: { padding: "17px 34px", fontSize: 16 },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-body)",
    fontWeight: variant === "gold" ? 700 : 600,
    lineHeight: 1,
    padding: s.padding,
    fontSize: s.fontSize,
    borderRadius: "var(--radius-pill)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    textDecoration: "none",
    transition: "background var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard)",
    ...style,
  };

  const variants = {
    solid: { background: "var(--ink-800)", color: "var(--parchment-100)" },
    gold: { background: "var(--accent)", color: "var(--ink-800)" },
    ghost: { background: "transparent", color: "var(--ink-800)", borderColor: "var(--border-strong)" },
  };

  const [hover, setHover] = React.useState(false);
  const hoverStyle =
    !disabled && hover
      ? variant === "ghost"
        ? { borderColor: "var(--ink-800)" }
        : variant === "gold"
        ? { background: "var(--parchment-100)" }
        : { background: "var(--accent)" }
      : {};

  const props = {
    style: { ...base, ...variants[variant], ...hoverStyle },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick,
  };

  if (href && !disabled) return <a href={href} {...props}>{children}</a>;
  return <button type={type} disabled={disabled} {...props}>{children}</button>;
}
