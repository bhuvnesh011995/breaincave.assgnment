const express = require("express");
const userController = require("../../controller/user.controller");
const middleware = require("../../middleware/index")

const route = express.Router();

route.get("/",[middleware.varifyAdmin],userController.getAllUser)
route.get("/:Id",[middleware.varifyAdmin],userController.getOneUser)
route.post("/",[middleware.varifyAdmin],userController.addUser)
route.put("/:Id",[middleware.varifyAdmin],userController.updateUser)
route.delete("/:Id",[middleware.varifyAdmin],userController.deleteUser)
route.post("/:Id",[middleware.varifyAdmin],userController.assignPri)

module.exports = route;