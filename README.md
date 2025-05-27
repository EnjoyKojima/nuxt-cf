# Nuxt CF - Nuxt.js Starter for Cloudflare Workers

A modern, feature-rich starter template for building Nuxt.js applications deployed on Cloudflare Workers. This template combines the power of Nuxt 3 with the global edge network of Cloudflare, providing a fast, reliable, and scalable foundation for your web applications.

## Features

- [Nuxt 3](https://nuxt.com/docs/guide) - The intuitive Vue framework
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) - Deploy serverless apps to Cloudflare's global network
- [shadcn-vue](https://www.shadcn-vue.com/docs/introduction.html) - Beautifully designed components built with Radix UI and Tailwind CSS
- [TailwindCSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety for your JavaScript
- [ESLint](https://eslint.org/) - Linting for JavaScript and TypeScript
- Built-in dark mode support

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [pnpm](https://pnpm.io/) (v9 or later)
- [Cloudflare account](https://dash.cloudflare.com/sign-up) (for deployment)

## Setup

```bash
# Install dependencies
pnpm install
```

## Development

```bash
# Start the development server
pnpm dev
```

The application will be available at `http://localhost:3000`.

## Building and Preview

```bash
# Build the application
pnpm build

# Preview the built application locally using Wrangler
pnpm preview
```

## Deployment

```bash
# Deploy to Cloudflare Workers
pnpm deploy
```

This command builds your application and deploys it to Cloudflare Workers.

## Project Structure

- `app/` - Main application code
  - `components/` - Vue components including shadcn UI components
  - `layouts/` - Layout components
  - `pages/` - Application pages and routes
  - `assets/` - Static assets and CSS
- `public/` - Public assets
- `nuxt.config.ts` - Nuxt configuration
- `wrangler.jsonc` - Cloudflare Workers configuration
- `tailwind.config.js` - TailwindCSS configuration

## Customization

You can customize this template by:

1. Modifying the UI components in `app/components/ui`
2. Updating the Tailwind theme in `tailwind.config.js`
3. Adjusting the Cloudflare Workers settings in `wrangler.jsonc`
4. Adding new pages in `app/pages`

## License

MIT
