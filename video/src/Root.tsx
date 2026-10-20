import React from "react";
import { Composition } from "remotion";
import { Film } from "./Film";
import { DURATION_FRAMES, FPS } from "./lib/timeline";

export const RemotionRoot: React.FC = () => (
  <>
    {/* Primary cut: 1920x1080, 16:9 */}
    <Composition id="AyazIntro-16x9" component={Film} width={1920} height={1080} fps={FPS} durationInFrames={DURATION_FRAMES} />
    {/* Vertical cut: 1080x1920, 9:16 for Reels / Status / LinkedIn mobile */}
    <Composition id="AyazIntro-9x16" component={Film} width={1080} height={1920} fps={FPS} durationInFrames={DURATION_FRAMES} />
  </>
);
