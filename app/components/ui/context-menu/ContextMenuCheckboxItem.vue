<script setup lang="ts">
import { ContextMenu as ContextMenuPrimitive } from 'radix-vue'
import { Check } from 'lucide-vue-next'

defineProps<{
  checked?: boolean
  class?: string
}>()
</script>

<template>
  <ContextMenuPrimitive.CheckboxItem
    v-bind="$attrs"
    :class="
      cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50',
        props.class,
      )
    "
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check class="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    <slot />
  </ContextMenuPrimitive.CheckboxItem>
</template>