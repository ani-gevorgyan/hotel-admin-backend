const User = require('../models/user.model');
const asyncHandler = require('../../../middleware/asyncHandler');
const ErrorResponse = require('../../../utils/errorResponse');
const {
    getUsers,
    deleteUser,
    updateUser
} = require('../services/user.service');

exports.getUsers = asyncHandler(async (req, res, next) => {
    const users = await getUsers();
    res
        .status(200)
        .json({
            success: true,
            data: users
        });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const user = await deleteUser(id);
    res.status(200).json({
        success: true,
        data: user
    });
});

exports.updateUser = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const user = await updateUser(id, req.body);
    res.status(200).json({
        success: true,
        data: user
    });
});