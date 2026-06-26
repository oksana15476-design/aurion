import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  /** solid = ink→gold on hover (primary); gold = accent fill; ghost = hairline outline */
  variant?: "solid" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  /** render as <a> when set */
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  style?: React.CSSProperties;
}

/**
 * Primary call-to-action button for AURION surfaces.
 *
 * @startingPoint section="Core" subtitle="Pill CTA — ink, gold, ghost" viewport="700x140"
 */
export function Button(props: ButtonProps): JSX.Element;
