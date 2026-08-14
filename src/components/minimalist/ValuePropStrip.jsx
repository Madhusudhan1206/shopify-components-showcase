import ComponentTag from '../shared/ComponentTag';

/**
 * ValuePropStrip
 * props: { title, subtitle, values: { icon, label, desc }[] }
 * Four-column brand-value strip with icon, label, short description.
 */
export default function ValuePropStrip({ title, subtitle, values }) {
  return (
    <section className="min-value-strip">
      <ComponentTag name="ValuePropStrip" />
      <h2>{title}</h2>
      <p className="min-value-strip__subtitle">{subtitle}</p>
      <div className="min-value-strip__row">
        {values.map((value) => (
          <div className="min-value-strip__item" key={value.label}>
            <span className="min-value-strip__icon" aria-hidden>
              {value.icon}
            </span>
            <h3>{value.label}</h3>
            <p>{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
