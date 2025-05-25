<script setup lang="ts">
import { ContextMenu as ContextMenuPrimitive } from 'radix-vue'
import { ChevronRight } from 'lucide-vue-next'
</script>

<template>
  <ContextMenuPrimitive.SubTrigger
    :class="
      cn(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
        props.class,
      )
    "
  >
    <slot />
    <ChevronRight class="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
</template>