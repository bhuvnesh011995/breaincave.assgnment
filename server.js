const express = require("express");
const bodyParser = require("body-parser")
const dbConfig = require("./configure/db.config")
const serverConfig = require("./configure/server.config")
const constant = require("./configure/constant/user.constant")
let sequelize = require("sequelize")
const router = require("./route/index")
const {roles,user} = require("./model/index")

const app = express()



app.use(bodyParser.json())
app.use(router)


try{
    dbConfig.authenticate();
    console.log("db connected successfully")
}catch(err){
    console.log(err)
}

async function init (){
    await dbConfig.sync({ force: true });
    for(let key in constant){
        await roles.create({
            name:constant[key]
        })
    }
}
init();

app.listen(serverConfig.PORT,()=>{
    console.log(`app started at port ${serverConfig.PORT}`)
})

