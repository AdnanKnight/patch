
/* External Packages */
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const dbgr = require('debug')("development:mongoose")


/* Internal Packages */
const path = require('node:path')


/* Exports Modules*/
const { mongoDBUrl, Port } = require('./config/mongoose-config')

const ownersRouter = require('./routes/ownersRouter')
const usersRouter = require('./routes/usersRouter')
const productsRouter = require('./routes/productsRouter')


/* Variables */
const app = express()


/* Middlewares */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))


/* Engines */
app.set("view engine", "ejs")


/* Secondary routes */
app.use("/owners", ownersRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)


/* Primary routes */
app.get('/', (req, res, next) => {
    res.send('Hello World')
})







mongoose
    .connect(mongoDBUrl)
    .then(() => {
        app.listen(Port, () => {
            dbgr('MongoDb is successfully connected : 🚀')
            dbgr(`The app is listening on PORT : ${Port} ✅`)
        })
    })
    .catch((err) => {
        dbgr(err)
    })
