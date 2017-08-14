/**
 * Created by lau on 2017/5/18.
 */
var Article = require('../models/article.js')
const fn = () => {}
console.log('d')
module.exports = function (apiRoutes) {
  apiRoutes.get('/article/getArticle', (req, res) => {
    Article.find(null, (err, doc) => {
      if (err) {
        console.log(err)
      } else if (doc) {
        res.send(doc)
      }
    })
  }),
  apiRoutes.get('/article/getOneArticle', (req, res) => {
    console.log(JSON.stringify("*****************"+JSON.stringify(req.query)))
    Article.findById(req.query.id, (err, doc) => {
      if (err) {
        console.log(err)
      } else if (doc) {
        res.send(doc)
      }
    })
  }),
  apiRoutes.post('/article/createArticle', (req, res) => {
    console.log(JSON.stringify(req.body.tags))
    const article = {
      title: req.body.title,
      content: req.body.content,
      publish: req.body.publish,
      abstract: req.body.abstract
    }
    console.log(JSON.stringify(article))

    Article(article).save((err,doc) => {
      if (err){

      }else if (doc){
        res.send(doc)
      }
    })
    Article().populate();

  })
}

// export async function createArticle(ctx) {
//
//     const article = {
//       title : 'llala'
//     }
//     new Article.Article(article).save()
//     ctx.body = {
//       success: true,
//       article
//     }
// }
