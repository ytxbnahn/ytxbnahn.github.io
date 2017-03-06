<template>
  <div class="nav-header">
    <h1>MTY</h1>
    <div class="header-right">
      <nav>
        <ul>
          <li class="head-li"  v-on:mouseenter="dataShow(this)" v-on:mouseleave="dataHidden(this)"><a><router-link to="/me">关于我 </router-link></a>
            <div v-bind:class="{hidden:isHidden}" class="head-list">
              <ul class="head-list-ul">
                <li class="head-list-li" ><span   v-on:click="dataShow()">暂无内容</span></li>
                <li class="head-list-li" ><span>暂无内容</span></li>
              </ul>
            </div>
          </li>
          <li class="head-li"><a><router-link to="/me">生涯 </router-link></a></a></li>
          <li class="head-li"><a><router-link to="/me">技能 </router-link></a></a></li>
          <li class="head-li"><a><router-link to="/me">项目 </router-link></a></a></li>
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
            isHidden: true
          }
      },
      methods: {
        demo() {
          console.log('hello')
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
    background-color: #fff;
    font-size:14px;
  }
  .head-list-li :hover{
    color:#0c94d7;
  }
  .head-list-li{
    height: 36px;
    line-height: 36px;
  }
</style>
