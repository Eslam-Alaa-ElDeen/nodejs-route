import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import mongoose from "mongoose";
import { dbURI } from "../../config/config.service.js";
import { MongoServerSelectionError } from "mongodb";


export const connectionDB=async()=>{
    try {
        await mongoose.connect(dbURI,{serverSelectionTimeoutMS:30000});
        console.log("data base conneced succefully");
    } catch (error) {
        console.log(error,"fail to connect to db ");
    }
}