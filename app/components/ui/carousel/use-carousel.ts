import { computed, provide, ref, watch, type ComputedRef, type Ref } from 'vue'
import { useEmblaCarousel } from 'embla-carousel-vue'
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import { injectStrict } from '../../utils/inject'

type CarouselApi = {
  canScrollNext: ComputedRef<boolean>
  canScrollPrev: ComputedRef<boolean>
  scrollNext: () => void
  scrollPrev: () => void
  scrollTo: (index: number) => void
  selectedIndex: Ref<number>
  api?: EmblaCarouselType
}

const CAROUSEL_CONTEXT_KEY = Symbol('carousel')

export interface UseCarouselProps extends EmblaOptionsType {
  opts?: EmblaOptionsType
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

export function useCarousel({
  opts = {},
  orientation = 'horizontal',
  setApi,
}: UseCarouselProps = {}) {
  const [rootRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === 'horizontal' ? 'x' : 'y',
  })
  const selectedIndex = ref(0)
  const canScrollPrev = ref(false)
  const canScrollNext = ref(false)
  const orientationRef = ref(orientation)

  const onSelect = () => {
    selectedIndex.value = api.value?.selectedScrollSnap() || 0
    canScrollPrev.value = api.value?.canScrollPrev() || false
    canScrollNext.value = api.value?.canScrollNext() || false
  }

  const scrollPrev = () => {
    api.value?.scrollPrev()
  }

  const scrollNext = () => {
    api.value?.scrollNext()
  }

  const scrollTo = (index: number) => {
    api.value?.scrollTo(index)
  }

  const carouselApi = {
    selectedIndex,
    canScrollPrev,
    canScrollNext,
    scrollPrev,
    scrollNext,
    scrollTo,
    api: api.value,
  }

  watch(api, (newApi) => {
    if (!newApi)
      return

    carouselApi.api = newApi

    newApi.on('select', onSelect)
    onSelect()

    setApi?.(carouselApi)
  }, { immediate: true })

  provide(CAROUSEL_CONTEXT_KEY, {
    api: {
      ...carouselApi,
      orientation: orientationRef,
      rootRef,
      contentRef: ref<HTMLElement | null>(null),
    },
  })

  return {
    rootRef,
    contentRef: ref<HTMLElement | null>(null),
    orientation: orientationRef,
    ...carouselApi,
  }
}

export function useCarouselContext() {
  const context = injectStrict(CAROUSEL_CONTEXT_KEY)
  return context
}