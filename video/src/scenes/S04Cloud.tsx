import React from "react";
import { AbsoluteFill, Img, staticFile, useCurrentFrame } from "remotion";
import { CharReveal, FadeUp } from "../components/CharReveal";
import { useLayout } from "../lib/layout";
import { easeInOut, easeOut, lerp, map, progress } from "../lib/motion";
import { colors, fonts } from "../lib/theme";
import { s } from "../lib/timeline";

type V3 = { x: number; y: number; z: number };

const CLOUDS = [
  { name: "AWS", logo: "logos/aws-light.svg", accent: colors.purple, at: 2.2 },
  { name: "GCP", logo: "logos/gcp.svg", accent: colors.cyan, at: 2.5 },
  { name: "AZURE", logo: "logos/azure.svg", accent: colors.purple, at: 2.8 },
];
const NODES_PER_CLUSTER = 7;
const HUB_HEIGHT = -170;

/** Scene 04 — THE CLOUD: a 3D multi-cloud topology deploying and scaling. */
export const S04Cloud: React.FC = () => {
  const frame = useCurrentFrame();
  const { u, vertical, width, height } = useLayout();

  // Camera: slow orbit + dolly, projected by hand so labels can track nodes.
  const t = progress(frame, 0, s(9.3), easeInOut);
  const yaw = lerp(-0.42, 0.22, t);
  const pitch = lerp(0.68, 0.5, t);
  const dist = lerp(2300, 1750, t);
  const focal = (vertical ? 1750 : 1150) * u;
  const cx = vertical ? width / 2 : width * 0.56;
  const cy = vertical ? height * 0.56 : height * 0.6;

  const project = ({ x, y, z }: V3) => {
    const x1 = x * Math.cos(yaw) - z * Math.sin(yaw);
    const z1 = x * Math.sin(yaw) + z * Math.cos(yaw);
    const y2 = y * Math.cos(pitch) - z1 * Math.sin(pitch);
    const z2 = y * Math.sin(pitch) + z1 * Math.cos(pitch);
    const depth = z2 + dist;
    return { x: cx + (focal * x1) / depth, y: cy + (focal * y2) / depth, depth, k: focal / depth };
  };

  const spread = vertical ? 330 : 560;
  const hubs: V3[] = [
    { x: -spread, y: 0, z: 140 },
    { x: 0, y: 0, z: -300 },
    { x: spread, y: 0, z: 140 },
  ];

  // Ground grid.
  const gridLines: { a: V3; b: V3 }[] = [];
  const G = 1100;
  for (let v = -G; v <= G; v += 110) {
    gridLines.push({ a: { x: v, y: 0, z: -G }, b: { x: v, y: 0, z: G } });
    gridLines.push({ a: { x: -G, y: 0, z: v }, b: { x: G, y: 0, z: v } });
  }
  const gridIn = progress(frame, 0, s(1.2));

  const headlineAt = s(1.0);
  const certAt = s(5.0);

  return (
    <AbsoluteFill>
      <svg width={width} height={height} style={{ position: "absolute", inset: 0 }}>
        <defs>
          <radialGradient id="gridFade" cx="50%" cy="58%" r="55%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="gridMask">
            <rect width={width} height={height} fill="url(#gridFade)" />
          </mask>
        </defs>
        <g mask="url(#gridMask)" opacity={gridIn}>
          {gridLines.map(({ a, b }, i) => {
            const pa = project(a);
            const pb = project(b);
            return <line key={i} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y} stroke="rgba(250,250,250,0.07)" strokeWidth={1} />;
          })}
        </g>

        {/* Inter-cloud links (arcs) with packets */}
        {[
          [0, 1],
          [1, 2],
          [0, 2],
        ].map(([a, b], li) => {
          const start = s(3.3) + li * 10;
          const draw = progress(frame, start, s(0.9), easeInOut);
          if (draw <= 0) return null;
          const A = { ...hubs[a], y: HUB_HEIGHT };
          const B = { ...hubs[b], y: HUB_HEIGHT };
          const pts = Array.from({ length: 33 }, (_, i) => {
            const q = i / 32;
            const lift = Math.sin(Math.PI * q) * -180;
            return project({ x: lerp(A.x, B.x, q), y: lerp(A.y, B.y, q) + lift, z: lerp(A.z, B.z, q) });
          });
          const visible = pts.slice(0, Math.max(2, Math.round(draw * 33)));
          const d = visible.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
          return (
            <g key={li}>
              <path d={d} fill="none" stroke={li === 1 ? colors.cyan : colors.purple} strokeOpacity={0.5} strokeWidth={1.6 * u} />
              {draw >= 1 &&
                [0, 1, 2].map((k) => {
                  const q = ((frame - start + k * 22) % 66) / 66;
                  const p = pts[Math.min(32, Math.floor(q * 32))];
                  return <circle key={k} cx={p.x} cy={p.y} r={3.2 * u} fill={li === 1 ? colors.cyan : colors.purple} />;
                })}
            </g>
          );
        })}

        {/* Clusters */}
        {hubs.map((hub, ci) => {
          const appear = progress(frame, s(0.6) + ci * 10, s(0.9), easeOut);
          const top = project({ ...hub, y: HUB_HEIGHT * appear });
          const base = project(hub);
          const accent = CLOUDS[ci].accent;
          return (
            <g key={ci} opacity={appear}>
              {/* Instances deploying around the hub */}
              {Array.from({ length: NODES_PER_CLUSTER }).map((_, ni) => {
                const at = s(1.6) + ci * 14 + ni * 16 + (ni > 3 ? s(1.6) : 0);
                const pop = progress(frame, at, 24, easeOut);
                if (pop <= 0) return null;
                const ang = (ni / NODES_PER_CLUSTER) * Math.PI * 2 + ci;
                const r = 170 + (ni % 2) * 60;
                const n = { x: hub.x + Math.cos(ang) * r, y: 0, z: hub.z + Math.sin(ang) * r };
                const sz = 26;
                const corners = [
                  { x: n.x - sz, y: 0, z: n.z - sz },
                  { x: n.x + sz, y: 0, z: n.z - sz },
                  { x: n.x + sz, y: 0, z: n.z + sz },
                  { x: n.x - sz, y: 0, z: n.z + sz },
                ].map((c) => project({ x: lerp(n.x, c.x, pop), y: -18 * pop, z: lerp(n.z, c.z, pop) }));
                const pn = project(n);
                const ring = map(frame, [at, at + 40], [0, 1]);
                const healthy = frame > at + 30;
                return (
                  <g key={ni}>
                    <line x1={pn.x} y1={pn.y} x2={base.x} y2={base.y} stroke={accent} strokeOpacity={0.25 * pop} strokeWidth={1.2 * u} />
                    {ring < 1 && <ellipse cx={pn.x} cy={pn.y} rx={60 * ring * pn.k} ry={60 * ring * pn.k * Math.sin(pitch)} fill="none" stroke={accent} strokeOpacity={1 - ring} strokeWidth={1.5 * u} />}
                    <polygon
                      points={corners.map((c) => `${c.x},${c.y}`).join(" ")}
                      fill={healthy ? "rgba(24,24,27,0.95)" : accent}
                      fillOpacity={healthy ? 1 : 0.6}
                      stroke={accent}
                      strokeOpacity={0.9}
                      strokeWidth={1.3 * u}
                    />
                    <circle cx={(corners[0].x + corners[2].x) / 2} cy={(corners[0].y + corners[2].y) / 2} r={3 * u * pn.k * 1.4} fill={healthy ? colors.cyan : colors.text} />
                  </g>
                );
              })}
              {/* Hub mast */}
              <line x1={base.x} y1={base.y} x2={top.x} y2={top.y} stroke={accent} strokeOpacity={0.6} strokeWidth={1.5 * u} strokeDasharray={`${3 * u} ${5 * u}`} />
              <ellipse cx={base.x} cy={base.y} rx={90 * base.k} ry={90 * base.k * Math.sin(pitch)} fill={accent} fillOpacity={0.06} stroke={accent} strokeOpacity={0.35} />
              <circle cx={top.x} cy={top.y} r={16 * u * top.k * 1.6} fill={accent} fillOpacity={0.18} />
              <circle cx={top.x} cy={top.y} r={6 * u * top.k * 1.6} fill={accent} />
            </g>
          );
        })}
      </svg>

      {/* Provider labels tracking the hubs */}
      {hubs.map((hub, ci) => {
        const top = project({ ...hub, y: HUB_HEIGHT });
        const p = progress(frame, s(CLOUDS[ci].at), 26, easeOut);
        return (
          <div
            key={ci}
            style={{
              position: "absolute",
              left: top.x,
              top: top.y - 30 * u,
              transform: `translate(-50%, -100%) translateY(${(1 - p) * 14 * u}px)`,
              opacity: p,
              display: "flex",
              alignItems: "center",
              gap: 12 * u,
              padding: `${10 * u}px ${18 * u}px`,
              borderRadius: 14 * u,
              background: "rgba(17,17,19,0.85)",
              border: `1px solid ${colors.border}`,
              fontFamily: fonts.mono,
              fontSize: 22 * u,
              fontWeight: 500,
              color: colors.text,
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
            }}
          >
            <Img src={staticFile(CLOUDS[ci].logo)} style={{ height: (ci === 0 ? 30 : 26) * u, width: "auto" }} />
            {/* The AWS mark is already a wordmark */}
            {ci !== 0 && CLOUDS[ci].name}
          </div>
        );
      })}

      {/* Headline */}
      <div
        style={{
          position: "absolute",
          left: vertical ? 0 : 120 * u,
          width: vertical ? "100%" : undefined,
          top: (vertical ? 190 : 100) * u,
          textAlign: vertical ? "center" : "left",
        }}
      >
        <div
          style={{
            fontFamily: fonts.display,
            fontWeight: 800,
            fontSize: (vertical ? 116 : 104) * u,
            letterSpacing: "-0.04em",
            lineHeight: 0.98,
            color: colors.text,
          }}
        >
          <CharReveal text="BUILT FOR" start={headlineAt} stagger={1.6} duration={40} />
          <br />
          <CharReveal text="THE CLOUD." start={headlineAt + 10} stagger={1.6} duration={40} unitStyle={(c) => (c === "." ? { color: colors.cyan } : undefined)} />
        </div>
        <div
          style={{
            marginTop: 28 * u,
            fontFamily: fonts.mono,
            fontSize: 28 * u,
            letterSpacing: "0.3em",
            color: colors.muted,
            display: "flex",
            gap: "0.7em",
            justifyContent: vertical ? "center" : "flex-start",
          }}
        >
          {CLOUDS.map((c, i) => (
            <React.Fragment key={c.name}>
              {i > 0 && <FadeUp start={s(c.at) - 4} distance={0}><span style={{ color: colors.dim }}>·</span></FadeUp>}
              <FadeUp start={s(c.at)} distance={12 * u}>
                <span style={{ color: colors.text }}>{c.name}</span>
              </FadeUp>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Certification */}
      <FadeUp
        start={certAt}
        distance={20 * u}
        style={{
          position: "absolute",
          right: vertical ? undefined : 110 * u,
          left: vertical ? "50%" : undefined,
          bottom: (vertical ? 200 : 90) * u,
          translate: vertical ? "-50% 0" : undefined,
        }}
      >
        <CertCard u={u} frame={frame} at={certAt} title="Associate Cloud Engineer" issuer="GOOGLE CLOUD CERTIFIED" />
      </FadeUp>
    </AbsoluteFill>
  );
};

export const CertCard: React.FC<{ u: number; frame: number; at: number; title: string; issuer: string; icon?: React.ReactNode }> = ({
  u,
  frame,
  at,
  title,
  issuer,
  icon,
}) => {
  const sweep = progress(frame, at + 10, 50, easeInOut);
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        gap: 22 * u,
        padding: `${22 * u}px ${30 * u}px ${22 * u}px ${24 * u}px`,
        borderRadius: 18 * u,
        background: "linear-gradient(180deg, rgba(24,24,27,0.92), rgba(17,17,19,0.92))",
        border: `1px solid ${colors.border}`,
        boxShadow: `0 ${30 * u}px ${80 * u}px rgba(0,0,0,0.5)`,
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          width: 64 * u,
          height: 64 * u,
          borderRadius: 14 * u,
          background: "rgba(250,250,250,0.04)",
          border: `1px solid ${colors.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon ?? <Img src={staticFile("logos/gcp.svg")} style={{ width: 38 * u, height: 38 * u }} />}
      </div>
      <div>
        <div style={{ fontFamily: fonts.mono, fontSize: 16 * u, letterSpacing: "0.22em", color: colors.muted }}>{issuer}</div>
        <div style={{ fontFamily: fonts.sans, fontWeight: 600, fontSize: 30 * u, color: colors.text, marginTop: 6 * u, letterSpacing: "-0.01em" }}>
          {title}
        </div>
      </div>
      {/* Specular sweep */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "40%",
          left: `${lerp(-50, 130, sweep)}%`,
          background: "linear-gradient(100deg, transparent, rgba(250,250,250,0.08), transparent)",
        }}
      />
    </div>
  );
};
