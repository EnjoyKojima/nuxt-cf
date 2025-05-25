<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="cn('flex items-center p-1 text-muted-foreground', props.class)"
    cmdk-separator=""
  >
    <slot />
  </div>
</template>