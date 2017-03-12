<template>
  <div class="contain" v-show="ok">
    <h1>{{ msg }}</h1>
    <button @click="hidden()"></button>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        ok: false
      }
    },
    methods: {
        hidden: function () {
          this.ok = false
        },
        showHiddens: function () {
          this.ok = true
        }
    },
    created: function () {
        this.$on('showHidden', function(m) {
            console.log('[][]')
            console.log(m)
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contain{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background:rgba(7,12,12,0.5);
    z-index: 1000;
  }
</style>
