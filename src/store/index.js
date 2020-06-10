import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    perPage: 10
  },
  mutations: {
    SET_PER_PAGE(state, perPage){
      this.perPage = perPage;
    }
  },
  actions: {
    changePerPage({ commit }, perPage){
      commit("SET_PER_PAGE", perPage);
    }
  },
  modules: {}
});
