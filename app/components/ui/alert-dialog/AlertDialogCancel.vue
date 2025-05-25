<script setup lang="ts">
import { AlertDialog as AlertDialogPrimitive } from 'radix-vue'
import { buttonVariants } from '../button'

const props = withDefaults(
  defineProps<{
    class?: string
  }>(),
  {
    class: '',
  },
)
</script>

<template>
  <AlertDialogPrimitive.Cancel
    :class="cn(buttonVariants({ variant: 'outline' }), 'mt-2 sm:mt-0', props.class)"
  >
    <slot />
  </AlertDialogPrimitive.Cancel>
</template>