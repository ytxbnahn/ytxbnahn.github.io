import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'

Vue.use(Vuex)

const state = {
  level: '第一周',
  skillShow: true,
  articleList: [],
  name: '',
  // avatarUrl: `https://icdn.microzz.com/20170426_vue_chat/icon-avatar${Vue.prototype.random(21)}.svg`,
  addr: '未知',
  isShowAbout: false
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
