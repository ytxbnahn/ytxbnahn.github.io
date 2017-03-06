<template>
  <div id="banner">
    <div class="shadow"></div>
    <div class="banner-text">
      <h2>
        <span>{{msg}}</span>
      </h2>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'banner',
    data () {
      return {
        msg: '通晓古今的记忆，预知未来的逻辑'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  #banner{
    position: relative;
    height:150px;
    color: #fff;
    background-position: center top;
    background-image: url("../../../resource/img/banner.jpg");
  }
  .shadow{
    position: absolute;
    top: 0;
    height: 150px;
    width: 100%;
    opacity: 0.6;
    z-index: 2;
    background-color: #333
  }
  .banner-text{
    margin: auto;
    position: relative;
    max-width: 1178px;
    height: 100%;
  }
  .banner-text:after{
    clear: both;
    display: block;
    content: '';
  }
  #banner h2{
    position: absolute;
    z-index: 3;
    float: left;
    margin: 44px 0 0 0px;
    font-size: 28px;
  }
</style>

