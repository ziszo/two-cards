import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpen: false,
    deltaY: 0,
    threshold: 200,
  },
  getters: {
    isOpen: (state) => {
      return state.isOpen;
    },
    deltaY: (state) => {
      return state.deltaY;
    },
    threshold: (state) => {
      return state.threshold;
    },
  },
  mutations: {
    toggleIsOpen(state) {
      state.isOpen = !state.isOpen;
    },
    updateDeltaY(state, payload) {
      state.deltaY = payload;
    },
  },
  actions: {
    toggle({ commit }) {
      commit("toggleIsOpen");
    },
    updateDeltaY({ commit }, payload) {
      commit("updateDeltaY", payload);
    },
  },
  modules: {},
});
