const Sequelize = require('sequelize');
const db = require('../db');

//CG: singular channel
//add validations
const Channel = db.define('channels', {
    name: {
        type: Sequelize.STRING,
        unique: true
    },
    type: {
        type: Sequelize.STRING,
        //ENUM
        //default: 'debate'
    },
    category: {
        //ENUM or separate table
        type: Sequelize.STRING,
    },
    description: {
        //text
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING
    },
    //maxSize
    size: { 
        type: Sequelize.INTEGER
    }
})

module.exports = Channel;