const router = require('express').Router();
const { validatUpdateUser } = require('../utils/validations');
const {
  updateUser,
  getUserMe,
  logout,
} = require('../controllers/users');

router.get('/me', getUserMe);
router.patch('/me', validatUpdateUser, updateUser);

router.post('/signout', logout);

module.exports = router;
