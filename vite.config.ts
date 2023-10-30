import react from "@vitejs/plugin-react";
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
        find: "@components",
        replacement: resolve(__dirname, "./src/components"),
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
  plugins: [react(), tsconfigPaths()],
});
