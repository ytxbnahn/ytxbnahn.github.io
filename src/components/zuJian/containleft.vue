<template>
  <div  v-if="data">
    <aside class="con-con">
      <div class="con-w-left">
        <h3 class="con-title">这里是公告</h3>
        <div class="con-w">
          <i class="icon-turned_in"></i>
          其实没啥可写的你看右上角的图标画了个什么东西服气了真的 <a href="http://www.baidu.com" target="_blank">点击离开</a>
        </div>
      </div>
    </aside>
    <aside class="con-list">
      <h2 class="con-list-top">兴趣还好</h2>
      <ul class="con-list-ul">
        <li v-for="item in data" class="con-list-li"><Icon type="ios-arrow-right"></Icon><span>{{item.title}}</span></li>
      </ul>
    </aside>
    <aside><button v-on:click="demo()"></button></aside>
    <aside></aside>
  </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        props: {
              data: {
                  type: Array
              }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .con-con{
    overflow:hidden;
    position:relative;
    border: 1px solid #0c94d7;
  }
  .con-con :before{
    position: absolute;
    top: -7px;
    right: 5px;
    font-family: 'icomoon';
    font-size: 25px;
    height: 20px;
    color: #0c94d7;
    transition: all .1s linear
  }
  .con-w-left{
    padding: 15px;
  }
  .con-title{
    color: #0c94d7;
  }
  .con-w{
    margin-top:5px;
    text-align: initial;
  }
  .con-list{
    margin-top:15px;
  }
  .con-list-top{
    width:90px;
    border-top:1px solid #0a0a0a;
    padding:5px;
  }
  .con-list-ul{
    display: relative;
  }
  .con-list-li{
    text-align: -webkit-left;
    padding: 3px;
    font-size: 13px;
    color: #666;
  }
  .con-list-li span{
    margin-left: 5px;
  }
</style>
