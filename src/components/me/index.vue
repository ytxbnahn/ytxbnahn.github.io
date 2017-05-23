<template>
  <div class="hello">
    <h1 @click="demo">{{ msg[0].id }}</h1>
    <button v-if="msg[0].show">{{msg[0].show}}</button>
    <div class="test llo" onclick="test()">测试
      <div class="llo">llalalalalla</div>
    </div>
    <button @click="showDemo">showDemo</button>
    <transition name="demo"  mode="out-in">
      <demo v-if="show" @a="demo2"></demo>
      <div v-if="!show" @a="demo2">ddddddddddddddddddd</div>
    </transition>
    <timeDown :start='start' @countDown ='start=false' @click.native='sendCode'></timeDown>
    <snake></snake>
    <bounce></bounce>
    <spinner :type='1' color='#000' ></spinner>
    <spinner :type='0' color='#000' ></spinner>
    <div class="border"></div>
    <button @click="alert()">alert</button>
    <button @click="demo2">demo2222</button>
  </div>
</template>

<script>
  import demo from './demo'
  import timeDown from '../zuJian/timeDown'
  import snake from '../zuJian/spinner/snake'
  import bounce from '../zuJian/spinner/bounce'
  import spinner from '../zuJian/spinner/common'
export default {
  name: 'hello',
  data () {
    return {
      msg: [{
          'id': 1
      }],
      start: false,
      show: false
    }
  },
  methods: {
      alert: function() {
          console.log('hello')
        Notification.requestPermission(function(status) {
          var n = new Notification('通知标题', { body: '这里是通知内容！' })
          console.log(n)
        }).then(function(result) {
            if (result === 'denied') {
                console.log('-------')
              return
            } else if (result === 'default') {
             console.log('111111111111111111')
              return
            }
        })
      },
      demo: function(event) {
          console.log(JSON.stringify(event))
          console.log('ddddddddddd')
//          this.msg[0].show = 'ddd'
        this.$set(this.msg[0], 'show', 'ddd') // 用于无法监听到数据变化
        // array.$set(index, value); 数组变化坚挺不倒的情况
        console.log(JSON.stringify(this.msg))
      },
      demo2: function () {
        this.$store.dispatch('skillShow', false)
        console.log(this.$store.state.articleList)
      },
      showDemo: function () {
        this.show = !this.show
      },
      sendCode (value) {
        // 前面发送ajax请求成功之后调用this.start = true开始短信倒计时
        this.start = true
      }
  },
  components: {
      demo,
      timeDown,
      snake,
      bounce,
      spinner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  border-radius()
    -webkit-border-radius arguments
    -moz-border-radius arguments
    border-radius arguments
  .hello
    border-radius 5px
    background rgb(0,160,220)
    .demo-enter-active, .demo-leave-active
      transition opacity .5s ease
    .demo-enter, .demo-leave-active
      opacity 0
    .test
      font-size 16px
      &.llo
       color #ff5c33
      .llo
       color #00c261
</style>
