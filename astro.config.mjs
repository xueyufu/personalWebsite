import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { check } from '@astrojs/check';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site: 'https://your-portfolio.vercel.app',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
