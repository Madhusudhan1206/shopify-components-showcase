import ComponentTag from '../shared/ComponentTag';

/**
 * Footer
 * props: { columns: { heading, links }[], social: string[] }
 * Dark mega-footer with multiple link columns and a social row.
 */
export default function Footer({ columns, social }) {
  return (
    <footer className="gs-footer">
      <ComponentTag name="Footer" />
      <div className="gs-footer__columns">
        {columns.map((col) => (
          <div key={col.heading}>
            <h3>{col.heading}</h3>
            <ul>
              {col.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="gs-footer__social">
        {social.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <p className="gs-footer__copyright">© 2026 SharkFit. Component showcase — placeholder brand.</p>
    </footer>
  );
}
