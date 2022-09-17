

// import the index route
const indexRouter = require('./routes/index')

const loginRouter = require('./routes/login')

const RegisterRouter = require('./routes/register')

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')





app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb',extended: false}))
app.listen('5000')

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/front', {useNewUrlParser : true})
const db = mongoose.connection
db.on('error', error => console.log(error))
db.on('open', () =>console.log('connected to the database'))

// tell the server to use this route
app.use('/', indexRouter)
app.use('/login', loginRouter)
app.use('/register', RegisterRouter)