/**
 * Created by Administrator on 2017/3/14.
 */

export default {
  getAllArticles({ commit, state }, w) {
    console.log(state.skillShow)
    console.log('--------' + w)
    commit('GETALL_ARTICLES', { w })
  },
  getCurrentArticle({ commit, state }, index) {
    let article
    console.log('currentIndex:', index)
    if (state.articleList.length === 0 || index === -1) {
      article = {
        id: -1,
        index: -1,
        title: '',
        content: '<!--more-->',
        save: true,
        publish: false,
        tags: []
      }
    } else {
      article = {
        id: state.articleList[index].id,
        index: index,
        title: state.articleList[index].title,
        content: state.articleList[index].content,
        save: true,
        publish: state.articleList[index].publish,
        tags: state.articleList[index].tags
      }
    }
    commit('GETCURRENT_ARTICLES', article)
  },
  createArticle({ commit, state }, w) {
    console.log(state.skillShow)
    console.log('--------' + w)
    commit('CREATED_ARTICLE', w)
  },
  changeName({ commit, state }, name) {
    commit('CHANGE_NAME', name)
  },
  setAddr({ commit, state }, addr) {
    commit('SET_ADDR', addr)
  },
  showAbout({ commit, state }, flag) {
    commit('SHOW_ABOUT', flag)
  }

}
