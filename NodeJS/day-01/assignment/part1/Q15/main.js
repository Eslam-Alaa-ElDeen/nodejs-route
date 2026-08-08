const fs=require("node:fs")
const path=require("node:path")
const EventEmitter=require("events")
const event=new EventEmitter();
const http=require("http");

// run file to add contant "append"

fs.writeFile(path.resolve("./async.txt"),"\nAsync save",{flag:"a"},(error)=>{
    if (error)
        console.log(error.message);
})