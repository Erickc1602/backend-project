const mongoose = require ('mongoose')


const commentsSchema = new mongoose.Schema({
     author: {
        type: String
    },
    comment: {
        type: String
    }


}) 

const Comment = mongoose.model('comments', commentsSchema);
module.exports = Comment