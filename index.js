const express = require('express');
//requirinig cookie-parser
const cookieParser = require('cookie-parser');

const app = express();



const port = 3000;

//placing mongoose setup
const db = require('./config/mongoose');

//reading through the posts request
app.use(express.urlencoded());
//we need to tell the app to use in the middleware(cookie)
app.use(cookieParser());

//requiring ejs-layouts
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);





//telling in which folder should the app lookout for static files
app.use(express.static('./assets'));

app.use('/',require('./routes'));

//setting up view engine
app.set('view engine','ejs');
app.set('views','./views');





app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: $(err)`);
    }
    console.log(`Server is running on the port: ${port}`);
});