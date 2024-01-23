const registerController = require('../controllers/registerController')
const expres = require('express');
const router = expres.Router();

router.route('/')
    .post(registerController.register)

module.exports = router;