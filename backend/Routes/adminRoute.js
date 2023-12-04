const express = require('express');
const {
    adminDash,
    loginAdmin,
    registerAdmin,
    updateStatus,
    noticeUser
} = require('../controllers/adminController')
const protect = require('../middlewares/adminAuth')


const router = express.Router()

router.route('/').post(loginAdmin)
router.route('/create').post(registerAdmin)
router.route('/users').get(protect, adminDash)
router.route('/user/:id').put(protect, updateStatus)
router.route('/updateuser/:id').put(protect, noticeUser)

module.exports = router