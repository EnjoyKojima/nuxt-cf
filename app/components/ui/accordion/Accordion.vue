<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Accordion as AccordionPrimitive } from 'radix-vue'

const props = defineProps<{
  type?: 'single' | 'multiple'
  collapsible?: boolean
  defaultValue?: string | string[]
  modelValue?: string | string[]
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | string[]]
}>()
</script>

<template>
  <AccordionPrimitive
    :type="type"
    :default-value="defaultValue"
    :model-value="modelValue"
    :collapsible="collapsible"
    @update:model-value="emit('update:modelValue', $event)"
    :class="cn('space-y-1', props.class)"
  >
    <slot />
  </AccordionPrimitive>
</template>