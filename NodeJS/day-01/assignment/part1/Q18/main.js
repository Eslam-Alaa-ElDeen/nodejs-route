const fs=require("node:fs")
const path=require("node:path")
const EventEmitter=require("events")
const event=new EventEmitter();
const http=require("http");
const os=require("node:os")

const readStream=fs.createReadStream(path.resolve("./data.txt"),{
    encoding:"utf-8",
    highWaterMark:70
})

readStream.on("data",(chunk)=>{
    console.log("============================================================================");
    console.log(chunk);
    console.log("============================================================================");
})