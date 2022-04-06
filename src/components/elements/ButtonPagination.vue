<template>
  <button
    type="button"
    class="text-black bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 transition text-sm px-1.5 py-0.5 text-center w-8 border-1-gray"
    @click="setPage(nomerButton)"
  >
    {{ nomerButton }}
  </button>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ButtonPagination",
  props: {
    nomerButton: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setPage"]),
  },
};
</script>

<style scoped>
button:hover {
  background: #a4bdbd;
}
button:active {
  transform: translateY(5px);
}
</style>
