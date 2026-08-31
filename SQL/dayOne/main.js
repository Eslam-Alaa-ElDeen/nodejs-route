const express = require("express");
const app = express();
const {bootstrap,db}=require("./connectDB.js")
const mySql = require("mysql2/promise");
const port = 3000;

bootstrap(app,port);

app.get("/", async(req, res) => {
    try {
        const[data,fields]=await db.query("SELECT * from users")
        res.status(200).json({data})
    } catch (error) {
        res.status(404).json({msg:error.message})
    }
});


