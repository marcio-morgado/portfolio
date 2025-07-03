// @ts-check
import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';

import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
  integrations: [partytown(), relativeLinks()]
});