import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { CharReveal, FadeUp } from "../components/CharReveal";
import { Cursor, PromptLine } from "../components/Terminal";
import { useLayout } from "../lib/layout";
import { easeIn, easeInOut, lerp, progress } from "../lib/motion";
import { colors, fonts } from "../lib/theme";
import { s, typing } from "../lib/timeline";

/** Scene 07 — THE SIGNATURE: `echo "Keep building."`, the AM. monogram, the URL. */
export const S07Signature: React.FC = () => {
  const frame = useCurrentFrame();
  const { u, vertical } = useLayout();
  const t = typing("echo", "signature");

  const enterAt = s(2.75);
  const outputAt = s(2.85);
  const termOut = progress(frame, s(3.9), s(0.5), easeIn);
  const monoAt = s(4.6);
  const settleAt = s(6.2);
  const nameAt = s(6.4);
  const roleAt = s(6.6);
  const urlAt = s(8.4);
  const fadeToBlack = progress(frame, s(10.1), s(0.9), easeInOut);

  const termSize = (vertical ? 40 : 46) * u;
  const settle = progress(frame, settleAt, s(1.1), easeInOut);

  return (
    <AbsoluteFill>
      {/* Terminal */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            width: termSize * 0.6 * 23,
            opacity: 1 - termOut,
            filter: termOut > 0 ? `blur(${termOut * 12}px)` : undefined,
            transform: `scale(${1 - termOut * 0.08})`,
          }}
        >
          {frame < t.start ? (
            <div style={{ fontFamily: fonts.mono, fontSize: termSize }}>
              <span style={{ color: colors.purple }}>$</span> <Cursor />
            </div>
          ) : (
            <PromptLine text={t.text} start={t.start} framesPerChar={t.framesPerChar} fontSize={termSize} showCursor={frame < enterAt} />
          )}
          {frame >= outputAt && (
            <div style={{ fontFamily: fonts.mono, fontSize: termSize, color: colors.cyan, marginTop: termSize * 0.35 }}>
              Keep building.
              <Cursor color={colors.text} />
            </div>
          )}
        </div>
      </AbsoluteFill>

      {/* Monogram: lands centre-frame, then lifts and shrinks above the name */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            fontFamily: fonts.display,
            fontWeight: 900,
            fontSize: (vertical ? 400 : 380) * u,
            letterSpacing: "-0.06em",
            lineHeight: 0.85,
            color: colors.text,
            transform: `translateY(${lerp(0, (vertical ? -300 : -250) * u, settle)}px) scale(${lerp(1, 0.34, settle)})`,
          }}
        >
          <CharReveal text="AM." start={monoAt} stagger={5} duration={48} unitStyle={(c) => (c === "." ? { color: colors.purple } : undefined)} />
        </div>
      </AbsoluteFill>

      {/* Name lockup */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", paddingTop: (vertical ? 120 : 110) * u }}>
        <div
          style={{
            fontFamily: fonts.display,
            fontWeight: 800,
            fontSize: (vertical ? 116 : 128) * u,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: colors.text,
          }}
        >
          <CharReveal text="AYAZ MIRZA" start={nameAt} stagger={2} duration={40} />
        </div>
        <FadeUp start={roleAt} distance={16 * u} style={{ marginTop: 26 * u }}>
          <div style={{ fontFamily: fonts.sans, fontWeight: 500, fontSize: (vertical ? 34 : 36) * u, color: colors.muted, textAlign: "center", letterSpacing: "-0.005em" }}>
            Data Engineer. Problem Solver. Builder.
          </div>
        </FadeUp>
        <div style={{ marginTop: 56 * u, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              width: 120 * u * progress(frame, urlAt - 10, 30),
              height: 1,
              background: `linear-gradient(90deg, transparent, ${colors.purple}, ${colors.cyan}, transparent)`,
              marginBottom: 30 * u,
            }}
          />
          <FadeUp start={urlAt} distance={10 * u}>
            <div style={{ fontFamily: fonts.mono, fontSize: 34 * u, color: colors.text, letterSpacing: "0.04em" }}>
              ayazmirza54.in
              <Cursor color={colors.cyan} width="0.5em" />
            </div>
          </FadeUp>
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{ background: "#000", opacity: fadeToBlack }} />
    </AbsoluteFill>
  );
};
