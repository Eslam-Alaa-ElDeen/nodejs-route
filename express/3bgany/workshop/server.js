const express=require("express")
const path=require("path")
const fs=require("fs")
const app=express();
const port=3000;

app.use(express.json())  //this is  a middle wire
// XSS attack

app.get("/",(req,res,next)=>{
    res.status(200).json({msg:"in home page"})
})

app.get("/users",(req,res,next)=>{
    res.sendFile(path.resolve("./users.json"),(err)=>{
        console.log("file no founded");
    })
})

app.post("/users",async(req,res)=>{
    const {name,email,age}=await req.body
    if(!name || !email){
        return res.status(400).json({msg:"Name and Email are required"})
    }
    return res.json({msg:"done"})
})

app.patch("/users/:id",async(req,res)=>{
    const {id}= req.params
    const {name,age,email}= req.body;
    if(!id){
        return res.status(400).json({msg:"id are required"})
    }
    const data=JSON.parse(fs.readFileSync(path.resolve("./users.json"),"utf8"))
    let exist=data.find((ele)=>{
        return ele.id==id;
    })

    if (!exist) {
        return res.status(404).json({msg:"user does not exist"})
    }
    let existEmail=data.some((ele)=>{
        return ele.email==email;
    })

    if (existEmail) {
        return res.status(404).json({msg:"the email already exist"})
    }
    
    exist.name=name || exist.name;
    exist.age=age || exist.age;
    exist.email=email || exist.email;

    fs.writeFileSync(path.resolve("./users.json"),JSON.stringify(data))
    return res.status(200).json({data})
})

app.all("/*dumy",(res,req)=>{
    return res.status(404).json({msg:"invalid routing"})
})

app.listen(port,()=>{
    console.log(`port run at port : ${port}`);
})