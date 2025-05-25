<script setup lang="ts">
import { flexRender, type Header, type Table as TableType } from '@tanstack/vue-table'

interface DataTableHeadProps<TData> {
  table: TableType<TData>
}

const props = defineProps<DataTableHeadProps<any>>()
</script>

<template>
  <thead class="[&_tr]:border-b">
    <tr
      v-for="header in props.table.getHeaderGroups()"
      :key="header.id"
    >
      <th
        v-for="column in header.headers"
        :key="column.id"
        :colSpan="column.colSpan"
        :class="cn('h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0', column.column.columnDef.meta?.className)"
      >
        <div v-if="!column.isPlaceholder">
          <component
            :is="flexRender(
              column.column.columnDef.header,
              column.getContext()
            )"
          />
        </div>
      </th>
    </tr>
  </thead>
</template>