import React from "react";
import { AbsoluteFill, random, staticFile, useCurrentFrame } from "remotion";
import { colors } from "../lib/theme";

/** Base canvas: near-black field, faint dot grid, soft colour wash. */
export const Backdrop: React.FC<{ grid?: number; wash?: number }> = ({ grid = 1, wash = 1 }) => {
  const frame = useCurrentFrame();
  const drift = frame * 0.12;
  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <AbsoluteFill
        style={{
          opacity: 0.55 * grid,
          backgroundImage: `radial-gradient(circle, rgba(250,250,250,0.10) 1.2px, transparent 1.6px)`,
          backgroundSize: "48px 48px",
          backgroundPosition: `${drift}px ${drift * 0.5}px`,
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 10%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 10%, transparent 75%)",
        }}
      />
      <AbsoluteFill
        style={{
          opacity: wash,
          background: `radial-gradient(ellipse 55% 45% at 18% 12%, rgba(167,139,250,0.07), transparent 70%),
                       radial-gradient(ellipse 50% 40% at 85% 90%, rgba(34,211,238,0.05), transparent 70%)`,
        }}
      />
    </AbsoluteFill>
  );
};

/** Film grain + vignette, layered over everything. */
export const FilmFinish: React.FC = () => {
  const frame = useCurrentFrame();
  const step = Math.floor(frame / 2);
  const x = Math.floor(random(`gx${step}`) * 384);
  const y = Math.floor(random(`gy${step}`) * 384);
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <AbsoluteFill
        style={{
          backgroundImage: `url(${staticFile("textures/grain.png")})`,
          backgroundPosition: `${x}px ${y}px`,
          opacity: 0.045,
          mixBlendMode: "screen",
        }}
      />
      <AbsoluteFill
        style={{
          background: "radial-gradient(ellipse 85% 75% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
