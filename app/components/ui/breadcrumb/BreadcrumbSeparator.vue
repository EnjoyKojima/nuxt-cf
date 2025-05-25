<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { ChevronRight } from 'lucide-vue-next'

defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <li :class="cn('inline-flex items-center', props.class)">
    <ChevronRight class="h-3 w-3" />
  </li>
</template>