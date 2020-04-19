const Router = require('express');
const {
    getUsers,
    updateUser,
    deleteUser,
} = require('../controllers/user.controller.js');
const {login} = require('../../../auth/controllers/auth.controller');

const router = Router();

router.route('/').get(getUsers);
router.route('/:id').put(updateUser).delete(deleteUser);
router.route('/admin').post(login);

module.exports = router;