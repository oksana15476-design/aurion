# AURION — Website UI Kit

A high-fidelity recreation of the AURION marketing site, composing the design-system primitives (`Button`, `Tag`, `Eyebrow`, `StatBlock`, `Card`, `Field`, `LangSwitcher`).

- `index.html` — interactive single-page recreation: sticky nav with working language switcher, hero, proof band, services grid, engagement/deal models, and a working lead-capture form with success state.
- `Nav.jsx` · `Hero.jsx` · `Services.jsx` · `Engagement.jsx` · `Contact.jsx` — the screen sections, factored for handoff. Each attaches to `window.AurionKit` and composes DS components from the generated bundle.

This kit is a recreation of the existing design (see `../../prototype/Aurion.dc.html`), not a new direction. Imagery uses matted placeholder frames; drop real photography in production.
