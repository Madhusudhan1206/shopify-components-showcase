/**
 * Placeholder — renders a placehold.co image for any section artwork.
 * No real brand or product photography is ever used in this project.
 */
export default function Placeholder({
  width = 600,
  height = 600,
  label = 'Image',
  bg = 'e5e5e5',
  fg = '777777',
  className = '',
}) {
  const src = `https://placehold.co/${width}x${height}/${bg}/${fg}?text=${encodeURIComponent(
    label
  )}`;
  return (
    <img
      className={`placeholder-img ${className}`}
      src={src}
      alt={label}
      width={width}
      height={height}
      loading="lazy"
    />
  );
}
