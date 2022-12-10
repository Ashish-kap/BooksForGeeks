const express = require('express')
const bookRoute = require('./routes/bookRoute')
const viewRoutes = require('./routes/viewRoutes')
const path = require('path')
const app = express()

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));


//ROUTES
app.use('/',viewRoutes)
app.use('/api/books',bookRoute)
module.exports = app;


