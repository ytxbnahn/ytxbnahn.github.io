<template>
    <div class="container">
      <div class="container-top">
          <div class="container-top-list" v-if="data.index">
              <ul class="container-top-ul" >
                <li v-for="(item,key,index) in data.index.images" ref="imglist" class="container-top-li">
                  <img v-bind:class="{showimg: imgindex===key}" v-on:mouseleave="leaveImgs(key)" v-on:mouseenter="showImgs(key)" :src='item.img'/>
                  <div class="container-top-shadow"><span>{{item.title}}</span></div>
                  <div class="container-top-bottom" v-bind:class="{margintop: imgindex===key}"><span>{{item.content}}</span></div>

                </li>
              </uL>
          </div>
      </div>
      <div class="container-w" v-if="data.index">
          <containleft :data="data.index.hobby" class="container-w-left"></containleft>
          <div class="container-w-c">
              <div style="margin:auto;width: 700px; height:360px"><carousel></carousel></div>
          </div>
          <containright :data="data.index.article" class="container-w-right"></containright>
      </div>
    </div>
</template>

<script>
  import yourJPGPath from '../assets/logo.png'
  import carousel from './zuJian/carousel'
  import containright from './zuJian/containright'
  import containleft from './zuJian/containleft'
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
        ],
        showImg: false,
        imgindex: 9999,
        images: []
      }
    },
    props: {
      data: {
        type: Object
      }
    },
    components: {
       carousel,
      containright,
      containleft
    },
    created: function () {
      this.$nextTick()
    },
    methods: {
      demo: function() {
        this.imgs = this.data.imgs
        console.log(JSON.stringify(this.data.imgs))
      },
      showImgs: function (index) {
        this.imgindex = index

//        this.showImg = true
      },
      leaveImgs: function (index) {
          this.imgindex = 9999
          console.log(index)
//        this.showImg = false
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
  .container-w-c{
    flex: 4;
    height: 360px;
  }
  .container-w-right{
    flex:1;
  }
  .container-top-ul{
    height: 185px;
  }
  .container-top-li{
    position: relative;
    float:left;
    margin-left: 30px;
    width: 210px;

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
    text-align: left;
    padding: 2px;
    font-size: 14px;
    color: #8d8c8c;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .con-list-li span{
    margin-left: 15px;
  }
  .showimg{
    transform: scale(1.1);
  }
  .margintop{
    margin-top: 10px
  }
</style>

