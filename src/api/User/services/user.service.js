const User = require('../models/user.model');
const ErrorResponse = require('../../../utils/errorResponse');

exports.getUsers = async () => {
    return await User.find();
}

exports.deleteUser = async (id) => {
    const data = await User.findById(id);
    if (!data) {
        throw new ErrorResponse('User Not Found', 404);
    }
    await User.deleteOne({
        _id: id
    });
    return data;
}

exports.updateUser = async (id, data) => {
    let user = await User.findById(id);
    if (!user) {
        throw new ErrorResponse('User not found', 404);
    }
    user = await User.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });
    return user;
}