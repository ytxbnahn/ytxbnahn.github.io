import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'

Vue.use(Vuex)

const state = {
  level: '第一周'
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
