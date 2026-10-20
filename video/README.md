# Ayaz Mirza: Cinematic Developer Introduction

A 67-second motion design film built in code with [Remotion](https://www.remotion.dev)
(React + SVG + Canvas). Everything is procedural: the typography, the particles, the
pipeline, the 3D cloud map and the soundtrack. The only external media are the project
screenshots and screen recording taken from this portfolio.

| Cut | Size | Output |
| --- | --- | --- |
| Landscape (primary) | 1920×1080, 60 fps, H.264 + AAC | `out/ayaz-mirza-intro-16x9.mp4` |
| Vertical (Reels / Status / LinkedIn mobile) | 1080×1920, 60 fps, H.264 + AAC | `out/ayaz-mirza-intro-9x16.mp4` |

## Story

| # | Scene | Time | Beat |
| --- | --- | --- | --- |
| 01 | The Boot Sequence | 0–7s | `$ whoami` → `ayaz_mirza` → **AYAZ MIRZA** |
| 02 | The Identity | 7–15s | Name shatters → **6+ YEARS** → ENGINEERING DATA AT SCALE, chaos → streams |
| 03 | The Engineer | 15–25s | RAW DATA → TRANSFORM → VALIDATE → DELIVER, **I TURN COMPLEXITY INTO SYSTEMS.** |
| 04 | The Cloud | 25–34s | 3D AWS / GCP / Azure topology, Associate Cloud Engineer |
| 05 | The Builder | 34–47s | One camera track: IntelliSketch, QuerySmith, UnixBot, EC2 Manager TUI |
| 06 | The AI Frontier | 47–56s | Code, apps and a neural net converge: **DATA × CLOUD × AI**, Gemini Agent Development |
| 07 | The Signature | 56–67s | `$ echo "Keep building."` → **AM.** → ayazmirza54.in |

## Quick start

```bash
cd video
npm install

npm run studio            # live preview / scrub in the browser
npm run audio             # regenerate public/audio/soundtrack.wav
npm run render            # audio + both MP4s into out/
npm run render:landscape  # 16:9 only
npm run render:vertical   # 9:16 only
```

To render with a Chromium you already have, instead of the one Remotion
downloads, set `REMOTION_BROWSER_EXECUTABLE`:

```bash
REMOTION_BROWSER_EXECUTABLE=/path/to/chrome-headless-shell npm run render
```

A full 60 fps render takes a while (3,600+ frames per cut). Add `--concurrency=<n>` to
the render scripts to use more CPU cores.

## Project layout

```
video/
├── remotion.config.ts        # codec, quality, browser settings
├── scripts/generate-audio.mjs# original synthesized score + SFX (no samples)
├── public/
│   ├── audio/soundtrack.wav  # generated
│   ├── fonts/                # Inter, Inter Display, JetBrains Mono (OFL)
│   ├── logos/                # AWS, GCP, Azure marks (from the portfolio)
│   ├── shots/                # real project screenshots + EC2 TUI recording
│   └── textures/grain.png    # film grain tile
└── src/
    ├── timeline.json         # ← single source of truth for timing (scenes, typing, sound cues)
    ├── Root.tsx              # the two compositions (16:9 and 9:16)
    ├── Film.tsx              # scene order, cross-dissolves, backdrop, audio
    ├── lib/                  # theme tokens, easing/spring helpers, layout units, fonts
    ├── components/           # CharReveal, Terminal, SceneShell, Backdrop, FrameCanvas, NameLockup
    └── scenes/               # S01Boot … S07Signature, one file per scene
```

## Editing

- **Timing.** Change scene boundaries, typed text and typing speed, or sound cues in
  `src/timeline.json`, then run `npm run audio`. Visuals and audio both read this
  file, so keystrokes, bass hits and whooshes stay in sync.
- **Copy.** Each scene's text lives at the top of its file in `src/scenes/`. For
  example, projects are in the `PROJECTS` array of `S05Builder.tsx`, and pipeline
  stages and tools are in `STAGES` and `TECH` of `S03Engineer.tsx`.
- **Colours and fonts.** Edit `src/lib/theme.ts`.
- **Vertical layout.** Every scene branches on `useLayout().vertical`. Sizes are
  written in units of `u`, where 1u is 1px of the 1080px short side, so both cuts
  share one codebase.

## Notes on content

All facts come from the portfolio (`src/constants.jsx`): 6+ years, Wipro, the
Aldermore Bank and Indonesian telecom engagements, the skills, the two Google Cloud
credentials and the projects. No client data is shown. The product overlays
(the triangle solved in IntelliSketch, the SQL from QuerySmith, the `find` command
from UnixBot) are illustrative recreations drawn over the real UI screenshots. The
EC2 Manager clip is the original recording, with its instance ID already masked.

The audio is original and synthesized in `scripts/generate-audio.mjs`, so it carries
no licensing constraints. The fonts are SIL Open Font License. The cloud provider
logos are trademarks of their owners and are used here only to name the platforms.
