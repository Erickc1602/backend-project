const express = require('express');
const router = express.Router();

router.get('/bundesliga', function(req, res, next) {
  res.render('bundesliga');
});

module.exports = router;
