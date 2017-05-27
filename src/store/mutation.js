import api from '../api/article.js'
const GET_DATA = 'GET_DATA'
const GETALL_ARTICLES = 'GETALL_ARTICLES'
const GETCURRENT_ARTICLES = 'GETCURRENT_ARTICLES'
const SKILL_SHOW = 'SKILL_SHOW'
const CREATED_ARTICLE = 'CREATED_ARTICLE'
const CHANGE_NAME = 'CHANGE_NAME'
const SET_ADDR = 'SET_ADDR'
const SHOW_ABOUT = 'SHOW_ABOUT'
export default {
  [GETALL_ARTICLES](state, payload, options) {
    api.getAllArticles().then(res => {
      state.articleList = res.data
      console.log(res)
    })
    console.log(state.level + '=======' + payload.w + JSON.stringify(options))
  },
  [SKILL_SHOW](state, payload) {
    state.skillShow = payload
  },
  [GETCURRENT_ARTICLES](state, payload, options) {
    console.log(state.level + '=======' + payload.w + JSON.stringify(options))
    state.currentArticle = payload
  },
  [CREATED_ARTICLE](state, payload) {
    console.log(JSON.stringify(payload))
    api.createArticle(payload).then(res => {
      console.log(res)
    })
  },
  [CHANGE_NAME](state, name) {
    state.name = name
  },
  [SET_ADDR](state, addr) {
    state.addr = addr
  },
  [SHOW_ABOUT](state, flag) {
    state.isShowAbout = flag
  }

}
