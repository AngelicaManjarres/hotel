const express = require('express')
const morgan = require('morgan')
const session = require('express-session')
const cookies = require('cookie-parser')
const adminRouter = require('./router/admin')
const employeeRouter = require('./router/employee')
const receptionRouter = require('./router/reception')
const loginRouter = require('./router/login')
const cors = require('cors')

require('dotenv').config()

const app = express()


//Use cors
app.use(cors())

//Morgan middleware
app.use(morgan('dev'))

//Defining body parser as a json object
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//Defining routes for each type of user
app.use('/', loginRouter)
app.use('/admin', adminRouter)
app.use('/employees', employeeRouter)
app.use('/reception', receptionRouter)

//Session middleware. Will handle state
app.use(cookies())
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    cookie: { maxTime: 1000 * 60 * 60 * 24},
    resave: false
}))
  
app.listen(process.env.PORT, () => {
    console.log(process.env.PORT)
})