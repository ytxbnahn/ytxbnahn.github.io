/**
 * Created by Administrator on 2017/3/14.
 */

export default {
  addAlert({ commit, state }, w) {
    console.log(state.level)
    console.log('--------' + w)
    commit('GET_DATA', { w })
  }
}
