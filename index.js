// load express for backend
const express = require(`express`)
const mongoose = require(`mongoose`)
//this allows us to controll the app's Cross Origin Resource Sharing
const cors = require('cors')

const courseRoutes = require('./routes/courseRoutes')

const app = express();
//we created an app variable that stores results of the function that initaializes our express application and allow us to access different methods that will make backend creation easy

mongoose.connect('mongodb+srv://admin:rememberthis31@sandbox.3op3d8w.mongodb.net/an22_sample_database?retryWrites=true&w=majority',{
	useNewUrlParser: true,
	useUnifiedTopology: true
});
mongoose.connection.once('open',()=> console.log('Now connected to MongoDB Atlas'));

//allows all resources to access our backend application
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//define the /users string to be included for all users routes defined in the 'user' route file
app.use('/Course', courseRoutes)

app.listen(process.env.PORT || 4000, () => {
	console.log(`API is now online on port ${process.env.PORT ||4000}`)
});