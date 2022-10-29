var express = require('express');
var router = express.Router();

router.get('/seriea', function(req, res, next) {
  res.render('serieA',);
});

module.exports = router;