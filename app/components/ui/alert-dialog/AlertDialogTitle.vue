<script setup lang="ts">
import { AlertDialog as AlertDialogPrimitive } from 'radix-vue'
</script>

<template>
  <AlertDialogPrimitive.Title
    :class="cn('text-lg font-semibold', props.class)"
  >
    <slot />
  </AlertDialogPrimitive.Title>
</template>