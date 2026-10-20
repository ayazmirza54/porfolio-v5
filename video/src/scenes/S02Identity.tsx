import React, { useCallback, useMemo } from "react";
import { AbsoluteFill, random, useCurrentFrame } from "remotion";
import { CharReveal, FadeUp } from "../components/CharReveal";
import { FrameCanvas } from "../components/FrameCanvas";
import { NameLockup } from "../components/NameLockup";
import { useLayout } from "../lib/layout";
import { easeIn, easeInOut, easeOut, lerp, progress } from "../lib/motion";
import { colors, fonts } from "../lib/theme";
import { FPS, s } from "../lib/timeline";

const PARTICLES = 1500;
const LANES = 6;

type Particle = { sx: number; sy: number; lane: number; offset: number; speed: number; size: number; delay: number; wob: number };

const makeParticles = (): Particle[] =>
  Array.from({ length: PARTICLES }, (_, i) => ({
    sx: random(`sx${i}`),
    sy: random(`sy${i}`),
    lane: Math.floor(random(`ln${i}`) * LANES),
    offset: random(`of${i}`),
    speed: 0.6 + random(`sp${i}`) * 0.8,
    size: 0.8 + random(`sz${i}`) * 1.6,
    delay: random(`dl${i}`),
    wob: random(`wb${i}`) * Math.PI * 2,
  }));

/** Lanes sit above and below the headline band so the type stays clean. */
const laneY = (lane: number, h: number, vertical: boolean) => {
  const top = vertical ? [0.08, 0.13, 0.18] : [0.07, 0.13, 0.19];
  const bottom = vertical ? [0.84, 0.89, 0.94] : [0.85, 0.91, 0.97];
  return [...top, ...bottom][lane] * h;
};

/** Scene 02 — THE IDENTITY: the name shatters, "6+ YEARS", chaos becomes streams. */
export const S02Identity: React.FC = () => {
  const frame = useCurrentFrame();
  const { u, vertical } = useLayout();
  const particles = useMemo(makeParticles, []);

  const shatter = progress(frame, s(0.05), s(0.85), easeIn);
  const yearsAt = s(0.9);
  const lineAt = s(2.6);
  const labelsAt = s(5.0);
  const organizeFrom = s(2.2);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, f: number, w: number, h: number) => {
      const t = f / FPS;
      const appear = progress(f, s(0.6), s(1.2));
      for (const p of particles) {
        // Organisation sweeps left to right, so order visibly "propagates".
        const k = progress(f, organizeFrom + p.sx * s(1.6) + p.delay * s(0.6), s(2.2), easeInOut);
        const scatterX = p.sx * w + Math.sin(t * 0.9 + p.wob) * 40 * u + (t - 1) * 12 * u * (p.speed - 1);
        const scatterY = p.sy * h + Math.cos(t * 0.7 + p.wob * 1.3) * 40 * u;
        const span = w * 1.2;
        const sx = ((p.offset * span + t * p.speed * w * 0.16) % span) - w * 0.1;
        const ly = laneY(p.lane, h, vertical);
        const sy = ly + Math.sin((sx / w) * Math.PI * 2.2 + p.lane * 1.1 + t * 0.9) * 26 * u + (p.delay - 0.5) * 10 * u;
        const x = lerp(scatterX, sx, k);
        const y = lerp(scatterY, sy, k);
        const alpha = appear * (0.4 + 0.35 * k) * (0.6 + 0.4 * p.delay);
        const accent = p.lane % 2 === 0 ? [167, 139, 250] : [34, 211, 238];
        const r = Math.round(lerp(161, accent[0], k));
        const g = Math.round(lerp(161, accent[1], k));
        const b = Math.round(lerp(170, accent[2], k));
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        const size = p.size * u * (1 + k * 0.2);
        // Organised particles stretch into short dashes along the flow.
        const len = size * (1 + k * 5 * p.speed);
        ctx.fillRect(x - len, y - size / 2, len, size);
      }
      // Faint lane guides once streams have formed.
      const guides = progress(f, organizeFrom + s(1.8), s(1.5));
      if (guides > 0) {
        ctx.lineWidth = 1 * u;
        for (let l = 0; l < LANES; l++) {
          ctx.strokeStyle = `rgba(250,250,250,${0.05 * guides})`;
          ctx.beginPath();
          for (let x = -20; x <= w + 20; x += 24) {
            const y = laneY(l, h, vertical) + Math.sin((x / w) * Math.PI * 2.2 + l * 1.1 + t * 0.9) * 26 * u;
            if (x === -20) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }
    },
    [particles, u, vertical, organizeFrom],
  );

  // "6+ YEARS" lands, then lifts to make room for the statement.
  const lift = progress(frame, lineAt - s(0.2), s(0.9), easeInOut);
  const yearsSize = (vertical ? 360 : 250) * u;
  const strips = 5;

  return (
    <AbsoluteFill>
      <FrameCanvas draw={draw} />

      {/* Shattering name (continues the exact frame from scene 01) */}
      {shatter < 1 && (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", transform: "scale(1.045)" }}>
          <NameLockup nameAt={-999} subAt={-999} shatter={shatter} detailsOut={progress(frame, 0, s(0.4), easeIn)} />
        </AbsoluteFill>
      )}

      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        {/* 6+ YEARS, assembled from strips sliding in from alternating sides */}
        <div
          style={{
            position: "relative",
            transform: `translateY(${lerp(0, (vertical ? -250 : -150) * u, lift)}px) scale(${lerp(1, vertical ? 0.62 : 0.58, lift)})`,
          }}
        >
          <YearsMark size={yearsSize} vertical={vertical} hidden />
          {frame > yearsAt + strips * 3 + s(0.75) ? (
            <div style={{ position: "absolute", inset: 0 }}>
              <YearsMark size={yearsSize} vertical={vertical} />
            </div>
          ) : Array.from({ length: strips }).map((_, i) => {
            const p = progress(frame, yearsAt + i * 3, s(0.75), easeOut);
            const dir = i % 2 === 0 ? 1 : -1;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  inset: 0,
                  clipPath: `inset(${(i / strips) * 100 - 0.5}% 0 ${100 - ((i + 1) / strips) * 100 - 0.5}% 0)`,
                  translate: `${dir * (1 - p) * 700 * u}px 0`,
                  opacity: p,
                  filter: p < 1 ? `blur(${(1 - p) * 12}px)` : undefined,
                }}
              >
                <YearsMark size={yearsSize} vertical={vertical} />
              </div>
            );
          })}
        </div>

        {/* Statement */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: `translateY(${(vertical ? 10 : 40) * u}px)`,
            textAlign: "center",
            fontFamily: fonts.display,
            fontWeight: 800,
            fontSize: (vertical ? 92 : 96) * u,
            letterSpacing: "-0.035em",
            lineHeight: 1,
            color: colors.text,
          }}
        >
          {vertical ? (
            <>
              <CharReveal text="ENGINEERING" start={lineAt} stagger={1.5} duration={40} />
              <br />
              <CharReveal text="DATA AT SCALE" start={lineAt + 12} stagger={1.5} duration={40} />
            </>
          ) : (
            <CharReveal text="ENGINEERING DATA AT SCALE" start={lineAt} stagger={1.5} duration={40} />
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: vertical ? "column" : "row",
              alignItems: "center",
              gap: (vertical ? 18 : 44) * u,
              marginTop: 48 * u,
            }}
          >
            {["ETL PIPELINES", "DATA PLATFORMS", "AUTOMATION"].map((label, i) => (
              <FadeUp key={label} start={labelsAt + i * s(0.35)} distance={14 * u}>
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontWeight: 500,
                    fontSize: 24 * u,
                    letterSpacing: "0.22em",
                    color: colors.muted,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 14 * u,
                  }}
                >
                  <span
                    style={{
                      width: 8 * u,
                      height: 8 * u,
                      borderRadius: 2 * u,
                      background: i === 1 ? colors.purple : colors.cyan,
                      display: "inline-block",
                    }}
                  />
                  {label}
                </span>
              </FadeUp>
            ))}
          </div>
        </div>
      </AbsoluteFill>

    </AbsoluteFill>
  );
};

const YearsMark: React.FC<{ size: number; vertical: boolean; hidden?: boolean }> = ({ size, vertical, hidden }) => (
  <div
    style={{
      visibility: hidden ? "hidden" : undefined,
      display: "flex",
      flexDirection: vertical ? "column" : "row",
      alignItems: vertical ? "center" : "baseline",
      gap: vertical ? 0 : size * 0.12,
      fontFamily: fonts.display,
      fontWeight: 900,
      lineHeight: 0.9,
      letterSpacing: "-0.05em",
      whiteSpace: "nowrap",
    }}
  >
    <span style={{ fontSize: size, color: colors.text }}>
      6<span style={{ color: colors.purple }}>+</span>
    </span>
    <span
      style={{
        fontSize: vertical ? size * 0.5 : size,
        color: "transparent",
        WebkitTextStroke: `${Math.max(2, size / 110)}px ${colors.text}`,
        letterSpacing: vertical ? "0.02em" : "-0.03em",
      }}
    >
      YEARS
    </span>
  </div>
);
