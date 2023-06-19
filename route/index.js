const express = require("express");
const router = express.Router();
let adminRoute = require("./users/admin.route")
let employeeRoute = require("./users/employee.route")
let userRoute = require("./users/user.route")
const usersRoute = require("./users/users.route")

router.get("/",(req,res)=>{
    res.status(200).json({
        message:"you are in base route"
    }).end();
})

router.use("/users",usersRoute)
router.use("/users/admin",adminRoute)
router.use("/users/employee",employeeRoute)
router.use("/users/user",userRoute)

module.exports = router