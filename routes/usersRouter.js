/* External Packages */
const express = require('express')


/* Internal Packages */


/* Export Modules */
const userModel = require('../models/user-model')


/* Variables */
const router = express.Router()


/* Routes*/
router.get('/' , (req, res, next) => {
    res.send('Hello World : Users')
})








module.exports = router