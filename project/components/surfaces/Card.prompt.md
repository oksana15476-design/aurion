**Card** — the brand's content card: parchment fill, hairline border, near-square corners, no shadow. Use `number` for service cards (gold slash-numeral), `meta` for engagement cards (pill kicker). For the hairline-grid service layout, drop the border and place plain cells in a 1px-gap grid instead.

```jsx
<Card number="01" title="Market Entry">
  Company registration, licensing, banking and compliance — a local entity ready to operate.
</Card>
<Card meta="Advisory · fixed fee" title="Market Entry">…</Card>
```
