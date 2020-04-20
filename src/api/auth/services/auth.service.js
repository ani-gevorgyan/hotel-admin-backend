const Admin = require('../../admin/models/admin.model');
const ErrorResponse = require('../../../utils/errorResponse');

exports.login = async (data, next) => {
    const { email, password } = data;
    if (!email || !password) {
        return next(new ErrorResponse('Email and Password are required', 400));
    }
    const admin = await Admin.findOne({ email });
    if (!admin) {
        return next(new ErrorResponse('Invalid credentials!', 401));
    }
    const isMatchPassword = await admin.isMatchPassword(password);
    if (!isMatchPassword) {
        return next(new ErrorResponse('Invalid credentials!', 401));
    }
    return admin;
}