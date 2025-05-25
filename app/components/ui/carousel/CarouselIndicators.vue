<script setup lang="ts">
import { useCarouselContext } from './use-carousel'

const { api } = useCarouselContext()

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
  <div
    :class="
      cn(
        'absolute flex h-8 items-center justify-center',
        api.orientation.value === 'horizontal'
          ? 'inset-x-0 bottom-0 left-0 right-0'
          : 'inset-y-0 left-0 right-auto top-0 h-full w-12 flex-col',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>