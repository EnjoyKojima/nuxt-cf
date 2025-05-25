<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Check, ChevronsUpDown } from 'lucide-vue-next'
import type { PopoverProps } from 'radix-vue'
import { PopoverAnchor } from 'radix-vue'

export interface Option {
  label: string
  value: string
  disabled?: boolean
}

const props = withDefaults(defineProps<{
  modelValue?: string
  options: Option[]
  placeholder?: string
  displayValue?: (selectedOption: Option) => string
  popoverProps?: PopoverProps
  name?: string
  disabled?: boolean
  class?: string
}>(), {
  placeholder: 'Select an option',
  displayValue: (option: Option) => option.label,
})

const emit = defineEmits(['update:modelValue'])

const popoverOpen = ref(false)
const searchQuery = ref('')
const searchRef = ref<HTMLInputElement | null>(null)

const selectedOption = computed(() => {
  return props.options.find(option => option.value === props.modelValue)
})

const filteredOptions = computed(() => {
  if (!searchQuery.value)
    return props.options

  return props.options.filter((option) => {
    return option.label.toLowerCase().includes(searchQuery.value.toLowerCase())
  })
})

function selectOption(option: Option) {
  if (option.disabled)
    return

  emit('update:modelValue', option.value)
  popoverOpen.value = false
  searchQuery.value = ''
}

// Clear the search query when the popover closes
watch(() => popoverOpen.value, (open) => {
  if (!open)
    searchQuery.value = ''
})

// Focus the search input when the popover opens
watch(() => popoverOpen.value, (open) => {
  if (open) {
    nextTick(() => {
      searchRef.value?.focus()
    })
  }
})
</script>

<template>
  <div :class="cn('relative', props.class)">
    <Popover v-bind="popoverProps" v-model:open="popoverOpen">
      <PopoverAnchor as-child>
        <div
          :class="
            cn(
              'relative flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
              !selectedOption && 'text-muted-foreground',
            )
          "
          aria-expanded="popoverOpen"
          :aria-disabled="props.disabled"
          role="combobox"
          class="cursor-pointer"
          :tabindex="props.disabled ? -1 : 0"
          @click="!props.disabled && (popoverOpen = !popoverOpen)"
          @keydown.enter.prevent="popoverOpen = !popoverOpen"
          @keydown.space.prevent="popoverOpen = !popoverOpen"
        >
          <span class="flex-1 text-left">
            {{ selectedOption ? props.displayValue(selectedOption) : props.placeholder }}
          </span>
          <ChevronsUpDown class="ml-1 h-4 w-4 shrink-0 opacity-50" />
        </div>
      </PopoverAnchor>

      <PopoverContent
        class="w-[--radix-popover-trigger-width] p-0"
        @after-leave="searchQuery = ''"
      >
        <Command class="overflow-hidden rounded-md">
          <div class="px-2 pt-2">
            <CommandInput
              v-model="searchQuery"
              ref="searchRef"
              :placeholder="`Search ${props.placeholder.toLowerCase()}...`"
              class="h-9"
            />
          </div>
          <CommandEmpty v-if="filteredOptions.length === 0" class="py-6 text-center text-sm">
            No options found.
          </CommandEmpty>
          <CommandList v-if="filteredOptions.length > 0">
            <CommandGroup class="max-h-[300px] overflow-auto">
              <CommandItem
                v-for="option in filteredOptions"
                :key="option.value"
                :disabled="option.disabled"
                :value="option.value"
                :class="cn(
                  'cursor-pointer py-2',
                  option.disabled && 'text-muted-foreground',
                )"
                @select="selectOption(option)"
              >
                <Check
                  :class="cn('mr-2 h-4 w-4', props.modelValue === option.value ? 'opacity-100' : 'opacity-0')"
                />
                {{ option.label }}
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    <input
      v-if="name"
      type="hidden"
      :name="name"
      :value="props.modelValue"
    />
  </div>
</template>

<script>
import { Popover, PopoverContent } from '../popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../command'
</script>