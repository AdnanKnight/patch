/* External Packages */
const express = require('express')

/* Internal Packages */


/* Export Modules */
const userModel = require('../models/user-model')


/* Controllers*/
const { registerUser, loginUser, logOutUser } = require('../controllers/authController')


/* Variables */
const router = express.Router()


/* Routes*/
router.get('/', (req, res, next) => {
    res.send('Hello World : Users')
})

router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/logout', logOutUser)


module.exports = router