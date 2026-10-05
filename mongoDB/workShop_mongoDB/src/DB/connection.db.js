import { MongoClient } from "mongodb";
import { dbName, dbURI } from "../../config/config.service.js";
export const client=new MongoClient(dbURI)


export const connectionDB=async()=>{
    try {
        await client.connect();
        console.log("connetion successfully");
    } catch (error) {
        console.log("connetion failed");
    }
}

export const db=client.db(dbName)