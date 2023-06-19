const { DataTypes} = require("sequelize");
const db = require("../configure/db.config");

module.exports = db.define("Users",{
    id:{
        type:DataTypes.BIGINT,
        notNull:true,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        notNull:true
    },
    username:{
        type:DataTypes.STRING,
        notNull:true,
        unique:true,
    },
    email:{
        type:DataTypes.STRING,
        notNull:true,
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        notNull:true
    },
    privilege:{
        type:DataTypes.STRING,
        nullAllowed:true,
        default:null
    }
},{
    freezeTableName:true,
})