<script setup lang="ts">
import type { Table as TableType } from '@tanstack/vue-table'
import { DropdownMenu } from '../dropdown-menu'
import { Button } from '../button'

interface DataTableViewOptionsProps<TData> {
  table: TableType<TData>
}

const props = defineProps<DataTableViewOptionsProps<any>>()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        variant="outline"
        size="sm"
        class="ml-auto hidden h-8 lg:flex"
      >
        <MixerHorizontalIcon class="mr-2 h-4 w-4" />
        View
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-[150px]">
      <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuCheckboxItem
        v-for="column in props.table.getAllColumns().filter(
          (column) => typeof column.accessorFn !== 'undefined' && column.getCanHide(),
        )"
        :key="column.id"
        :checked="column.getIsVisible()"
        @update:checked="column.toggleVisibility($event)"
      >
        {{ column.id }}
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script>
import { DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../dropdown-menu'
import { MixerHorizontalIcon } from '@radix-icons/vue'
</script>