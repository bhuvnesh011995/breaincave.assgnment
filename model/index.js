const user = require("./user.model")
const roles = require("./role.model")
// const user_role = require("./user_role")
module.exports = {
    user,roles
}

user.belongsToMany(roles,{
    through:"user_role",
    foreignKey:"userId",
    otherKey:"rolesId"
})
roles.belongsToMany(user,{
    through:"user_role",
    foreignKey:"rolesId",
    otherKey:"userId"
})