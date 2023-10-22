const express = require('express');
//requirinig cookie-parser
const cookieParser = require('cookie-parser');

const app = express();



const port = 3000;

//placing mongoose setup
const db = require('./config/mongoose');

//used for session cookie and passport auth
const session = require('express-session');

const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

//reading through the posts request
app.use(express.urlencoded());
//we need to tell the app to use in the middleware(cookie)
app.use(cookieParser());

//requiring ejs-layouts
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);





//telling in which folder should the app lookout for static files
app.use(express.static('./assets'));



//setting up view engine
app.set('view engine','ejs');
app.set('views','./views');

//using express-session
//The session middleware handles all things for us, i.e., creating the session, setting the session cookie and creating the session object in req object. Whenever we make a request from the same client again, we will have their session information stored with us (given that the server was not restarted).
app.use(session({
    name: 'placement',
    //change the secret b4 deployment
    secret:"awesome",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/',require('./routes'));





app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: $(err)`);
    }
    console.log(`Server is running on the port: ${port}`);
});