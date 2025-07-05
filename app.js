/* External Packages */
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

/* Internal Packages */
const path = require('node:path')

/* Exports Modules*/
const { mongoDBUrl , Port } = require('./config/mongoose-config')


/* Variables */
const app = express()

/* Middlewares */
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(cookieParser())
app.use(express.static(path.join( __dirname , "public")))

/* Engines */
app.set("view engine" , "ejs")


/* Primary routes */
app.get('/' , (req, res, next) => {
    res.send('Hello World')
})








mongoose
    .connect(mongoDBUrl)
    .then(() => {
        app.listen(5555 , () => {
            console.log('MongoDb is successfully connected : 🚀')
            console.log('The app is listening on PORT : 5555 ✅')
        })
    })
    .catch((err) => {
        console.log(err)
    })
