<script setup lang="ts">
import { CollapsibleContent as CollapsibleContentPrimitive } from 'radix-vue'
</script>

<template>
  <CollapsibleContentPrimitive
    :class="cn('overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up', props.class)"
  >
    <slot />
  </CollapsibleContentPrimitive>
</template>