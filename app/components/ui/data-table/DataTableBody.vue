<script setup lang="ts">
import { flexRender, type Table as TableType } from '@tanstack/vue-table'

interface DataTableBodyProps<TData> {
  table: TableType<TData>
}

const props = defineProps<DataTableBodyProps<any>>()
</script>

<template>
  <tbody>
    <template v-if="props.table.getRowModel().rows?.length">
      <tr
        v-for="row in props.table.getRowModel().rows"
        :key="row.id"
        :data-state="row.getIsSelected() && 'selected'"
        class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
      >
        <td
          v-for="cell in row.getVisibleCells()"
          :key="cell.id"
          :class="cn('p-2 align-middle [&:has([role=checkbox])]:pr-0', cell.column.columnDef.meta?.className)"
        >
          <component :is="flexRender(cell.column.columnDef.cell, cell.getContext())" />
        </td>
      </tr>
    </template>
    <tr v-else>
      <td
        :colspan="props.table.getAllColumns().length"
        class="h-24 text-center align-middle"
      >
        No results.
      </td>
    </tr>
  </tbody>
</template>