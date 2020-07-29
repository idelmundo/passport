// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs"); // crypt salting  look it up 
// Creating our User model
module.exports = function(sequelize, DataTypes) { // two parameters that passes along the table chart and data.
    var User = sequelize.define("User", { // we ask the user to create username 
        // The email cannot be null, and must be a proper email before creation
        email: { //in these line we make sure user insert proper email if not send null
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        // The password cannot be null
        password: { // password has to be in a string if not its will return as false
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    User.prototype.validPassword = function(password) { // taking a password that matches what it was created 
        return bcrypt.compareSync(password, this.password); // this will return the password 
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    User.addHook("beforeCreate", function(user) { // same pw as hash version 
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null); //synchoronous approuch and store has in database. 
    });
    return User;
};
``