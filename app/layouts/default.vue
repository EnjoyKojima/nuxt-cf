<template>
  <div class="flex min-h-screen flex-col">
    <!-- Header/Navbar -->
    <header class="border-b bg-background px-4 py-4 shadow-sm">
      <div class="container mx-auto flex items-center justify-between">
        <h1 class="text-xl font-semibold">
          Nuxt CF
        </h1>
        <nav class="flex gap-4">
          <NuxtLink to="/" class="text-foreground hover:text-primary">
            Home
          </NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto flex-1 p-4 md:p-6">
      <div class="mx-auto max-w-7xl">
        <slot />
      </div>
    </main>

    <!-- Footer -->
    <footer class="border-t bg-background px-4 py-6">
      <div class="container mx-auto text-center text-sm text-muted-foreground">
        &copy; {{ new Date().getFullYear() }} Nuxt CF
      </div>
    </footer>
  </div>
</template>
