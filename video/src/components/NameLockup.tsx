import React from "react";
import { useCurrentFrame } from "remotion";
import { useLayout } from "../lib/layout";
import { easeOut, progress } from "../lib/motion";
import { colors, fonts } from "../lib/theme";
import { CharReveal } from "./CharReveal";

const SLICES = 7;

/**
 * "AYAZ MIRZA / DATA ENGINEER / BUILDER / CREATOR" lockup. Scene 01 reveals it;
 * scene 02 picks up the identical frame (match cut) and shatters it into
 * horizontal slices via `shatter` (0 = intact, 1 = gone).
 */
export const NameLockup: React.FC<{ nameAt: number; subAt: number; shatter?: number; detailsOut?: number }> = ({
  nameAt,
  subAt,
  shatter = 0,
  detailsOut = 0,
}) => {
  const frame = useCurrentFrame();
  const { u, vertical } = useLayout();

  const name = vertical ? (
    <>
      <CharReveal text="AYAZ" start={nameAt} stagger={3} duration={42} />
      <br />
      <CharReveal text="MIRZA" start={nameAt + 9} stagger={3} duration={42} />
    </>
  ) : (
    <CharReveal text="AYAZ MIRZA" start={nameAt} stagger={3} duration={42} />
  );

  const nameStyle: React.CSSProperties = {
    fontFamily: fonts.display,
    fontWeight: 900,
    fontSize: (vertical ? 236 : 212) * u,
    lineHeight: 0.92,
    letterSpacing: "-0.05em",
    color: colors.text,
    textAlign: "center",
    transform: `translateY(${-30 * u}px) scale(${1.06 - 0.06 * progress(frame, nameAt, 96)})`,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {shatter <= 0 ? (
        <div style={nameStyle}>{name}</div>
      ) : (
        <div style={{ position: "relative" }}>
          <div style={{ ...nameStyle, visibility: "hidden" }}>{name}</div>
          {Array.from({ length: SLICES }).map((_, i) => {
            const dir = i % 2 === 0 ? -1 : 1;
            const local = Math.min(1, Math.max(0, shatter * 1.35 - (i / SLICES) * 0.35));
            const dx = dir * local * local * (500 + i * 90) * u;
            return (
              <div
                key={i}
                style={{
                  ...nameStyle,
                  position: "absolute",
                  inset: 0,
                  clipPath: `inset(${(i / SLICES) * 100}% 0 ${100 - ((i + 1) / SLICES) * 100}% 0)`,
                  translate: `${dx}px 0`,
                  opacity: 1 - local,
                  filter: local > 0.02 ? `blur(${local * 10}px)` : undefined,
                }}
              >
                {name}
              </div>
            );
          })}
        </div>
      )}

      <div
        style={{
          width: (vertical ? 560 : 760) * u * progress(frame, nameAt + 18, 66) * (1 - detailsOut),
          height: 2 * u,
          marginTop: 26 * u,
          background: `linear-gradient(90deg, transparent, ${colors.purple}, ${colors.cyan}, transparent)`,
          opacity: 0.8,
        }}
      />

      <div
        style={{
          marginTop: 34 * u,
          fontFamily: fonts.mono,
          fontWeight: 500,
          fontSize: (vertical ? 25 : 28) * u,
          letterSpacing: "0.38em",
          color: colors.muted,
          display: "flex",
          gap: "0.9em",
          alignItems: "center",
          whiteSpace: "pre",
          opacity: 1 - detailsOut,
          filter: detailsOut > 0 ? `blur(${detailsOut * 8}px)` : undefined,
        }}
      >
        <CharReveal text="DATA ENGINEER" start={subAt} stagger={1} duration={28} />
        <Slash frame={frame} at={subAt + 18} />
        <CharReveal text="BUILDER" start={subAt + 21} stagger={1} duration={28} />
        <Slash frame={frame} at={subAt + 39} />
        <CharReveal text="CREATOR" start={subAt + 42} stagger={1} duration={28} />
      </div>
    </div>
  );
};

const Slash: React.FC<{ frame: number; at: number }> = ({ frame, at }) => {
  const p = progress(frame, at, 20, easeOut);
  return (
    <span style={{ color: colors.purple, opacity: p, transform: `rotate(${(1 - p) * 30}deg)`, display: "inline-block" }}>
      /
    </span>
  );
};
