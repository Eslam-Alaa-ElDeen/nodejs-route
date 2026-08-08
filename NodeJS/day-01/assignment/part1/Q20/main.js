const fs=require("node:fs")
const path=require("node:path")
const EventEmitter=require("events")
const event=new EventEmitter();
const http=require("http");

const {createGzip}=require("node:zlib")
const zip=createGzip();

// run to make the zipFile

const readStream=fs.createReadStream(path.resolve("./data.txt"),{
    encoding:"utf-8",
    highWaterMark:70
})

const writeStream=fs.createWriteStream(path.resolve("./data.txt.gz"))



readStream.pipe(zip).pipe(writeStream)