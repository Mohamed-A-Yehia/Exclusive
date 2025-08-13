import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { hmr: { overlay: true } },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
