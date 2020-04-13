const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.generateToken = async (res, id, next) => {
    try {
        const token = jwt.sign({
            id
        }, config.token.key, {
            expiresIn: '10h'
        });
        res.set({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Expose-Headers': 'authorization',
            authorization: token,
        }).json({
            success: true
        });
    } catch (err) {
        return next(err)
    }
}