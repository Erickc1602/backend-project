var express = require('express');
const User = require('../models/User');
var router = express.Router();

router.get('/', async function(req, res, next) {


  res.render('index');
});

module.exports = router;
