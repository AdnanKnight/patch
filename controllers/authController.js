/* External Packages */
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


/* Export Modules */
const userModel = require('../models/user-model')
const { generateToken } = require('../utils/generateToken')



const registerUser = async (req, res, next) => {
    try {
        let { fullname, email, password } = req.body

        let foundUser = await userModel.findOne({ email });
        if (foundUser) {
            return res.status(409).send("This email is already in use.");
        }
        let salt = await bcrypt.genSalt(10)
        let hash = await bcrypt.hash(password, salt)

        let user = await userModel.create({
            fullname,
            email,
            password: hash
        })

        let token = generateToken(user)
        res.cookie("token", token)

        res.send("User created successfully")
    }
    catch (err) {
        console.log(err.message)
    }
}

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send("User not found");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send("Incorrect Password");
        }

        const token = generateToken(user);
        res.cookie("token", token);
        res.redirect("/shop")

    } catch (err) {
        console.error("Login error:", err.message);
        res.status(500).send("Server error during login");
    }
};

const logOutUser = async (req, res, next) => {
    res.cookie("token", "")
    res.redirect("/")
}


module.exports = { registerUser, loginUser, logOutUser }