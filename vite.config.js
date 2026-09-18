import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // nombre exacto del repo en GitHub: israelalmore/portfolio
});
