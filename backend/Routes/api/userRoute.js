const express = require('express');
const router = express.Router();
const protect = require('../../middlewares/authMiddle')

const {
    getInfo,
    updateInfo,
    getAllUsers,
    changePassword
} = require('../../controllers/userController');

router.route('/info/:id').get(protect, getInfo);
router.route('/users').get(protect, getAllUsers);
router.route('/update/:id').put(protect, updateInfo);
router.route('/password').put(protect, changePassword);

module.exports = router;