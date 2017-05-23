/**
 * Created by Administrator on 2017/3/14.
 */

export default {
  skillShow({ commit, state }, w) {
    console.log(state.skillShow)
    console.log('--------' + w)
    commit('GET_DATA', { w })
  },
  createArticle({ commit, state }, w) {
    console.log(state.skillShow)
    console.log('--------' + w)
    commit('CREATED_ARTICLE', w)
  }
}
