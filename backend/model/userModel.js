const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    userName: {
        type: String,
        required: [true, 'Please add a username'],
        unique:true
    },
    firstName: {
        type: String,
        required: [true, 'Please enter a firstname value']
    },
    middleName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        required: [true, 'Please enter a lastname value']
    },
    department: {
        type: String,
        required: [true, 'Please enter a department']
        
    },
    employmentStatus: {
        type: String,
        required: [true, 'Please enter an employment']
    },
    staffId: {
        type: String,
        unique: true
    },
    status: {
        type: String,
        default: false
    },
    updates: {
        type: [String]
    },
    password: {
        type: String,
        required: [true, 'Please enter a password value']
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);