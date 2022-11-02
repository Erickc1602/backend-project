const Stadium = require('../models/stadiums');


 //CREATE STADIUMS DATA

 module.exports.stadiums_post = async (req, res) => {
    const {stadiumName, capacity, pictureUrl} = req.body;
    
    try{
        const stadium = await Stadium.create ({stadiumName, capacity, pictureUrl})
    res.status(201).json(stadium)

    }
    catch(err){
        console.log(err)
        res.status(400).send('stadium not send')

    }
}


