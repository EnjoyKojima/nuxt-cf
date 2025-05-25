<script setup lang="ts">
import { ContextMenu as ContextMenuPrimitive } from 'radix-vue'
</script>

<template>
  <ContextMenuPrimitive.Group :class="props.class">
    <slot />
  </ContextMenuPrimitive.Group>
</template>