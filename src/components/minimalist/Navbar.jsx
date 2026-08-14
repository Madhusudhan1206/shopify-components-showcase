import ComponentTag from '../shared/ComponentTag';

/**
 * Navbar
 * props: { logo: string, items: string[] }
 * Centered logo, thin text-link row, minimal icon cluster (search / account / cart).
 */
export default function Navbar({ logo, items }) {
  return (
    <header className="min-navbar">
      <ComponentTag name="Navbar" />
      <div className="min-navbar__row">
        <nav className="min-navbar__links min-navbar__links--left">
          {items.slice(0, 3).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </nav>
        <div className="min-navbar__logo">{logo}</div>
        <div className="min-navbar__icons">
          <span aria-hidden>🔍</span>
          <span aria-hidden>👤</span>
          <span aria-hidden>🛍️ 0</span>
        </div>
      </div>
      <nav className="min-navbar__links min-navbar__links--secondary">
        {items.slice(3).map((item) => (
          <span key={item}>{item}</span>
        ))}
      </nav>
    </header>
  );
}
