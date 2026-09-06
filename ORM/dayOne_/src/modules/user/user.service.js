import { userModel } from "../../database/models/user.model.js";

export const getAllUsers=async(req,res)=>{
    const data=await userModel.findAll();
    res.status(200).json({data})
}