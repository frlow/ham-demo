import { defineConfig } from 'astro/config';
import bun from 'astro-bun-adapter';

// https://astro.build/config
export default defineConfig({
  publicDir: "../common/public",
  output: "server",
  adapter: bun(),
  server: {
    host: "*"
  }
});
