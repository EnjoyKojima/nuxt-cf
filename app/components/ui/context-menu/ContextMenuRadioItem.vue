<script setup lang="ts">
import { ContextMenu as ContextMenuPrimitive } from 'radix-vue'
import { Circle } from 'lucide-vue-next'
</script>

<template>
  <ContextMenuPrimitive.RadioItem
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
        <Circle class="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    <slot />
  </ContextMenuPrimitive.RadioItem>
</template>