import React from "react";

export interface EyebrowProps {
  children: React.ReactNode;
  /** use lighter gold (#CDA869) on ink sections */
  onDark?: boolean;
  /** show the 30px gold rule before the label */
  rule?: boolean;
  style?: React.CSSProperties;
}

/** Uppercase tracked section label with a gold rule — precedes every heading. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
