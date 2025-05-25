<script setup lang="ts">
import { useCarouselContext } from './use-carousel'

const { api } = useCarouselContext()

const props = withDefaults(
  defineProps<{
    orientation?: 'horizontal' | 'vertical'
    class?: string
  }>(),
  {
    orientation: 'horizontal',
  },
)
</script>

<template>
  <div
    ref="api.contentRef"
    :class="
      cn(
        'relative overflow-hidden',
        props.orientation === 'horizontal'
          ? '-mx-4 px-4'
          : '-my-4 py-4',
        props.class,
      )
    "
    tabindex="0"
  >
    <slot />
  </div>
</template>