import React from "react";
import { AbsoluteFill, staticFile, useCurrentFrame } from "remotion";
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

/**
 * Fine grain + vignette over everything. The grain is a static texture: it
 * breaks up gradient banding without the bitrate cost of animated noise.
 */
export const FilmFinish: React.FC = () => (
  <AbsoluteFill style={{ pointerEvents: "none" }}>
    <AbsoluteFill
      style={{
        backgroundImage: `url(${staticFile("textures/grain.png")})`,
        opacity: 0.035,
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
