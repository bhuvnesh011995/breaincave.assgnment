const express = require("express")
let {signUp,logIn} = require("./../../controller/auth.controller")

const route = express.Router();


route.post("/signUp",signUp)
route.post("/logIn",logIn)

module.exports = route