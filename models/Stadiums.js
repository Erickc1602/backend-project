const mongoose = require('mongoose'); 

const stadiumsSchema = new mongoose.Schema ({
    stadiumName: {
        type: String
    },
    capacity: {
        type: String
    },
    pictureUrl: {
        type: String
    }

})






const Stadiums = mongoose.model('stadiums', stadiumsSchema );
    module.exports = Stadiums;