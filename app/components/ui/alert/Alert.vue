<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface AlertProps
  extends HTMLAttributes,
    VariantProps<typeof alertVariants> {}

const props = withDefaults(defineProps<AlertProps>(), {
  variant: 'default',
})
</script>

<template>
  <div
    :class="cn(alertVariants({ variant: props.variant }), props.class)"
    role="alert"
  >
    <slot />
  </div>
</template>