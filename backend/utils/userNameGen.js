function generateUsername(firstName, lastName) {
  // Check if the username already exists in the database (simulated check)
  const formattedFirstName = firstName.toLowerCase();
  const formattedLastName = lastName.toLowerCase();

  let username = '';
  
  if (usernamesDatabase.includes(formattedFirstName[0] + formattedLastName) || usernamesDatabase.includes(formattedFirstName.slice(0, 2) + formattedLastName)) {
    username = formattedFirstName.slice(0, 2) + "." + formattedLastName;
  } else {
    username = formattedFirstName[0] + "." + formattedLastName;
  }

  return username.toUpperCase()
}


module.exports = generateUsername;