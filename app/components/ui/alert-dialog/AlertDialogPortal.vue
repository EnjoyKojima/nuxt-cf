<script setup lang="ts">
import { AlertDialog as AlertDialogPrimitive } from 'radix-vue'
</script>

<template>
  <AlertDialogPrimitive.Portal>
    <div
      :class="cn('fixed inset-0 z-50 flex items-end justify-center sm:items-center', props.class)"
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <slot />
      </AlertDialogContent>
    </div>
  </AlertDialogPrimitive.Portal>
</template>

<script lang="ts">
import AlertDialogContent from './AlertDialogContent.vue'
import AlertDialogOverlay from './AlertDialogOverlay.vue'
</script>