const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');



router.get('/signUp',userController.signUp);

router.get('/signIn',userController.signIn);





module.exports = router; 