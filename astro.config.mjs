// @ts-check
import { defineConfig } from "astro/config";

import partytown from "@astrojs/partytown";

import relativeLinks from "astro-relative-links";

import tailwindcss from "@tailwindcss/vite";

import devtoolsJson from "vite-plugin-devtools-json";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    output: "static",

    image: {
        layout: "constrained",
    },

    integrations: [partytown(), relativeLinks(), mdx()],

    vite: {
        plugins: [tailwindcss(), devtoolsJson()],
    },
});