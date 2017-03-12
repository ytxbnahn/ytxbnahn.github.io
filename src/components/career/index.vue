<template>
  <div>
     <div @click='demo()'>lalal</div>
     <ul>
        <li><router-link to="/detail/tt">tt </router-link></li>
        <li><router-link to="/detail/dd">dd </router-link></li>
        <li><router-link to="/detail/ffff">fffff</router-link></li>
     </ul>
  </div>
</template>
<script>
    export default {
        name: 'index',
        methods: {
            demo() {
                console.log('dd')
                console.log(this.props)
            }
        }
    }
</script>
