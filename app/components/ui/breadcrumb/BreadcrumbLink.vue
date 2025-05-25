<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineProps<{
  href?: string
  class?: HTMLAttributes['class']
  asChild?: boolean
}>()
</script>

<template>
  <template v-if="!asChild">
    <a
      v-if="href"
      :href="href"
      :class="
        cn(
          'transition-colors hover:text-foreground',
          props.class
        )
      "
    >
      <slot />
    </a>
    <span v-else :class="props.class">
      <slot />
    </span>
  </template>
  <slot v-else />
</template>