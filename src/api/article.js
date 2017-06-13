/**
 * Created by lau on 2017/5/19.
 */
import Axios from 'axios'
// 为了让服务端渲染正确请求数据
if (typeof window === 'undefined') {
  Axios.defaults.baseURL = 'http://127.0.0.1:8880'
}
export default {
  createArticle(its) {
    let title = its.title
    let content = its.content
    let publish = its.publish
    let tags = its.tags
    console.log()
    let abstract
    if (content.indexOf('<!--more-->') !== -1) {
      abstract = content.split('<!--more-->')[0]
      console.log('------------22222222222222---')
    } else {
      abstract = ''
    }
    console.log('---------------' + abstract)
    return Axios.post('/api/article/createArticle', { title, content, publish, abstract, tags })
  },
  getAllArticles(tag = '', page = 1, limit = 0) {
    return Axios.get(`/api/article/getArticle?tag=${tag}&page=${page}&limit=${limit}`)
  },
  getOneArticle(id) {
    return Axios.get(`/api/article/getOneArticle?id=${id}`)
  }
}
