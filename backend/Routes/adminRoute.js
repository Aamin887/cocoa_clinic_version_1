const express = require('express');
const {
    adminDash,
    loginAdmin,
    registerAdmin,
    updateInfo
    // updateStatus,
    // noticeUser
} = require('../controllers/adminController')
const protect = require('../middlewares/adminAuth')


const router = express.Router()

router.route('/').post(loginAdmin)
router.route('/create').post(registerAdmin)
router.route('/updateuser').put(protect, updateInfo)
// router.route('/user/:id').put(protect, updateStatus)
// router.route('/updateuser/:id').put(protect, noticeUser)

module.exports = router