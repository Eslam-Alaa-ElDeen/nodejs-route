const fs=require("node:fs")
const path=require("node:path")
const EventEmitter=require("events")
const event=new EventEmitter();
const http=require("http");

// run file to delete the file

function deleteFile(pathToDEl){
    fs.unlink(pathToDEl,(error)=>{
        if (error) {
            console.log("error happend");
        }else{
            console.log("the",path.basename(pathToDEl),"is deleted");
        }
    })
}

const filePath=path.join(__dirname,"/path/file.txt")
deleteFile(filePath);
