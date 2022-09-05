const Sequelize=require('sequelize');

const sequelize=require('../util/database.js')

const User=sequelize.define('form',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name: Sequelize.STRING,
    email:Sequelize.STRING,
    phone:Sequelize.INTEGER
});

module.exports=User;