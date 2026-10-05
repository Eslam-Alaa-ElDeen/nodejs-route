import { db } from "../connection.db.js";
import { bsonType } from "bson";

export const bookSchema={
    bsonType:"object",
    required:["title","author","copies"],
    properties:{
        title:{bsonType:"string",minLength:2},
        author:{bsonType:"string"},
        copies:{bsonType:"int",minimum:1}
    }
}

export const bookModel=db.createCollection("Books",{
    validator:{$jsonSchema:bookSchema}
})