<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Search } from 'lucide-vue-next'
import { computed, ref, watch } from 'vue'

const props = defineProps<{
  placeholder?: string
  modelValue?: string
  disabled?: boolean
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['update:modelValue'])

const input = ref<HTMLInputElement | null>(null)
const value = computed({
  get: () => props.modelValue ?? '',
  set: (value: string) => emit('update:modelValue', value),
})

watch(() => props.modelValue, (newValue) => {
  if (newValue === undefined || newValue === null)
    value.value = ''
})

defineExpose({
  focus: () => input.value?.focus(),
})
</script>

<template>
  <div
    :class="cn('flex items-center border-b px-3', props.class)"
    cmdk-input-wrapper=""
  >
    <Search class="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <input
      ref="input"
      v-model="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="cn('flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50', props.class)"
      cmdk-input=""
    />
  </div>
</template>