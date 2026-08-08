const fs=require("node:fs")
const path=require("node:path")
const EventEmitter=require("events")
const event=new EventEmitter();
const http=require("http");

// run file to make a copy on dist file

const readStream=fs.createReadStream(path.resolve("./source.txt"),{
    encoding:"utf-8",
    highWaterMark:70
})

const writeStream=fs.createWriteStream(path.resolve("./dest.txt"))



readStream.on("data",(chunk)=>{
    writeStream.write(chunk)
})

// another way with pipe
// readStream.pipe(writeStream)