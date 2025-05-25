<script setup lang="ts">
import { computed } from 'vue'
import type { Table as TableType } from '@tanstack/vue-table'

interface DataTablePaginationProps<TData> {
  table: TableType<TData>
  class?: string
}

const props = defineProps<DataTablePaginationProps<any>>()

const canNextPage = computed(() => props.table.getCanNextPage())
const canPreviousPage = computed(() => props.table.getCanPreviousPage())
const pageCount = computed(() => props.table.getPageCount())
</script>

<template>
  <div
    :class="cn('flex items-center justify-between px-2', props.class)"
  >
    <div class="flex-1 text-sm text-muted-foreground">
      {{ props.table.getFilteredSelectedRowModel().rows.length }} of
      {{ props.table.getFilteredRowModel().rows.length }} row(s) selected.
    </div>
    <div class="flex items-center space-x-6 lg:space-x-8">
      <div class="flex items-center space-x-2">
        <p class="text-sm font-medium">Rows per page</p>
        <Select
          v-model="props.table.getState().pagination.pageSize"
          @update:model-value="
            valueUpdater(
              $event,
              props.table.getState().pagination.pageSize,
            )
          "
        >
          <SelectTrigger class="h-8 w-[70px]">
            {{ props.table.getState().pagination.pageSize }}
          </SelectTrigger>
          <SelectContent side="top">
            <SelectItem
              v-for="pageSize in [5, 10, 20, 30, 40, 50]"
              :key="pageSize"
              :value="pageSize"
            >
              {{ pageSize }}
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="flex w-[100px] items-center justify-center text-sm font-medium">
        Page {{ props.table.getState().pagination.pageIndex + 1 }} of
        {{ pageCount }}
      </div>
      <div class="flex items-center space-x-2">
        <Button
          variant="outline"
          class="hidden h-8 w-8 p-0 lg:flex"
          :disabled="!props.table.getCanPreviousPage()"
          @click="props.table.setPageIndex(0)"
        >
          <span class="sr-only">Go to first page</span>
          <ChevronsLeft class="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          class="h-8 w-8 p-0"
          :disabled="!canPreviousPage"
          @click="props.table.previousPage()"
        >
          <span class="sr-only">Go to previous page</span>
          <ChevronLeft class="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          class="h-8 w-8 p-0"
          :disabled="!canNextPage"
          @click="props.table.nextPage()"
        >
          <span class="sr-only">Go to next page</span>
          <ChevronRight class="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          class="hidden h-8 w-8 p-0 lg:flex"
          :disabled="!props.table.getCanNextPage()"
          @click="props.table.setPageIndex(props.table.getPageCount() - 1)"
        >
          <span class="sr-only">Go to last page</span>
          <ChevronsRight class="h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from '../button'
import { Select, SelectContent, SelectItem, SelectTrigger } from '../select'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-vue-next'
import { valueUpdater } from '../../utils/shadcn'
</script>