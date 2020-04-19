const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const asyncHandler = require('../../../middleware/asyncHandler');
const ErrorResponse = require('../../../utils/errorResponse');

exports.getUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find({
        type: 'user'
    });
    res
        .status(200)
        .json({
        success: true,
        data: users
    });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findById({
        _id: id
    });
    if (!user) {
        throw new ErrorResponse('User Not Found', 404);
    }
    await User.deleteOne({
        _id: id
    });
    res.status(200).json({
        success: true,
        data: 'User Deleted'
    });
});

exports.updateUser = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findById({
        _id: id
    });
    if (!user) {
        throw new ErrorResponse('User Not Found', 404);
    }
    await User.findByIdAndUpdate({
        _id: id
    }, {
        ...req.body
    }, {
        runValidators: true
    });
    res.status(200).json({
        success: true,
        data: req.body
    });
});
