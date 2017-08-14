/**
 * Created by lau on 2017/5/18.
 */
// import * as $ from '../controllers/articles_controller.js'
var {createArticle} =  require('../controllers/articles_controller.js')

export default async(apiRoutes) => {
  apiRoutes.post('/articles',createArticle)
}
