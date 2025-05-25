<script setup lang="ts">
import { AspectRatio as AspectRatioPrimitive } from 'radix-vue'

defineProps<{
  ratio?: number
  class?: string
}>()
</script>

<template>
  <AspectRatioPrimitive :ratio="ratio" :class="cn('overflow-hidden', props.class)">
    <slot />
  </AspectRatioPrimitive>
</template>