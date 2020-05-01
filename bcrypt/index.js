const bcrypt = require('bcrypt');
const saltRounds = 10;

// store hash password into database
bcrypt.hash("password", saltRounds, function(err, hash) {
  console.log(hash)
});

// Load hash from your password DB.
const hashDB = "$2b$10$QoODG9WhSeBlC/138QR6Yeb.dzfAmUXLG1t5K9CofZgkbwCNpRcfC";
bcrypt.compare("password", hashDB, function(err, result) {
  console.log(result)
});