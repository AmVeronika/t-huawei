<template>
  <div
    class="px-2.5 h-full flex flex-row justify-between items-center"
    @click="sortBy()"
  >
    <p>{{ title.label }}</p>
    <ButtonsArrow class="self-end" :nameTitle="title.type" :bool="bool" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ButtonTableFilter",
  props: {
    title: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      bool: true,
    };
  },
  methods: {
    ...mapMutations(["sortAlbums"]),

    sortBy() {
      this.bool = !this.bool;
      let data = {
        type: this.bool,
        param: this.title.type,
      };
      this.sortAlbums(data);
    },
  },
};
</script>

<style scoped></style>
