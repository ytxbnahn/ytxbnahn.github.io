<template>
    <div class="container">
      <div class="container-top">
          <div class="container-top-list">
              <ul class="container-top-ul" >
                <li v-for="item in imgs" class="container-top-li"><img :src='item.img'/>
                  <div class="container-top-shadow"><span>你好火影</span></div>
                  <div class="container-top-bottom"><span>热爱着火影你好火影忍者哈哈哈哈哈</span></div>

                </li>
              </uL>
          </div>
      </div>
      <div class="container-w">
          <div class="container-w-left">
              <aside class="con-con">
                <div class="con-w-left">
                  <h3 class="con-title">这里是公告</h3>
                  <div class="con-w">
                  其实没啥可写的你看右上角的图标画了个什么东西服气了真的 <a href="http://www.baidu.com" target="_blank">点击离开</a>
                  </div>
                </div>
              </aside>
              <aside class="con-list">
                <h2 class="con-list-top">兴趣还好</h2>
                <ul class="con-list-ul">
                  <li class="con-list-li"><span>看动漫</span></li>
                </ul>
              </aside>
              <aside><button v-on:click="demo()"></button></aside>
              <aside></aside>
          </div>
          <div class="container-w-c">
              <div style="margin:auto;width: 700px; height:360px"><carousel></carousel></div>
          </div>
          <div class="container-w-right"> </div>
      </div>
    </div>
</template>

<script>
  import yourJPGPath from '../assets/logo.png'
  import carousel from './zuJin/carousel'
  export default {
    name: 'index',
    data () {
      return {
        msg: 'dsfdsafdsafdsafasfsd',
        imgs: [
          {img: require('../assets/tu.jpg')},
          {img: '../assets/logo.png'},
          {img: '../assets/logo.png'},
          {img: yourJPGPath},
          {img: '../assets/tu.jpg'}
        ]
      }
    },
    props: {
      data: {
        type: Object
      }
    },
    components: {
       carousel
    },
    methods: {
      demo: function() {
          this.imgs = this.data.imgs
        console.log(JSON.stringify(this.data.imgs))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container-top{
    margin:25px auto;
    width: 1170px;
  }
  .container-top:after{
    content:"";
    display:block;
    clear:both;
  }
  .container-w{
    width: 1170px;
    display: flex;
    margin:30px auto;

  }
  .container-w-left{
    flex: 1;
  }
  .con-con{
    overflow:hidden;
    position:relative;
    border: 1px solid #0c94d7;
  }

  .con-w-left{
    padding: 15px;
  }
  .con-title{
        color: #0c94d7;
  }
  .con-con :before{
    position: absolute;
    top: -14px;
    right: 5px;
    font-family: 'icomoon';
    content: '\e644';
    font-size: 25px;
    height: 20px;
    color: #0c94d7;
    transition: all .1s linear
  }
  .con-w{
      margin-top:5px;
      text-align: initial;
  }
  .container-w-c{
    flex: 4;
    height: 360px;
  }
  .container-w-right{
    flex:1;
  }
  .container-top-li{
    position: relative;
    float:left;
    margin-left: 30px;

  }
  .container-top-li:first-child{
    margin-left:0;
  }
  .container-top-li img{
    width: 210px;
    height:150px;
  }
  .container-top-li .container-top-shadow{
    position: absolute;
    height: 25px;

    background-color: #1a1818;
    margin-top: -25px;
    opacity: 0.5;
  }
  .container-top-li .container-top-shadow span{
    font-size:14px;
    line-height:25px;
    color:#fff;
    padding:0px 10px 0 10px;
  }
  .container-top-bottom{

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
    margin-top:15px;
    display:relative;
  }
  .con-list-li{
        text-align: -webkit-left;
  }
  .con-list-li span{
    margin-left: 15px;
  }
</style>

