import { defineConfig } from "tsup";
import path from "path";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  injectStyle: true,
  esbuildOptions(options) {
    options.loader = {
      ".scss": "text", // SCSS를 JS 문자열로 가져오기
    };
    options.alias = {
      "@styles": path.resolve(__dirname, "src/styles"),
      "@components": path.resolve(__dirname, "src/components"),
    };
  },

  tsconfig: "./tsconfig.build.json",
});
