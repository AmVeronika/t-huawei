<template>
  <div
    class="hover:bg-gray-100 transition grid grid-cols-cust items-center border-y-1 h-10 line-bg"
    :class="{ 'mark-row': markRow }"
  >
    <ButtonPlus
      class="px-2 h-full line-h-38"
      @mouseover="refusal = true"
      @mouseleave="refusal = false"
      @showEntries="openDataLine"
      @markRefusal="markAsRefusal"
      :lineId="line.id"
      :refusal="refusal"
      :markRow="markRow"
    />
    <p
      class="px-2.5 h-full line-h-38 cell-bg transition"
      :class="{
        'line-bg-even': ind % 2 === 0,
        'line-bg-odd': ind % 2 !== 0,
        'mark-row': markRow,
      }"
    >
      {{ line.userId }}
    </p>
    <p class="px-2.5 h-full line-h-38">{{ line.id }}</p>
    <p
      class="px-2.5 h-full line-h-38 overflow-hidden overflow-ellipsis text-ellipsis whitespace-nowrap"
      :title="line.title"
    >
      {{ line.title }}
    </p>
  </div>
  <TableDataAlbum v-show="showDataLine && getPhotos.id == line.id" />
</template>

<script>
import TableDataAlbum from "@/components/table/TableDataAlbum";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "TableRow",
  components: { TableDataAlbum },
  props: {
    line: {
      type: Object,
      default: () => ({}),
    },
    ind: {
      type: Number,
    },
  },
  data() {
    return {
      showDataLine: false,
      refusal: false,
      markRow: false,
    };
  },
  mounted() {
    this.markRow = this.line.mark;
  },
  computed: {
    ...mapGetters(["getPhotos"]),
  },
  methods: {
    ...mapActions(["fetchPhotosAlbums"]),
    ...mapMutations(["markAlbums"]),
    openDataLine(event) {
      if (event) {
        this.fetchPhotosAlbums(this.line.id);
      }
      this.showDataLine = event;
    },
    markAsRefusal(data) {
      this.markRow = data;
      let markData = {
        id: this.line.id,
        type: data,
      };
      this.markAlbums(markData);
    },
  },
};
</script>

<style scoped>
.line-bg-even {
  background: #e7e4e4;
}

.line-bg-odd {
  background: #ffffff;
}

.line-bg:nth-child(2n + 1) {
  background: #f8f8f8;
}

.line-bg:nth-child(2n) {
  background: #ffffff;
}

.line-bg:hover {
  background: #c4dcdc;
}

.line-bg:hover > .cell-bg {
  background: #a4bdbd;
}
.mark-row {
  background: red !important;
}
</style>
