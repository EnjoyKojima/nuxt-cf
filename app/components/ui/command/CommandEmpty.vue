<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="cn('py-6 text-center text-sm', props.class)"
    cmdk-empty=""
  >
    <slot />
  </div>
</template>