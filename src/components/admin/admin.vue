<template>
    <div class="editor-box">
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
                articleTag: '',
                tags: [],
                articleTitle: '',
                articleContent: ''
            }
        },
        methods: {
            createArticle: function () {
              this.$store.dispatch('createArticle', this.article)
            }
        },
        mounted: function () {
          this.$nextTick(() => {
              console.log('----' + this.$store.state)
            this.articleTitle = this.$store.state.currentArticle.title
            this.articleContent = this.$store.state.currentArticle.content
            simplemde.value(this.articleContent)
          })
          simplemde = new SimpleMDE({
            autoDownloadFontAwesome: false,
            element: document.getElementById('editor'),
            spellChecker: false,
            previewRender: function(plainText) {
              return marked(plainText) // Returns HTML from a custom parser
            }
          })
//          simplemde.codemirror.on("change", () => {
//            let value = simplemde.value();
//            // 如果文章内容相同就不保存了
//            if (this.currentArticle.content === value) {
//              return;
//            }
//            // 如果文章已经保存
//            if (this.currentArticle.save) {
//              // 改变文章状态 => 未保存
//              this.$store.dispatch('changeArticle');
//            }
//            // 如果不是新建的文章，则保存，这是自动保存，如果不要自动保存可以注释
//            if (this.currentArticle.id !== -1) {
//              this.saveArticle({
//                content: value
//              })
//            }
//          this.articleContent = value
//        })
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
