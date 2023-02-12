var express = require('express');
const User = require('../models/User');
var router = express.Router();
const Comment = require ('../models/Comments')
const commentController = require ('../controllers/commentsController')


router.post('/comments', commentController.comments_post);

router.post('/edit',)

router.get('/', async function(req, res, next) {
  comments= Comment.find({})
  .populate('author', 'username')
  .exec((err, comments) => {
    if (err) {
      console.error(err);
    } else {
     res.render('index', { comments });
    }
  });


  });



module.exports = router;
