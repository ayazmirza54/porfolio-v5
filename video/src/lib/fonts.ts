import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

const faces: { family: string; file: string; weight: string }[] = [
  { family: "Inter", file: "Inter-Regular.otf", weight: "400" },
  { family: "Inter", file: "Inter-Medium.otf", weight: "500" },
  { family: "Inter", file: "Inter-SemiBold.otf", weight: "600" },
  { family: "Inter", file: "Inter-Bold.otf", weight: "700" },
  { family: "Inter Display", file: "InterDisplay-Light.otf", weight: "300" },
  { family: "Inter Display", file: "InterDisplay-Bold.otf", weight: "700" },
  { family: "Inter Display", file: "InterDisplay-ExtraBold.otf", weight: "800" },
  { family: "Inter Display", file: "InterDisplay-Black.otf", weight: "900" },
  { family: "JetBrains Mono", file: "JetBrainsMono-Regular.ttf", weight: "400" },
  { family: "JetBrains Mono", file: "JetBrainsMono-Medium.ttf", weight: "500" },
  { family: "JetBrains Mono", file: "JetBrainsMono-Bold.ttf", weight: "700" },
];

let loaded = false;
export const loadFonts = () => {
  if (loaded) return;
  loaded = true;
  for (const f of faces) {
    loadFont({ family: f.family, url: staticFile(`fonts/${f.file}`), weight: f.weight });
  }
};
