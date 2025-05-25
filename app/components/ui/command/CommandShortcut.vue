<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="cn('overflow-hidden px-1 py-2 text-xs text-muted-foreground', props.class)"
    cmdk-shortcut=""
  >
    <slot />
  </div>
</template>