const passport = require('passport');
const User = require('../models/userSchema');

const LocalStrategy = require('passport-local').Strategy;

//Authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email'
},
//done is callback func which is reporting back to passport
function(email,password,done){
    //find the user and establish tje identity
    User.findOne({email : email},
        function(err,user){
            if(err){
                console.log(`Error in finding the user :${error}`);
                return done(err);
            }

            if(!user || user.password != password){
                console.log(`Invalid username/password`);

                // //done takes 2 arguments but in JS it can work with one as well
            //authentication has not been done so -- false
                return done(null,false);
            }
            //user found
            return done(null, user);
        })
}
));

//Serialize(this is an inbuilt function) user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    done(null, user.id);
});

//deserializing
passport.deserializeUser(function(id,done){
    User.findById(id, function(err,user){
        if(err){
            console.log(`Error in finding user ---> passport`);
            return done(err);
        }
        return done(null,user);
    });
});


module.exports = passport;