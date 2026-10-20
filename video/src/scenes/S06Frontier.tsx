import React from "react";
import { AbsoluteFill, Img, random, staticFile, useCurrentFrame } from "remotion";
import { CharReveal, FadeUp } from "../components/CharReveal";
import { useLayout } from "../lib/layout";
import { easeIn, easeInOut, easeOut, lerp, map, progress } from "../lib/motion";
import { colors, fonts } from "../lib/theme";
import { s } from "../lib/timeline";
import { CertCard } from "./S04Cloud";

const FRAGMENTS = [
  "model.generate_content(prompt)",
  "SELECT * FROM events",
  "ansible-playbook restart.yml",
  "aws ec2 start-instances",
  "gcloud run deploy",
  "air sandbox run graph.mp",
  "docker compose up -d",
  "git push origin main",
];
const SHOTS = ["shots/intellisketch.png", "shots/querysmith.png", "shots/unixbot.png"];
const LAYERS = [4, 6, 6, 4];

/** Scene 06 — THE AI FRONTIER: everything converges into one system. Peak of the film. */
export const S06Frontier: React.FC = () => {
  const frame = useCurrentFrame();
  const { u, vertical, width, height, cx, cy } = useLayout();

  const converge = progress(frame, 0, s(3.0), easeOut);
  const titleAt = s(3.0);
  const nextAt = s(5.0);
  const credAt = s(7.0);
  const collapse = progress(frame, s(8.35), s(0.6), easeIn);

  // Pull-back camera: starts close (large) and settles; then collapses to a point.
  const cam = lerp(2.3, 1, converge) * (1 - collapse * 0.98);
  const spin = frame * 0.0035;
  const rx = (vertical ? 430 : 780) * u;
  const ry = (vertical ? 720 : 360) * u;
  const dimForType = map(frame, [titleAt - 10, titleAt + 30], [1, 0.38]);

  // Neural network geometry.
  const netW = (vertical ? 560 : 760) * u;
  const netH = (vertical ? 520 : 440) * u;
  const nodes = LAYERS.map((n, li) =>
    Array.from({ length: n }, (_, ni) => ({
      x: cx - netW / 2 + (li / (LAYERS.length - 1)) * netW,
      y: cy - ((n - 1) / 2) * (netH / 5) + ni * (netH / 5),
    })),
  );

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ transform: `scale(${cam})`, opacity: 1 - collapse }}>
        {/* Network */}
        <svg width={width} height={height} style={{ position: "absolute", inset: 0, opacity: dimForType }}>
          {nodes.slice(0, -1).map((layer, li) =>
            layer.map((a, ai) =>
              nodes[li + 1].map((b, bi) => {
                const id = `${li}-${ai}-${bi}`;
                const phase = random(`ph${id}`);
                const period = 50 + Math.floor(random(`pr${id}`) * 40);
                const q = ((frame + phase * period) % period) / period;
                const active = random(`ac${id}`) > 0.55;
                return (
                  <g key={id}>
                    <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="rgba(250,250,250,0.08)" strokeWidth={1} />
                    {active && (
                      <circle cx={lerp(a.x, b.x, q)} cy={lerp(a.y, b.y, q)} r={2.6 * u} fill={li % 2 ? colors.cyan : colors.purple} opacity={Math.sin(Math.PI * q)} />
                    )}
                  </g>
                );
              }),
            ),
          )}
          {nodes.flat().map((n, i) => {
            const glow = 0.5 + 0.5 * Math.sin(frame * 0.06 + i * 1.7);
            return (
              <g key={i}>
                <circle cx={n.x} cy={n.y} r={14 * u} fill={i % 3 ? colors.purple : colors.cyan} opacity={0.08 + 0.12 * glow} />
                <circle cx={n.x} cy={n.y} r={5.5 * u} fill={colors.bg} stroke={i % 3 ? colors.purple : colors.cyan} strokeWidth={2 * u} />
              </g>
            );
          })}
        </svg>

        {/* Orbiting fragments: code + product windows, converging from off-screen */}
        {[...FRAGMENTS.map((f) => ({ kind: "code" as const, v: f })), ...SHOTS.map((v) => ({ kind: "shot" as const, v }))].map((item, i, all) => {
          const ang = (i / all.length) * Math.PI * 2 + spin;
          const r = lerp(1.9, 1, converge);
          const depth = (Math.sin(ang) + 1) / 2; // 0 back, 1 front
          const x = cx + Math.cos(ang) * rx * r;
          const y = cy + Math.sin(ang) * ry * r * 0.9;
          const sc = 0.72 + depth * 0.38;
          const op = (0.35 + depth * 0.65) * dimForType;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: x,
                top: y,
                transform: `translate(-50%, -50%) scale(${sc})`,
                opacity: op,
                zIndex: Math.round(depth * 10),
                filter: depth < 0.35 ? `blur(${(0.35 - depth) * 8}px)` : undefined,
              }}
            >
              {item.kind === "code" ? (
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 22 * u,
                    color: colors.text,
                    padding: `${10 * u}px ${16 * u}px`,
                    borderRadius: 10 * u,
                    background: "rgba(17,17,19,0.9)",
                    border: `1px solid ${colors.border}`,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ color: i % 2 ? colors.cyan : colors.purple }}>›</span> {item.v}
                </div>
              ) : (
                <div style={{ width: 300 * u, borderRadius: 10 * u, overflow: "hidden", border: `1px solid ${colors.border}`, background: colors.surface }}>
                  <div style={{ height: 18 * u, background: colors.surface2, display: "flex", gap: 5 * u, alignItems: "center", paddingLeft: 8 * u }}>
                    {[0, 1, 2].map((k) => (
                      <div key={k} style={{ width: 6 * u, height: 6 * u, borderRadius: 9, background: "#3F3F46" }} />
                    ))}
                  </div>
                  <Img src={staticFile(item.v)} style={{ width: "100%", display: "block" }} />
                </div>
              )}
            </div>
          );
        })}

        {/* Legibility backdrop for the type */}
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse ${vertical ? "80% 38%" : "48% 42%"} at 50% 50%, rgba(9,9,11,0.92), rgba(9,9,11,0) 100%)`,
            opacity: progress(frame, titleAt - 10, 30),
            zIndex: 20,
          }}
        />

        {/* Type */}
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", zIndex: 30 }}>
          <div
            style={{
              fontFamily: fonts.display,
              fontWeight: 900,
              fontSize: (vertical ? 168 : 156) * u,
              letterSpacing: "-0.045em",
              lineHeight: 0.95,
              color: colors.text,
              textAlign: "center",
              transform: `scale(${1.08 - 0.08 * progress(frame, titleAt, s(2.5))})`,
            }}
          >
            {vertical ? (
              <>
                <CharReveal text="DATA" start={titleAt} stagger={2} duration={36} />
                <div style={{ fontSize: "0.45em", lineHeight: 1.1 }}>
                  <Times frame={frame} at={titleAt + 6} color={colors.purple} />
                </div>
                <CharReveal text="CLOUD" start={titleAt + 8} stagger={2} duration={36} />
                <div style={{ fontSize: "0.45em", lineHeight: 1.1 }}>
                  <Times frame={frame} at={titleAt + 14} color={colors.cyan} />
                </div>
                <CharReveal text="AI" start={titleAt + 16} stagger={2} duration={36} />
              </>
            ) : (
              <>
                <CharReveal text="DATA" start={titleAt} stagger={2} duration={36} />
                <Times frame={frame} at={titleAt + 6} color={colors.purple} />
                <CharReveal text="CLOUD" start={titleAt + 8} stagger={2} duration={36} />
                <Times frame={frame} at={titleAt + 16} color={colors.cyan} />
                <CharReveal text="AI" start={titleAt + 18} stagger={2} duration={36} />
              </>
            )}
          </div>
          <div
            style={{
              marginTop: 40 * u,
              fontFamily: fonts.display,
              fontWeight: 700,
              fontSize: (vertical ? 56 : 58) * u,
              letterSpacing: "0.06em",
              color: colors.text,
            }}
          >
            <CharReveal
              text="BUILDING WHAT'S NEXT."
              start={nextAt}
              stagger={1.2}
              duration={34}
              unitStyle={(c, i) => (i >= 14 ? { color: c === "." ? colors.cyan : colors.purple } : undefined)}
            />
          </div>
          <FadeUp start={credAt} distance={18 * u} style={{ marginTop: 56 * u }}>
            <CertCard u={u * 0.85} frame={frame} at={credAt} issuer="GOOGLE CLOUD PARTNER SPECIALIST" title="Gemini Agent Development" icon={<Sparkle size={36 * u} />} />
          </FadeUp>
        </AbsoluteFill>
      </AbsoluteFill>

      {/* Singularity: everything collapses into a point that becomes the cursor */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            width: 26 * u,
            height: 50 * u,
            background: colors.text,
            opacity: progress(frame, s(8.6), s(0.25)),
            transform: `scale(${lerp(0.2, 1, progress(frame, s(8.6), s(0.3), easeInOut))})`,
            boxShadow: `0 0 ${40 * u}px rgba(250,250,250,0.35)`,
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const Times: React.FC<{ frame: number; at: number; color: string }> = ({ frame, at, color }) => {
  const p = progress(frame, at, 30, easeOut);
  return (
    <span
      style={{
        display: "inline-block",
        color,
        fontWeight: 300,
        margin: "0 0.12em",
        opacity: p,
        transform: `rotate(${(1 - p) * -90}deg) scale(${0.4 + 0.6 * p})`,
      }}
    >
      ×
    </span>
  );
};

/** Four-point spark (generic AI glyph, not a brand mark). */
const Sparkle: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <defs>
      <linearGradient id="spk" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor={colors.cyan} />
        <stop offset="1" stopColor={colors.purple} />
      </linearGradient>
    </defs>
    <path d="M12 1 C13 8 16 11 23 12 C16 13 13 16 12 23 C11 16 8 13 1 12 C8 11 11 8 12 1 Z" fill="url(#spk)" />
  </svg>
);
