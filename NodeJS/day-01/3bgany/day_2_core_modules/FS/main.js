let fs=require("node:fs");
let path=require("node:path")

//==============================================================================================================
//read file & read file sync
//==============================================================================================================

// fs.readFile(path.resolve("./data.txt"),"utf8",(err,data)=>{
//     if(err){
//         throw new Error("file path not found")
//     }else{
//         console.log(data);
//     }
// })

// const fsReturn=fs.readFileSync(path.resolve("./data.txt"),"utf8")
// console.log(fsReturn);

//==============================================================================================================
//write file & write file sync
//==============================================================================================================

// fs.writeFile(path.resolve("./data2.txt"),"\nnew data come from write file",{flag:"a"},(err)=>{
//     if (err) {
//         throw new Error("file path not found")
//     }
// })


// fs.writeFileSync(path.resolve("./data2.txt"),"\nnew data come from write file Sync",{flag:"a"},)

//==============================================================================================================
//rename
//==============================================================================================================

// fs.renameSync(path.resolve("./data.txt"),path.resolve("./newData.txt"))

//==============================================================================================================
//create dir and append a file on it
//==============================================================================================================

// fs.mkdirSync("src/main/data",{recursive:true})

//  fs.writeFileSync(path.resolve("./src/main/data/data.txt"),"\nnew data on src/main/data",{flag:"a"})

//==============================================================================================================
//unlink
//==============================================================================================================

//   fs.writeFileSync(path.resolve("./fileToDelete"),"\nnew data on src/main/data",{flag:"a"})

// fs.unlinkSync(path.resolve("./fileToDelete"))

//==============================================================================================================
//rm
//==============================================================================================================

//  fs.mkdirSync("folderToDel/data/main",{recursive:true})
// fs.rmSync(path.resolve("./folderToDel/data/main"),{recursive:true}) 

// fs.rmSync(path.resolve("./folderToDel"),{recursive:true})

//==============================================================================================================
//readdir
//==============================================================================================================

// console.log(fs.readdirSync(path.resolve("src")));


const http=require("http");
const { json } = require("node:stream/consumers");
const port=4000;

let data=[
    {id:1,name:"eslam"},
    {id:2,name:"ahmed"},
    {id:3,name:"mohamed"},
    {id:4,name:"alaa"}
]

const server=http.createServer((req,res,n)=>{

    res.writeHead(200,{"content-type":"application/json" })
    if (req.method=="GET"&&req.url=="/") {
        res.write(JSON.stringify({msg:"welcome to my server"}));
        res.end();
    }else if(req.method=="GET" && req.url=="/data"){
        res.write(JSON.stringify({data}));
        res.end();
    }else if(req.method=="POST" && req.url=="/data"){
        let parseData;
        req.on("data",(chunk)=>{
            parseData=JSON.parse(chunk);
        })

        req.on("end",()=>{
            const isExist=data.find((user)=>{
                return user.id==parseData.id
            })

            if (isExist) {
                res.write(JSON.stringify({msg:"the id already exist"}))
                return res.end()
            }

            data.push(parseData);
            res.write(JSON.stringify({data}))
            return res.end();
        })
    }else if(req.method=="PATCH" && req.url=="/data"){
        let parseData;
        req.on("data",(chunk)=>{
            parseData=JSON.parse(chunk);
        })

        req.on("end",()=>{
            const user=data.find((user)=>{
                return user.id==parseData.id
            })

            if (!user) {
                res.write(JSON.stringify({msg:"the id not exist"}))
                return res.end()
            }

            user.name=parseData.name || user.name;
            res.write(JSON.stringify({data}))
            return res.end();
        })
    }else if(req.method=="DELETE" && req.url=="/data"){
        let parseData;
        req.on("data",(chunk)=>{
            parseData=JSON.parse(chunk);
        })

        req.on("end",()=>{
            data=data.filter((user)=>{
                return user.id!=parseData.id
            })

            res.write(JSON.stringify({data}))
            return res.end();
        })
    }

})

server.listen(port,()=>{
    console.log("server is run at port ",port);
})


server.on("close",()=>{
    fs.writeFileSync(path.resolve("./logs.txt"),`\n server is close at ${new Date()}`,{flag:"a"})
})

server.on("error",(error)=>{
    if (error.code="EADDRINUSE") {
        server.close()
    }else
        console.log({error});
})

