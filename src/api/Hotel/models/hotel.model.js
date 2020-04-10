const {
    Schema,
    model
} = require('mongoose');

const active = 'active';
const inactive = 'inactive';

const hotelSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
    },
    address: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
    },
    roomCount: {
        type: Number,
        required: true,
        min: 1,
        max: 7
    },
    status: {
        type: String,
        required: true,
        enum: [active, inactive],
        default: 'active',
    },
    price: {
        type: Number,
        required: true,
        min: 10,
        max: 1000
    },
});

module.exports = model('Hotel', hotelSchema);