// https://astro.build/config
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import image from "@astrojs/image";

export default defineConfig({
  integrations: [preact(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});