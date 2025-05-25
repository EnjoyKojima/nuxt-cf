<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('mb-1 flex items-center text-sm', props.class)">
    <slot />
  </div>
</template>