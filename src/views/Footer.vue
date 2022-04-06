<template>
  <div class="container flex justify-between items-center">
    <p>
      Showing {{ getPage }} to {{ getQuantityRow }} of
      {{ quantityAlbums }} entries
    </p>
    <Pagination :quantButton="quantButton" />
  </div>
</template>

<script>
import Pagination from "@/components/footer/Pagination";
import { mapGetters } from "vuex";

export default {
  name: "Footer",
  components: { Pagination },
  props: {
    quantButton: {
      type: Number,
      default: 1,
    },
    quantityAlbums: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    ...mapGetters(["getQuantityRow", "getAlbums", "getPage"]),
  },
};
</script>

<style scoped></style>
