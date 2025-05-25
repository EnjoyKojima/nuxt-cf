<script setup lang="ts">
import { type DateOptions, getLocalTimeZone, parseDate, createCalendar, toZoned } from '@internationalized/date'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { computed, ref, useAttrs, watch } from 'vue'

export interface CalendarProps {
  modelValue?: Date
  defaultValue?: Date
  mode?: 'single' | 'multiple' | 'range'
  class?: string
  locale?: string
  options?: DateOptions
  minValue?: Date
  maxValue?: Date
  disabledDates?: Date[] | ((date: Date) => boolean)
  pageBoundaries?: [Date?, Date?]
}

const props = withDefaults(defineProps<CalendarProps>(), {
  mode: 'single',
  locale: 'en',
})

const emit = defineEmits(['update:modelValue'])

const attrs = useAttrs()

const internalValue = ref(props.modelValue ?? props.defaultValue)

const calendar = createCalendar({ locale: props.locale })

watch(() => props.modelValue, (value) => {
  if (value && value !== internalValue.value)
    internalValue.value = value
})

const isSameDay = (date1: Date, date2: Date) => {
  return date1.getDate() === date2.getDate()
    && date1.getMonth() === date2.getMonth()
    && date1.getFullYear() === date2.getFullYear()
}

const isDateDisabled = (date: Date) => {
  if (props.minValue && date < props.minValue)
    return true

  if (props.maxValue && date > props.maxValue)
    return true

  if (props.disabledDates) {
    if (Array.isArray(props.disabledDates))
      return props.disabledDates.some(disabledDate => isSameDay(disabledDate, date))

    if (typeof props.disabledDates === 'function')
      return props.disabledDates(date)
  }

  return false
}

const internalCurrentDate = ref(internalValue.value || new Date())
const internalCurrentMonth = ref(internalCurrentDate.value.getMonth())
const internalCurrentYear = ref(internalCurrentDate.value.getFullYear())

const isCurrentDateSelectable = computed(() => {
  if (!props.pageBoundaries)
    return true

  const [minDate, maxDate] = props.pageBoundaries
  const current = new Date(internalCurrentYear.value, internalCurrentMonth.value)

  if (minDate && current < minDate)
    return false

  if (maxDate && current > maxDate)
    return false

  return true
})

function handleDateSelect(date: Date) {
  if (isDateDisabled(date))
    return

  internalValue.value = date
  emit('update:modelValue', date)
}

function handlePrevMonth() {
  if (internalCurrentMonth.value === 0) {
    internalCurrentMonth.value = 11
    internalCurrentYear.value--
  }
  else {
    internalCurrentMonth.value--
  }

  if (!isCurrentDateSelectable.value)
    handleNextMonth()
}

function handleNextMonth() {
  if (internalCurrentMonth.value === 11) {
    internalCurrentMonth.value = 0
    internalCurrentYear.value++
  }
  else {
    internalCurrentMonth.value++
  }

  if (!isCurrentDateSelectable.value)
    handlePrevMonth()
}

const daysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}

const firstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay()
}

const generateDates = () => {
  const days = daysInMonth(internalCurrentYear.value, internalCurrentMonth.value)
  const firstDay = firstDayOfMonth(internalCurrentYear.value, internalCurrentMonth.value)
  const dates = []

  // Add days from previous month to fill the first row
  const daysInPrevMonth = daysInMonth(
    internalCurrentMonth.value === 0
      ? internalCurrentYear.value - 1
      : internalCurrentYear.value,
    internalCurrentMonth.value === 0 ? 11 : internalCurrentMonth.value - 1,
  )

  for (let i = firstDay - 1; i >= 0; i--) {
    const prevMonthYear = internalCurrentMonth.value === 0
      ? internalCurrentYear.value - 1
      : internalCurrentYear.value
    const prevMonth = internalCurrentMonth.value === 0 ? 11 : internalCurrentMonth.value - 1
    dates.push({
      date: new Date(prevMonthYear, prevMonth, daysInPrevMonth - i),
      isCurrentMonth: false,
      isSelected: false,
      isToday: false,
    })
  }

  // Add days from current month
  for (let i = 1; i <= days; i++) {
    const date = new Date(internalCurrentYear.value, internalCurrentMonth.value, i)
    dates.push({
      date,
      isCurrentMonth: true,
      isSelected: internalValue.value && isSameDay(date, internalValue.value),
      isToday: isSameDay(date, new Date()),
    })
  }

  // Add days from next month to complete the last row
  const remainingDays = 42 - dates.length // 6 rows * 7 days = 42
  for (let i = 1; i <= remainingDays; i++) {
    const nextMonthYear = internalCurrentMonth.value === 11
      ? internalCurrentYear.value + 1
      : internalCurrentYear.value
    const nextMonth = internalCurrentMonth.value === 11 ? 0 : internalCurrentMonth.value + 1
    dates.push({
      date: new Date(nextMonthYear, nextMonth, i),
      isCurrentMonth: false,
      isSelected: false,
      isToday: false,
    })
  }

  return dates
}

const dates = computed(() => generateDates())

// Convert a JavaScript Date to an internationalized date
const dateToI18nDate = (date: Date) => {
  return toZoned(
    parseDate(`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`),
    getLocalTimeZone(),
  )
}

// Format month and year according to locale
const formattedMonthYear = computed(() => {
  return new Intl.DateTimeFormat(props.locale, { month: 'long', year: 'numeric' }).format(
    new Date(internalCurrentYear.value, internalCurrentMonth.value),
  )
})

const dayNames = computed(() => {
  const firstDayOfWeek = calendar.getFirstDayOfWeek()
  const weekDays = []

  for (let i = 0; i < 7; i++) {
    const day = (firstDayOfWeek + i) % 7
    weekDays.push(calendar.getDayOfWeek(day))
  }

  return weekDays.map((day) => {
    return new Intl.DateTimeFormat(props.locale, { weekday: 'narrow' }).format(
      new Date(2021, 0, day + 1),
    )
  })
})
</script>

<template>
  <div
    :class="cn('flex w-full flex-col space-y-4 sm:p-3', props.class)"
    v-bind="attrs"
  >
    <div class="flex items-center justify-between px-1 text-muted-foreground">
      <h2 class="font-medium text-base text-foreground">
        {{ formattedMonthYear }}
      </h2>
      <div class="flex items-center gap-1">
        <button
          type="button"
          :class="cn(
            'rounded-md p-1 hover:bg-accent hover:text-accent-foreground',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
          )"
          title="Previous month"
          @click="handlePrevMonth"
        >
          <ChevronLeft class="h-4 w-4" />
        </button>
        <button
          type="button"
          :class="cn(
            'rounded-md p-1 hover:bg-accent hover:text-accent-foreground',
            'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
          )"
          title="Next month"
          @click="handleNextMonth"
        >
          <ChevronRight class="h-4 w-4" />
        </button>
      </div>
    </div>
    <div class="grid grid-cols-7 gap-1 text-center text-sm">
      <div
        v-for="day in dayNames"
        :key="day"
        class="flex h-8 w-full items-center justify-center rounded-md text-xs font-medium text-muted-foreground"
      >
        {{ day }}
      </div>
      <div
        v-for="({ date, isCurrentMonth, isSelected, isToday }, index) in dates"
        :key="index"
        :class="cn(
          'flex h-8 w-full items-center justify-center rounded-md p-0 text-sm font-normal',
          isSelected && 'bg-primary text-primary-foreground',
          !isSelected && isToday && 'bg-accent text-accent-foreground',
          !isSelected && !isToday && isCurrentMonth && 'text-foreground',
          !isSelected && !isToday && !isCurrentMonth && 'text-muted-foreground opacity-50',
          isDateDisabled(date) ? 'pointer-events-none opacity-30' : 'cursor-pointer hover:bg-accent hover:text-accent-foreground',
        )"
        role="button"
        tabindex="0"
        @click="handleDateSelect(date)"
      >
        {{ date.getDate() }}
      </div>
    </div>
  </div>
</template>