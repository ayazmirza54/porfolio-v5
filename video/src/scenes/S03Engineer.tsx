import React from "react";
import { AbsoluteFill, random, useCurrentFrame } from "remotion";
import { CharReveal, FadeUp } from "../components/CharReveal";
import { useLayout } from "../lib/layout";
import { easeInOut, easeOut, lerp, map, progress } from "../lib/motion";
import { colors, fonts } from "../lib/theme";
import { s } from "../lib/timeline";

const STAGES = [
  { title: "RAW DATA", detail: "files · tables · feeds", accent: colors.purple },
  { title: "TRANSFORM", detail: "reformat · join · rollup", accent: colors.purple },
  { title: "VALIDATE", detail: "schema · quality checks", accent: colors.cyan },
  { title: "DELIVER", detail: "warehouse · reports", accent: colors.cyan },
];

const TECH = ["Ab Initio", "SQL", "Python", "Linux", "Ansible"];

/** Scene 03 — THE ENGINEER: a living ETL pipeline that lights up stage by stage. */
export const S03Engineer: React.FC = () => {
  const frame = useCurrentFrame();
  const { u, vertical, width, height } = useLayout();

  // Stage i lights up when the first packet reaches it (matches the audio blips).
  const litAt = (i: number) => s(2.0 + i * 0.5);
  const headlineAt = s(4.5);
  const techAt = s(6.5);

  // Card geometry in frame coordinates.
  const cardW = (vertical ? 700 : 320) * u;
  const cardH = (vertical ? 150 : 196) * u;
  const gap = (vertical ? 64 : 92) * u;
  const total = 4 * (vertical ? cardH : cardW) + 3 * gap;
  const centerY = vertical ? height * 0.52 : height * 0.56;
  const cards = STAGES.map((_, i) =>
    vertical
      ? { x: width / 2 - cardW / 2, y: centerY - total / 2 + i * (cardH + gap) }
      : { x: width / 2 - total / 2 + i * (cardW + gap), y: centerY - cardH / 2 },
  );
  const anchor = (i: number, side: "out" | "in") => {
    const c = cards[i];
    if (vertical) return { x: c.x + cardW / 2, y: side === "out" ? c.y + cardH : c.y };
    return { x: side === "out" ? c.x + cardW : c.x, y: c.y + cardH / 2 };
  };

  // Gentle 3D camera settle.
  const cam = progress(frame, 0, s(9), easeInOut);
  const rotX = lerp(vertical ? 10 : 16, 4, cam);
  const rotY = vertical ? 0 : lerp(-10, 6, cam);
  const scale = lerp(0.93, 1.02, cam);

  return (
    <AbsoluteFill>
      {/* Headline */}
      <div
        style={{
          position: "absolute",
          top: (vertical ? 190 : 92) * u,
          width: "100%",
          textAlign: "center",
          fontFamily: fonts.display,
          fontWeight: 800,
          fontSize: (vertical ? 96 : 92) * u,
          letterSpacing: "-0.035em",
          lineHeight: 1.02,
          color: colors.text,
        }}
      >
        <CharReveal text="I TURN COMPLEXITY" start={headlineAt} stagger={1.4} duration={40} />
        <br />
        <CharReveal
          text="INTO SYSTEMS."
          start={headlineAt + 14}
          stagger={1.4}
          duration={40}
          unitStyle={(c, i) => (i >= 4 ? { color: c === "." ? colors.cyan : colors.purple } : undefined)}
        />
      </div>

      {/* Pipeline */}
      <AbsoluteFill style={{ perspective: 2200 * u }}>
        <AbsoluteFill style={{ transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`, transformStyle: "preserve-3d" }}>
          <svg width={width} height={height} style={{ position: "absolute", inset: 0, overflow: "visible" }}>
            {[0, 1, 2].map((i) => {
              const a = anchor(i, "out");
              const b = anchor(i + 1, "in");
              const draw = progress(frame, s(0.5) + i * 8, s(0.8));
              const len = Math.hypot(b.x - a.x, b.y - a.y);
              return (
                <g key={i}>
                  <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={colors.border} strokeWidth={2 * u} strokeDasharray={len} strokeDashoffset={len * (1 - draw)} />
                  <line
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke={STAGES[i + 1].accent}
                    strokeWidth={2 * u}
                    opacity={0.55 * progress(frame, litAt(i + 1) - 18, 18)}
                    strokeDasharray={`${6 * u} ${10 * u}`}
                    strokeDashoffset={-frame * 1.2 * u}
                  />
                  <Packets frame={frame} from={a} to={b} startAt={litAt(i) - 2} u={u} color={STAGES[i + 1].accent} index={i} />
                </g>
              );
            })}
            {/* Inflow into RAW DATA and outflow from DELIVER */}
            <Packets
              frame={frame}
              from={vertical ? { x: width / 2, y: cards[0].y - 90 * u } : { x: cards[0].x - 140 * u, y: centerY }}
              to={anchor(0, "in")}
              startAt={litAt(0) - 30}
              u={u}
              color={colors.muted}
              index={7}
            />
          </svg>

          {STAGES.map((stage, i) => (
            <StageCard key={stage.title} i={i} frame={frame} x={cards[i].x} y={cards[i].y} w={cardW} h={cardH} u={u} litAt={litAt(i)} vertical={vertical} />
          ))}
        </AbsoluteFill>
      </AbsoluteFill>

      {/* Tooling */}
      <div
        style={{
          position: "absolute",
          bottom: (vertical ? 210 : 84) * u,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 16 * u,
          padding: `0 ${60 * u}px`,
          boxSizing: "border-box",
        }}
      >
        {TECH.map((name, i) => (
          <FadeUp key={name} start={techAt + i * 12} distance={16 * u} duration={30}>
            <span
              style={{
                display: "inline-block",
                fontFamily: fonts.mono,
                fontSize: 23 * u,
                color: colors.text,
                padding: `${10 * u}px ${20 * u}px`,
                border: `1px solid ${colors.border}`,
                borderRadius: 999,
                background: "rgba(24,24,27,0.7)",
              }}
            >
              <span style={{ color: i % 2 ? colors.cyan : colors.purple, marginRight: 10 * u }}>›</span>
              {name}
            </span>
          </FadeUp>
        ))}
      </div>
    </AbsoluteFill>
  );
};

/** Data packets travelling along a connector, looping every half beat. */
const Packets: React.FC<{
  frame: number;
  from: { x: number; y: number };
  to: { x: number; y: number };
  startAt: number;
  u: number;
  color: string;
  index: number;
}> = ({ frame, from, to, startAt, u, color, index }) => {
  const travel = 30;
  const spacing = 11;
  const count = 14;
  return (
    <g>
      {Array.from({ length: count }).map((_, k) => {
        const local = frame - startAt - k * spacing;
        if (local < 0) return null;
        const t = (local % (spacing * count)) / travel;
        if (t > 1) return null;
        const e = easeInOut(t);
        const jitter = (random(`pk${index}-${k}`) - 0.5) * 8 * u;
        const horizontal = Math.abs(to.x - from.x) > Math.abs(to.y - from.y);
        const x = lerp(from.x, to.x, e) + (horizontal ? 0 : jitter);
        const y = lerp(from.y, to.y, e) + (horizontal ? jitter : 0);
        const fade = Math.sin(Math.PI * t);
        return (
          <g key={k} opacity={fade}>
            <circle cx={x} cy={y} r={7 * u} fill={color} opacity={0.18} />
            <circle cx={x} cy={y} r={3 * u} fill={color} />
          </g>
        );
      })}
    </g>
  );
};

const StageCard: React.FC<{
  i: number;
  frame: number;
  x: number;
  y: number;
  w: number;
  h: number;
  u: number;
  litAt: number;
  vertical: boolean;
}> = ({ i, frame, x, y, w, h, u, litAt, vertical }) => {
  const stage = STAGES[i];
  const enter = progress(frame, i * 7, s(0.7), easeOut);
  const lit = progress(frame, litAt, 16, easeOut);
  const pulse = map(frame, [litAt, litAt + 8, litAt + 40], [0, 1, 0]);
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: w,
        height: h,
        boxSizing: "border-box",
        borderRadius: 18 * u,
        border: `1px solid ${lit > 0 ? mix(colors.border, stage.accent, lit * 0.85) : colors.border}`,
        background: `linear-gradient(180deg, rgba(24,24,27,0.95), rgba(17,17,19,0.95))`,
        boxShadow: `0 0 ${60 * u * pulse}px ${stage.accent}${Math.round(pulse * 60).toString(16).padStart(2, "0")}, 0 ${24 * u}px ${60 * u}px rgba(0,0,0,0.45)`,
        opacity: enter,
        transform: `translateY(${(1 - enter) * 40 * u}px)`,
        padding: `${(vertical ? 24 : 26) * u}px ${28 * u}px`,
        display: "flex",
        flexDirection: vertical ? "row" : "column",
        justifyContent: "space-between",
        alignItems: vertical ? "center" : "stretch",
        overflow: "hidden",
      }}
    >
      {/* Top highlight */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 2 * u,
          background: `linear-gradient(90deg, transparent, ${stage.accent}, transparent)`,
          opacity: lit,
        }}
      />
      <div>
        <div style={{ fontFamily: fonts.mono, fontSize: 17 * u, color: lit > 0.5 ? stage.accent : colors.dim, letterSpacing: "0.12em" }}>
          0{i + 1}
          <span style={{ color: colors.dim }}>{lit > 0.5 ? "  ● running" : "  ○ idle"}</span>
        </div>
        <div style={{ fontFamily: fonts.display, fontWeight: 800, fontSize: 38 * u, color: colors.text, letterSpacing: "-0.02em", marginTop: 10 * u }}>
          {stage.title}
        </div>
        <div style={{ fontFamily: fonts.mono, fontSize: 16 * u, color: colors.muted, marginTop: 6 * u }}>{stage.detail}</div>
      </div>
      <StageViz i={i} frame={frame} lit={lit} u={u} w={vertical ? 180 * u : w - 56 * u} />
    </div>
  );
};

/** Tiny per-stage illustration: chaos → shaped → checked → ordered. */
const StageViz: React.FC<{ i: number; frame: number; lit: number; u: number; w: number }> = ({ i, frame, lit, u, w }) => {
  const h = 50 * u;
  const accent = STAGES[i].accent;
  if (i === 0) {
    return (
      <svg width={w} height={h}>
        {Array.from({ length: 18 }).map((_, k) => {
          const px = random(`r0x${k}`) * w;
          const py = random(`r0y${k}`) * h;
          const dx = Math.sin(frame * 0.08 + k) * 6 * u;
          const dy = Math.cos(frame * 0.07 + k * 2) * 5 * u;
          return <rect key={k} x={px + dx} y={py + dy} width={4 * u} height={4 * u} fill={lit > 0.5 ? accent : colors.dim} opacity={0.75} />;
        })}
      </svg>
    );
  }
  if (i === 1) {
    return (
      <svg width={w} height={h}>
        {Array.from({ length: 10 }).map((_, k) => {
          const base = 0.3 + random(`r1${k}`) * 0.7;
          const shaped = 0.35 + (k / 9) * 0.6;
          const v = lerp(base, shaped, lit) * h;
          return <rect key={k} x={(k * w) / 10} y={h - v} width={w / 10 - 6 * u} height={v} rx={2 * u} fill={lit > 0.3 ? accent : colors.dim} opacity={0.35 + 0.5 * lit} />;
        })}
      </svg>
    );
  }
  if (i === 2) {
    return (
      <svg width={w} height={h}>
        {[0, 1, 2].map((k) => {
          const on = progress(frame, s(3.0) + k * 6, 10);
          const yy = 9 * u + k * 15 * u;
          return (
            <g key={k}>
              <path d={`M ${2 * u} ${yy} l ${4 * u} ${4 * u} l ${8 * u} ${-8 * u}`} stroke={accent} strokeWidth={2.2 * u} fill="none" opacity={on} />
              <rect x={22 * u} y={yy - 2 * u} width={(w - 30 * u) * (0.5 + 0.5 * on)} height={4 * u} rx={2 * u} fill={on > 0 ? colors.muted : colors.dim} opacity={0.35 + 0.3 * on} />
            </g>
          );
        })}
      </svg>
    );
  }
  return (
    <svg width={w} height={h}>
      {[0, 1, 2, 3].map((k) => {
        const on = progress(frame, s(3.5) + k * 5, 14);
        return <rect key={k} x={0} y={k * 12 * u} width={w * (0.25 + 0.75 * on)} height={6 * u} rx={3 * u} fill={on > 0 ? accent : colors.dim} opacity={0.3 + 0.55 * on} />;
      })}
    </svg>
  );
};

/** Hex colour mix. */
const mix = (a: string, b: string, t: number) => {
  const pa = [1, 3, 5].map((o) => parseInt(a.slice(o, o + 2), 16));
  const pb = [1, 3, 5].map((o) => parseInt(b.slice(o, o + 2), 16));
  return `rgb(${pa.map((v, k) => Math.round(lerp(v, pb[k], t))).join(",")})`;
};
