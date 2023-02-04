const Stadium = require('../models/Stadiums');


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

//UPDATE 

exports.find = (req,res) =>{
    Stadium.find()
    .then(stadium => {
        res.send(stadium)
    })
    .catch(err => {
        res.status(500).send('ERROR')
    })

    module.exports.stadiums_update = (req,res) => {
        if (req.body){
            return res
            .status(400)
                .send('DATA TO UPDATE CANNOT Be empty')
        }
        const id = req.params.id;

    }


}

