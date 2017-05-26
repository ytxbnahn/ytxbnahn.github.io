<template>
    <div class="editor-box">
        <h1>{{ msg }}</h1>
      <textarea id="editor"></textarea>
      <button @click="createArticle">创建文章</button>
    </div>
</template>

<script>
  import SimpleMDE from 'simplemde'
  import debounce from '../../lib/debounce.js'
  import marked from '../../lib/marked.js'
  import css from 'simplemde/dist/simplemde.min.css'
  import c from 'font-awesome/css/font-awesome.min.css'
  let simplemde
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
        },
        mounted: function () {
          simplemde = new SimpleMDE({
            autoDownloadFontAwesome: false,
            element: document.getElementById('editor'),
            spellChecker: false,
            previewRender: function(plainText) {
              return marked(plainText) // Returns HTML from a custom parser
            }
          })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../common/stylus/preview.styl'
  .editor-box
    position relative
    padding 15px
    text-align left
    input
      padding 7px
      background-color $grey-bg
      width 350px
    &__title
      font-size 25px
      color $blue
      padding 10px
    &__input-box
      font-size 17px
      margin 15px 0
    &__tagList
      list-style none
      overflow hidden
      margin-bottom 15px
      li
        float left
        height 30px
        line-height @height
        margin-right 20px
        verticle-align center
        text-algin center
        border-radius 5px
        padding 0 5px
        cursor pointer
      li:hover
        background-color $grey-bg
    &__button-box
      float right
      margin 10px
      button
        width 80px
        padding 5px
        background-color $blue
        color white
        margin-left 15px
</style>
