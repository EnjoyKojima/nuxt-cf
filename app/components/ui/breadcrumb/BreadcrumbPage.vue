<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineProps<{
  class?: HTMLAttributes['class']
  asChild?: boolean
}>()
</script>

<template>
  <li
    v-if="!asChild"
    :class="cn('font-normal text-foreground', props.class)"
    aria-current="page"
  >
    <slot />
  </li>
  <slot v-else />
</template>