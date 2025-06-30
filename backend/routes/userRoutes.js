const user = require('../controllers/userController');
const Router = require('express').Router();

Router.get('/', user.getUserById);
Router.patch('/', user.updateUserById);
Router.delete('/', user.deleteUserById);

module.exports = Router;