<template>
    <div class="editor-box">
      <div class="title">
        <span class="content-title">
          文章题目
        </span>
        <input v-model="articleTitle"/>
      </div>
      <div class="tag">
        <span class="content-title">
          文章标签
        </span>
        <input/>
      </div>
      <textarea id="editor" v-model="articleContent"></textarea>
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
              const info = {
                title: this.articleTitle,
                content: this.articleContent,
                publish: false
              }
              console.log(JSON.stringify(info))
              this.$store.dispatch('createArticle', info)
            }
        },
        mounted: function () {
          this.$nextTick(() => {
              console.log('----' + this.$store.state)
            this.$store.dispatch('getCurrentArticle')
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
          simplemde.codemirror.on('change', () => {
            let value = simplemde.value()
            // 如果文章内容相同就不保存了
            if (this.$store.state.currentArticle.content === value) {
              return
            }
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
          this.articleContent = value
        })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../common/stylus/preview.styl'
  input,button,select,textarea
    outline:none
    border: none
  .editor-box
    position relative
    padding 15px
    text-align left
    input
      padding 7px
      width 350px
</style>
