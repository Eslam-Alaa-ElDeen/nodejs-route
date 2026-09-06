import { Op } from "sequelize";
import { successResponse } from "../../common/utils/success.respoce.js";
import { sequelize } from "../../DB/connection.db.js";
import { userModel } from "../../DB/model/user.model.js";
import { golbalErrorHandler } from "../../middleware/error.middlerware.js";

export const getAllUsers = async (inputs) => {
  const data = await userModel.findAll({
    attributes:[["u_first_name","first_name"],["u_last_name","last_name"]],
    where:{
        [Op.or]:[
          {gender:{[Op.eq]:"female"}},
          {fName:{[Op.eq]:"eslam"}}
        ]
      }
  });

  const dataOne=await userModel.findOne({
    where:{
      id:4
    }
  })

  const user=await userModel.findOrCreate({
    where:id=5,
    defaults:inputs
  })

  //findOrCreate ==> should come with where 

   return dataOne;
  //  return data;
};

export const addUser = async (inputs) => {
  const { id,userName, email, gender, age } = inputs;
  // console.log(firstName,lastName,email,gender,age);
  // const data = await userModel.create(inputs,{fields:["userName","fName","id","lName","email","age"]});
    const data = await userModel.upsert(inputs,{fields:["userName","fName","id","lName","email","age"]});
    return data;

  //create bulk ==> make a bulk of fields  take the inputs as array of object
  //upsert ==>if user exist return it if not add it
};
