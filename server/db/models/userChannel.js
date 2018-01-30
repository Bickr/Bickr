const Sequelize = require('sequelize');
const db = require('../db');

//broadcaster
const UserChannel = db.define('userchannel', {
    score: Sequelize.INTEGER
})

module.exports = UserChannel;