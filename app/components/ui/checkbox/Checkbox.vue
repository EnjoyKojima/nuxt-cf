<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { Checkbox as CheckboxPrimitive } from 'radix-vue'
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue'

defineProps<
  CheckboxRootProps & {
    class?: string
  }
>()

const emit = defineEmits<CheckboxRootEmits>()
</script>

<template>
  <CheckboxPrimitive
    :class="
      cn(
        'peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        props.class,
      )
    "
    v-bind="props"
    @update:checked="emit('update:checked', $event)"
  >
    <CheckboxPrimitive.Indicator
      :class="cn('flex items-center justify-center text-current')"
    >
      <Check class="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive>
</template>