var express = require('express');
const User = require('../models/User');
var router = express.Router();
const comment = require ('../models/Comments')
const commentController = require ('../controllers/commentsController')


router.post('/comments', commentController.comments_post);

router.post('/edit',)

router.get('/', async function(req, res, next) {
  

const comments = await comment.find({})
  
  
  res.render ('index', {comments})

  });



module.exports = router;
