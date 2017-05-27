<template>
  <div id="app">
    <v-header :data="data"></v-header>
    <v-banner></v-banner>
    <transition name="page" mode="out-in">
      <router-view :data="data"></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'
  import banner from './components/header/banner.vue'
  import axios from 'axios'
  export default {
    name: 'app',
    data() {
      return {
          data: {
            name: 'hello',
            number: 1,
            imgs: [
              {img: './assets/tu.jpg'},
              {img: '../assets/logo.png'},
              {img: '../assets/logo.png'},
              {img: '../assets/logo.png'},
              {img: '../assets/tu.jpg'}
            ],
            data: {}
          }
      }
    },
    components: {
      'v-header': header,
      'v-banner': banner
    },
    methods: {
      demo: function(name) {
        console.log(name)
      }
    },
    created: function () {
//      axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      axios.get('/static/data.json').then((res) => {
        this.data = res.data
        console.log(res)
      }).catch(function (error) {
        console.log(error)
      })
      localStorage.addr = '未知'
      localStorage.name = '马堂跃'
      axios.get('https://zhaoplus.com/api/ip')
        .then(result => {
          if (result.data.content.address) {
            localStorage.addr = result.data.content.address
          }
        })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/base.styl";
  @import "common/index.styl";
  #app {
    height:100%;
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .page-enter-active, .page-leave-active {
    transition: opacity .3s ease
  }
  .page-enter, .page-leave-active {
    opacity: 0
  }
</style>
