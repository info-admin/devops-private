const db = require("../models");

const logs = require("../logging/log-service");
const CustomError = require("../errors/custom-error.model");
const { NOT_FOUND } = require("../errors/error-codes");
const Roles = require("../models/role.model");
const Permissions = require("../models/permission.model");

exports.checkPermission = async (permission, role) => {
  const res = await db.rolesPermission
    .findAll({ where: { roleId: role, permission: permission } })
    .catch((err) => {
      throw new CustomError(DATABASE_ERROR, err.name);
    });

  if (res.length == 0)
    throw new CustomError(NOT_FOUND, "Permission denied");

  return "ok";
};
// change in commit 2
exports.getRoles = async () => {
  logs("[INFO]", "Getting roles ...");
  const roles = await db.roles.findAll().catch((err) => {
    throw new CustomError(DATABASE_ERROR, err.name);
  });
  return roles;
};

exports.getPermissions = async () => {
  return Permissions;
};
