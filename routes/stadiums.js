var express = require('express');
var router = express.Router();
const stadiumController = require ('../controllers/stadiumController');
const Stadiums = require('../models/stadiums');


router.post('/stadiumscreate', stadiumController.stadiums_post)
router.get('/stadiumscreate', async function(req, res, next) {
res.render('stadiumsCreate');});


//STADIUMS PAGE
router.get('/stadiums', function (req, res) {

    Stadiums.find({}, function(err, stadium) {
        res.render('stadiums', {
            stadium
        })
    })

})

module.exports = router;