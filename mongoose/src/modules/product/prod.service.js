import { prodModel } from "../../DB/model/prod.model.js"


export const create=async(inputs)=>{
    const data=await prodModel.create(inputs)

    return data;
}


export const findData=async(inputs)=>{
    const data=await prodModel.find().populate({path:"createdBy"})   //populate works like join and lookUp
    // or make the aggragate way
        // await prodModel.aggregate([{
        //     $lookup:{
        //         from:"users",
        //         localField:"createdBy",
        //         foreignField:"_id",
        //         as:"owner"
        //     }
        // }])
    return data;
}