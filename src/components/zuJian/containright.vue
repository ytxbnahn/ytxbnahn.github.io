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
        <ul class="list" v-for="item in articleList">
          <li class="item">
              <router-link :to="{path: '/article/' + item._id}" class="clearfix">
                <h4 class="item-title">{{item.title}}</h4>
              </router-link>
              <div class="item-w">
                <p class="item-p">{{item.abstract}}</p>
                <div class="tag">
                  <span class="tag-w">js</span>
                </div>
              </div>
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
      name: 'hello',
      data () {
          return {
          }
      },
      props: {
          data: {
              type: Array
          }
      },
      computed: {
        articleList() {
          return this.$store.state.articleList
        }
      },
      created: function () {
        console.log('dd')
        this.$store.dispatch('getAllArticles', false)
        console.log(JSON.stringify('999999999999999999' + JSON.stringify(this.articleList)))
      },
        mounted: function () {

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
    height: 39px;
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
