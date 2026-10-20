import { useVideoConfig } from "remotion";

/**
 * Layout helper shared by every scene. `u` is a unit that maps 1080 px of the
 * short side to 1, so sizes written for the 1920x1080 cut scale cleanly into
 * the 1080x1920 vertical cut.
 */
export const useLayout = () => {
  const { width, height } = useVideoConfig();
  const vertical = height > width;
  const u = Math.min(width, height) / 1080;
  return { width, height, vertical, u, cx: width / 2, cy: height / 2 };
};
