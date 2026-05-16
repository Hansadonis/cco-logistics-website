// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    // Optimisation des images par défaut
    domains: ['www.ccologistics.com'],
    remotePatterns: [
      { protocol: 'https' }
    ]
  },
  site: 'https://www.ccologistics.com',
});