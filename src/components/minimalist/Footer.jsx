import ComponentTag from '../shared/ComponentTag';

/**
 * Footer
 * props: { columns: { heading, links }[], social: string[] }
 * Multi-column link footer with a social icon row.
 */
export default function Footer({ columns, social }) {
  return (
    <footer className="min-footer">
      <ComponentTag name="Footer" />
      <div className="min-footer__columns">
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
      <div className="min-footer__social">
        {social.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <p className="min-footer__copyright">© 2026 Clear&Co. Component showcase — placeholder brand.</p>
    </footer>
  );
}
