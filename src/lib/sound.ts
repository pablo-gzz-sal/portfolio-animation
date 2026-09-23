import { useSyncExternalStore } from "react";

/**
 * Interface sound, synthesised with Web Audio — no files to download.
 *
 * Off by default. The AudioContext is only created inside the click that
 * turns sound on, which is also what browsers require before audio may play.
 * The preference is remembered per browser; a returning visitor who left it
 * on still has to interact once before anything is audible (autoplay rules),
 * so we resume the context on the first pointerdown.
 */

const KEY = "sound";
let enabled = false;
let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let pad: { stop: () => void } | null = null;
const subs = new Set<() => void>();

function emit() {
  subs.forEach((fn) => fn());
}

function ensureContext() {
  if (ctx) return ctx;
  const AC =
    window.AudioContext ??
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();
  master = ctx.createGain();
  master.gain.value = 0.9;
  master.connect(ctx.destination);
  return ctx;
}

/** A very soft, slowly beating low pad — two detuned sines through a lowpass. */
function startPad() {
  const c = ensureContext();
  if (!c || !master || pad) return;
  const out = c.createGain();
  out.gain.value = 0;
  out.gain.linearRampToValueAtTime(0.035, c.currentTime + 2.5);
  const lp = c.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 520;
  lp.connect(out);
  out.connect(master);
  const oscs = [110, 110.6, 164.8].map((f) => {
    const o = c.createOscillator();
    o.type = "sine";
    o.frequency.value = f;
    o.connect(lp);
    o.start();
    return o;
  });
  pad = {
    stop() {
      const t = c.currentTime;
      out.gain.cancelScheduledValues(t);
      out.gain.setValueAtTime(out.gain.value, t);
      out.gain.linearRampToValueAtTime(0, t + 0.6);
      oscs.forEach((o) => o.stop(t + 0.7));
    },
  };
}

function blip(
  freq: number,
  dur: number,
  gain: number,
  type: OscillatorType = "sine",
  glideTo?: number,
) {
  if (!enabled) return;
  const c = ensureContext();
  if (!c || !master || c.state !== "running") return;
  const t = c.currentTime;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (glideTo) o.frequency.exponentialRampToValueAtTime(glideTo, t + dur);
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(gain, t + 0.006);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g);
  g.connect(master);
  o.start(t);
  o.stop(t + dur + 0.02);
}

let lastHover = 0;
export const sfx = {
  /** Tiny tick for hover — rate-limited so sweeping a list isn't a buzz. */
  hover() {
    const now = performance.now();
    if (now - lastHover < 45) return;
    lastHover = now;
    blip(1850, 0.045, 0.025, "triangle");
  },
  click() {
    blip(620, 0.09, 0.06, "sine", 380);
  },
  open() {
    blip(240, 0.35, 0.05, "sine", 520);
  },
  close() {
    blip(520, 0.3, 0.045, "sine", 220);
  },
};

export function setSound(on: boolean) {
  enabled = on;
  try {
    window.localStorage.setItem(KEY, on ? "1" : "0");
  } catch {
    // storage blocked — the toggle still works for this page view
  }
  if (on) {
    const c = ensureContext();
    void c?.resume();
    startPad();
    blip(880, 0.12, 0.05, "sine", 1320);
  } else {
    pad?.stop();
    pad = null;
  }
  emit();
}

/** Restore the saved preference once on the client; audio waits for a gesture. */
let restored = false;
function restore() {
  if (restored || typeof window === "undefined") return;
  restored = true;
  try {
    if (window.localStorage.getItem(KEY) === "1") {
      enabled = true;
      const resume = () => {
        window.removeEventListener("pointerdown", resume);
        if (!enabled) return;
        void ensureContext()?.resume();
        startPad();
        emit();
      };
      window.addEventListener("pointerdown", resume);
    }
  } catch {
    // storage blocked — stay off
  }
}

function subscribe(fn: () => void) {
  restore();
  subs.add(fn);
  return () => subs.delete(fn);
}

export function useSoundEnabled() {
  return useSyncExternalStore(
    subscribe,
    () => enabled,
    () => false,
  );
}
