const mongoose = require ('mongoose')
const User = require ('./User')


const commentsSchema = new mongoose.Schema({
     author: {
       type: mongoose.Schema.Types.ObjectId, ref: User

    },
    comment: {
        type: String
    }


}) 

const Comment = mongoose.model('comments', commentsSchema);
module.exports = Comment