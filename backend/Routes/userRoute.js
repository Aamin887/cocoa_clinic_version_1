const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddle')

const {
    checkUser,
    getInfo,
    registerUser,
    updateInfo
} = require('../controllers/userController');

router.route('/').post(checkUser);
router.route('/register').post(registerUser);
router.route('/info').get(protect, getInfo);
router.route('/update').put(protect, updateInfo);

module.exports = router;