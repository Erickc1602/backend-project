var express = require('express');
var router = express.Router();
const stadiumController = require ('../controllers/stadiumController');
const Stadiums = require('../models/Stadiums');



//DISPLAY
router.get('/stadiumscreate', async function(req, res, next) {
    
    Stadiums.find({}, function (err, stadium) {
        res.render ('stadiumsCreate' , {stadium})
        
    });
});
 
//Create
router.post('/stadiumscreate', stadiumController.stadiums_post)

//update
router.get('/stadiumscreate', stadiumController.find)
// router.put('/stadiumcreate/:id', stadiumController.stadiums_update)




    //STADIUMS PAGE
router.get('/stadiums', function (req, res) {
    
    Stadiums.find({}, function (err, stadium) {
        res.render ('stadiums' , {stadium})
        
    });
    

})

module.exports = router;