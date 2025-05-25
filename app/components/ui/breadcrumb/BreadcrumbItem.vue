<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <li :class="cn('inline-flex items-center gap-1.5', props.class)">
    <slot />
  </li>
</template>