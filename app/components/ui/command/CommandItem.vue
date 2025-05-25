<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  value?: string
  disabled?: boolean
  onSelect?: (value: string) => void
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['select'])

function handleSelect() {
  if (props.disabled)
    return

  props.onSelect?.(props.value ?? '')
  emit('select', props.value)
}
</script>

<template>
  <div
    :class="
      cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class,
      )
    "
    :data-disabled="props.disabled || undefined"
    cmdk-item=""
    @click="handleSelect"
  >
    <slot />
  </div>
</template>