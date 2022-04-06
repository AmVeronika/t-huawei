<template>
  <div class="flex justify-between items-center gap-2">
    <button @click="switchButton(false)">Previous</button>
    <div class="flex justify-between items-center gap-2">
      <ButtonPagination
        v-for="(nomer, ind) in quantButton"
        :key="nomer + ind"
        :nomerButton="nomer"
      />
    </div>
    <button @click="switchButton(true)">Next</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Pagination",
  props: {
    quantButton: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getPage"]),
  },
  methods: {
    ...mapMutations(["setPage"]),
    switchButton(bool) {
      if (this.getPage > 1 && !bool) {
        this.setPage(+this.getPage - 1);
      }
      if (this.getPage < this.quantButton && bool) {
        this.setPage(+this.getPage + 1);
      }
    },
  },
};
</script>

<style scoped></style>
