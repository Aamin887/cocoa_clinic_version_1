const bcypty = require('bcryptjs');
const User = require('../model/userModel')
const generateUsername = require('../utils/userNameGen')
const asyncHandler = require('express-async-handler');
const hashPassword = require('../utils/encrptPassword')
const tokenGenerator = require('../utils/tokenGen')

// @Des     check user validated
// @Route   POST /api/user
// @Access  Public
const checkUser = asyncHandler(async function(req, res){

    const {userName, password} = req.body;

    if(!userName && !password){
        res.status(400);
        throw new Error('Fill in all form fields');
    }

    const existedUser = await User.findOne({userName});

    if(!existedUser){
        res.status(400);
        throw new Error('User does not exist yet, Register')
    }

    if(password === existedUser.password){
        res.status(200);
        res.json({
            _id: existedUser._id,
            userName: existedUser.userName,
            firstName: existedUser.firstName,
            lastName: existedUser.lastName,
            token: await tokenGenerator(existedUser.id)
        })
    }else{
        res.status(404);
        throw new Error('check login credentials');
    }
});


// @Des     register user 
// @Route   POST /api/user/register
// @Access  Public
const registerUser = asyncHandler(async function(req, res){

    const {title, firstName, middleName, lastName, department, employmentStatus, staffId, password1, password2} = req.body;

    if(!title || !firstName && !lastName && !department && !employmentStatus && !password1 && !password2 ){
        res.status(400);
        throw new Error('Must fill all form fields');
    }

    const userName = await generateUsername(firstName, lastName)

    console.log(userName)

    const existedUser = await User.findOne({userName})
    const existedUserUser = await User.findOne({staffId})

    if(existedUser && existedUserUser){
        res.status(400);
        throw new Error('User already exists');
    }

    if(password1 !== password2){
        res.status(400);
        throw new Error('passwords do not much');
    }

    const userData = {
        userName,
        title,
        firstName,
        lastName,
        middleName,
        department,
        employmentStatus,
        staffId,
        password: password1
    }

    const newUser = await User.create(userData);

    if(newUser){
        res.status(201);
        res.json({
            _id: newUser._id,
            firstName: userData.firstName,
            lastName: userData.lastName,
            userName: userData.userName,
            token:await tokenGenerator(newUser._id)

        })
    }else{
        res.status(401);
        throw new Error('Error creating new user');
    }
})

// @Des     Get user info
// @Route   GET /api/user/info
// @Access  Private
const getInfo = asyncHandler(async function(req, res){
    const user = req.user

    const userInfo = await User.findById(user._id)

    res.json(userInfo);
})


// @Desc     Update user info by user
// @Route   GET /api/user/update
// @Access  Private
const updateInfo = asyncHandler(async function(req, res){
    const user = req.user;

    const formData = req.body

    const userInfo = await User.findByIdAndUpdate(user._id, 
        formData
    , {new: true})

    res.status(200).json(userInfo);
})


// @Desc     Update user info by user
// @Route   GET /api/user/update
// @Access  Private
const changePassword = asyncHandler(async function(req, res){

    const {staffId, newPassword} = req.body

    const userInfo = await User.findOneAndUpdate({staffId}, {password: newPassword}, {new: true})

    res.status(200).json(userInfo);
})


module.exports = {
    checkUser,
    getInfo,
    registerUser,
    updateInfo,
    changePassword
}