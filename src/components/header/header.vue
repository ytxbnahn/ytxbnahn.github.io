<template>
  <div class="nav-header">
    <h1>MTY</h1>
    <div class="header-right">
      <nav>
        <ul>
          <li class="head-li"  v-on:mouseenter="dataShow(this)" v-on:mouseleave="dataHidden(this)"><a><router-link to="/">关于我 </router-link></a>
            <div v-bind:class="{hidden:isHidden}" class="head-list">
              <ul class="head-list-ul">
                <li class="head-list-li" ><span   v-on:click="demo()">暂无内容</span></li>
                <li class="head-list-li" ><span>暂无内容</span></li>
                <li class="head-list-li" ><span   v-on:click="dataShow()">暂无内容</span></li>
                <li class="head-list-li" ><span @click="showHidden()">暂无内容</span></li>
              </ul>
            </div>
          </li>
          <li class="head-li"><a><router-link :data="{name:'nihao',num:'2'}" to="/career">生涯 </router-link></a></li>
          <li class="head-li"><a><router-link to="/skill">技能 </router-link></a></li>
          <li class="head-li"><a><router-link to="/project">项目 </router-link></a></li>
          <li class="head-li"><a><router-link to="/me">测试 </router-link></a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
      name: 'header',
      data() {
          return {
            header: {},
            isHidden: true,
            msg: 'hello'
          }
      },
      props: {
          data: {
              type: Object
          }
      },
      methods: {
        demo() {
           console.log('dd')
           this.$emit('demo', this.msg)
        },
        showHidden() {
          this.$emit('showHidden', '============')
          console.log('33333')
        },
        dataShow(it) {
            this.isHidden = false
            console.log('lalala')
        },
        dataHidden() {
            this.isHidden = true
            console.log('hidden')
        }
      },
      created() {
          this.header = {bh: 'ddd', hh: '22222'}
          console.log(JSON.stringify(this.data))
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .nav-header{
      position: relative;
      max-width:1178px;
      line-height: 72px;
      height: 72px;
      margin-left: auto;
      margin-right: auto;
    }
    .nav-header h1{
      float: left
    }
    .header-right{
      right: 0;
      position: absolute
    }
    ul .head-li{
      float: left
    }
    ul{
      right:0;
    }
    ul .head-li a{
      font-size: 15px;
      padding: 0 15px;
    }
    ul li a :hover{
      color: #0c94d7
    }

    .hidden{
        display: none
      }
  .head-list{
    position: relative;
  }
  .head-list:after{
    display:block;
    content:'';
    clear:both;
  }
  .head-list-ul{
    width: 96px;
    z-index:3;
    position: absolute;
    border: 1px solid #e8e7e7;
    background-color: #fff;
    font-size:14px;
    margin-top:-20px;
  }
  .head-list-li :hover{
    color:#0c94d7;
  }
  .head-list-li{
    height: 36px;
    line-height: 36px;
  }
</style>
