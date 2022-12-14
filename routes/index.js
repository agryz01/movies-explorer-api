const router = require('express').Router();
const {
  createUser,
  login,
  logout,
} = require('../controllers/users');
const { validatCreateUser, validatAuthUsers } = require('../utils/validations');
const auth = require('../middlewares/auth');
const notFoundController = require('../controllers/notFoundController');

router.post('/signin', validatAuthUsers, login);
router.post('/signup', validatCreateUser, createUser);

router.use(auth);

router.use('/users', require('./users'));
router.use('/movies', require('./movies'));

router.post('/signout', logout);

router.use('*', notFoundController);

module.exports = router;
