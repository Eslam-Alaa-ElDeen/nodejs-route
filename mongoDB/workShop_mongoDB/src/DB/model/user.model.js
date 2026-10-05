import { db } from "../connection.db.js";
import { bsonType } from "bson";

export const userSchema={
    bsonType:"object",
    required:["name","email","password","phone"],
    properties:{
        name:{bsonType:"string",minLength:3},
        email:{bsonType:"string"},
        password:{bsonType:"string"},
        phone:{bsonType:"string"}
    }
}

export const userModel=db.createCollection("Users",{
    validator:{$jsonSchema:userSchema}
})