<script setup lang="ts">
import { useCarouselContext } from './use-carousel'

const { api } = useCarouselContext()

defineProps<{
  index: number
  class?: string
}>()
</script>

<template>
  <button
    type="button"
    :class="
      cn(
        'relative h-2 w-2 rounded-full bg-muted ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        api.canScrollPrev.value && 'cursor-pointer',
        api.api.selectedIndex.value === index && 'bg-foreground',
        props.class,
      )
    "
    :aria-current="api.api.selectedIndex.value === index"
    :aria-label="`Go to slide ${index + 1}`"
    @click="api.scrollTo(index)"
  />
</template>