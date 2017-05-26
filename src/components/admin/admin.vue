<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
      <button @click="createArticle">创建文章</button>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                article: {
                  title: 'hello world',
                  content: '标题<!--more-->这里是内容',
                  publish: true,
                  tags: 'Vue'
                },
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            createArticle: function () {
              this.$store.dispatch('createArticle', this.article)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
