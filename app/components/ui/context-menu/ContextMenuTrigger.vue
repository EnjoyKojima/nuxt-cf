<script setup lang="ts">
import { ContextMenu as ContextMenuPrimitive } from 'radix-vue'
</script>

<template>
  <ContextMenuPrimitive.Trigger v-bind="$attrs" :class="props.class">
    <slot />
  </ContextMenuPrimitive.Trigger>
</template>