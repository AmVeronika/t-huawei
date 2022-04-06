<template>
  <section class="mb-6 mt-24 container">
    <div
      class="grid grid-cols-cust items-center border-b-2 border-gray-500 font-bold"
    >
      <p class="px-2.5 h-full"></p>
      <ButtonTableFilter
        v-for="(title, ind) in titleTable"
        :key="title + ind + titleTable.length"
        :title="title"
      />
    </div>
    <div v-if="table.length">
      <TableRow
        v-for="(line, ind) in table"
        :key="line + ind + titleTable.length + Date()"
        :line="line"
        :ind="ind"
      />
    </div>
    <div v-else class="text-center font-bold">No data found</div>

    <div
      class="grid grid-cols-cust items-center border-t-2 border-gray-500 font-bold"
    >
      <p class="px-2.5 h-full"></p>
      <p class="px-2.5 h-full">Id User</p>
      <p class="px-2.5 h-full">Id Albums</p>
      <p class="px-2.5 h-full">Title</p>
    </div>
  </section>
</template>

<script>
import TableRow from "@/components/table/TableRow";

export default {
  name: "Table",
  components: { TableRow },
  props: {
    table: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      titleTable: [
        { label: "Id User", type: "userId" },
        { label: "Id Albums", type: "id" },
        { label: "Title", type: "title" },
      ],
    };
  },
};
</script>

<style scoped></style>
