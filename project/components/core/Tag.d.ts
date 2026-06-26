import React from "react";

export interface TagProps {
  children: React.ReactNode;
  /** outline = hairline pill → gold on hover; dashed = "and more"; solid = ink square chip */
  variant?: "outline" | "dashed" | "solid";
  style?: React.CSSProperties;
}

/** Sector / market chip used in the AURION sector and client lists. */
export function Tag(props: TagProps): JSX.Element;
