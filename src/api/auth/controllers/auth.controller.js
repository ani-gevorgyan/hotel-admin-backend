const Admin = require('../../admin/models/admin.model');
const asyncHandler = require('../../../middleware/asyncHandler');
const ErrorResponse = require('../../../utils/errorResponse');
const config = require('../../../config/config');
const { login } = require('../services/auth.service');

exports.login = asyncHandler(async (req, res, next) => {
    const admin = await login(req.body, next);
    sendTokenResponse(admin, 200, res);
});


exports.logout = asyncHandler(async (req, res, next) => {
    res
        .status(200)
        .cookie('token', 'none', {
            expires: new Date(Date.now() + 10 * 1000),
            httpOnly: true
        })
        .json({
            success: true,
            data: 'none'
        });
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