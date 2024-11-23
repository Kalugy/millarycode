import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://growvyn.com/', // Replace with your actual domain
      routes: ['/'], // Only the root route
    }),
  ],
});