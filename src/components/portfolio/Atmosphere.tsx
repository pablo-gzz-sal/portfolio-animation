/**
 * Premium "feel" layer: subtle film-grain overlay across the page.
 * The custom cursor was removed — native cursor is more reliable across
 * devices and avoids stuck/orphan cursor elements.
 */
export function Atmosphere() {
  return <div aria-hidden className="noise-overlay" />;
}
