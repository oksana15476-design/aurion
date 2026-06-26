import React from "react";

export interface StatBlockProps {
  /** the big numeral / fragment, e.g. "90 days" */
  value: React.ReactNode;
  /** short supporting line */
  label: React.ReactNode;
  onDark?: boolean;
  size?: "md" | "lg";
  style?: React.CSSProperties;
}

/** Big Archivo numeral + label for proof bands and approach steps. */
export function StatBlock(props: StatBlockProps): JSX.Element;
