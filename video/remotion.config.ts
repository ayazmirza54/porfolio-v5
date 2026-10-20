import { Config } from "@remotion/cli/config";

// Output: H.264 MP4, high quality, 60 fps (fps is set on the compositions).
Config.setVideoImageFormat("jpeg");
Config.setJpegQuality(95);
Config.setCodec("h264");
Config.setCrf(16);
Config.setPixelFormat("yuv420p");
Config.setAudioCodec("aac");
Config.setOverwriteOutput(true);

// Use a locally installed Chromium if one is provided, instead of letting
// Remotion download its own headless shell.
if (process.env.REMOTION_BROWSER_EXECUTABLE) {
  Config.setBrowserExecutable(process.env.REMOTION_BROWSER_EXECUTABLE);
}
