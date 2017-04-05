<template>
    <div class="contain">
        <h3 class="title">
          <div class="wrapper">
            <Icon type="ios-paper"></Icon>
            <span class="icon">
              最新文章
            </span>
          </div>
        </h3>
        <ul class="list">
          <li class="item">
            <a src="" class="clearfix">
              <h4 class="item-title">夸与问题</h4>
              <div class="item-w">
                <p class="item-p">  范德萨发多少分三大范德萨范德萨发多少分三大范德萨范德萨发多少分三大范德萨范德萨发多少分三大范德萨范德萨发多少分三大范德萨</p>
                <div class="tag">
                  <span class="tag-w">js</span>
                </div>
              </div>
            </a>
          </li>
          <li class="item">
            <a src="">nihao</a>
          </li>
          <li class="item">
            <a src="">nihao</a>
          </li>
        </ul>
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
        },
      created: function () {
        console.log('dd')
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title{
    text-align: left;
    border-top: 1px solid #c7c7c7;
  }
  .wrapper{
    width: 100px;
    padding: 3px;
    border-top: 1px solid #000;
    margin-top: -1px;
  }
  .list{
    margin-top: 8px;
    text-align: left;
  }
  .item{
    padding:2px;
    margin: 0px 0px 4px 4px;
    border-bottom: 1px solid #eee;
  }
  .item a{
    font-size:14px;
    color:#000;
  }
  .item-w{
    font-size: 13px;
    color: #666;
  }
  .item-p{
    margin:3px 0px 5px 0px ;
    height: 55px;
    overflow: hidden;
  }
  .tag{
    width: 60px;
    font-size: 12px;
    background: #d29879;
    border-radius: 3px;
    text-align: center;
    color: #fff;
    margin-bottom: 5px;
  }

</style>
