<template>
  <div class="flex flex-col items-center justify-center gap-6">
    <Card class="w-full max-w-md border shadow-sm">
      <CardHeader>
        <CardTitle>Nuxt CF Template</CardTitle>
        <CardDescription>
          A Nuxt.js starter template for Cloudflare Workers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p class="mb-4 text-muted-foreground">
          This is a template repository designed to help you quickly start new Nuxt.js projects deployed on Cloudflare Workers.
        </p>
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <Icon name="ic:baseline-check" class="text-green-500" />
            <span>Pre-configured for Cloudflare deployment</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="ic:baseline-check" class="text-green-500" />
            <span>UI components with shadcn/ui</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="ic:baseline-check" class="text-green-500" />
            <span>TailwindCSS styling</span>
          </div>
        </div>
      </CardContent>
      <CardFooter class="flex justify-between">
        <Button variant="outline">
          <Icon name="ic:baseline-code" class="mr-2" />
          View Code
        </Button>
        <Button>
          <Icon name="ic:baseline-play-arrow" class="mr-2" />
          Get Started
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>