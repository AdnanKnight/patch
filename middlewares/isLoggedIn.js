/* External Packages */
const jwt = require('jsonwebtoken')
const flash = require("connect-flash")

/* Export Modules*/
const userModel = require('../models/user-model')


const isLoggedIn = async (req, res, next) => {
    if (!req.cookies.token) {
        req.flash("error", "You will need to logIn First")
        return res.redirect("/")
    }

    try {
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY)
        let user = await userModel
            .findOne({ email: decoded.email })
            .select("-password")
        if (!user) {
            req.flash("Error", "User not found");
            return res.redirect("/");
        }

        req.user = user

        next()
    }
    catch (err) {
        req.flash("Error", "Something went wrong")
        res.redirect("/")
    }
}


module.exports = isLoggedIn