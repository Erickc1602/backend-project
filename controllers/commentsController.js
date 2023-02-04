const Comment = require("../models/Comments");
const jwt = require("jsonwebtoken");

// send Comment

module.exports.comments_post = async (req, res) => {
    
    try {
        // Verify JWT, and saving JWT, author comes from JWT
        const { comment } = req.body;
      const author = await jwt.verify(req.cookies.jwt, "wc secret").id;
      
      //create comment in DB
    const comments = await Comment.create({ author, comment });
    res.redirect("/");
  } catch (err) {
    
    res.status(400).send("Must be loged in to make a comment");
  }
};

