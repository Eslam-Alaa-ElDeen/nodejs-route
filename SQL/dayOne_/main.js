const express=require("express")
const app=express()
const port=3000
const mysql=require("mysql2")
const { QuicEndpoint } = require("node:quic")
app.use(express.json())

const connnection=mysql.createConntection({
    host:localhost,
    port:3000,
    name:root,
    password:root,
    database:eslam
})

connnection.connect((err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("succ to connect");
    }
})


app.patch("/users/signup",(req,res)=>{
    const {name,age,password,email}=req.body
    const  query=`insert into users (name,age,password,email) values("${name}","${age}","${password}","${email}")`
    connnection.execute(query,(err,data)=>{
        if(err){
            return res.status(400).json(err.message)
        }
    })
    //handel dublcated data

})


app.listen(port,()=>{
    console.log("server is running at port ",port);
})