<script setup lang="ts">
import { AlertDialog as AlertDialogPrimitive } from 'radix-vue'
</script>

<template>
  <AlertDialogPrimitive.Footer
    :class="
      cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', props.class)
    "
  >
    <slot />
  </AlertDialogPrimitive.Footer>
</template>