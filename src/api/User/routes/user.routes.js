const Router = require('express');
const {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/user.controller.js');

const router = Router();

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;