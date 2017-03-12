// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
// import 'iview/dist/styles/iview.css'
// import iview from 'iview'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Resource from 'vue-resource'

Vue.use(VueRouter)
// Vue.use(iview)
Vue.use(Mint)
Vue.use(Resource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
