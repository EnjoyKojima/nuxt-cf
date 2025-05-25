import { defineConfig } from 'postcss-load-config'
import postcssImport from 'postcss-import'

export default defineConfig({
  plugins: {
    'postcss-import': {},
    '@tailwindcss/postcss': {},
  },
})