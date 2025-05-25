<script setup lang="ts">
import { ContextMenu as ContextMenuPrimitive } from 'radix-vue'
</script>

<template>
  <ContextMenuPrimitive.Sub v-bind="$attrs">
    <slot />
  </ContextMenuPrimitive.Sub>
</template>