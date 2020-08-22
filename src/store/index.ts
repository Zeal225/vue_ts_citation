import Vue from 'vue'
import Vuex from 'vuex'
import navbar from './modules/top-nav-bar'
import pageSearchForm from './modules/page-search-form'

Vue.use(Vuex)

export default new Vuex.Store({
  /*state: {
    navBarSearch: false
  },
  mutations: {
    showNavBarSearchMutation(state){
      state.navBarSearch = !state.navBarSearch;
    }
  },
  actions: {
    showNavBarSearch(context){
      context.commit("showNavBarSearchMutation");
    }
  },
  getters:{
    showNavBarSearch(state){
      return state.navBarSearch;
    }
  },*/
  modules: {
    navbar,
    pageSearchForm
  }
})
