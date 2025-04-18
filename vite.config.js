import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: procees.env.VITE_BASE-PATH ||"/portfolio-website",
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
