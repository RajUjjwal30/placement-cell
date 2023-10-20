const User = require('../models/userSchema');


//--------GET Requests--------



module.exports.signUp = function(req,res){
    return res.render('signUp')
};

module.exports.signIn = function(req,res){
    return res.render('signIn')
};