import mongoose from "mongoose"



export const toObjectId=(value)=>{
    return new mongoose.Types.ObjectId(value)
}