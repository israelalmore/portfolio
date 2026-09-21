// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// GitHub Pages: https://israelalmore.github.io/portfolio
export default defineConfig({
  site: "https://israelalmore.github.io",
  base: "/portfolio",
  trailingSlash: "ignore",
  integrations: [icon()],
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
