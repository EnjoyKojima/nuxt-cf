<script setup lang="ts">
import { Avatar as AvatarPrimitive } from 'radix-vue'
</script>

<template>
  <AvatarPrimitive.Fallback
    :class="
      cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted',
        props.class,
      )
    "
  >
    <slot />
  </AvatarPrimitive.Fallback>
</template>