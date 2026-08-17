import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.ammunition.media',
  output: 'static',
  build: {
    format: 'directory',
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
