const mongoose = require('mongoose')

const ownerSchema = mongoose.Schema({
    /* Primary */
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: true
    },
    picture : {
        type : [String],
        default : [],
        required: true
    },
    gstin: {
        type: Number,
        required: true
    },

    /* Display Arrays */
    products: {
        type: Array,
        default: [],
    }
},
    {
        /*time stamps*/
        timestamps: true
    }
)


module.exports = mongoose.model('ownerModel', ownerSchema)