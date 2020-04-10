const {
    Schema,
    model
} = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 40,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 40,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 16
    },
    confirmPassword: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 16
    },
    hotelId: {
        type: String
    }
}, {
    strict: "throw"
});

module.exports = model('User', userSchema);