const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    userName: {
        type: String,
        required:[true, 'Please enter a name']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Admin', adminSchema);