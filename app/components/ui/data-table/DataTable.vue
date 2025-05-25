<script setup lang="ts">
import { Table as TablePrimitive } from '../table'
</script>

<template>
  <div :class="cn('space-y-4', props.class)">
    <TablePrimitive>
      <DataTableHead :table="table" />
      <DataTableBody :table="table" />
    </TablePrimitive>
  </div>
</template>

<script>
import { DataTableHead } from './DataTableHead.vue'
import { DataTableBody } from './DataTableBody.vue'
</script>