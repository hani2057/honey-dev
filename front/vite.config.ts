import react from "@vitejs/plugin-react";
import jotaiDebugLabel from "jotai/babel/plugin-debug-label";
import jotaiReactRefresh from "jotai/babel/plugin-react-refresh";
import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@apis",
        replacement: resolve(__dirname, "./src/apis"),
      },
      {
        find: "@assets",
        replacement: resolve(__dirname, "./src/assets"),
      },
      {
        find: "@components",
        replacement: resolve(__dirname, "./src/components"),
      },
      {
        find: "@features",
        replacement: resolve(__dirname, "./src/features"),
      },
      {
        find: "@lib",
        replacement: resolve(__dirname, "./src/lib"),
      },
      {
        find: "@pages",
        replacement: resolve(__dirname, "./src/pages"),
      },
      {
        find: "@router",
        replacement: resolve(__dirname, "./src/router"),
      },
      {
        find: "@store",
        replacement: resolve(__dirname, "./src/store"),
      },
      {
        find: "@styles",
        replacement: resolve(__dirname, "./src/styles"),
      },
      {
        find: "@types",
        replacement: resolve(__dirname, "./src/types"),
      },
    ],
  },
  plugins: [
    react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
    tsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("axios")) {
            return "@networking-vendor";
          }
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/")
          ) {
            return "@react-vendor";
          }
          if (id.includes("react-icons")) {
            return "@icon-vender";
          }
          if (id.includes("rehype") || id.includes("github-slugger")) {
            return "@toc-vendor";
          }
        },
      },
    },
  },
});
