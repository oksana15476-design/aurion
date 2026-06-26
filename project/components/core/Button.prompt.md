**Button** — the brand's pill call-to-action; use for primary and secondary actions. Solid (ink that fills gold on hover) is primary; `gold` for inverted/dark sections; `ghost` for the secondary action beside a primary.

```jsx
<Button href="#contact">Start your entry</Button>
<Button variant="ghost" href="#approach">See how we work</Button>
<Button variant="gold" size="lg" onClick={submit}>Get in touch</Button>
```

Variants: `solid` (default), `gold`, `ghost`. Sizes: `sm` / `md` / `lg`. Pass `href` to render an anchor, otherwise it's a `<button>`. No press-scale by brand convention.
