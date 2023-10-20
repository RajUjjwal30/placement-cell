//requiring ongoose after installation

const mongoose = require('mongoose');
//const router = require

mongoose.connect('mongodb://localhost/placement-cell');

const db = mongoose.connection;

//when ther is any error when connecting
db.on('error',console.error.bind(console,"Error connecting to the MongoDB"));
//console.error = displays my console like an error

//when connected
db.once('open',function(){
    console.log('Connected to the database :: MongoDB');
});

module.exports = db;