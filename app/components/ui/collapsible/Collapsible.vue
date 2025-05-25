<script setup lang="ts">
import { Collapsible as CollapsiblePrimitive } from 'radix-vue'
</script>

<template>
  <CollapsiblePrimitive v-bind="$attrs">
    <slot />
  </CollapsiblePrimitive>
</template>