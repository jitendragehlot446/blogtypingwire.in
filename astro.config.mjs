import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.typingwire.in',
  integrations: [
    mdx(),
    sitemap(),
    {
      name: 'copy-sitemap',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          try {
            const sitemap0 = new URL('sitemap-0.xml', dir);
            const sitemap = new URL('sitemap.xml', dir);
            if (fs.existsSync(sitemap0)) {
              fs.copyFileSync(sitemap0, sitemap);
            }
          } catch (e) {
            console.error('Sitemap copy hook error:', e);
          }
        },
      },
    },
  ],
});
