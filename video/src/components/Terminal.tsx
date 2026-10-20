import React from "react";
import { useCurrentFrame } from "remotion";
import { blink } from "../lib/motion";
import { colors, fonts } from "../lib/theme";

/** Text typed one character at a time; returns what is visible at `frame`. */
export const typed = (text: string, frame: number, start: number, framesPerChar: number) => {
  if (frame < start) return "";
  return text.slice(0, Math.min(text.length, Math.floor((frame - start) / framesPerChar) + 1));
};

export const Cursor: React.FC<{ solid?: boolean; color?: string; height?: string; width?: string }> = ({
  solid = false,
  color = colors.text,
  height = "1.05em",
  width = "0.55em",
}) => {
  const frame = useCurrentFrame();
  const on = solid || blink(frame);
  return (
    <span
      style={{
        display: "inline-block",
        width,
        height,
        marginLeft: "0.08em",
        verticalAlign: "-0.17em",
        backgroundColor: color,
        opacity: on ? 1 : 0,
        boxShadow: on ? `0 0 18px ${color}55` : undefined,
      }}
    />
  );
};

/** A prompt line: `$ <typed text>` followed by a cursor while active. */
export const PromptLine: React.FC<{
  text: string;
  start: number;
  framesPerChar: number;
  showCursor?: boolean;
  fontSize: number;
}> = ({ text, start, framesPerChar, showCursor = true, fontSize }) => {
  const frame = useCurrentFrame();
  const visible = typed(text, frame, start, framesPerChar);
  const typing = frame >= start && visible.length < text.length;
  return (
    <div style={{ fontFamily: fonts.mono, fontSize, color: colors.text, whiteSpace: "pre" }}>
      <span style={{ color: colors.purple }}>$</span> {visible}
      {showCursor && <Cursor solid={typing} />}
    </div>
  );
};
