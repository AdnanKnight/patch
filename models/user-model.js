const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    /* Primary */
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    /* Secondary */
    contactnumber: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
    },

    /* Display Arrays */
    cart: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    }
},
    {
        /* Time Stamps*/
        timestamps: true
    }
)


module.exports = mongoose.model('userModel', userSchema)