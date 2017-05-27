<template>
  <div class="wrapper">
    <button @click="showHiddens()">显示</button>
    <div class="contain" v-show="ok">
      <div class="contain-w clearfix">
        <pre class="contain-main" v-html="msg"></pre>
      </div>
      <button class="close" @click="hidden()">guanbi</button>
    </div>
    <div v-html="styleCode">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: '',
        ok: true,
        showData: `
        .contain pre{
          color: #fff;
          font-size: 14px;
        }
        .contain pre{
          color: #fff;
          font-size: 14px;
        }
        .contain pre{
          color: #fff;
          font-size: 14px;
        }
        .contain pre{
          color: #fff;
          font-size: 14px;
        }
        .contain pre{
          color: #fff;
          font-size: 14px;
        }
        .contain pre{
          color: #fff;
          font-size: 14px;
        }
        .contain pre{
          color: #fff;
          font-size: 14px;
        }
        .contain pre{
          color: #fff;
          font-size: 14px;
        }
        .contain pre{
          color: #fff;
          font-size: 14px;
        }
        .contain pre{
          color: #fff;
          font-size: 14px;
        }
        .contain pre{
          color: #fff;
          font-size: 14px;
        }
        .contain pre{
          color: #fff;
          font-size: 14px;
        }
        .contain pre{
          color: #fff;
          font-size: 14px;
        }
        `,
        showStyle: '<style>' +
        ' .contain pre {' +
        '   color: #fff;' +
        '   font-size:14px' +
        '}' +
        '</style>'
      }
    },
    methods: {
      hidden: function () {
        this.$store.dispatch('getAllArticles', false)
        if (this.$store.state.skillShow) {
            console.log('ddd')
        }
        this.ok = false
        this.msg = ''
      },
      showHiddens: function () {
        this.ok = true
        this.shartShow()
      },
      shartShow: function () {
        var t = this.showData.length
        console.log('+++++' + this.showData)
        console.log('ddd===' + this)
        var i = 0
        if (this.showData) {
          var showStart = setInterval(() => {
            if (i < t) {
//              console.log('ddd' + this)
              this.msg = this.showData.substring(0, i + 1)
//              console.log(this.msg)
              i++
            } else {
              clearInterval(showStart)
            }
          }, 10)
        }
      }
    },
    created: function () {
      this.shartShow()
    },
    computed: {
        styleCode() {
            return '<style>' + this.msg + '</style>'
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html{
    min-height: 100%
  }
  body{
    min-height: 100%;
  }
  .wrapper{
    text-align: left;
  }
  .contain{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background:rgba(7,12,12,0.5);
    z-index: 1000;
    overflow: auto;
  }
  .contain-w{
    min-height: 100%;
  }
  .contain-main{
    padding-bottom: 64px;
  }
  .close{
    display: block;
    position: relative;
    width: 32px;
    height:35px;
    margin-top: -64px;
    clear: both;
  }
</style>
