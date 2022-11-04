var express = require('express');
const User = require('../models/User');
var router = express.Router();
const comment = require ('../models/comments')
const commentController = require ('../controllers/commentsController')

router.post('/', commentController.comments_post);

router.get('/', async function(req, res, next) {
  
  comment.find({}, function (err, comments) {
    res.render ('index' , {comments}) 
});
  
  });

module.exports = router;
