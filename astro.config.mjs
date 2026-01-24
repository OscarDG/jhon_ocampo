// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig({

  integrations: [react()],

  adapter: node({
    mode: 'standalone',
  }),

  vite: {
    plugins: [tailwindcss()]
  },

  experimental: {
    svgo: true
  },
  
});