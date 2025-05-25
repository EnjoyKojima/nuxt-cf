<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <nav
    :class="cn('flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5', props.class)"
  >
    <ol class="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
      <slot />
    </ol>
  </nav>
</template>