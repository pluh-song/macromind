# Orteva Shopify clone (theme source)

These are the Liquid sections + product template that were built into the
Shopify store `waypointsurvival.myshopify.com` for the Orteva knee-sleeve PDP.

- Target store: waypointsurvival.myshopify.com (MendWell)
- Draft theme: "Orteva Clone (draft)" (id 134863585335)
- Product: Orteva Knee Compression Sleeve (DRAFT), handle `orteva-knee-compression-sleeve-1`
- Slug prefix: `orteva` (asset `orteva-styles.css`, sections `orteva-*`, template `product.orteva.json`)

The shared stylesheet `assets/orteva-styles.css` lives in the theme (uploaded
separately). All 13 sections are self-contained and reference that one asset.

Buy box: pack radios bind to the 3 product variants; size (S–XL by body weight)
and side (L/R) are captured as line-item properties via an AJAX `/cart/add.js`
call with a `/cart` checkout fallback. Everything is editable in the Shopify
theme editor (headings, images, cards, reviews, FAQ are settings/blocks).
