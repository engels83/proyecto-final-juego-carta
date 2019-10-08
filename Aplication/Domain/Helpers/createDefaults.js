const rolesModel = require("../Models/roles");
const roles = require("../Constants/roles");
const asyncForEach = require("./asyncForEach");

const routine = async () => {
  // verify roles
  let rolesToAdd = [];
  const listRoles = async () => {
    await asyncForEach(roles, async role => {
      result = await rolesModel.findRoleByName(role.name);
      if (!result) {
        rolesToAdd.push(role);
      }
    });
  };

  const pushRolesData = async () => {
    let counter = 0;
    await asyncForEach(rolesToAdd, async role => {
      let result = await rolesModel.add(role.name, role.descriptio);
      if (result.status == 200) counter++;
    });
    return counter;
  };

  listRoles()
    .then(pushRolesData)
    .then(data => {
      console.log(`${data} objects created`);
    })
    .catch(error => {
      console.log(error.message);
    });
};

module.exports = routine;
