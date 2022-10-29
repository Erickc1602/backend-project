var express = require('express');
var router = express.Router();

router.get('/prem', function(req, res, next) {
  res.render('prem',);
});

module.exports = router;