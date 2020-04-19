const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../api/user/models/user.model');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');

module.exports = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.token) {
        token = req.cookies.token;
    }
    if (!token) {
        return next(new ErrorResponse('Not authorized for this route', 401));
    }
    console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj', token);
    try {
        const decoded = jwt.verify(token, config.token.key);
        const id = decoded.id;
        const admin = await User.findById(id);
        req.user = admin;
        next();
    } catch (err) {
        return next(err);
    }
});