import Placeholder from '../shared/Placeholder';
import ComponentTag from '../shared/ComponentTag';

/**
 * EditorialBannerGrid
 * props: { banners: { title, subtitle }[] }
 * Two-up campaign/athlete-collab spotlight cards, side by side.
 */
export default function EditorialBannerGrid({ banners }) {
  return (
    <section className="gs-editorial">
      <ComponentTag name="EditorialBannerGrid" />
      <div className="gs-editorial__row">
        {banners.map((banner) => (
          <div className="gs-editorial__item" key={banner.title}>
            <Placeholder width={760} height={520} label={banner.title} bg="1a1a1a" fg="ffffff" />
            <div className="gs-editorial__caption">
              <h3>{banner.title}</h3>
              <p>{banner.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
