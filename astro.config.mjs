import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.desentupidorauniverso24hrs.com.br',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
