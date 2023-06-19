let sequelize = require("sequelize")


module.exports = new sequelize(
    "assginmentdb",//dbname
    "root",         // db username
    "2006",         // db password
            {
                host:"localhost",
                dialect:"mysql",
                operatorAliases:false,
                pool:{
                    max:5,
                    min:0,
                    acquire:30000,
                    idle:10000
                }
           }
)


