<template>
  <div id="app">
    <v-header></v-header>
    <v-banner></v-banner>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'
  import banner from './components/header/banner.vue'

  export default {
    name: 'app',
    components: {
      'v-header': header,
      'v-banner': banner
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/base.styl";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
