// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) { // module, argument that can be object,string and other stuff as well. This can be exported so other files are allowed to access the exported code. 
    // If the user is logged in, continue with the request to the restricted route
    if (req.user) {
        return next();
    }

    // If the user isn't logged in, redirect them to the login page
    return res.redirect("/"); // goes back to the login page if user is not loggen in. 
};