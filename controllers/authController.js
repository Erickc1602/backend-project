const User = require ('../models/User')
const jwt = require ('jsonwebtoken')

// HANDLE ERRORS
const handleErrors =(err) => {
    console.log(err.message, err.code)
let errors = {username: '', email: '', password: ''}

//incorrect email 
if (err.message === 'incorrect email'){
    errors.email = 'that email is not registered'
}

//incorrect password 
if (err.message === 'incorrect password'){
    errors.email = 'that password is incorrect'
}

//duplicate error code
if (err.code ===11000) {
    errors.username ='that username is already in use'
    errors.email = 'that email is already registered';
    return errors;
}

// validation errors
if (err.message.includes('user validation failed')){
Object.values(err.errors).forEach(({properties}) => {
    errors[properties.path] = properties.message
    
});
}
return errors;
};

//CREATE JWD ToKEN
const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, 'wc secret', {
        expiresIn: maxAge
    })
}

///////////////
module.exports.signup_get = (req, res) => {
     res.render('signup')
 }

 module.exports.login_get = (req, res) => {
     res.render('login')
 }

 module.exports.signup_post = async (req, res) => {
    const {username, email, password } = req.body;
    
  
    try {
      const user = await User.create({ username, email, password });
      const token = createToken(user._id);
      res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000})
      res.status(201).json({user: user._id})
    }
    catch(err) {
      const errors = handleErrors(err);
      res.status(400).json({ errors });
    }
    
 }

 module.exports.login_post = async (req, res) => {
    const { email, password} = req.body

    try{ 
        const user = await User.login(email, password)
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000})
        res.status(200).json({ user: user._id})
    }
    catch(err){
        const errors = handleErrors(err)
        res.status(400).json({ errors})

    }
 }

 module.exports.logout_get = (req,res) => {
    res.cookie ('jwt', '', {maxAge: 1});
    res.redirect('/')

 }


