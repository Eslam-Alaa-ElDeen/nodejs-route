import { db } from "../connection.db.js";
import { bsonType } from "bson";

export const logSchema={
    bsonType:"object",
    required:["userId","bookId","borrowDate"],
    properties:{
        userId:{bsonType:"objectId"},
        bookId:{bsonType:"objectId"},
        borrowDate:{bsonType:"data"},
        returnData:{bsonType:["data","null"]}
    }
}

export const logModel=db.createCollection("Logs",{
    validator:{$jsonSchema:logSchema}
})