const fs=require("node:fs")
const path=require("node:path")
const EventEmitter=require("events")
const event=new EventEmitter();
const http=require("http");

// run the file to create the folder

function createFolder(folderPath){
    fs.mkdirSync(folderPath,{recursive:true})
    console.log("success");
}

createFolder("src");