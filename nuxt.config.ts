import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    'nitro-cloudflare-dev',
    '@nuxt/eslint',
    'shadcn-nuxt',
  ],
  devtools: { enabled: true },

  css: ['~/assets/css/tailwind.css'],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',

  nitro: {
    preset: 'cloudflare_module',
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
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
})
