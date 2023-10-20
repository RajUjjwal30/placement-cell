const express = require('express');
const router = express.Router();

//console.log('router loaded');

const userRoutes = require('./userRoutes');

router.get('/', function(req,res){
    res.end('<h1>App</h1>');
});


router.use('/users',userRoutes);


module.exports = router;