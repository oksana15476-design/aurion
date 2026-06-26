# AURION — Design System

**AURION** is a market-entry consultancy that helps companies from abroad — China, India, the Gulf, Türkiye, Southeast Asia — establish a real commercial presence in Russia. The positioning is one sentence: **execution, not theory.** Market entry, sales launch and venture building, delivered by a team on the ground.

This design system captures the brand built for the AURION website redesign: a warm, editorial, B2B-premium visual language with a single champagne-gold accent. It is intentionally restrained — the credibility comes from typography, whitespace and hairlines, not decoration.

> **Source note.** There was no external codebase, Figma file, or brand book to import. The original aurion.fund site is a client-rendered app whose body copy is not machine-readable, so this system is derived from the redesign produced in this project (`Aurion.dc.html`) and the brand's own positioning. Treat copy and palette as faithful-but-not-canonical until confirmed by the client.

---

## CONTENT FUNDAMENTALS

**Voice.** Confident, plain, operator-not-consultant. Short declarative sentences. The thesis verb is *execute*; the recurring contrast is *doing vs. advising* ("We sell — we don't just advise", "We build, not just advise", "growing the business, not handing over a report").

**Person.** "We" (AURION) speaking to "you" (the client). Never first-person singular, never faceless third person.

**Casing.** Sentence case for body and most headings. Eyebrows/labels are UPPERCASE with wide tracking (`0.18em`). The wordmark **AURION** is always all-caps with `0.22em` tracking and a gold dot.

**Tone rules.**
- Lead with the outcome ("to a working local entity, typically"), not the activity.
- Quantify only what's real: `90 days`, `Day one`, `6+ sectors`, `One team`. Avoid invented stats.
- No hype words ("revolutionary", "world-class"), no exclamation marks.
- Numbers and proof points are terse fragments, not sentences.

**Emoji.** None in product copy. The only place "flag" glyphs appear is the language switcher (🇬🇧🇷🇺🇨🇳🇹🇷🇮🇳🇸🇦🇮🇷), as functional locale markers — never decorative.

**Localization.** The site speaks the reader's language end-to-end: EN, RU, 中文, Türkçe, हिन्दी, العربية (RTL), فارسی (RTL). Translations keep the same terse register; the gold/ink system is identical across scripts.

**Example copy.**
- Hero: *"We help companies enter Russia through execution, not theory."*
- Service: *"Company registration, licensing, banking and compliance — a local entity that is ready to operate, not a slide deck."*
- Proof: *"Day one — a sales motion, not a slide deck."*

---

## VISUAL FOUNDATIONS

**Palette.** Warm parchment surfaces (`#F3EFE7` page, `#EFE9DD` sunken), warm near-black ink (`#15120E`, `#0E0C09` footer), and a single champagne-gold accent (`#A87C3D` on light, `#CDA869` on dark). Secondary text is a warm stone (`#574F40`), muted is `#8A8270`. **No pure white, no pure black, no second accent colour.** See `tokens/colors.css`.

**Typography.** Two grotesques. **Archivo** (600, tight `-0.025em`) sets every heading, eyebrow and large numeral; headings run fluid from `46px` up to `76px` hero. **Hanken Grotesk** carries body (`17px` standard, `15.5px` dense) and UI. Non-Latin fallbacks (Noto SC / Naskh Arabic / Devanagari) are appended to both stacks. See `tokens/typography.css`.

**Spacing & layout.** 8px rhythm. One container (`1240px`) with `32px` gutters. Sections breathe at `108px` vertical padding. Multi-cell blocks (services, proof) use a **1px hairline grid**: cells sit on a `rgba(21,18,14,.12)` background with `1px` gaps so dividers read as drawn lines, not gaps.

**Backgrounds.** Flat colour only — never gradients on large fields. The rhythm alternates light page → dark ink section (`#15120E`) → sunken parchment (`#EFE9DD`) for cadence. Photography sits in bordered, padded frames (a `14px` parchment mat inside a hairline border) with a small ink caption chip. No full-bleed hero images; imagery is matted and editorial. Imagery direction: warm, real, documentary (skylines, factory floors, ports, handshakes) — not stocky or cool-toned.

**Borders & cards.** Hairlines do the structural work: `1px` at `.10–.22` ink alpha on light, `.22` parchment alpha on dark. Cards are near-square (`radius 4px`), parchment fill, hairline border, generous padding, no drop shadow by default. The only shadowed surfaces are the sticky-nav (blur) and the language dropdown.

**Corner radii.** Editorial and tight: `2px` (image frames, badges, caption chips), `4px` (cards, inputs), `6px` (form panel, dropdown). Fully-round `999px` is reserved for buttons, tags and nav chips.

**Shadows.** Rare and soft. Dropdown `0 16px 40px rgba(21,18,14,.18)`; floating canvas card `0 1px 3px rgba(21,18,14,.08)`. Everything else relies on borders.

**Transparency & blur.** Sticky nav is `rgba(243,239,231,.82)` + `blur(14px)`. Image caption chips are `rgba(21,18,14,.86)` + `blur(4px)`. Blur is used only for these two overlay contexts.

**Motion.** Restrained. Color/opacity transitions, no bounces, no parallax. Standard ease `cubic-bezier(.2,0,0,1)` at ~220ms.
- **Hover:** ink-filled buttons turn **gold**; bordered elements **darken/colour their border** to gold; nav links lift `opacity .78 → 1`; chips colour their text + border gold.
- **Press:** no scale on buttons (editorial, not springy).

**RTL.** Arabic and Persian flip via `dir="rtl"` on `<html>`; use logical properties (`inset-inline-*`, `text-align:start`) so the gold dot, caption chip and badges mirror correctly.

---

## ICONOGRAPHY

AURION is **near-iconless by design** — the brand leans on type, rule-lines and numerals instead of an icon set. The recurring "marks" are:
- The **gold dot** (`7px` circle) beside the wordmark and as a bullet before notes.
- A short **gold rule** (`30px × 1px`) preceding eyebrows.
- Slash numerals (`01 / 02 / 03`) for sequencing services and steps, set in Archivo.
- **Flag emoji** strictly as locale markers in the language switcher.

There is no custom icon font and no SVG icon library in the source. If a future surface genuinely needs UI icons (e.g. an app), use **Lucide** (CDN) at `1.5px` stroke to match the hairline weight, and flag the addition — it is a substitution, not part of the original brand.

---

## INDEX / MANIFEST

Root
- `styles.css` — global entry; `@import`s every token + font file. Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — portable skill manifest.

`tokens/`
- `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `fonts.css`

`guidelines/` — foundation specimen cards (Design System tab): colors, type, spacing, brand marks.

`components/` — reusable React primitives, each with `.jsx` + `.d.ts` + `.prompt.md` + a `@dsCard` HTML:
- `core/Button` · `core/Tag` · `core/Eyebrow` · `core/StatBlock`
- `forms/Field`
- `surfaces/Card`
- `navigation/LangSwitcher`

`ui_kits/website/` — high-fidelity recreation of the AURION landing page (hero, services, engagement, contact), composing the primitives above.

Related: `prototype/Aurion.dc.html` — the live redesign this system was extracted from.
