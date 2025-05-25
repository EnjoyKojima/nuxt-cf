<script setup lang="ts">
import type { AccordionContentEmits, AccordionContentProps } from 'radix-vue'
import { AccordionContent as AccordionContentPrimitive } from 'radix-vue'

defineProps<AccordionContentProps & { class?: string }>()
defineEmits<AccordionContentEmits>()
</script>

<template>
  <AccordionContentPrimitive
    :class="cn('overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down', props.class)"
  >
    <div class="pb-4 pt-0">
      <slot />
    </div>
  </AccordionContentPrimitive>
</template>