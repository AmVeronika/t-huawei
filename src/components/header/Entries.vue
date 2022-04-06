<template>
  <div class="flex gap-1 items-center">
    <p>Show</p>
    <Dropdown />
    <p>entries</p>
  </div>
</template>

<script>
import Dropdown from "../Dropdown";

export default {
  name: "Entries",
  components: { Dropdown },
  methods: {},
};
</script>

<style scoped></style>
