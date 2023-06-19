const express = require("express");
const userController = require("../../controller/user.controller");
const middleware = require("../../middleware/index")

const route = express.Router();


route.get("/",[middleware.varifyEmployee,middleware.getPri],userController.getAllUser)
route.get("/:Id",[middleware.varifyEmployee,middleware.getPri],userController.getOneUser)
route.post("/",[middleware.varifyEmployee,middleware.addPri],userController.addUser)
route.put("/:Id",[middleware.varifyEmployee,middleware.updatePri],userController.updateUser)
route.delete("/:Id",[middleware.varifyEmployee,middleware.deletePri],userController.deleteUser)

module.exports = route;
