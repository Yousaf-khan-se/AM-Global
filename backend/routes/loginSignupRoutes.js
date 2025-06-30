const router = require('express').Router();
const login = require('../controllers/loginController');
const user = require('../controllers/userController');
const authentication = require('../middlewares/authentication');


router.post('/signup', user.createUser);
router.post('/login', login.login);
router.post('/forget-password', login.forgetPassword);
router.post('/reset-password', login.resetPassword);
router.post('/logout', authentication, login.logout);

module.exports = router;