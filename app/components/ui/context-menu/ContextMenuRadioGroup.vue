<script setup lang="ts">
import { ContextMenu as ContextMenuPrimitive } from 'radix-vue'
</script>

<template>
  <ContextMenuPrimitive.RadioGroup :class="props.class" v-bind="$attrs">
    <slot />
  </ContextMenuPrimitive.RadioGroup>
</template>