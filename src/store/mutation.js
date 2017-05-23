import api from '../api/article.js'
const GET_DATA = 'GET_DATA'
const SKILL_SHOW = 'SKILL_SHOW'
const CREATED_ARTICLE = 'CREATED_ARTICLE'

export default {
  [GET_DATA](state, payload, options) {
    api.getAllArticles().then(res => {
      state.articleList = res.data
      console.log(res)
    })
    console.log(state.level + '=======' + payload.w + JSON.stringify(options))
  },
  [SKILL_SHOW](state, payload) {
    state.skillShow = payload
  },
  [CREATED_ARTICLE](state, payload) {
    console.log(JSON.stringify(payload))
    api.createArticle(payload).then(res => {
      console.log(res)
    })
  }

}
