<script setup lang="ts">
import { AlertDialog as AlertDialogPrimitive } from 'radix-vue'
</script>

<template>
  <AlertDialogPrimitive.Trigger v-bind="$attrs">
    <slot />
  </AlertDialogPrimitive.Trigger>
</template>