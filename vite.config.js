import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [],
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__dirname, "src/hotkeys.js"),
      fileName: "hotkeys",
      formats: ["es", "cjs"],
    }
  }
})