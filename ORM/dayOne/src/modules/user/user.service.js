import { Op } from "sequelize";
import { userModel } from "../../DB/model/user.model.js";

export const getAllUsers = async ({
  page = 1,
  limit = 20,
  search,
  gender,
} = {}) => {
  const safePage = Math.max(Number(page) || 1, 1);
  const safeLimit = Math.min(Math.max(Number(limit) || 20, 1), 100);
  const where = {};

  if (gender) where.gender = gender;
  if (search) {
    where[Op.or] = [
      { fName: { [Op.like]: `%${search}%` } },
      { lName: { [Op.like]: `%${search}%` } },
      { email: { [Op.like]: `%${search}%` } },
    ];
  }

  return userModel.findAndCountAll({
    where,
    limit: safeLimit,
    offset: (safePage - 1) * safeLimit,
    order: [["id", "ASC"]],
  });
};

export const getUserById = async (id) => {
  const user = await userModel.findByPk(id);
  if (!user)
    throw Object.assign(new Error("User not found"), {
      cause: { status: 404 },
    });
  return user;
};

export const addUser = async (inputs) => {
  return userModel.create(inputs);
};

export const updateUser = async (id, inputs) => {
  const user = await getUserById(id);
  const fields = ["fName", "lName", "age", "gender", "email", "userName"];
  fields.forEach((field) => {
    if (inputs[field] !== undefined) user[field] = inputs[field];
  });
  await user.save();
  return user;
};

export const deleteUser = async (id) => {
  const user = await getUserById(id);
  await user.destroy();
  return { id: user.id, deleted: true };
};

export const restoreUser = async (id) => {
  const user = await userModel.scope(null).findByPk(id, { paranoid: false });
  if (!user)
    throw Object.assign(new Error("User not found"), {
      cause: { status: 404 },
    });
  await user.restore();
  return userModel.findByPk(id);
};
