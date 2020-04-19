const User = require('../../api/user/models/user.model');
const asyncHandler = require('../../middleware/asyncHandler');
const ErrorResponse = require('../../utils/errorResponse');
const {
    sendTokenResponse
} = require('../../middleware/sendTokenResponse');

exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorResponse('Email and password are required', 401));
    }

    const admin = await User.findOne({
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
