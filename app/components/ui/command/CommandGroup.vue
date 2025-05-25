<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineProps<{
  heading?: string
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="cn('overflow-hidden p-1 text-foreground', props.class)"
    cmdk-group=""
  >
    <div v-if="heading" :class="cn('px-2 py-1.5 text-xs font-medium text-muted-foreground')" cmdk-group-heading="">
      {{ heading }}
    </div>
    <slot />
  </div>
</template>