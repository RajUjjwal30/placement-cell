const express = require('express');
const router = express.Router();

//console.log('router loaded');

const userRoutes = require('./userRoutes');

const homeController = require('../controllers/homeController');
router.get('/',homeController.homePage);


router.use('/users',userRoutes);


module.exports = router;