import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@icons": path.resolve(__dirname, "./src/icons"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@slices": path.resolve(__dirname, "./src/slices"),
    },
  },
});
