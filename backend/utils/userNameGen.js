const User = require('../model/userModel');

async function generateUsername(firstName, lastName) {

  const existUserFirstName = await User.findOne({firstName})
  const existUserLastName = await User.findOne({lastName})

  let userName = '';

  if(existUserFirstName && existUserLastName){
    userName = firstName.slice(0, 2) + "." + lastName
  }else{
    userName = firstName[0] + "." + lastName
  }
  
  return userName.toUpperCase()
}


module.exports = generateUsername;