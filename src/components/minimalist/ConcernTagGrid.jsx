import ComponentTag from '../shared/ComponentTag';

/**
 * ConcernTagGrid
 * props: { title: string, items: string[] }
 * Wrapping row of pill-shaped tag buttons (Shop by Concern pattern).
 */
export default function ConcernTagGrid({ title, items }) {
  return (
    <section className="min-tag-grid">
      <ComponentTag name="ConcernTagGrid" />
      <h2>{title}</h2>
      <div className="min-tag-grid__row">
        {items.map((item) => (
          <span className="min-tag-pill" key={item}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
