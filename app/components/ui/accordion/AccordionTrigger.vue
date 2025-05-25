<script setup lang="ts">
import type { AccordionTriggerEmits, AccordionTriggerProps } from 'radix-vue'
import { AccordionTrigger as AccordionTriggerPrimitive } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'

defineProps<AccordionTriggerProps & { class?: string }>()
defineEmits<AccordionTriggerEmits>()
</script>

<template>
  <AccordionTriggerPrimitive :class="cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180', props.class)">
    <slot />
    <ChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
  </AccordionTriggerPrimitive>
</template>