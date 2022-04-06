import { createStore } from "vuex";
import { $axios } from "@/axios";

export default createStore({
  state: {
    albums: [],
    photos: [],
    activeTab: "",
    quantityRow: 10,
    page: 1,
    activeRow: Number,
  },
  getters: {
    getAlbums: (state) => state.albums,
    getActiveTab: (state) => state.activeTab,
    getPhotos: (state) => state.photos,
    getQuantityRow: (state) => state.quantityRow,
    getPage: (state) => state.page,
    getActiveRow: (state) => state.activeRow,
  },
  mutations: {
    setAlbums(state, payload) {
      state.albums = payload;
    },
    sortAlbums(state, data) {
      state.activeTab = data.param;
      state.albums.sort(function (a, b) {
        if (a[data.param] > b[data.param]) {
          return 1;
        }
        if (a[data.param] < b[data.param]) {
          return -1;
        }
        return 0;
      });
      if (!data.type) {
        state.albums.reverse();
      }
    },
    markAlbums(state, payload) {
      state.albums.forEach((album) => {
        if (album.id === payload.id) {
          album["mark"] = payload.type;
        }
      });
    },
    setPhotos(state, payload) {
      state.photos = payload;
    },
    setQuantityRow(state, payload) {
      state.quantityRow = payload;
    },
    setPage(state, payload) {
      state.page = payload;
    },
    setActiveRow(state, payload) {
      state.activeRow = payload;
    },
  },
  actions: {
    async fetchDataAlbums({ commit }) {
      try {
        const result = await $axios.get("albums");
        commit("setAlbums", result.data);
      } catch (e) {
        console.log(e);
      }
    },
    async fetchPhotosAlbums({ commit }, id) {
      try {
        const result = await $axios.get(`photos/${id}`);
        commit("setPhotos", result.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
});
