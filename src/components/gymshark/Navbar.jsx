import ComponentTag from '../shared/ComponentTag';

/**
 * Navbar
 * props: { logo: string, items: string[], showGenderToggle: boolean }
 * Left-aligned wordmark logo, bold uppercase link row, optional
 * gender-tab strip shown as static labels (no active-state switching).
 */
export default function Navbar({ logo, items, showGenderToggle }) {
  return (
    <header className="gs-navbar">
      <ComponentTag name="Navbar" />
      {showGenderToggle && (
        <div className="gs-navbar__gender">
          <span>Women</span>
          <span>Men</span>
        </div>
      )}
      <div className="gs-navbar__row">
        <div className="gs-navbar__logo">{logo}</div>
        <nav className="gs-navbar__links">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </nav>
        <div className="gs-navbar__icons">
          <span aria-hidden>🔍</span>
          <span aria-hidden>👤</span>
          <span aria-hidden>🛒 0</span>
        </div>
      </div>
    </header>
  );
}
