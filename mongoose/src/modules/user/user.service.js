import mongoose from "mongoose";
import { userModel } from "../../DB/model/user.model.js";



export const addUsers = async (inputs) => {  // all fail or all success    
    const session = await mongoose.startSession();
    
    try {
        session.startTransaction();

        const data = await userModel.create(inputs, {
            timestamps: false,
            ordered: true,
            session
        });

        await session.commitTransaction();
        session.endSession();

        return data;

    } catch (error) {
        await session.abortTransaction();
        session.endSession();

        throw new Error(error.message, {
            cause: {
                status: 500
            }
        });
    }
};

export const insertUser = async (inputs) => {  // all fail or all success    
    try {
        const data = await userModel.insertMany(inputs, {  //take array and i didn't make [] as the inputs is array of obj
            timestamps: false,
            throwOnValidationError:true,  //to insert if one document fails she continue inserting and should come with {ordered:true}
            ordered:false
        });
        return data;
    } catch (error) {
        throw new Error(error.message, {
            cause: {
                status: 500
            }
        });
    }
};

export const getAllUsers = async (inputs) => {
  return await userModel.find();
};


export const updateUser=async(id,inputs)=>{
    const data=await userModel.findByIdAndUpdate({
        _id:id
    },{
        name:inputs.name
    })
    return data;
}

export const deleteUser=async (id)=>{
    const data=await userModel.deleteMany({
        _id:id
    })
    return data
}

export const findOne=async(id)=>{
    const data=await userModel.find({
        _id:id
    })
    return data;
}
