<template>
  <div class="hello">
    <h1 v-on:click="demo( $route.params.id)">{{ $route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to skill'
    }
  },
  methods: {
    demo(hello) {
     console.log(hello)
     console.log(this.$route.params.id)
     this.$http.get('https://free-api.heweather.com/v5/now?city=%E7%83%9F%E5%8F%B0&key=7a9e24e9094f48daa66dbb642ef9f625').then((response) => {
        // 响应成功回调
        console.log(response.data)
      }, (response) => {
        // 响应错误回调
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
