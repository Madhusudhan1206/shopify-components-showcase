import ComponentTag from '../shared/ComponentTag';

/**
 * NewsletterBanner
 * props: { headline: string, subtext: string }
 * Full-width dark email-capture band. Static markup only — no form
 * submission or validation logic (out of scope).
 */
export default function NewsletterBanner({ headline, subtext }) {
  return (
    <section className="gs-newsletter">
      <ComponentTag name="NewsletterBanner" />
      <h2>{headline}</h2>
      <p>{subtext}</p>
      <div className="gs-newsletter__form" aria-hidden>
        <span className="gs-newsletter__input">you@email.com</span>
        <span className="gs-btn gs-btn--sm">Join</span>
      </div>
    </section>
  );
}
