const User = require('../models/user.model');
const ErrorResponse = require('../../../utils/errorResponse');

class UserService {
    async getUsers() {
        return User.find();
    }

    async deleteUser(id) {
        const user = await User.findById(id);
        if (!user) {
            throw new ErrorResponse('User not found', 404);
        }
        await User.deleteOne({
            _id: id
        });
        return user;
    }

    async updateUser(id, data) {
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
}

const userService = new UserService();
module.exports = userService;