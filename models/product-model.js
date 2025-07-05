const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    /* Primary */
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    discount: {
        type: Number,
        default: 0,
        min: 0
    },
    image: {
        type: [String],
        default: [],
        required: true
    },

    /* Styles */
    textcolor: {
        type: String,
        required: true
    },
    panelcolor: {
        type: String,
        required: true
    },
    bgcolor: {
        type: String,
        required: true
    }
},
    {
        /* Time Stamps */
        timestamps: true
    }
)


module.exports = mongoose.model('productModel', productSchema)