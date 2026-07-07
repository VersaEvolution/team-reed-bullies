# Infamous Team Reed Bullies — Website

Mobile-first landing page for Infamous Team Reed Bullies, a premium American Bully breeding program.

## Project structure

```
team-reed-bullies/
├── index.html        # Page markup (home page)
├── css/
│   └── style.css     # All styles (theme colors defined as CSS variables at the top)
├── js/
│   └── main.js       # Nav drawer, bottom-nav active state, scroll reveal animations
├── images/
│   ├── logo.png      # Brand logo (also used as favicon)
│   └── hero.png      # Hero image (headline text is part of the image)
└── README.md
```

## How to run

It's a static site — no build step needed. Either:

- Double-click `index.html` to open it in a browser, or
- Serve it locally for a proper preview:
  ```
  npx http-server . -p 8080
  ```
  then open http://localhost:8080

## Editing notes

- **Colors** — change the CSS variables at the top of `css/style.css` (`--gold`, `--black`, etc.) to retheme the whole site.
- **Fonts** — loaded from Google Fonts in `index.html` (Anton for headlines, Oswald for body/buttons, Alex Brush for script accents).
- **Hero headline** — the "BUILT DIFFERENT / Bred to Excel" text is baked into `images/hero.png`, not HTML. To change the wording, replace the image.
- The layout is capped at 560px wide (`.wrap` in `style.css`) and centered on desktop, matching the mobile-first design.
Test