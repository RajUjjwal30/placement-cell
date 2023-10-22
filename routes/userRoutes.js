const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');



router.get('/signUp',userController.signUp);

router.get('/signIn',userController.signIn);






router.post('/create',userController.createUser);

router.post('/create-session', userController.createSession);

//router.get('/signout', userController.signout);





module.exports = router; 