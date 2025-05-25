<script setup lang="ts">
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { Calendar } from '../calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import { Button } from '../button'
import { cn } from '../../utils/shadcn'
import { format } from 'date-fns'
import { computed, ref, watch } from 'vue'

interface DatePickerProps {
  modelValue?: Date
  defaultDate?: Date
  placeholder?: string
  calendarProps?: Record<string, any>
  class?: string
}

const props = withDefaults(defineProps<DatePickerProps>(), {
  placeholder: 'Pick a date',
})

const emit = defineEmits(['update:modelValue'])

const date = ref<Date | undefined>(props.modelValue ?? props.defaultDate)

watch(() => props.modelValue, (value) => {
  if (value !== date.value)
    date.value = value
})

function updateDate(newDate: Date) {
  date.value = newDate
  emit('update:modelValue', newDate)
}

const formattedDate = computed(() => {
  return date.value ? format(date.value, 'PPP') : ''
})
</script>

<template>
  <div :class="props.class">
    <Popover>
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          :class="cn(
            'w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )"
        >
          <CalendarIcon class="mr-2 h-4 w-4" />
          {{ formattedDate || props.placeholder }}
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0">
        <Calendar
          v-model="date"
          initialFocus
          mode="single"
          v-bind="calendarProps"
          @update:model-value="updateDate"
        />
      </PopoverContent>
    </Popover>
  </div>
</template>