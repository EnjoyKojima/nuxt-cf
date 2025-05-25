// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    'nitro-cloudflare-dev',
    '@nuxt/eslint',
    'shadcn-nuxt',
    '@nuxt/icon',
  ],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',

  nitro: {
    preset: 'cloudflare_module',
  },

  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },

  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },

  css: ['~/app/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      'postcss-import': {},
      '@tailwindcss/postcss': {},
    },
  },

  vite: {
    css: {
      postcss: {
        plugins: {
          'postcss-import': {},
          '@tailwindcss/postcss': {},
        },
      },
    },
  },
})
