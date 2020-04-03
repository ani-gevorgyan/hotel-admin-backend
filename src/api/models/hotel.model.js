const {
    Schema,
    model
} = require('mongoose');

const hotelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    roomCount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    hotelId: {
        type: String
    }
});

module.exports = model('Hotel', hotelSchema);