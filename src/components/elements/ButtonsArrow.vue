<template>
  <div class="flex flex-col">
    <button
      class="transition"
      :class="{ 'btn-arrow': !bool && nameTitle === getActiveTab }"
    >
      &#129169;
    </button>
    <button
      class="transition"
      :class="{ 'btn-arrow': bool && nameTitle === getActiveTab }"
    >
      &#129171;
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ButtonsArrow",
  props: {
    nameTitle: {
      type: String,
      default: "",
    },
    bool: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getActiveTab"]),
  },
  methods: {},
};
</script>

<style scoped></style>
