<script setup lang="ts">
import type { Table as TableType } from '@tanstack/vue-table'
import { X } from 'lucide-vue-next'
import { Button } from '../button'
import { Input } from '../input'
import { DataTableViewOptions } from './DataTableViewOptions.vue'

interface DataTableToolbarProps<TData> {
  table: TableType<TData>
  filterKey?: keyof TData
  searchPlaceholder?: string
  showSearchFilter?: boolean
  showViewOptions?: boolean
  class?: string
}

const props = withDefaults(defineProps<DataTableToolbarProps<any>>(), {
  showSearchFilter: true,
  showViewOptions: true,
  searchPlaceholder: 'Search...',
})

function isApplied(column: any) {
  return column.getFilterValue() !== undefined
}
</script>

<template>
  <div :class="cn('flex items-center justify-between', props.class)">
    <div class="flex flex-1 items-center space-x-2">
      <Input
        v-if="props.showSearchFilter && props.filterKey"
        v-model="props.table.getColumn(props.filterKey)?.getFilterValue()"
        :placeholder="props.searchPlaceholder"
        class="h-8 w-[150px] lg:w-[250px]"
      />
      <div v-for="column in props.table.getAllColumns()" :key="column.id">
        <div
          v-if="column.getCanFilter() && column.id !== props.filterKey"
          class="flex items-center space-x-2"
        >
          <Input
            v-model="column.getFilterValue()"
            :placeholder="`Filter ${column.id}...`"
            class="h-8 w-[150px] lg:w-[250px]"
          />
        </div>
      </div>
      <DropdownMenu v-if="props.table.getFilteredSelectedRowModel().rows.length > 0">
        <DropdownMenuTrigger as-child>
          <Button
            variant="outline"
            size="sm"
            class="h-8 border-dashed"
          >
            <Badge
              variant="secondary"
              class="rounded-sm px-1 font-normal lg:hidden"
            >
              {{ props.table.getFilteredSelectedRowModel().rows.length }}
            </Badge>
            <span class="hidden lg:inline">
              {{ props.table.getFilteredSelectedRowModel().rows.length }} Selected
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="w-[160px]">
          <DropdownMenuItem>
            Bulk action
          </DropdownMenuItem>
          <DropdownMenuItem
            @click="props.table.resetRowSelection()"
          >
            Clear selection
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        v-if="
          props.table.getState().columnFilters.length > 0 ||
          props.table.getState().globalFilter
        "
        variant="ghost"
        @click="
          props.table.resetColumnFilters()
          props.table.resetGlobalFilter()
        "
        class="h-8 px-2 lg:px-3"
      >
        Reset
        <X class="ml-2 h-4 w-4" />
      </Button>
    </div>
    <DataTableViewOptions v-if="props.showViewOptions" :table="props.table" />
  </div>
</template>

<script>
import { Badge } from '../badge'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../dropdown-menu'
</script>