import Placeholder from '../shared/Placeholder';
import ComponentTag from '../shared/ComponentTag';

/**
 * CategoryGrid
 * props: { title: string, items: string[] }
 * Row of circular icon tiles with a label underneath (Shop by Category pattern).
 */
export default function CategoryGrid({ title, items }) {
  return (
    <section className="min-category-grid">
      <ComponentTag name="CategoryGrid" />
      <h2>{title}</h2>
      <div className="min-category-grid__row">
        {items.map((item) => (
          <div className="min-category-grid__item" key={item}>
            <Placeholder width={120} height={120} label={item} bg="ece7de" fg="8a7c68" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
