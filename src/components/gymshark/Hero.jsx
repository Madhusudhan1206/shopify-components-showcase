import Placeholder from '../shared/Placeholder';
import ComponentTag from '../shared/ComponentTag';

/**
 * Hero
 * props: { eyebrow, headline, subtext, ctaLabel }
 * One large full-bleed capsule-drop hero with bold overlay copy —
 * distinct from the Minimalist stacked-banner pattern: a single
 * dominant statement image rather than several smaller banners.
 */
export default function Hero({ eyebrow, headline, subtext, ctaLabel }) {
  return (
    <section className="gs-hero">
      <ComponentTag name="Hero" />
      <Placeholder width={1600} height={700} label="Capsule Drop Hero" bg="111111" fg="ffffff" />
      <div className="gs-hero__overlay">
        <span className="gs-hero__eyebrow">{eyebrow}</span>
        <h1>{headline}</h1>
        <p>{subtext}</p>
        <button type="button" className="gs-btn">
          {ctaLabel}
        </button>
      </div>
    </section>
  );
}
