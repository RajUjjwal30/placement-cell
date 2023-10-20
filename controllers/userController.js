const User = require('../models/userSchema');


//--------GET Requests--------

//render home page
module.exports.homePage = function(req,res){
    return res.render('home');
};