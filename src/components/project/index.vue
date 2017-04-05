<template>
  <div class="container flex flex-row" v-if="data.index">
    <containleft :data="data.index.hobby" class="flex-item"></containleft>
    <div class="contain-w">
      <ul class="w-list" v-if="data.index">
        <li class="w-item clearfix" v-for="item in data.index.project">
          <img class="item-img" src="../../assets/logo.png"/>
          <div class="item-w">
            <h2 class="item-title">{{item.title}}</h2>
            <p class="item-p">介绍：{{item.content}}</p>
            <p class="item-p">问题：{{item.question}}</p>
            <div class="item-bottom">
              <span>2017/2/7</span> - <span>2017/2/7</span>
              <a href="www.baidu.com"></a>
              <a class="company" :href="item.companysrc">{{item.company}}</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <containright :data="data.index.article" class="flex-item"></containright>
  </div>
</template>

<script>
  import containright from '../zuJian/containright'
  import containleft from '../zuJian/containleft'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to prdoject'
      }
    },
    props: {
        data: {
            type: Object
        }
    },
    components: {
      containright,
      containleft
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    margin: 25px auto;
    width: 1170px;
  }
  .contain-w{
    flex: 4;
    margin: auto;
    width: 700px;
    height: 360px;
  }
  .item-img{
    float: left;
    width: 210px;
    height: 140px;
  }
  .w-list{
    margin: auto;
    width:700px;
  }
  .w-item{
    margin-bottom: 20px;
    height: 160px;
    border-bottom: 1px solid #efefef;
  }
  .item-w{
    float: right;
    width: 475px;
    text-align: left;
  }
  .item-p{
    margin-top: 5px;
  }
  .item-bottom{
    margin-top: 8px;
    font-size: 16px;
  }
  .company{
    float: right;
    color: #666;
  }
</style>

