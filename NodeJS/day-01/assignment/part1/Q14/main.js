const fs=require("node:fs")
const path=require("node:path")
const EventEmitter=require("events")
const event=new EventEmitter();
const http=require("http");

const data=fs.readFileSync(path.resolve("./notes.txt"),{encoding:"utf-8"})
console.log(data);