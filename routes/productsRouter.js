/* External Packages */
const express = require('express')


/* Internal Packages*/


/* Export Modules */
const productModel = require('../models/product-model')


/* Variables */
const router = express.Router()


/* Routes*/
router.get('/' , (req, res, next) => {
    res.send('Hello World : Products')
})








module.exports = router