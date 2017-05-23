import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/index'
import career from 'components/career/index'
import skill from 'components/skill/index'
import detail from 'components/career/detail'
import admin from 'components/admin/admin'
// import project from 'components/project/index'
import me from 'components/me/index'

const project = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['components/project/index'], () => {
    resolve(require('components/project/index'))
  })
}
  // 异步加载防止首页页面过大
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/career',
      name: 'career',
      component: career
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '/skill',
      name: 'skill',
      component: skill
    },
    {
      path: '/project',
      name: 'project',
      component: project
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})
