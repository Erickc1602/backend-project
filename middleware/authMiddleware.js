const jwt = require ('jsonwebtoken')
const User = require('../models/User')

const requireAuth = (req,res, next) => {
    const token = req.cookies.jwt
}

// Check json web token exists 7 is verified
if(token){
 jwt.verify(token, 'wc secret', (err, decodedToken) => {
    if (err) {
        console.log(err.message)
        res.redirect('/login')
    }
    else{
        console.log(decodedToken)
        next()
    }
 })
}
else{
    res.redirect('/login')
}

//Check current user function
const checkUser = (req,res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'wc secret', async (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                next();
            }
            else{
                console.log(decodedToken)
                let use = await User.findById(decodedToken.id)
                res.locals.user = user;
                next();
            }
        })
    }
    else{

    }
}

module.exports = {requireAuth}