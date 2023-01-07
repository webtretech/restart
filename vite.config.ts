import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/trapcodeio/vite-plugin-ejs
    ViteEjsPlugin((viteConfig) => ({
      // viteConfig: the current vite resolved config
      env: viteConfig.env,
    })),

    // https://github.com/vitejs/vite-plugin-react
    react(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    sourcemap: true,
    reportCompressedSize: false,
  },
});
