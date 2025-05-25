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
  <AlertDialogPrimitive.Action
    :class="cn(buttonVariants(), props.class)"
  >
    <slot />
  </AlertDialogPrimitive.Action>
</template>