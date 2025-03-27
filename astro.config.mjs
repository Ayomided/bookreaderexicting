// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import tailwindcss from "@tailwindcss/vite";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()])],

  vite: {
    plugins: [tailwindcss()],
  },
});
