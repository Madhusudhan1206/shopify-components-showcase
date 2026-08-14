import Placeholder from '../shared/Placeholder';
import ComponentTag from '../shared/ComponentTag';

/**
 * ActivityTileGrid
 * props: { title: string, items: string[] }
 * Quick-shop tiles for activity-based discovery (Running, Lifting, HIIT...).
 */
export default function ActivityTileGrid({ title, items }) {
  return (
    <section className="gs-activity-grid">
      <ComponentTag name="ActivityTileGrid" />
      <h2>{title}</h2>
      <div className="gs-activity-grid__row">
        {items.map((item) => (
          <div className="gs-activity-grid__item" key={item}>
            <Placeholder width={260} height={340} label={item} bg="1a1a1a" fg="ffffff" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
