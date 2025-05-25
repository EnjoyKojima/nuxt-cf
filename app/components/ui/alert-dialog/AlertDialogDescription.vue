<script setup lang="ts">
import { AlertDialog as AlertDialogPrimitive } from 'radix-vue'
</script>

<template>
  <AlertDialogPrimitive.Description
    :class="cn('text-sm text-muted-foreground', props.class)"
  >
    <slot />
  </AlertDialogPrimitive.Description>
</template>