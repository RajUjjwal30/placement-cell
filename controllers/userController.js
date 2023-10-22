const User = require('../models/userSchema');



//--------GET Requests--------



module.exports.signUp = function(req,res){
    return res.render('signUp')
};

module.exports.signIn = function(req,res){
    return res.render('signIn')
};

module.exports.createUser = async function(req,res){
    const {name, email, password, confirmPassword } = req.body;
    try {
        if(password !== confirmPassword){
            console.log(`Password do not match!!`);
            return res.redirect('back');
        }
        const user = await User.findOne({email});

        if(user){
            console.log(`Email already exists`);
            return res.redirect('back');
        }

        const newUser = await User.create({
            name,
            email,
            password
        });

        await newUser.save();

        if(!newUser){
            console.log(`Error in creating user`);
            return res.redirect('back');
        }

        return res.redirect('/users/signIn');


    }catch(error){
        console.log(`Error in creating user : ${error}`);
        return res.redirect('back');
    }
};

//create session(sign-In)
module.exports.createSession = function(req,res){
    return res.redirect('/');
}

// //sign-Out
// module.exports.signout = function(req,res){
    
//     // req.logout(function(err){
//     //     if(err){return next(err);}
//     //     return res.redirect('/signIn');
//     // });
// };































































