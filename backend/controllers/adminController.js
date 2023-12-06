const bcrypt = require('bcryptjs');
const tokenGenerator = require('../utils/tokenGen')
const hashPassword = require('../utils/encrptPassword')
const Admin = require('../model/adminModel');
const User = require('../model/userModel')
const asyncHandler = require('express-async-handler');

// @Des     Login admin
// @Route   POST /api/admin
// @Access  Public
const loginAdmin = asyncHandler(async function(req, res){
    const {userName, password} = req.body;

    if(!userName && !password){
        res.status(400)
        throw new Error('fill all form fields');
    }

    const existUser = await Admin.findOne({userName})

    if(existUser && await bcrypt.compare(password, existUser.password)){
        res.json({
            _id: existUser._id,
            userName: existUser.userName,
            token: await tokenGenerator(existUser._id)
        })
    }else{
        res.status(400);
        throw new Error('incorrect credentials');
    }
});

// @Desc    create an admin account
// @Route   POST /api/admin/create
// @Access  Public
const registerAdmin = asyncHandler(async function(req, res){
    const {userName, password1, password2 } = req.body;

    if(!userName && !password1 && !password2){
        res.status(400)
        throw new Error('fill all form fields');
    }

    const existUser = await Admin.findOne({userName})

    if(existUser){
        res.status(400);
        throw new Error('user already exist');
    }

    if(password1 !== password2){
        res.status(400);
        throw new Error('passwords do not match');
    }

    const hash = await hashPassword(password1)

    const newAdmin = await Admin.create({
        userName,
        password: hash
    })

    res.json({
        _id: newAdmin._id,
        userName: newAdmin.userName,
        token:await tokenGenerator(newAdmin._id)
    })
});

// ====

// @Des     Admin dashboard with all users displayed
// @Route   Get /api/admin/dashboard
// @Access  Private
const adminDash = asyncHandler(async function(req, res){
    const {admin} = req

    const allUsers = await User.find({})
    res.json({
        msg: allUsers,
        admin
    })
});

// @Desc    Admin update user with information
// @Route   Get /api/admin/user
// @Access  Private
const updateStatus = asyncHandler(async function(req, res){
    const {id} = req.params

    const {text} = req.body

    const user = await User.findById({_id: id})

    if(!user){
        res.status(400);
        throw new Error('user does not exist')
    }

    const updateUser = await User.findByIdAndUpdate({_id: id}, {text}, {new: true});

    res.status(200).json({
        msg: updateUser
    })
})

// @Desc    Admin update user status
// @Route   Get /api/admin/updateuser
// @Access  Private
const noticeUser = asyncHandler(async function(req, res){

    const {id} = req.params

    const {text} = req.body

    const user = await User.findById({_id: id})

    if(!user){
        res.status(400);
        throw new Error('user does not exist')
    }

    const msg = user.updates
    msg.push(text)

    const updateUser = await User.findByIdAndUpdate({_id: id}, {updates: msg}, {new: true});

    res.json({
        msg: msg
    })
})


const updateInfo = asyncHandler(async function(req, res){

    const formData = req.body

    const userInfo = await User.findByIdAndUpdate(formData.id, 
        formData
    , {new: true})

    res.status(200).json(userInfo);
})



module.exports = {
    adminDash,
    loginAdmin,
    registerAdmin,
    noticeUser,
    updateStatus,
    updateInfo
};