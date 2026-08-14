# Component Inventory

Two Shopify storefronts were used as visual references. All components below
are rendered, in this exact order, on the single page at `/` (see `src/App.jsx`).
All imagery is `placehold.co` placeholder art; all copy is paraphrased/original.

## Reference 1 — Minimalist (beminimalist.co)
Skincare storefront. Warm cream palette, quiet serif-adjacent type, generous
whitespace, stacked promo banners rather than a single hero.

| # | Component | File | Props |
|---|---|---|---|
| 1 | `AnnouncementBar` | `components/minimalist/AnnouncementBar.jsx` | `message: string` |
| 2 | `Navbar` | `components/minimalist/Navbar.jsx` | `logo: string`, `items: string[]` |
| 3 | `HeroBannerStack` | `components/minimalist/HeroBannerStack.jsx` | `banners: { label, ctaLabel }[]` |
| 4 | `ProductCarousel` (Best Sellers) | `components/minimalist/ProductCarousel.jsx` | `title: string`, `products: { name, tag, price }[]` |
| 5 | `CategoryGrid` | `components/minimalist/CategoryGrid.jsx` | `title: string`, `items: string[]` |
| 6 | `ConcernTagGrid` | `components/minimalist/ConcernTagGrid.jsx` | `title: string`, `items: string[]` |
| 7 | `ProductCarousel` (New Launches) | *(reused, #4)* | same shape, different data |
| 8 | `ValuePropStrip` | `components/minimalist/ValuePropStrip.jsx` | `title, subtitle: string`, `values: { icon, label, desc }[]` |
| 9 | `TrustBanner` | `components/minimalist/TrustBanner.jsx` | `title, desc: string` |
| 10 | `Footer` | `components/minimalist/Footer.jsx` | `columns: { heading, links }[]`, `social: string[]` |

## Reference 2 — Gymshark (gymshark.com)
Athletic apparel storefront. Black/white high-contrast palette, bold uppercase
type, one dominant capsule-drop hero, activity- and category-based quick-shop
grids, editorial 2-up campaign spotlight.

| # | Component | File | Props |
|---|---|---|---|
| 1 | `AnnouncementBar` | `components/gymshark/AnnouncementBar.jsx` | `message: string` |
| 2 | `Navbar` | `components/gymshark/Navbar.jsx` | `logo: string`, `items: string[]`, `showGenderToggle: boolean` |
| 3 | `Hero` | `components/gymshark/Hero.jsx` | `eyebrow, headline, subtext, ctaLabel: string` |
| 4 | `ActivityTileGrid` | `components/gymshark/ActivityTileGrid.jsx` | `title: string`, `items: string[]` |
| 5 | `ProductCarousel` (New Releases) | `components/gymshark/ProductCarousel.jsx` | `title: string`, `products: { name, price, badge }[]` |
| 6 | `EditorialBannerGrid` | `components/gymshark/EditorialBannerGrid.jsx` | `banners: { title, subtitle }[]` |
| 7 | `CategoryTileGrid` | `components/gymshark/CategoryTileGrid.jsx` | `title: string`, `items: string[]` |
| 8 | `NewsletterBanner` | `components/gymshark/NewsletterBanner.jsx` | `headline, subtext: string` |
| 9 | `Footer` | `components/gymshark/Footer.jsx` | `columns: { heading, links }[]`, `social: string[]` |

## Shared
| Component | File | Purpose |
|---|---|---|
| `Placeholder` | `components/shared/Placeholder.jsx` | Renders a `placehold.co` image for any section artwork |
| `ComponentTag` | `components/shared/ComponentTag.jsx` | Small overlay label naming the component, for showcase clarity |

## Explicitly out of scope (per task brief)
- No cart backend, checkout, or payments — "Add to cart" buttons are static markup.
- No multi-page clone — single route (`/`), all sections on one page.
- No functional widgets (AI chat, gender-state switching, form validation) —
  the gender toggle and newsletter form are rendered as static visual affordances only.
- No proprietary Liquid/theme source was read or copied; all data in
  `src/data/*.js` is paraphrased placeholder content.
