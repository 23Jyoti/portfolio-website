// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Option A: Comment out the base for local development
  // base: import.meta.env.VITE_BASE_PATH || "/portfolio-website",

  // Option B: Only apply base in production builds (more flexible)
  base: process.env.NODE_ENV === 'production' ? '/portfolio-website/' : '/',

  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});