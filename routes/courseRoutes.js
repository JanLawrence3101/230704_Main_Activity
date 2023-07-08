const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseControllers')

router.post('/checkEmail',(req,res)=> {
	courseController.checkEmailExists(req.body)
	.then(resultFromController => res.send(resultFromController));
});

// route for user registration
router.post('/register', (req,res)=>{
	courseController.registerUser(req.body)
	.then(resultFromController => res.send(resultFromController));
});

// route for user authentication
router.post('/login',(req,res)=>{
	courseController.loginUser(req.body)
	.then(resultFromController => res.send(resultFromController));
});

// route for retrieving user details
router.post('/details',(req,res)=>{
	courseController.getProfile({ userId : req.body.id})
	.then(resultFromController => res.send(resultFromController))
})
	// provide the user's ID for the getProfile controller method
module.exports = router;