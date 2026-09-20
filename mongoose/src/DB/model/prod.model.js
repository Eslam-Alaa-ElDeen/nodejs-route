import mongoose from "mongoose";

const prodSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"user",
        requird:true
    }
},{
    Timestamp:true,
    strict:true,
    strictQuery:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true},
    optimisticConcurrency:true
})

export const prodModel=await mongoose.model("product",prodSchema
)