//importing the modules.
const express = require('express')
const router = express.Router()





//when the server gets this url, it should display something

router.get('/login',(req,res) =>{
	//render a view page from the views folder
	res.render('login')
})







router.post('/login',(req, res) =>{
	//check for login details.
})




//export the module
module.exports = router