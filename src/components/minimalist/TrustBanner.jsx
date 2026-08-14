import Placeholder from '../shared/Placeholder';
import ComponentTag from '../shared/ComponentTag';

/**
 * TrustBanner
 * props: { title: string, desc: string }
 * Single wide feature banner promoting the loyalty/rewards program.
 */
export default function TrustBanner({ title, desc }) {
  return (
    <section className="min-trust-banner">
      <ComponentTag name="TrustBanner" />
      <Placeholder width={160} height={160} label="Rewards" bg="ece7de" fg="8a7c68" />
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <button type="button" className="min-btn min-btn--outline">
          Learn more
        </button>
      </div>
    </section>
  );
}
