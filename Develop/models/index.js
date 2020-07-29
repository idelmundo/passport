'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename); // root homepage 
var env = process.env.NODE_ENV || 'development'; //production or testing 
var config = require(__dirname + '/../config/config.json')[env]; //setting config file 
var db = {}; // we are creating an empty object 

if (config.use_env_variable) { // check if any enviroment variable is set if it is set then we use the setting for enviroment else  use the other sequelize on line 14.
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs // file system node to read files this is use for read files, create, update, delete and rename. 
    .readdirSync(__dirname) // we are reading 
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function(file) {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize; //model to date bate
db.Sequelize = Sequelize;

module.exports = db;