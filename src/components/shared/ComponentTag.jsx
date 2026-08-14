/**
 * ComponentTag — small overlay label identifying which component/section
 * is being displayed, so the showcase page is self-documenting.
 */
export default function ComponentTag({ name }) {
  return <span className="component-tag">{name}</span>;
}
