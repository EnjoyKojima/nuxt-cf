<script setup lang="ts">
import type { AccordionItemEmits, AccordionItemProps } from 'radix-vue'
import { AccordionItem as AccordionItemPrimitive } from 'radix-vue'

defineProps<AccordionItemProps & { class?: string }>()
defineEmits<AccordionItemEmits>()
</script>

<template>
  <AccordionItemPrimitive
    :class="cn('border-b', props.class)"
  >
    <slot />
  </AccordionItemPrimitive>
</template>