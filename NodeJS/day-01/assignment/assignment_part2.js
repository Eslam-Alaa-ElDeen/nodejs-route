const fs=require("node:fs")
const path=require("node:path")
const EventEmitter=require("events")
const event=new EventEmitter();
const http=require("http");
const os=require("node:os");
const { setDefaultResultOrder } = require("node:dns");
const { json } = require("node:stream/consumers");

const port=4000;


const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json" })

    let siles=req.url.split('/')
    let id=Number(siles[2]);
    

    if (req.method=="GET"&&req.url=="/") {
        let data=JSON.parse(fs.readFileSync(path.resolve("./data.json"),"utf-8"));
        res.write(JSON.stringify({msg:"Welcome to my server"}))
        res.write(JSON.stringify(data))
        return res.end()
    }else if(req.method=="POST"&&req.url=="/user"){
        let data=JSON.parse(fs.readFileSync(path.resolve("./data.json"),"utf-8"));

        let newData;
        req.on("data",(chunk)=>{
            newData=JSON.parse(chunk);
        })

        req.on("end",()=>{
            let isExist=data.find((ele)=>{
                return ele.email==newData.email;
            })
            if (isExist) {
                res.write(JSON.stringify({msg:"email already exist."}))
                return res.end()
            }else{
                data.push(newData);
                fs.writeFileSync(path.resolve("./data.json"),JSON.stringify(data))
                res.write(JSON.stringify({msg:"User added successfully."}))
                return res.end()
            }
        })
    }else if(req.method=="PATCH"&&req.url==`/user/${id}`){
        let data=JSON.parse(fs.readFileSync(path.resolve("./data.json"),"utf-8"));

        let newData;
        req.on("data",(chunk)=>{
            newData=JSON.parse(chunk);
        })

        req.on("end",()=>{
            let idNUM=data.findIndex((ele)=>{
                return ele.id==id;
            })
            if (idNUM==-1) {
                res.write(JSON.stringify({msg:"Usesr id not exist"}))
                return res.end()
            }else{
                data[idNUM].name=newData.name || data[idNUM].name;
                data[idNUM].age=newData.age || data[idNUM].age;
                data[idNUM].email=newData.email || data[idNUM].email;

                fs.writeFileSync(path.resolve("./data.json"),JSON.stringify(data))
                res.write(JSON.stringify({msg:"User data updated successfuly"}))
                return res.end()
            }
        })
    }else if(req.method=="DELETE"&&req.url==`/user/${id}`){
        let data=JSON.parse(fs.readFileSync(path.resolve("./data.json"),"utf-8"));

            let idNUM=data.findIndex((ele)=>{
                return ele.id==id;
            })
            if (idNUM==-1) {
                res.write(JSON.stringify({msg:"Usesr id not found"}))
                return res.end()
            }else{
                data=data.filter((ele)=>{
                    return ele.id!=id;
                })

                fs.writeFileSync(path.resolve("./data.json"),JSON.stringify(data))
                res.write(JSON.stringify({msg:"User deleted successfuly"}))
                return res.end()
            }
    }else if(req.method=="GET"&&req.url==`/user/${id}`){
        let data=JSON.parse(fs.readFileSync(path.resolve("./data.json"),"utf-8"));

            let idNUM=data.findIndex((ele)=>{
                return ele.id==id;
            })
            if (idNUM==-1) {
                res.write(JSON.stringify({msg:"Usesr id not found"}))
                return res.end()
            }else{
                res.write(JSON.stringify(data[idNUM]))
                return res.end()
            }
    }
})

server.listen(port,()=>{
    console.log("server is runnig at port:",port);
})


