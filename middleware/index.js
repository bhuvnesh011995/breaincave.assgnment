const {
  deletePri,
  getPri,
  updatePri,
  addPri,
} = require("./privilage/employee.privilage");
const { varifyAdmin } = require("./varify/varify.admin");
const { varifyEmployee } = require("./varify/varify.employee");
const { varifyUser } = require("./varify/varify.user");

module.exports = {
  deletePri,
  getPri,
  updatePri,
  addPri,
  varifyAdmin,
  varifyEmployee,
  varifyUser,
};
