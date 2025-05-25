<script setup lang="ts">
import { ContextMenu as ContextMenuPrimitive } from 'radix-vue'
</script>

<template>
  <ContextMenuPrimitive.Root v-bind="$attrs">
    <slot />
  </ContextMenuPrimitive.Root>
</template>