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
      }],
      ll: '',
      pp: [{'id': 2}]
    }
  },
  computed: {
    tt: function () {
        console.log('dd')
      this.ll = [{
        'id': 2,
        'd': 3
      }]
      var a = JSON.stringify(this.ll)
      var b = JSON.parse(a)
      console.log('ddddddddddddddd222dd' + JSON.stringify(this.pp))
      this.pp = this.pp.slice(1, 2)[0]
      console.log('ddddddddd333ddd-ddddd' + JSON.stringify(this.pp))
      return b
    }
  },
  methods: {
      demo: function() {
         const tt = [{
          'id': 1,
          'd': 6
        }]
        console.log('=222====dd====dddddddddddd')
        console.log('ddddddddddd' + JSON.stringify(tt))
        this.msg = this.tt
      //  console.log(JSON.stringify(pp))
        // this.msg = pp
      //  this.msg[0].id = '222'
//          this.msg[0].show = 'ddd'
        this.$set(this.msg[0], 'show', 'ddd')
        console.log(JSON.stringify(this.msg))
        console.log(JSON.stringify(this.ll))
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

