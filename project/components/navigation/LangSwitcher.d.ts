import React from "react";

export interface LangOption {
  key: string;
  code: string;
  flag: string;
  label: string;
}

export interface LangSwitcherProps {
  /** active locale key, e.g. "en" */
  value?: string;
  onChange?: (key: string) => void;
  /** override the default 7-locale list */
  langs?: LangOption[];
}

/**
 * Nav language menu — flag + local name, pill trigger, parchment dropdown.
 * Defaults to EN/RU/ZH/TR/HI/AR/FA; ar & fa drive RTL on the host.
 */
export function LangSwitcher(props: LangSwitcherProps): JSX.Element;
