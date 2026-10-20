import { Easing, interpolate, spring } from "remotion";
import { FPS } from "./timeline";

export const easeOut = Easing.bezier(0.16, 1, 0.3, 1);
export const easeInOut = Easing.bezier(0.65, 0, 0.35, 1);
export const easeIn = Easing.bezier(0.7, 0, 0.84, 0);

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

/** 0 -> 1 over [start, start + duration] with an easing curve. */
export const progress = (frame: number, start: number, duration: number, easing = easeOut) =>
  interpolate(frame, [start, start + duration], [0, 1], { ...clamp, easing });

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const map = (frame: number, input: number[], output: number[], easing = easeInOut) =>
  interpolate(frame, input, output, { ...clamp, easing });

/** Critically damped spring, the default "settle" motion of the film. */
export const settle = (frame: number, delay = 0, stiffness = 120, damping = 22, mass = 1) =>
  spring({ frame: frame - delay, fps: FPS, config: { stiffness, damping, mass } });

/** Blinking cursor visibility (on/off at ~1.9 Hz). */
export const blink = (frame: number) => Math.floor(frame / (FPS * 0.53)) % 2 === 0;
