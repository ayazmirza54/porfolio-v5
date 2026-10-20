import React, { useLayoutEffect, useRef } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";

/**
 * Full-frame <canvas> redrawn deterministically every frame. Used for dense
 * particle systems where thousands of SVG nodes would be too slow.
 */
export const FrameCanvas: React.FC<{
  draw: (ctx: CanvasRenderingContext2D, frame: number, width: number, height: number) => void;
  style?: React.CSSProperties;
}> = ({ draw, style }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  useLayoutEffect(() => {
    const ctx = ref.current?.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    draw(ctx, frame, width, height);
  }, [draw, frame, width, height]);
  return <canvas ref={ref} width={width} height={height} style={{ position: "absolute", inset: 0, ...style }} />;
};
