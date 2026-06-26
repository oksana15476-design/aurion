**LangSwitcher** — the header locale menu. Flag + local-language name on a hairline pill; opens a parchment dropdown. Ships the brand's 7 locales (EN/RU/中文/Türkçe/हिन्दी/العربية/فارسی). Selecting `ar`/`fa` should drive `dir="rtl"` on `<html>` in the host.

```jsx
<LangSwitcher value={lang} onChange={setLang} />
```

Closes on outside-click. Uses logical properties so it mirrors correctly under RTL.
