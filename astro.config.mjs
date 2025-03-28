// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import tailwindcss from "@tailwindcss/vite";
import keystatic from "@keystatic/astro";

import node from "@astrojs/node";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    react(),
    markdoc(),
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});