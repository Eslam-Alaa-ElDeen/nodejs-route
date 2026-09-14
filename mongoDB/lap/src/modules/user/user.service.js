import {
  createUserRecord,
  deleteUserRecord,
  getAllUserRecords,
  getUserRecordById,
  updateUserRecord,
} from "../../DB/model/index.js";

export const getAllUsers = async () => getAllUserRecords();

export const getUserById = async (id) => {
  const user = await getUserRecordById(id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const createUser = async (payload = {}) => createUserRecord(payload);

export const updateUser = async (id, payload = {}) => {
  const user = await updateUserRecord(id, payload);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const deleteUser = async (id) => {
  const user = await deleteUserRecord(id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};
