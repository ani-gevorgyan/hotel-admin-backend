const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const asyncHandler = require('../../../middleware/asyncHandler');
const ErrorResponse = require('../../../utils/errorResponse');
const {
    generateToken
} = require('../../../middleware/tokenGenerate.middleware');

exports.createUser = asyncHandler(async (req, res, next) => {
    if (req.body.password === req.body.confirmPassword) {
        const hashPassword = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create({
            ...req.body,
            password: hashPassword,
            confirmPassword: hashPassword
        });
        res.status(201).json({
            success: true,
            data: user
        });
    }
});

exports.getUsers = asyncHandler(async (req, res, next) => {
    const users = await User.find({
        type: 'user'
    });
    res.status(200).json({
        success: true,
        data: users
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

exports.loginAdmin = asyncHandler(async (req, res, next) => {
    const admin = await User.findOne({
        email: req.body.email,
        type: req.body.type
    });
    if (!admin) {
        return next(new ErrorResponse('Password or Email does not match', 401));
    }
    bcrypt.compare(req.body.password, admin.password, (err, result) => {
        if (err || !result) {
            return next(new ErrorResponse('Password or Email does not match', 401));
        }
        generateToken(res, admin._id, next);
    });


});