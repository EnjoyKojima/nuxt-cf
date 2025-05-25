<script setup lang="ts">
import { useCarousel } from './use-carousel'

const carousel = useCarousel()
</script>

<template>
  <div
    ref="carousel.rootRef"
    :class="cn('relative', props.class)"
    role="region"
    aria-roledescription="carousel"
    v-bind="$attrs"
  >
    <slot :api="carousel" />
  </div>
</template>