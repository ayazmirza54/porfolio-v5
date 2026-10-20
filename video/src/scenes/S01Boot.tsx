import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { NameLockup } from "../components/NameLockup";
import { Cursor, PromptLine } from "../components/Terminal";
import { useLayout } from "../lib/layout";
import { easeIn, map, progress } from "../lib/motion";
import { colors, fonts } from "../lib/theme";
import { s, typing } from "../lib/timeline";

/** Scene 01 — THE BOOT SEQUENCE: `$ whoami` resolves into the name. */
export const S01Boot: React.FC = () => {
  const frame = useCurrentFrame();
  const { u } = useLayout();
  const t = typing("whoami", "boot");

  const enterAt = s(1.95);
  const outputAt = s(2.05);
  const dissolveAt = s(2.75);
  const nameAt = s(3.0);
  const subAt = s(4.4);

  // Terminal dissolves: drifts back, defocuses, the output letter-spaces apart.
  const dissolve = progress(frame, dissolveAt, s(0.55), easeIn);
  const termOpacity = progress(frame, s(0.15), s(0.4)) * (1 - dissolve);
  const camera = map(frame, [0, s(7)], [1, 1.045]);
  const termSize = 46 * u;

  return (
    <AbsoluteFill style={{ transform: `scale(${camera})` }}>
      {/* Terminal */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div
          style={{
            opacity: termOpacity,
            transform: `scale(${1 + dissolve * 0.35})`,
            filter: dissolve > 0 ? `blur(${dissolve * 14}px)` : undefined,
            minWidth: 520 * u,
          }}
        >
          {frame < enterAt ? (
            <PromptLine text={t.text} start={t.start} framesPerChar={t.framesPerChar} fontSize={termSize} />
          ) : (
            <>
              <PromptLine text={t.text} start={-999} framesPerChar={1} fontSize={termSize} showCursor={false} />
              {frame >= outputAt && (
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: termSize,
                    color: colors.cyan,
                    marginTop: termSize * 0.35,
                    letterSpacing: `${dissolve * 0.6}em`,
                    whiteSpace: "pre",
                  }}
                >
                  ayaz_mirza
                  <Cursor color={colors.text} />
                </div>
              )}
            </>
          )}
        </div>
      </AbsoluteFill>

      {/* Name */}
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <NameLockup nameAt={nameAt} subAt={subAt} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
