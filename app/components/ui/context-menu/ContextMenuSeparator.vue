<script setup lang="ts">
import { ContextMenu as ContextMenuPrimitive } from 'radix-vue'
</script>

<template>
  <ContextMenuPrimitive.Separator :class="cn('-mx-1 my-1 h-px bg-border', props.class)" />
</template>