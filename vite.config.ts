import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig, PluginOption } from "vite";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins: PluginOption[] = [
    react(),
    svgr(),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/**.{ts,tsx}"',
        useFlatConfig: true,
        dev: {
          logLevel: ["error", "warning"],
        },
      },
    }),
    visualizer({
      emitFile: true,
      brotliSize: true,
      template: "treemap",
      filename: "stats.html",
    }),
  ];

  if (mode === "development") {
    plugins.push(basicSsl());
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    server: {
      open: true,
    },
    build: {
      sourcemap: true,
      reportCompressedSize: false,
    },
  };
});
