//improting the modules.
const express = require('express')
const router = express.Router()






//when the server gets this url, it should display something

router.get('/register',(req,res) =>{
	//render a view page from the views folder
	res.render('register')
})







router.post('/register',(req, res) =>{
	// check for the register details
})





//export the module
module.exports = router