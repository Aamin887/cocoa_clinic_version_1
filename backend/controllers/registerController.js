const bcypty = require('bcryptjs');
const User = require('../model/userModel')
const generateUsername = require('../utils/userNameGen')
const asyncHandler = require('express-async-handler');
const hashPassword = require('../utils/encrptPassword')
const tokenGenerator = require('../utils/tokenGen')

// @Des     register user 
// @Route   POST /api/user/register
// @Access  Public
const register = asyncHandler(async function (req, res) {

    const { title, firstName, middleName, lastName, department, employmentStatus, staffId, password1, password2 } = req.body;

    if (!title || !firstName && !lastName && !department && !employmentStatus && !password1 && !password2) {
        res.status(400);
        throw new Error('Must fill all form fields');
    }

    const userName = await generateUsername(firstName, lastName)

    console.log(userName)

    const existedUser = await User.findOne({ userName })

    if (existedUser) {
        res.status(400);
        throw new Error('User already exists');
    }

    if (password1 !== password2) {
        res.status(400);
        throw new Error('Passwords do not much');
    }

    const userData = {
        userName,
        title,
        firstName,
        lastName,
        middleName,
        department,
        staffId,
        employmentStatus,
        password: password1
    }

    const newUser = await User.create(userData);

    if (newUser) {
        res.status(201);
        res.json({
            _id: newUser._id,
            firstName: userData.firstName,
            lastName: userData.lastName,
            userName: userData.userName,
            token: await tokenGenerator(newUser._id)

        })
    } else {
        res.status(401);
        throw new Error('Unable to create new user');
    }
})

module.exports = {
    register
};