/* External Packages */
const express = require('express')
const flash = require("connect-flash")

/* Internal Packages*/


/* Export Modules */
const isLoggedIn = require('../middlewares/isLoggedIn')


/* Variables */
const router = express.Router()


/* Routes*/
router.get('/' , (req, res, next) => {
    let error = req.flash("error")
    res.render("index", {error})
})

router.get("/shop" , isLoggedIn , (req, res, next) => {
    res.render("shop")
})






module.exports = router