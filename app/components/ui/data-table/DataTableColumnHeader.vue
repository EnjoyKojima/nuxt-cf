<script setup lang="ts">
import type { Column, Table as TableType } from '@tanstack/vue-table'
import { ArrowUpDown, ChevronDown, EyeOff } from 'lucide-vue-next'
import { Button } from '../button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../dropdown-menu'
import { valueUpdater } from '../../utils/shadcn'
import { ref } from 'vue'

export interface DataTableColumnHeaderProps<TData, TValue> {
  column: Column<TData, TValue>
  title: string
  class?: string
}

const props = defineProps<DataTableColumnHeaderProps<any, any>>()

const showFilterInput = ref(false)
const filterInputRef = ref<HTMLInputElement | null>(null)

function toggleFilterInput() {
  showFilterInput.value = !showFilterInput.value
  if (showFilterInput.value) {
    // Focus the input after it renders
    setTimeout(() => {
      filterInputRef.value?.focus()
    }, 0)
  }
}
</script>

<template>
  <div :class="cn('flex items-center space-x-2', props.class)">
    <DropdownMenu v-if="column.getCanFilter()">
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" size="sm" class="-ml-3 h-8 data-[state=open]:bg-accent">
          <span v-if="column.getFilterValue()">
            {{ title }}: {{ column.getFilterValue() }}
          </span>
          <span v-else>{{ title }}</span>
          <ChevronDown
            v-if="!props.column.getIsSorted()"
            class="ml-2 h-4 w-4"
          />
          <component
            :is="props.column.getIsSorted() === 'desc' ? 'ChevronDown' : 'ChevronUp'"
            v-else
            class="ml-2 h-4 w-4"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <div v-if="showFilterInput" class="flex items-center px-2 py-1.5">
          <input
            ref="filterInputRef"
            type="text"
            :value="column.getFilterValue()"
            @input="column.setFilterValue(($event.target as HTMLInputElement).value)"
            class="peer w-full flex h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Filter..."
            @keydown.escape="toggleFilterInput"
          />
        </div>
        <DropdownMenuItem @click="toggleFilterInput">
          <span v-if="showFilterInput">Hide filter</span>
          <span v-else>Show filter</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem @click="column.toggleSorting(false)">
          <ArrowUpDown class="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Asc
        </DropdownMenuItem>
        <DropdownMenuItem @click="column.toggleSorting(true)">
          <ArrowUpDown class="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Desc
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem @click="column.toggleVisibility(false)">
          <EyeOff class="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
          Hide
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <Button
      v-else-if="column.getCanSort()"
      variant="ghost"
      size="sm"
      class="-ml-3 h-8 data-[state=open]:bg-accent"
      @click="column.toggleSorting(column.getIsSorted() === 'asc')"
    >
      <span>{{ title }}</span>
      <ArrowUpDown class="ml-2 h-4 w-4" />
    </Button>
    <span v-else>{{ title }}</span>
  </div>
</template>