import ComponentTag from '../shared/ComponentTag';

/**
 * AnnouncementBar
 * props: { message: string }
 * Thin, centered promo strip pinned above the navbar.
 */
export default function AnnouncementBar({ message }) {
  return (
    <div className="min-announcement">
      <ComponentTag name="AnnouncementBar" />
      <p>{message}</p>
    </div>
  );
}
