import { sequelize } from "../../DB/connection.db.js";
import { userModel } from "../../DB/model/user.model.js";
import { golbalErrorHandler } from "../../middleware/error.middlerware.js";

export const getAllUsers = async () => {
  const data = await userModel.findAll();

  if (data == NULL) return "user not found";
  else return data;
};

export const addUser = async (inputs) => {
  const { id, fName, lName, email, gender, age } = inputs;
  // console.log(firstName,lastName,email,gender,age);
  const data = await userModel.create({ id, fName, lName, email, gender, age });

};
