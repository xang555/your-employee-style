import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import db from '@astrojs/db';

export default defineConfig({
  site: 'http://localhost:4321',
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    tailwind(),
    db()
  ]
});
