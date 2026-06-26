import React from "react";

export interface CardProps {
  /** gold slash-numeral, e.g. "01" */
  number?: React.ReactNode;
  /** uppercase pill kicker (engagement / deal cards) */
  meta?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  onDark?: boolean;
  style?: React.CSSProperties;
}

/**
 * Near-square parchment content card with hairline border (no shadow).
 *
 * @startingPoint section="Surfaces" subtitle="Service / engagement card" viewport="360x260"
 */
export function Card(props: CardProps): JSX.Element;
