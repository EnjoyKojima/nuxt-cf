// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['nitro-cloudflare-dev', '@nuxt/eslint', '@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  devtools: { enabled: true },
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
    componentDir: './components/ui',
  },
})
