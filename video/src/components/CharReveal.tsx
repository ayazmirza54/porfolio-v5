import React from "react";
import { useCurrentFrame } from "remotion";
import { easeIn, easeOut, progress } from "../lib/motion";

// Splitting text into inline-blocks drops the font's pair kerning, which is
// very visible on heavy display caps. Restore the worst offenders by hand.
const KERNING: Record<string, number> = {
  AY: -0.075, YA: -0.075, AV: -0.07, VA: -0.07, AW: -0.05, WA: -0.05, AT: -0.06, TA: -0.06,
  LT: -0.07, LY: -0.07, PA: -0.04, FA: -0.04, RA: -0.015, AZ: -0.01, ZA: -0.02, "Y.": -0.06, "T.": -0.06,
};

type Props = {
  text: string;
  /** Frame (relative to the parent sequence) when the first unit starts. */
  start: number;
  /** Frames between consecutive units. */
  stagger?: number;
  /** Frames each unit takes to land. */
  duration?: number;
  /** Optional exit: units leave upward starting at this frame. */
  exitAt?: number;
  exitStagger?: number;
  by?: "char" | "word";
  style?: React.CSSProperties;
  /** Per-unit style override, e.g. to colour a single character. */
  unitStyle?: (unit: string, index: number) => React.CSSProperties | undefined;
};

/**
 * Masked kinetic reveal: each character (or word) rises out of its own clip
 * box with a short de-blur, which reads as precise and typographic.
 */
export const CharReveal: React.FC<Props> = ({
  text,
  start,
  stagger = 2,
  duration = 38,
  exitAt,
  exitStagger = 1,
  by = "char",
  style,
  unitStyle,
}) => {
  const frame = useCurrentFrame();
  const units = by === "char" ? Array.from(text) : text.split(/(\s+)/);
  let visibleIndex = 0;
  return (
    <span style={{ display: "inline-block", whiteSpace: "pre", ...style }}>
      {units.map((unit, i) => {
        if (/^\s+$/.test(unit)) return <span key={i}>{unit}</span>;
        const idx = visibleIndex++;
        const kern = by === "char" ? (KERNING[unit + (units[i + 1] ?? "")] ?? 0) : 0;
        const p = progress(frame, start + idx * stagger, duration);
        const out = exitAt === undefined ? 0 : progress(frame, exitAt + idx * exitStagger, duration * 0.7, easeIn);
        const y = (1 - p) * 105 - out * 105;
        const blur = (1 - p) * 8 + out * 8;
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "top",
              padding: "0.08em 0.01em 0.14em",
              margin: `-0.08em ${kern - 0.01}em -0.14em -0.01em`,
            }}
          >
            <span
              style={{
                display: "inline-block",
                transform: `translateY(${y}%)`,
                filter: blur > 0.05 ? `blur(${blur}px)` : undefined,
                opacity: Math.min(1, p * 1.4) * (1 - out),
                ...unitStyle?.(unit, idx),
              }}
            >
              {unit}
            </span>
          </span>
        );
      })}
    </span>
  );
};

/** Simple fade + rise for supporting copy. */
export const FadeUp: React.FC<{
  start: number;
  duration?: number;
  distance?: number;
  exitAt?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}> = ({ start, duration = 36, distance = 24, exitAt, style, children }) => {
  const frame = useCurrentFrame();
  const p = progress(frame, start, duration, easeOut);
  const out = exitAt === undefined ? 0 : progress(frame, exitAt, 24, easeIn);
  return (
    <div
      style={{
        opacity: p * (1 - out),
        transform: `translateY(${(1 - p) * distance - out * distance * 0.6}px)`,
        filter: p < 1 || out > 0 ? `blur(${(1 - p) * 6 + out * 6}px)` : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
