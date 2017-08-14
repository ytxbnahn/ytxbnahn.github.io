<template>
    <div class="hello">
      <h1 class="article__title">{{article.title}}</h1>
      <p class="article__time">{{article.createTime}}</p>
      <div class="article__content markdown-body" v-html="compiledPost" ref="post">
      </div>
    </div>
</template>

<script>
  import marked from '../../lib/marked.js'
    export default {
        name: 'article',
        props: {
          data: {
            type: Object
          }
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        computed: {
          article() {
            return this.$store.state.currentArticle
          },
          compiledPost() {
            return this.compiledMarkdown(this.$store.state.currentArticle.content)
          }
        },
        mounted: function () {
          console.log(this.$route.params.id)
          this.$store.dispatch('getOneArticle', this.$route.params.id)
        },
        methods: {
          compiledMarkdown(value) {
            return marked(value)
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
