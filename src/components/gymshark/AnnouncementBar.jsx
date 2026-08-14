import ComponentTag from '../shared/ComponentTag';

/**
 * AnnouncementBar
 * props: { message: string }
 * Bold, high-contrast promo strip.
 */
export default function AnnouncementBar({ message }) {
  return (
    <div className="gs-announcement">
      <ComponentTag name="AnnouncementBar" />
      <p>{message}</p>
    </div>
  );
}
