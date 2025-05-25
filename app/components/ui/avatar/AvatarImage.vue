<script setup lang="ts">
import { Avatar as AvatarPrimitive } from 'radix-vue'

defineProps<{
  src?: string
  alt?: string
  class?: string
}>()
</script>

<template>
  <AvatarPrimitive.Image
    :src="src"
    :alt="alt"
    :class="cn('aspect-square h-full w-full', props.class)"
  />
</template>