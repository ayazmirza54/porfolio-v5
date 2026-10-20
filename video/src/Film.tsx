import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Backdrop, FilmFinish } from "./components/Backdrop";
import { SceneShell } from "./components/SceneShell";
import { loadFonts } from "./lib/fonts";
import { OVERLAP_FRAMES, scene, type SceneId } from "./lib/timeline";
import { S01Boot } from "./scenes/S01Boot";
import { S02Identity } from "./scenes/S02Identity";
import { S03Engineer } from "./scenes/S03Engineer";
import { S04Cloud } from "./scenes/S04Cloud";
import { S05Builder } from "./scenes/S05Builder";
import { S06Frontier } from "./scenes/S06Frontier";
import { S07Signature } from "./scenes/S07Signature";

loadFonts();

type SceneEntry = { id: SceneId; Component: React.FC; exitScale?: number; matchIn?: boolean; matchOut?: boolean };

const SCENES: SceneEntry[] = [
  { id: "boot", Component: S01Boot, matchOut: true },
  { id: "identity", Component: S02Identity, matchIn: true },
  { id: "engineer", Component: S03Engineer },
  { id: "cloud", Component: S04Cloud },
  { id: "builder", Component: S05Builder },
  { id: "frontier", Component: S06Frontier, matchOut: true },
  { id: "signature", Component: S07Signature, matchIn: true },
];

export const Film: React.FC = () => (
  <AbsoluteFill>
    <Backdrop />
    {SCENES.map(({ id, Component, exitScale, matchIn, matchOut }, i) => {
      const { from, duration } = scene(id);
      const last = i === SCENES.length - 1;
      const length = duration + (last ? 0 : OVERLAP_FRAMES);
      return (
        <Sequence key={id} name={id} from={from} durationInFrames={length}>
          <SceneShell duration={length} fadeIn={i > 0} fadeOut={!last} exitScale={exitScale} matchIn={matchIn} matchOut={matchOut}>
            <Component />
          </SceneShell>
        </Sequence>
      );
    })}
    <FilmFinish />
    <Audio src={staticFile("audio/soundtrack.wav")} />
  </AbsoluteFill>
);
