const User = require('../model/userModel')
const asyncHandler = require('express-async-handler');

// @Des     Get user info
// @Route   GET /api/user/info
// @Access  Private
const getInfo = asyncHandler(async function (req, res) {
    const user = req.user
    const userInfo = await User.findById(user._id)
    res.json(userInfo);
})

// @Des     Get users
// @Route   GET /api/user/users
// @Access  Private
const getAllUsers = asyncHandler(async function (req, res) {
    const userInfo = await User.find({})
    res.json(userInfo);
})

// @Desc     Update user info by user
// @Route   GET /api/user/update
// @Access  Private
const updateInfo = asyncHandler(async function (req, res) {

    const formData = req.body

    const userName = formData?.userName
    console.log(formData)
    const foundUser = await User.find({ userName })
    const _id = await foundUser[0]._id
    const userInfo = await User.findByIdAndUpdate(_id,
        formData
        , { new: true })

    res.status(200).json(userInfo);
})

// @Desc     Change user password
// @Route   GET /api/user/update
// @Access  Private
const changePassword = asyncHandler(async function (req, res) {

    const { userName, newPassword } = req.body

    const userInfo = await User.findOneAndUpdate({ userName }, { password: newPassword }, { new: true })

    res.status(200).json(userInfo);
})

module.exports = {
    getInfo,
    updateInfo,
    changePassword,
    getAllUsers
}