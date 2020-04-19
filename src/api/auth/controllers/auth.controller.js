const Admin = require('../../admin/models/admin.model');
const asyncHandler = require('../../../middleware/asyncHandler');
const ErrorResponse = require('../../../utils/errorResponse');
const config = require('../../../config/config');

exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorResponse('Email and password are required', 401));
    }

    const admin = await Admin.findOne({
        email
    });

    if (!admin) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    const isMatchPassword = await admin.isMatchPassword(password);

    if (!isMatchPassword) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }
   sendTokenResponse(admin, 200, res);
});


exports.logout = asyncHandler(async (req, res, next) => {
    res
        .status(200)
        .cookie('token', 'none', {
            expires: new Date(Date.now() + 10 * 1000),
            httpOnly: true
        })
        .json({success: true, data: {}});
});

sendTokenResponse = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    
    const options = {
        expires: new Date(Date.now() + config.token.expireTime * 24 * 60 * 60 * 1000),
        httpOnly: true
    }
    res
        .status(statusCode)
        .cookie('token', token, options)
        .json({
            success: true,
            token
        });
}