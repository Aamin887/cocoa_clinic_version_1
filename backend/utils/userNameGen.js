const User = require('../model/userModel');

const generateUsername = async (firstName, lastName) => {
  const existUserFirstName = await User.findOne({ firstName })
  const existUserLastName = await User.findOne({ lastName })
  let userName = '';
  if (existUserFirstName && existUserLastName) {
    userName = firstName.slice(0, 2) + "_" + lastName
  } else {
    userName = firstName[0] + "_" + lastName
  }
  return userName.toUpperCase()
}


module.exports = generateUsername;