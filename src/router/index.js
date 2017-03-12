import Vue from 'vue'
import Router from 'vue-router'
import index from 'components/index'
import career from 'components/career/index'
import skill from 'components/skill/index'
import detail from 'components/career/detail'
import project from 'components/project/index'

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
    }
  ]
})
