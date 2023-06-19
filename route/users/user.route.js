const express = require("express");
const userController = require("../../controller/user.controller")

const route = express.Router();


route.post("/:Id",userController.updateUser)



module.exports = route;