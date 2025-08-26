import {
  defineConfig,
  //  loadEnv
} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default () =>
  // { mode }: { mode: "development" | "production" | string }
  {
    // const env = loadEnv(mode, process.cwd(), "VITE_");

    return defineConfig({
      plugins: [react()],
      resolve: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@styles": path.resolve(__dirname, "src/styles"),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@use "@styles/scss/main.scss" as *;`,
          },
        },
      },
      // server: {
      //   port: Number(env.VITE_PORT) || 50000,
      // },
    });
  };
