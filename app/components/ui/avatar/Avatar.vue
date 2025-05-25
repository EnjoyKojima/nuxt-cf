<script setup lang="ts">
import { Avatar as AvatarPrimitive } from 'radix-vue'
</script>

<template>
  <AvatarPrimitive
    :class="cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', props.class)"
  >
    <slot />
  </AvatarPrimitive>
</template>