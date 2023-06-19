const {user,role} = require("../model/index")
const roleConst = require("../configure/constant/user.constant")

const addUser = async function(req,res,next){
    res.status(200).json({
        success:true,
        message:"have privilege"
    }).end();
}
const getAllUser = async function (req,res,next){
    res.status(200).json({
        success:true,
        message:"have privilege"
    }).end();
}

const getOneUser = async function(req,res,next){
    res.status(200).json({
        success:true,
        message:"have privilege"
    }).end();
}
const updateUser = async function(req,res,next){
    res.status(200).json({
        success:true,
        message:"have privilege"
    }).end();
}
const deleteUser = async function(req,res,next){
    res.status(200).json({
        success:true,
        message:"have privilege"
    }).end();
}
const assignPri = async function(req,res,next){
    let id = req.params.Id;
    let userDetails = await user.findOne({where:{id:id}})
    let role = await userDetails.getRoles();
    let userRoles = []
    role.map(e=>{
        userRoles.push(e.dataValues.name)
    })

    if(!userRoles.includes(roleConst.employee)){
        res.status(404).json({
            success:false,
            message:"user is not employee"
        }).end();
    }
    let privilege = JSON.parse(userDetails.privilege);
    if(!privilege){
        privilege = [req.body.privilege]
    }else{
        privilege = [...privilege,req.body.privilege]
    }
    privilege = JSON.stringify(privilege)
    
    await user.update({privilege:privilege},{
        where:{
            id:userDetails.id
        }
    })
    res.status(200).json({
        success:true,
        message:"privilege assigned"
    }).end();
}

module.exports = {
                    getAllUser,
                    getOneUser,
                    updateUser,
                    deleteUser,
                    addUser,
                    assignPri
                }