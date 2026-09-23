/**
 * One-shot "the preloader has cleared" signal.
 *
 * The hero entrance and the WebGL veil both wait on it, so nothing animates
 * underneath the curtain where nobody can see it. Late subscribers (a
 * component that mounts after the intro finished) are called immediately.
 */
let done = false;
const listeners = new Set<() => void>();

export function markIntroDone() {
  if (done) return;
  done = true;
  listeners.forEach((fn) => fn());
  listeners.clear();
}

export function onIntroDone(fn: () => void): () => void {
  if (done) {
    fn();
    return () => {};
  }
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function isIntroDone() {
  return done;
}
