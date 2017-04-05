<template>
  <mt-swipe :auto="4000" class="swipe" style="max-height:360px;width:700px"  :show-indicators="false">
    <mt-swipe-item><img style="width:100%" src="../../assets/logo.png"/></mt-swipe-item>
    <mt-swipe-item><img style="width:100%" src="../../assets/tu.jpg"/></mt-swipe-item>
    <mt-swipe-item><img style="width:100%" src="../../assets/logo.png"/></mt-swipe-item>
  </mt-swipe>
</template>
<script>
  export default {
      name: 'index'
    }
</script>
<style>
</style>
