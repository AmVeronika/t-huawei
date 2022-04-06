<template>
  <div class="mx-auto px-10 pb-10 overscroll-auto">
    <Header @filterAlbums="resultFilterAlbums"></Header>
    <Table :table="renderingLines"></Table>
    <Footer
      :quantButton="quantButton"
      :quantityAlbums="filterAlbums ? filterAlbums.length : getAlbums.length"
    ></Footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "./views/Header";
import Table from "./views/Table";
import Footer from "./views/Footer";

export default {
  name: "App",
  components: { Header, Table, Footer },
  data() {
    return {
      lines: [],
      entries: 10,
      filterAlbums: undefined,
      quantButton: 0,
    };
  },
  mounted() {
    this.fetchDataAlbums();
  },
  computed: {
    ...mapGetters(["getAlbums", "getQuantityRow", "getPage"]),

    renderingLines() {
      if (this.filterAlbums) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.quantButton = Math.ceil(
          this.filterAlbums.length / this.getQuantityRow
        );
        return [...this.filterAlbums].splice(
          (this.getPage - this.quantButton - 1) * this.getQuantityRow,
          this.getQuantityRow
        );
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.quantButton = Math.ceil(
          this.getAlbums.length / this.getQuantityRow
        );
        return [...this.getAlbums].splice(
          (this.getPage - this.quantButton - 1) * this.getQuantityRow,
          this.getQuantityRow
        );
      }
    },
  },
  methods: {
    ...mapActions(["fetchDataAlbums"]),
    resultFilterAlbums(event) {
      this.filterAlbums = event;
    },
  },
};
</script>

<style lang="scss"></style>
