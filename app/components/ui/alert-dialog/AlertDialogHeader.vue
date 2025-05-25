<script setup lang="ts">
import { AlertDialog as AlertDialogPrimitive } from 'radix-vue'
</script>

<template>
  <AlertDialogPrimitive.Header
    :class="cn('flex flex-col space-y-2 text-center sm:text-left', props.class)"
  >
    <slot />
  </AlertDialogPrimitive.Header>
</template>