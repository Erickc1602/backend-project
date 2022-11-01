const mongoose = require('mongoose'); 

const premSchema = new mongoose.Schema ({
    clubName: {
        type: String
    },
    matchesPlayed:{
        type: Number
    },
    wins: {
        type: Number
    },
    loses: {
        type: Number
    }, 
    points: {
        type: Number

    }

})



const teamsTable = mongoose.model('teamsTable', premSchema);
module.exports = teamsTable;