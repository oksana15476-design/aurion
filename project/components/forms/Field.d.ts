import React from "react";

export interface FieldProps {
  /** uppercase tracked label text */
  label: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  multiline?: boolean;
  rows?: number;
  type?: string;
  style?: React.CSSProperties;
}

/** Labelled input / textarea used in the AURION lead-capture form. */
export function Field(props: FieldProps): JSX.Element;
