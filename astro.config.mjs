// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://thericetour.com',
  trailingSlash: 'never',
  output: 'server',

  redirects: {},

  adapter: cloudflare({
    imageService: 'cloudflare',
    prerenderEnvironment: 'node',
    platformProxy: {
      enabled: true
    }
  }),

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-dom/client',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        '@tiptap/react',
        '@tiptap/react/menus',
        '@tiptap/starter-kit',
        '@tiptap/extension-placeholder',
        '@tiptap/extension-link',
        '@tiptap/extension-table',
        '@tiptap/extension-table-row',
        '@tiptap/extension-table-cell',
        '@tiptap/extension-table-header',
        '@tiptap/extension-youtube',
        '@tiptap/extension-text-align',
        '@tiptap/extension-underline',
        'browser-image-compression',
        'slugify'
      ]
    },
    build: {
      chunkSizeWarningLimit: 1500
    },
    server: {
      watch: {
        ignored: ['**/.wrangler/**']
      }
    }
  },

  integrations: [
    react(),
  ]
});