<template>
  <div id="app">
    <v-header :data="data"></v-header>
    <v-banner></v-banner>
    <router-view :data="data"></router-view>
    <v-alert></v-alert>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'
  import banner from './components/header/banner.vue'
  import alert from './components/skill/alert.vue'
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
            ]
          }
      }
    },
    components: {
      'v-header': header,
      'v-banner': banner,
      'v-alert': alert
    },
    methods: {
      demo: function(name) {
        console.log(name)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/base.styl";

  #app {
    position: relative;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
