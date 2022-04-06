<template>
  <div class="fixed w-full top-0">
    <div class="flex justify-between items-center container py-5 m-0 bg-white">
      <Entries />
      <Search @filterAlbums="resultFilterAlbums" />
    </div>
  </div>
</template>

<script>
import Entries from "../components/header/Entries";
import Search from "@/components/header/Search";

export default {
  name: "Header",
  components: { Entries, Search },
  methods: {
    resultFilterAlbums(event) {
      this.$emit("filterAlbums", event);
    },
  },
};
</script>

<style scoped></style>
