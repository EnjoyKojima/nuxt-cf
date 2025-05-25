<script setup lang="ts">
import { AlertDialog as AlertDialogPrimitive } from 'radix-vue'
</script>

<template>
  <AlertDialogPrimitive.Root v-bind="$attrs">
    <slot />
  </AlertDialogPrimitive.Root>
</template>