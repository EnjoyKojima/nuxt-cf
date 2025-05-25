<script setup lang="ts">
import { CollapsibleTrigger as CollapsibleTriggerPrimitive } from 'radix-vue'
</script>

<template>
  <CollapsibleTriggerPrimitive
    :class="cn('', props.class)"
  >
    <slot />
  </CollapsibleTriggerPrimitive>
</template>