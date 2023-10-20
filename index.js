const express = require('express');
//placing mongoose setup
const db = require('./config/mongoose');
const app = express();



const port = 3000;

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