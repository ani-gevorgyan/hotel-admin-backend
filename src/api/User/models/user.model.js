const {
    Schema,
    model
} = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../../config/config');

const UserSchema = new Schema({
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
        maxlength: 256
    }
});

UserSchema.methods.isMatchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({id: this._id}, config.token.key, { expiresIn: '1d' });
}

module.exports = model('User', UserSchema);;