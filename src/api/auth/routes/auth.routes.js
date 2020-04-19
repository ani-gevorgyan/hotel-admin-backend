const Router = require('express');

const {login, logout} = require('../controllers/auth.controller');

const router = Router();

router.route('/login').post(login);
router.route('/logout').post(logout);

module.exports = router;