import timeline from "../timeline.json";

export type SceneId = keyof typeof timeline.scenes;
export type TypingId = keyof typeof timeline.typing;

export const FPS = timeline.fps;
export const DURATION_FRAMES = Math.round(timeline.duration * FPS);
export const OVERLAP_FRAMES = Math.round(timeline.overlap * FPS);

/** Seconds -> frames at the film's frame rate. */
export const s = (seconds: number) => Math.round(seconds * FPS);

export const scene = (id: SceneId) => {
  const { start, end } = timeline.scenes[id];
  return { from: s(start), duration: s(end - start) };
};

/** Typing segment, expressed in frames relative to the given scene. */
export const typing = (id: TypingId, sceneId: SceneId) => {
  const t = timeline.typing[id];
  return {
    text: t.text,
    start: s(t.at - timeline.scenes[sceneId].start),
    framesPerChar: FPS / t.cps,
    end: s(t.at - timeline.scenes[sceneId].start) + Math.ceil((t.text.length * FPS) / t.cps),
  };
};
