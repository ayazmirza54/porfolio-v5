import React from "react";
import { AbsoluteFill, Img, OffthreadVideo, staticFile, useCurrentFrame } from "remotion";
import { CharReveal, FadeUp } from "../components/CharReveal";
import { Cursor, typed } from "../components/Terminal";
import { useLayout } from "../lib/layout";
import { easeInOut, easeOut, progress } from "../lib/motion";
import { colors, fonts } from "../lib/theme";
import { s, typing } from "../lib/timeline";

type Project = {
  title: string;
  tagline: string;
  meta: string;
  url: string;
  media: { kind: "image" | "video"; src: string; w: number; h: number };
  Overlay?: React.FC<{ frame: number; u: number; w: number; h: number; local: number }>;
};

/** Camera moves (seconds, scene-relative) between projects; synced to whooshes. */
const MOVES = [3.15, 6.25, 9.35];
const MOVE_DURATION = 0.75;

/** Scene 05 — THE BUILDER: one continuous camera track through four products. */
export const S05Builder: React.FC = () => {
  const frame = useCurrentFrame();
  const { u, vertical, width, height } = useLayout();

  // Camera position along the track, in "project" units, and its velocity.
  const camAt = (f: number) => MOVES.reduce((acc, m) => acc + progress(f, s(m - MOVE_DURATION / 2), s(MOVE_DURATION), easeInOut), 0);
  const cam = camAt(frame);
  const velocity = (camAt(frame + 1) - camAt(frame - 1)) / 2; // units per frame
  const blur = Math.min(28, Math.abs(velocity) * width * 0.045);

  const active = Math.round(cam);
  const box = vertical ? { maxW: 960 * u, maxH: 700 * u } : { maxW: 1240 * u, maxH: 600 * u };

  return (
    <AbsoluteFill>
      {/* Directional motion blur used during whip pans */}
      <svg width={0} height={0} style={{ position: "absolute" }}>
        <filter id="hblur" x="-20%" y="-5%" width="140%" height="110%">
          <feGaussianBlur stdDeviation={`${blur.toFixed(2)} 0`} />
        </filter>
      </svg>

      {/* Section label + counter */}
      <div
        style={{
          position: "absolute",
          top: (vertical ? 150 : 64) * u,
          left: vertical ? 0 : 120 * u,
          width: vertical ? "100%" : undefined,
          display: "flex",
          justifyContent: vertical ? "center" : "flex-start",
          gap: 22 * u,
          fontFamily: fonts.mono,
          fontSize: 20 * u,
          letterSpacing: "0.3em",
          color: colors.muted,
        }}
      >
        <FadeUp start={s(0.2)} distance={10 * u}>
          <span>
            BEYOND THE DAY JOB <span style={{ color: colors.dim }}>—</span>{" "}
            <span style={{ color: colors.text }}>0{active + 1}</span>
            <span style={{ color: colors.dim }}> / 04</span>
          </span>
        </FadeUp>
      </div>

      <AbsoluteFill style={{ perspective: 2400 * u, filter: blur > 0.3 ? "url(#hblur)" : undefined }}>
        {PROJECTS.map((p, i) => {
          const o = i - cam; // offset from camera, in project units
          if (Math.abs(o) > 1.4) return null;
          const scale = Math.min(box.maxW / p.media.w, (box.maxH - 46 * u) / p.media.h);
          const winW = p.media.w * scale;
          const winH = p.media.h * scale + 46 * u;
          const winX = vertical ? (width - winW) / 2 : width - winW - 110 * u;
          const winY = vertical ? height * 0.42 : height - winH - 96 * u;
          const local = frame - (i === 0 ? 0 : s(MOVES[i - 1]));
          const focus = 1 - Math.min(1, Math.abs(o));
          return (
            <React.Fragment key={p.title}>
              {/* Window (far layer) */}
              <div
                style={{
                  position: "absolute",
                  left: winX,
                  top: winY,
                  width: winW,
                  height: winH,
                  transform: `translateX(${o * width * 0.95}px) rotateY(${-o * 28}deg) scale(${1 - Math.abs(o) * 0.12})`,
                  opacity: 0.25 + 0.75 * focus,
                }}
              >
                <Window project={p} w={winW} h={winH} u={u} frame={frame} local={local} />
              </div>
              {/* Title (near layer, parallax) */}
              <div
                style={{
                  position: "absolute",
                  left: vertical ? 0 : 120 * u,
                  width: vertical ? "100%" : undefined,
                  textAlign: vertical ? "center" : "left",
                  top: (vertical ? 250 : 130) * u,
                  transform: `translateX(${o * width * 1.35}px)`,
                  opacity: focus,
                }}
              >
                <div
                  style={{
                    fontFamily: fonts.display,
                    fontWeight: 900,
                    fontSize: (vertical ? 92 : 104) * u,
                    letterSpacing: "-0.045em",
                    lineHeight: 1,
                    color: colors.text,
                  }}
                >
                  <CharReveal text={p.title} start={i === 0 ? s(0.35) : s(MOVES[i - 1]) - 6} stagger={1.5} duration={34} />
                </div>
                <div
                  style={{
                    marginTop: 18 * u,
                    fontFamily: fonts.sans,
                    fontWeight: 500,
                    fontSize: (vertical ? 38 : 40) * u,
                    letterSpacing: "-0.01em",
                    color: colors.muted,
                    display: "flex",
                    alignItems: vertical ? "center" : "baseline",
                    gap: (vertical ? 14 : 22) * u,
                    justifyContent: vertical ? "center" : "flex-start",
                    flexDirection: vertical ? "column" : "row",
                  }}
                >
                  <FadeUp start={(i === 0 ? s(0.6) : s(MOVES[i - 1]) + 8)} distance={12 * u}>
                    {p.tagline}
                  </FadeUp>
                  <FadeUp start={(i === 0 ? s(0.8) : s(MOVES[i - 1]) + 16)} distance={12 * u} style={{ width: vertical ? "100%" : undefined }}>
                    <span style={{ fontFamily: fonts.mono, fontSize: 18 * u, letterSpacing: "0.2em", color: colors.dim }}>{p.meta}</span>
                  </FadeUp>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const Window: React.FC<{ project: Project; w: number; h: number; u: number; frame: number; local: number }> = ({ project, w, h, u, frame, local }) => {
  const bar = 46 * u;
  const contentH = h - bar;
  const { media, Overlay } = project;
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: 16 * u,
        overflow: "hidden",
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        boxShadow: `0 ${40 * u}px ${120 * u}px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02)`,
      }}
    >
      <div
        style={{
          height: bar,
          display: "flex",
          alignItems: "center",
          gap: 9 * u,
          padding: `0 ${18 * u}px`,
          background: colors.surface2,
          borderBottom: `1px solid ${colors.border}`,
          position: "relative",
        }}
      >
        {[0, 1, 2].map((k) => (
          <div key={k} style={{ width: 12 * u, height: 12 * u, borderRadius: 99, background: "#3F3F46" }} />
        ))}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: fonts.mono,
            fontSize: 15 * u,
            color: colors.muted,
            padding: `${5 * u}px ${18 * u}px`,
            borderRadius: 8 * u,
            background: "rgba(9,9,11,0.6)",
            whiteSpace: "nowrap",
          }}
        >
          {project.url}
        </div>
      </div>
      <div style={{ position: "relative", width: w, height: contentH, overflow: "hidden" }}>
        {media.kind === "image" ? (
          <Img src={staticFile(media.src)} style={{ width: w, height: contentH, display: "block" }} />
        ) : (
          <div style={{ width: w, height: contentH, transform: "scale(1.3)", transformOrigin: "0 0" }}>
            <OffthreadVideo src={staticFile(media.src)} startFrom={s(3.4)} muted style={{ width: w, height: contentH }} />
          </div>
        )}
        {Overlay && <Overlay frame={frame} u={u} w={w} h={contentH} local={local} />}
      </div>
    </div>
  );
};

/* ---------- Product overlays (recreated interactions on the real UIs) ---------- */

const IntelliSketchOverlay: React.FC<{ frame: number; u: number; w: number; h: number; local: number }> = ({ local, w, h, u }) => {
  // The welcome splash clears as soon as the user starts drawing.
  const clear = progress(local, s(0.7), 14);
  const sx = w / 1919;
  const sy = h / 814;
  const tri = "M 760 560 L 760 300 L 1110 560 Z";
  const draw = progress(local, s(0.85), s(0.9), easeInOut);
  const labels = progress(local, s(1.6), 16);
  const press = progress(local, s(2.0), 10);
  const result = progress(local, s(2.3), 18, easeOut);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: 300 * sx, top: 150 * sy, width: 1340 * sx, height: 560 * sy, background: "#121212", opacity: clear }} />
      <svg width={w} height={h} viewBox="0 0 1919 814" style={{ position: "absolute", inset: 0 }}>
        <path d={tri} fill="none" stroke="#e9ecef" strokeWidth={5} strokeLinejoin="round" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - draw} />
        <g opacity={labels} fontFamily="Inter" fontWeight={600} fontSize={44} fill="#e9ecef">
          <text x={700} y={445}>3</text>
          <text x={920} y={615}>4</text>
          <text x={950} y={410} fill="#00F5A0">?</text>
        </g>
        {/* "Evaluate with AI" press */}
        <rect x={1586} y={727} width={297} height={62} rx={31} fill="none" stroke="#A78BFA" strokeWidth={4} opacity={press * (1 - result * 0.7)} />
      </svg>
      <div
        style={{
          position: "absolute",
          left: 1180 * sx,
          top: 330 * sy,
          opacity: result,
          transform: `translateY(${(1 - result) * 16 * u}px)`,
          padding: `${12 * u}px ${20 * u}px`,
          borderRadius: 12 * u,
          background: "rgba(0,245,160,0.08)",
          border: "1px solid rgba(0,245,160,0.45)",
          fontFamily: fonts.mono,
          fontSize: 26 * u,
          color: "#00F5A0",
          whiteSpace: "nowrap",
        }}
      >
        √(3² + 4²) = 5
      </div>
    </AbsoluteFill>
  );
};

/** Streamlit chat overlay shared by QuerySmith and UnixBot. */
const chatOverlay = (typingId: "querysmith" | "unixbot", placeholderBg: string, answer: { label: string; lines: React.ReactNode[] }) => {
  const C: React.FC<{ frame: number; u: number; w: number; h: number; local: number }> = ({ frame, w, h, u }) => {
    const t = typing(typingId, "builder");
    const text = typed(t.text, frame, t.start, t.framesPerChar);
    const sent = frame > t.end + 8;
    const sx = w / 1919;
    const sy = h / 835;
    const reply = progress(frame, t.end + 14, 18, easeOut);
    return (
      <AbsoluteFill>
        {/* Input box */}
        {!sent && frame >= t.start - 4 && (
          <div
            style={{
              position: "absolute",
              left: 630 * sx,
              top: 694 * sy,
              width: 1100 * sx,
              height: 48 * sy,
              background: placeholderBg,
              display: "flex",
              alignItems: "center",
              fontFamily: fonts.sans,
              fontSize: 26 * sx * 1.05,
              color: "#FAFAFA",
              whiteSpace: "pre",
            }}
          >
            {text}
            <Cursor solid={text.length < t.text.length} width={`${2 * u}px`} height="1em" />
          </div>
        )}
        {/* Conversation */}
        <div style={{ position: "absolute", left: 624 * sx, top: 430 * sy, width: 1176 * sx }}>
          {sent && (
            <div style={{ display: "flex", gap: 14 * sx, alignItems: "center", fontFamily: fonts.sans, fontSize: 24 * sx, color: "#FAFAFA", marginBottom: 14 * sy }}>
              <span style={{ width: 30 * sx, height: 30 * sx, borderRadius: 8 * sx, background: "#FF4B4B", display: "inline-block" }} />
              {t.text}
            </div>
          )}
          <div
            style={{
              opacity: reply,
              transform: `translateY(${(1 - reply) * 12}px)`,
              borderRadius: 10 * sx,
              background: "#1A1C24",
              border: "1px solid #2B2E38",
              padding: `${16 * sy}px ${22 * sx}px`,
              fontFamily: fonts.mono,
              fontSize: 22 * sx,
              lineHeight: 1.55,
              color: "#E4E4E7",
            }}
          >
            <div style={{ fontSize: 15 * sx, color: colors.muted, letterSpacing: "0.15em", marginBottom: 6 * sy }}>{answer.label}</div>
            {answer.lines.map((line, i) => (
              <div key={i} style={{ opacity: progress(frame, t.end + 18 + i * 5, 10) }}>
                {line}
              </div>
            ))}
          </div>
        </div>
      </AbsoluteFill>
    );
  };
  return C;
};

const kw = (x: string) => <span style={{ color: colors.purple }}>{x}</span>;
const fn = (x: string) => <span style={{ color: colors.cyan }}>{x}</span>;

const QuerySmithOverlay = chatOverlay("querysmith", "#262730", {
  label: "SQL",
  lines: [
    <>{kw("SELECT")} customer_id, {fn("SUM")}(amount) {kw("AS")} revenue</>,
    <>{kw("FROM")} orders {kw("GROUP BY")} customer_id</>,
    <>{kw("ORDER BY")} revenue {kw("DESC LIMIT")} 5;</>,
  ],
});

const UnixBotOverlay = chatOverlay("unixbot", "#262730", {
  label: "BASH",
  lines: [
    <>
      <span style={{ color: colors.purple }}>$</span> {fn("find")} . -type f -size +100M
    </>,
    <span style={{ color: colors.muted }}># -size +100M → files larger than 100 MB</span>,
  ],
});

const PROJECTS: Project[] = [
  {
    title: "INTELLISKETCH",
    tagline: "Draw. Think. Solve.",
    meta: "GEMINI API · WEB",
    url: "intellisketch.vercel.app",
    media: { kind: "image", src: "shots/intellisketch.png", w: 1919, h: 814 },
    Overlay: IntelliSketchOverlay,
  },
  {
    title: "QUERYSMITH",
    tagline: "Natural Language → SQL",
    meta: "PYTHON · STREAMLIT · GEMINI",
    url: "query-smith.streamlit.app",
    media: { kind: "image", src: "shots/querysmith.png", w: 1919, h: 835 },
    Overlay: QuerySmithOverlay,
  },
  {
    title: "UNIXBOT",
    tagline: "Unix Knowledge, Reimagined.",
    meta: "PYTHON · STREAMLIT · GEMINI",
    url: "unix-bot.streamlit.app",
    media: { kind: "image", src: "shots/unixbot.png", w: 1919, h: 831 },
    Overlay: UnixBotOverlay,
  },
  {
    title: "EC2 MANAGER TUI",
    tagline: "Cloud Control. From the Terminal.",
    meta: "PYTHON · AWS SDK",
    url: "pwsh — ec2-manager-tui",
    media: { kind: "video", src: "shots/ec2-manager-tui.mp4", w: 1024, h: 576 },
  },
];

