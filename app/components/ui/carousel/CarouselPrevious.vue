<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'
import { useCarouselContext } from './use-carousel'

const { api } = useCarouselContext()

const props = withDefaults(
  defineProps<{
    variant?: 'default' | 'outline' | 'ghost'
    class?: string
  }>(),
  {
    variant: 'outline',
  },
)
</script>

<template>
  <button
    type="button"
    :class="
      cn(
        'absolute left-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-foreground',
        props.variant === 'default' && 'bg-background',
        props.variant === 'outline' && 'border border-border bg-background hover:bg-accent',
        props.variant === 'ghost' && 'hover:bg-accent',
        !api.canScrollPrev.value && 'invisible opacity-0',
        props.class,
      )
    "
    @click="api.scrollPrev()"
    aria-label="Previous slide"
  >
    <ChevronLeft class="h-4 w-4" />
  </button>
</template>