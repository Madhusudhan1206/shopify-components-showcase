import Placeholder from '../shared/Placeholder';
import ComponentTag from '../shared/ComponentTag';

/**
 * CategoryTileGrid
 * props: { title: string, items: string[] }
 * Image-tile grid for product-type navigation (Tops, Leggings, Shorts...).
 */
export default function CategoryTileGrid({ title, items }) {
  return (
    <section className="gs-category-grid">
      <ComponentTag name="CategoryTileGrid" />
      <h2>{title}</h2>
      <div className="gs-category-grid__row">
        {items.map((item) => (
          <div className="gs-category-grid__item" key={item}>
            <Placeholder width={320} height={400} label={item} bg="2a2a2a" fg="ffffff" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
