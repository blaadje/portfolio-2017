import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isPreloading: false,
}

const getters = {
  isPreloading: state => state.isPreloading,
}

const mutations = {
  beginPreload(state) {
    state.isPreloading = true
  },
  endPreload(state) {
    state.isPreloading = false
  },
}

const actions = {
  beginPreload: ({ commit }) => commit('beginPreload'),
  endPreload: ({ commit }) => commit('endPreload'),
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
