// this file store the method for creating jsonwebtokens
const jwt = require('jsonwebtoken');
const secret = 'bcsAN22';

module.exports.createAccesstoken = (user) => {
	const data = {
		id : user._id,
		email: user.email,
		isAdmin: user.isAdmin
	};
	//Generate a JSON web token using the jwt's sign method
	//Generates the token using the form data and 
	return jwt.sign(data, secret,{})
}