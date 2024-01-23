const express = require('express');
const {
    adminDash,
    loginAdmin,
    registerAdmin,
    updateInfo
} = require('../../controllers/adminController')
const protect = require('../../middlewares/adminAuth')


const router = express.Router()

router.route('/').post(loginAdmin)
router.route('/register').post(registerAdmin)
router.route('/update/user').put(protect, updateInfo)

module.exports = router