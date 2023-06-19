const {user,roles} = require("../../model/index");
const priConst = require("./../../configure/constant/privilage.constant")

const deletePri = async function(req,res,next){
    let id = req.body.id

    let privilege = await user.findOne({where:{
        id:id
    },
    attribute:["privilege"]
    })
    privilege = privilege.dataValues.privilege;
    if(!privilege || !(JSON.parse(privilege).includes(priConst.delete))){
        res.status(404).send({
            success : false,
            message:"does not have privilege"
        });
        return
    }
    next();
}


const updatePri = async function (req,res,next){
    let id = req.body.id

    let privilege = await user.findOne({where:{
        id:id
    },
    attribute:["privilege"]
    })
    privilege = privilege.dataValues.privilege;
    if(!privilege || !(JSON.parse(privilege).includes(priConst.edit))){
        res.status(404).send({
            success : false,
            message:"does not have privilege"
        });
        return
    }
    next();
}
const addPri = async function (req,res,next){
    let id = req.body.id

    let privilege = await user.findOne({where:{
        id:id
    },
    attribute:["privilege"]
    })
    privilege = privilege.dataValues.privilege;
    if(!privilege || !(JSON.parse(privilege).includes(priConst.create))){
        res.status(404).send({
            success : false,
            message:"does not have privilege"
        });
        return
    }
    next();
}
const getPri = async function (req,res,next){
    let id = req.body.id

    let privilege = await user.findOne({where:{
        id:id
    },
    attribute:["privilege"]
    })
    privilege = privilege.dataValues.privilege;
    if(!privilege || !(JSON.parse(privilege).includes(priConst.get))){
        res.status(404).send({
            success : false,
            message:"does not have privilege"
        });
        return
    }
    next();
}

module.exports = {
    deletePri,
    updatePri,
    getPri,
    addPri
}