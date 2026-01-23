import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://your-employee-style.pages.dev', // Update with your actual Cloudflare Pages URL
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    tailwind()
  ]
});
