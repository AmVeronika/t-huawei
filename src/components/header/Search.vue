<template>
  <form>
    <label>
      Search:
      <input
        type="text"
        class="border-gray-400 border-solid border-1 rounded focus:border-gray-600 text-gray-500 sm:text-sm py-1 px-2.5"
        v-model="search"
        @input="filterAlbums(getAlbums, search)"
      />
    </label>
  </form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      search: "",
      resultFilterAlbums: [],
    };
  },
  computed: {
    ...mapGetters(["getAlbums"]),
  },
  methods: {
    filterAlbums(arr, prop) {
      if (Boolean(prop) === false) {
        if (prop === "") {
          this.$emit("filterAlbums", this.getAlbums);
        } else {
          this.$emit("filterAlbums", []);
        }
      } else {
        let newArr = [...arr];
        newArr.filter((item) => {
          Object.values(item).forEach((info) => {
            if (String(info).search(prop) !== -1) {
              this.resultFilterAlbums.push(item);
            }
          });
        });
        this.$emit("filterAlbums", this.resultFilterAlbums);
      }
      this.resultFilterAlbums = [];
    },
  },
};
</script>

<style scoped></style>
