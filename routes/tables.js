var express = require('express');
const teamsTable = require('../models/tablesInf');
var router = express.Router();

router.get('/tables', function(req, res, next) {
  console.log (teamsTable)
  res.render('tables');
});

module.exports = router;
