const router = require('express').Router();
const { validatUpdateUser } = require('../utils/validations');
const {
  updateUser,
  getUserMe,
} = require('../controllers/users');

router.get('/me', getUserMe);
router.patch('/me', validatUpdateUser, updateUser);

module.exports = router;
