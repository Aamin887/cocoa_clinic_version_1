const authController = require('../controllers/authController')
const expres = require('express');
const router = expres.Router();

router.route('/')
    .post(authController.login)

module.exports = router;