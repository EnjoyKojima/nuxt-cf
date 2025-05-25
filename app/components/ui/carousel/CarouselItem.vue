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
        'min-w-0 shrink-0 grow-0 basis-full',
        api.orientation.value === 'horizontal' ? 'pl-4 first:pl-0' : 'pt-4 first:pt-0',
        props.class,
      )
    "
    role="group"
    aria-roledescription="slide"
  >
    <slot />
  </div>
</template>