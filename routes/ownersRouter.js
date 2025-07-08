/* External Packages */
const express = require('express')
const ownerModel = require('../models/owner-model')

/* Internal Packages*/


/* Variables */
const router = express.Router()


console.log(process.env.NODE_ENV)

router.get('/', (req, res, next) => {
    res.send('Hello World : Owners')
})

/* Owner Creation Only available in Dev Phase*/
if (process.env.NODE_ENV === "development") {
    router.post('/create', async (req, res, next) => {

        let NumOwners = await ownerModel.find({})
        if (NumOwners.length > 1) {
            return res
                .status(503)
                .send("You don't have the perms to make a owner.")
        }

        let { fullname, email, password, number } = req.body

        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,
            number
        })

        res.send(createdOwner)
    })
}







module.exports = router