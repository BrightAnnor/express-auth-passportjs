const dbConnect = require('./dbConnect');
const {Sequelize,DataTypes} = require('sequelize');

const User = dbConnect.define('users',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
});
User.sync({alter:true})

module.exports = User