<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="cn('max-h-[300px] overflow-y-auto overflow-x-hidden', props.class)"
    cmdk-list=""
  >
    <slot />
  </div>
</template>