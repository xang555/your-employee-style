import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'http://localhost:4321',
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  server: {
    host: true, // Listen on all interfaces (0.0.0.0)
    port: 4321
  },
  integrations: [
    tailwind()
  ]
});
