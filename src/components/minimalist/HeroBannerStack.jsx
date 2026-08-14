import Placeholder from '../shared/Placeholder';
import ComponentTag from '../shared/ComponentTag';

/**
 * HeroBannerStack
 * props: { banners: { label: string, ctaLabel: string }[] }
 * A vertical stack of full-bleed wide banners, each with a caption overlay —
 * mirrors the reference site's pattern of several stacked promo banners
 * rather than a single carousel.
 */
export default function HeroBannerStack({ banners }) {
  return (
    <section className="min-hero-stack">
      <ComponentTag name="HeroBannerStack" />
      {banners.map((banner) => (
        <div className="min-hero-stack__item" key={banner.label}>
          <Placeholder width={1600} height={480} label={banner.label} bg="f2ede6" fg="8a7c68" />
          <div className="min-hero-stack__caption">
            <span>{banner.ctaLabel}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
