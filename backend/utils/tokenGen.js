const jwt = require('jsonwebtoken');

const tokenGenerator =  async function(id){
    const token = jwt.sign({id}, process.env.JWT_SECRET)
    return token
}

module.exports = tokenGenerator;