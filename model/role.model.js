const { DataTypes } = require("sequelize");
let db = require("../configure/db.config");


module.exports = db.define("Roles",{
    id:{
        type: DataTypes.BIGINT,
        notNull:true,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        notNull:true,
        unique:true
    }
},{
    freezeTableName: true,
    timestamps:false
})


