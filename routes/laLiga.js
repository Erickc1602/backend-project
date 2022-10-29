var express = require('express');
var router = express.Router();

router.get('/laliga', function(req, res, next) {
  res.render('laLiga',);
});

module.exports = router;