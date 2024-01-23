const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../model/userModel')

const protect = asyncHandler(async function (req, res, next) {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
            req.user = await User.findById(decoded.id).select('-password')
            next();
        } catch (error) {
            res.status(404);
            throw new Error('not authorised')
        }
    }
    if (!token) {
        res.status(404);
        throw new Error('Not authorised, no token!!');
    }
});

module.exports = protect;