<template>
  <div class="hello">
    <h1 @click="demo">{{ msg[0].id }}</h1>
    <button v-if="msg[0].show">{{msg[0].show}}</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: [{
          'id': 1
      }]
    }
  },
  methods: {
      demo: function() {
          console.log('ddddddddddd')
//          this.msg[0].show = 'ddd'
        this.$set(this.msg[0], 'show', 'ddd')
        console.log(JSON.stringify(this.msg))
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

