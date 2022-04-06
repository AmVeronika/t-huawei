<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex justify-center w-14 rounded-md border border-gray-300 shadow-sm pl-2 pr-1 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        {{ getQuantityRow }}
        <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="origin-top-right absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none w-fill-a"
      >
        <div class="py-1">
          <MenuItem
            v-slot="{ active }"
            v-for="entries in listEntries"
            :key="entries"
            @click="showEntries(entries)"
          >
            <a
              href="#"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm',
              ]"
              >{{ entries }}</a
            >
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
  },
  data() {
    return {
      quantityEntries: 10,
      listEntries: [10, 20, 50],
    };
  },
  computed: {
    ...mapGetters(["getQuantityRow"]),
  },
  methods: {
    ...mapMutations(["setQuantityRow", "setPage"]),
    showEntries(entries) {
      this.setQuantityRow(entries);
      this.setPage(1);
      this.quantityEntries = entries;
    },
  },
};
</script>
