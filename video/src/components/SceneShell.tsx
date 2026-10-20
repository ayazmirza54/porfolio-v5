import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { easeIn, easeOut, progress } from "../lib/motion";
import { OVERLAP_FRAMES } from "../lib/timeline";

/**
 * Wraps a scene so consecutive scenes overlap and dissolve into each other
 * (opacity + defocus + slight scale), avoiding hard cuts.
 */
export const SceneShell: React.FC<{
  children: React.ReactNode;
  /** Length of the scene's sequence in frames (including the overlap). */
  duration: number;
  fadeIn?: boolean;
  fadeOut?: boolean;
  /** Scale reached at the end of the exit (camera push through). */
  exitScale?: number;
  /** Match cut: plain opacity hand-off with no defocus or scale on that edge. */
  matchIn?: boolean;
  matchOut?: boolean;
}> = ({ children, duration, fadeIn = true, fadeOut = true, exitScale = 1.06, matchIn = false, matchOut = false }) => {
  const frame = useCurrentFrame();
  const inP = fadeIn ? progress(frame, 0, OVERLAP_FRAMES, easeOut) : 1;
  const outP = fadeOut ? progress(frame, duration - OVERLAP_FRAMES, OVERLAP_FRAMES, easeIn) : 0;
  const blur = (matchIn ? 0 : (1 - inP) * 10) + (matchOut ? 0 : outP * 12);
  const scaleIn = matchIn ? 1 : 0.985 + inP * 0.015;
  const scaleOut = matchOut ? 1 : 1 + outP * (exitScale - 1);
  return (
    <AbsoluteFill
      style={{
        opacity: inP * (1 - outP),
        transform: `scale(${scaleIn * scaleOut})`,
        filter: blur > 0.05 ? `blur(${blur}px)` : undefined,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
