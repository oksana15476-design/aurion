# AURION Site — Production Readiness Checklist

`Aurion Site.dc.html` has been hardened from prototype toward production. This lists what's **done in-file** and what **you must supply** before go-live.

## ✅ Done in the build
- **SEO**: `<title>`, meta description, canonical, robots, Open Graph + Twitter cards, `theme-color`, **JSON-LD structured data** (Organization, WebSite, ProfessionalService, FAQPage), **`robots.txt` + `sitemap.xml`**, and a **favicon**.
- **Deploy**: compiled to a self-contained static site at the repo root — `index.html` + `styles.css` + `tokens/` (no build step, no runtime dependency on the `project/` design bundle). Drop the root on any static host (Cloudflare Pages, etc.).
- **Accessibility**: visible focus rings (`:focus-visible`), `aria-expanded` on FAQ accordion, `aria-label` on carousel + menu controls, real `<label>`s on every field, `role="alert"` on form errors, `prefers-reduced-motion` honored.
- **Responsive**: mobile nav (hamburger + dropdown) below 860px; all grids use `auto-fit`; fluid `clamp()` type.
- **Lead capture**: real form (company/name/email/country/industry/message) with client-side validation, error states, and a success screen.
- **Analytics**: `track()` fan-out to Google (dataLayer/GTM + gtag), Tinybird, Yandex Metrica (`ym`), Baidu (`_hmt`) — fired on `cta_click`, `lead_submit`, `language_change`.
- **i18n scaffolding**: language switcher persists choice, sets `<html lang>`/`dir` (RTL for Arabic), and tracks changes.

## 🔧 You must supply before launch
1. **Analytics IDs** — add your GTM container / GA4 ID (and Yandex/Baidu counters for CN/RU ad campaigns). Placeholder note is in `<helmet>`.
2. **Form backend** — the form currently composes a `mailto:` as a no-backend fallback. Wire `submit()` to a real endpoint (CRM/webhook) for reliable lead capture and spam protection (add honeypot/reCAPTCHA).
3. **Messenger links** — replace `wa.me/`, `t.me/`, `weixin://` placeholders with real handles.
4. **Real imagery** — drop photos into the event slots (currently styled placeholders). A branded `og-image.svg` ships as a stopgap; export a raster `og-image.jpg/png` (1200×630) and point `og:image`/`twitter:image` at it for best compatibility with Facebook/X/WhatsApp scrapers.
5. **Legal pages** — Privacy Policy, Terms, Cookie Policy currently link to `#`. Add real pages + a cookie-consent banner (GDPR/152-FZ).
6. **Translations** — UI copy is English. The switcher is wired (sets `<html lang>`/`dir`, lazy-loads CJK/Arabic/Devanagari fonts) but content is EN-only; supply RU/中文/हिन्दी/Türkçe/العربية/PT translations to localize (target markets: China, India, Gulf, Türkiye, LATAM). **`hreflang` was intentionally omitted** until real per-language URLs exist — add `hreflang` alternates once translated routes are live.
7. **Content sign-off** — confirm FAQ answers (drafted here) and the events list beyond SPIEF (INNOPROM/Canton/GITEX added as plausible — verify).
8. **Domain/meta** — update canonical + OG URLs from `https://aurion.fund/` if different.

## Notes
- Built on the project design system (`styles.css` tokens). Palette/type changes propagate from `tokens/`.
- No pure white/black, single gold accent, Archivo + Hanken Grotesk — per the design system.
