<template>
  <button class="flex items-center justify-between gap-0.5">
    <div @click="showLine">
      <svg
        v-if="!openLine"
        class="transition"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="17px"
        height="17px"
      >
        <circle cx="52" cy="52" r="44" opacity=".35" />
        <circle cx="50" cy="50" r="44" fill="#f2f2f2" />
        <path
          fill="#f2f2f2"
          d="M50,91C27.393,91,9,72.607,9,50S27.393,9,50,9s41,18.393,41,41S72.607,91,50,91z"
        />
        <circle cx="50.026" cy="50.026" r="38.026" fill="#96c362" />
        <circle
          cx="50"
          cy="50"
          r="37.5"
          fill="none"
          stroke="#40396e"
          stroke-miterlimit="10"
          stroke-width="3"
        />
        <line
          x1="30"
          x2="70"
          y1="50"
          y2="50"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="6"
        />
        <line
          x1="50"
          x2="50"
          y1="30"
          y2="70"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="6"
        />
      </svg>
      <svg
        v-else-if="openLine && activeRow"
        class="transition"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="17px"
        height="17px"
      >
        <circle cx="52" cy="52" r="44" opacity=".35" />
        <circle cx="50" cy="50" r="44" fill="#f2f2f2" />
        <path
          fill="#f2f2f2"
          d="M50,91C27.393,91,9,72.607,9,50S27.393,9,50,9s41,18.393,41,41S72.607,91,50,91z"
        />
        <circle cx="50.026" cy="50.026" r="38.026" fill="red" />
        <circle
          cx="50"
          cy="50"
          r="37.5"
          fill="none"
          stroke="#40396e"
          stroke-miterlimit="10"
          stroke-width="3"
        />
        <line
          x1="30"
          x2="70"
          y1="50"
          y2="50"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="6"
        />
      </svg>
    </div>
    <div>
      <svg
        v-show="refusal || markRow"
        @click="markAsRefusal"
        class="transition"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 80 80"
        style="enable-background: new 0 0 80 80"
        xml:space="preserve"
        width="17"
        height="17"
      >
        <g>
          <path
            style="fill: #ffeea3"
            d="M35.767,77.5c-5.609,0-9.322-3.831-9.728-4.267L6.404,53.596c-1.273-1.273-1.949-2.966-1.902-4.768   c0.047-1.799,0.812-3.457,2.156-4.666c1.127-1.015,2.615-1.574,4.191-1.574c1.863,0,3.695,0.764,5.026,2.095l6.624,6.624V32.357h44   V62c0,8.547-6.953,15.5-15.5,15.5H35.767z"
          />
          <path
            style="fill: #ba9b48"
            d="M66,32.857V62c0,8.271-6.729,15-15,15H35.767c-5.497,0-9.205-3.939-9.387-4.135L6.757,53.243   c-1.175-1.175-1.799-2.738-1.755-4.401c0.043-1.661,0.75-3.191,1.99-4.308c1.05-0.946,2.384-1.446,3.857-1.446   c1.732,0,3.435,0.71,4.673,1.949l5.77,5.77L23,52.515V50.1V32.857H66 M67,31.857H22V50.1l-5.77-5.77   c-1.459-1.459-3.432-2.241-5.38-2.241c-1.63,0-3.243,0.547-4.526,1.702C3.319,46.496,3.228,51.128,6.05,53.95l19.623,19.623   C25.915,73.834,29.831,78,35.767,78H51c8.837,0,16-7.163,16-16V31.857L67,31.857z"
          />
        </g>
        <g>
          <path
            style="fill: #ffeea3"
            d="M22.5,39.5V14c0-3.033,2.468-5.5,5.5-5.5s5.5,2.467,5.5,5.5v25.5H22.5z"
          />
          <path
            style="fill: #ba9b48"
            d="M28,9c2.757,0,5,2.243,5,5v25H23V14C23,11.243,25.243,9,28,9 M28,8c-3.314,0-6,2.686-6,6v26h12V14   C34,10.686,31.314,8,28,8L28,8z"
          />
        </g>
        <g>
          <path
            style="fill: #ffeea3"
            d="M33.5,39.5V8c0-3.033,2.468-5.5,5.5-5.5s5.5,2.467,5.5,5.5v31.5H33.5z"
          />
          <path
            style="fill: #ba9b48"
            d="M39,3c2.757,0,5,2.243,5,5v31H34V8C34,5.243,36.243,3,39,3 M39,2c-3.314,0-6,2.686-6,6v32h12V8   C45,4.686,42.314,2,39,2L39,2z"
          />
        </g>
        <g>
          <path
            style="fill: #ffeea3"
            d="M44.5,39.5V12c0-3.033,2.468-5.5,5.5-5.5s5.5,2.467,5.5,5.5v27.5H44.5z"
          />
          <path
            style="fill: #ba9b48"
            d="M50,7c2.757,0,5,2.243,5,5v27H45V12C45,9.243,47.243,7,50,7 M50,6c-3.314,0-6,2.686-6,6v28h12V12   C56,8.686,53.314,6,50,6L50,6z"
          />
        </g>
        <g>
          <path
            style="fill: #ffeea3"
            d="M55.5,39.5V20c0-3.033,2.468-5.5,5.5-5.5s5.5,2.467,5.5,5.5v19.5H55.5z"
          />
          <path
            style="fill: #ba9b48"
            d="M61,15c2.757,0,5,2.243,5,5v19H56V20C56,17.243,58.243,15,61,15 M61,14c-3.314,0-6,2.686-6,6v20h12   V20C67,16.686,64.314,14,61,14L61,14z"
          />
        </g>
        <rect x="23" y="36" style="fill: #ffeea3" width="43" height="12" />
        <line
          style="
            fill: none;
            stroke: #c74343;
            stroke-width: 6;
            stroke-miterlimit: 10;
          "
          x1="34"
          y1="45"
          x2="54"
          y2="65"
        />
        <line
          style="
            fill: none;
            stroke: #c74343;
            stroke-width: 6;
            stroke-miterlimit: 10;
          "
          x1="54"
          y1="45"
          x2="34"
          y2="65"
        />
      </svg>
    </div>
  </button>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ButtonPlus",
  props: {
    lineId: {
      type: Number,
    },
    refusal: {
      type: Boolean,
      default: false,
    },
    markRow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      openLine: false,
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(["getActiveRow"]),
    // eslint-disable-next-line vue/no-dupe-keys
    activeRow() {
      if (this.getActiveRow !== this.lineId) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.openLine = false;
        return false;
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.openLine = true;
        return true;
      }
    },
  },

  methods: {
    ...mapMutations(["setActiveRow"]),
    showLine() {
      this.openLine = !this.openLine;
      this.setActiveRow(this.lineId);
      this.$emit("showEntries", this.openLine);
    },
    markAsRefusal() {
      this.$emit("markRefusal", !this.markRow);
    },
  },
};
</script>

<style scoped></style>
