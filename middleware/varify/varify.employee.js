const {user} = require("../../model/index")
const key = require("../../configure/salt.config")
const jwt = require("jsonwebtoken")
const userConstant =require("../../configure/constant/user.constant")

const varifyEmployee = async function (req,res,next){
    const token = req.headers["x-access-token"];
    if(!token){
        res.status(401).json({
            message: "Invalid token",
          }).end();
    }

    jwt.verify(token, key.secretKey, (err, decoded) => {
        if (err) {
          res.status(401).json({
            message: "Unauthorized",
          });
    
          return;
        }
        if(!(decoded.roles.includes(userConstant.employee))){
            res.status(404).json({
                success:false,
                message:"not authorized"
            }).end();
        }
        req.body.id = decoded.id;
        req.body.roles = decoded.roles;
  
        next()
      });
}

module.exports = {
    varifyEmployee
}