const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {user,roles} = require('../model/index')
const userConstant = require("../configure/constant/user.constant")
const privilageConstant = require("../configure/constant/privilage.constant")
const key = require("../configure/salt.config")



const signUp = async function(req,res,next){
    let {username,name,email,password,role} = req.body;
    try{
        let userDetail = await user.create({
            name:name,
            username:username,
            email:email,
            password:bcrypt.hashSync(password,8)
        })
        if(role==userConstant.admin){
            await user.update({
                privilege:JSON.stringify([privilageConstant.all])
            },{
                where:{id:userDetail.id}
            })
        }
        let userRole = await roles.findOne({
            where:{
                name:role
            }
        })

        if(userRole){
            await userDetail.addRoles(userRole)
        }
        res.status(200).json({
            success :true,
            name:userDetail.name,
            username:userDetail.username,
            email:userDetail.email,
            role:role
        }).end();

    }catch(e){
        res.status(400).json({
            success:false,
            message:"some internal err",
            Error:e
        })
    }
}

const logIn = async function(req,res,next){
    try{
        let {username,password} = req.body;
    let userDetail = await user.findOne({
        where:{
            username:username
        }
    })
    let isValidUser = bcrypt.compareSync(password,userDetail.password)
    if(!isValidUser){
        res.status(400).json({
            success:false,
            message:"wrong password or username"
        }).end();
    }
    let role = await userDetail.getRoles()
    let userRoles = []
    role.map(e=>{
        userRoles.push(e.dataValues.name)
        
    })
    let token = jwt.sign({id:userDetail.id,roles:userRoles},key.secretKey,{
        expiresIn:"1d"
    });
    
    res.status(200).json({
        success:true,
        name:userDetail.name,
        username:userDetail.username,
        email:userDetail.email,
        token:token,
        role:userRoles
    }).end();
}catch(e){
    res.status(400).json({
        success:false,
        message:"some internal err",
        Error:e
    }).end();
}
}

module.exports ={
    signUp,logIn
}