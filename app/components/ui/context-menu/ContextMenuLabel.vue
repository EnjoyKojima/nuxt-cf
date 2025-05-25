<script setup lang="ts">
import { ContextMenu as ContextMenuPrimitive } from 'radix-vue'
</script>

<template>
  <ContextMenuPrimitive.Label
    :class="
      cn('px-2 py-1.5 text-sm font-semibold', props.class)
    "
  >
    <slot />
  </ContextMenuPrimitive.Label>
</template>