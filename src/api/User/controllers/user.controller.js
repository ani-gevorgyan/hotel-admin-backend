const User = require('../models/user.model');
const asyncHandler = require('../../Hotel/middleware/asyncHandler');

exports.createUser = asyncHandler(async (req, res, next) => {
    const user = await User.create({
        ...req.body
    });
    res.status(201).json({
        success: true,
        data: user
    });
});


exports.getUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find({});
    res.status(200).json({
        success: true,
        data: users,
        message: 'Loaded'
    });
});

exports.getUserById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findById({
        _id: id
    });
    if (!user) {
        throw new ErrorResponse('User not found', 404);
    }
    res.status(200).json({
        success: true,
        data: user
    });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findById({
        _id: id
    });
    if (!user) {
        throw new ErrorResponse('User Not Found', 404);
    } else {
        await User.deleteOne({
            _id: id
        });
    }
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
    } else {
        await User.findByIdAndUpdate({
            _id: id
        }, {
            ...req.body
        }, {
            runValidators: true
        });
    }
    res.status(200).json({
        success: true,
        data: req.body,
        message: 'Updated'
    });
});