const Sequelize=require('sequelize');

const sequelize=require('../util/database.js')

const Expenses=sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    amount: Sequelize.INTEGER,
    desc:Sequelize.STRING,
    category:Sequelize.STRING
});

module.exports=Expenses;