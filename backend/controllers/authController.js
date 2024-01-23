const User = require('../model/userModel');
const asyncHandler = require('express-async-handler');
const tokenGenerator = require('../utils/tokenGen');

// @Des     check user validated
// @Route   POST /api/user
// @Access  Public
const login = asyncHandler(async function (req, res) {

    const { userName, password } = req.body;

    const formattedUser = userName.toUpperCase()

    if (!userName && !password) {
        res.status(400);
        throw new Error('Fill in all form fields');
    }

    const existedUser = await User.findOne({ userName });

    if (!existedUser) {
        res.status(404);
        throw new Error('account not found');
    }

    if (password === existedUser.password) {
        res.status(200);
        res.json({
            _id: existedUser._id,
            userName: existedUser.userName,
            firstName: existedUser.firstName,
            lastName: existedUser.lastName,
            token: await tokenGenerator(existedUser.id)
        })
    } else {
        res.status(404);
        throw new Error('check login credentials');
    }
});

module.exports = {
    login
};