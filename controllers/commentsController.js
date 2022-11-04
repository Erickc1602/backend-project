const Comment = require ('../models/comments');


// send Comment

module.exports.comments_post = async (req, res) => {
    const {author, comment} = req.body;
    
    try{
        const comments = await Comment.create ({author, comment})
    res.status(201).json(comments)

    }
    catch(err){
        console.log(err)
        res.status(400).send('comment not send')

    }
}

