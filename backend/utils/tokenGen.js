const jwt = require('jsonwebtoken');

const tokenGenerator = async function (id) {
    const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
    return token
}

module.exports = tokenGenerator;