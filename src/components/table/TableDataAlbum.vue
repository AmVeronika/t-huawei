<template>
  <section>
    <div class="grid grid-cols-photo items-center border-b-1 border-gray-500">
      <p>Id Photo:</p>
      <p>{{ getPhotos.id }}</p>
    </div>
    <div class="grid grid-cols-photo items-center border-b-1 border-gray-500">
      <p>Name Photo:/p></p>
      <p>{{ getPhotos.title }}</p>
    </div>
    <div class="grid grid-cols-photo items-center border-b-1 border-gray-500">
      <p>URL Photo</p>
      <p>{{ getPhotos.url }}</p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TableDataAlbum",
  computed: {
    ...mapGetters(["getPhotos"]),
  },
};
</script>

<style scoped></style>
