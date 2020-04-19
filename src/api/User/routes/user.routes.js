const Router = require('express');
const {
    getUsers,
    updateUser,
    deleteUser,
} = require('../controllers/user.controller.js');
const auth = require('../../../middleware/checkAuth.middleware');

const router = Router();

router.route('/').get(auth, getUsers);
router.route('/:id').put(auth, updateUser).delete(auth, deleteUser);

module.exports = router;