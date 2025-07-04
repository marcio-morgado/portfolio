// @ts-check
import { defineConfig } from "astro/config";

import partytown from "@astrojs/partytown";

import relativeLinks from "astro-relative-links";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [partytown(), relativeLinks()],
    vite: {
        plugins: [tailwindcss()],
    },
});
