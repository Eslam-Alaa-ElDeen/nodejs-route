
//==========================================note==========================================
// the qustions {10,11,14,15,18,19,20} on folder for each qustion and the rest on this file

const fs=require("node:fs")
const path=require("node:path")
const EventEmitter=require("events")
const event=new EventEmitter();
const http=require("http");
const os=require("node:os")


// //==================================================================================================
// //1. Write a function that logs the current file path and directory
// //==================================================================================================

function dirAndFilePath(){
    console.log({dirPath:__dirname});
    console.log({filePath:__filename});
}

// dirAndFilePath()

// //==================================================================================================
// // 2. Write a function that takes a file path and returns its file name
// //==================================================================================================

function returnFileName(){
    return path.basename(__filename);
}

// console.log(returnFileName());

// //==================================================================================================
// //3. Write a function that builds a path from an object
// //==================================================================================================

// const obj=path.parse(__dirname);
// function createPath(obj){
//     console.log(path.format(obj));
// }
// createPath(obj)
// createPath({ dir:"/folder", name:"app", ext:".js"})


// //==================================================================================================
// //4. Write a function that returns the file extension from a given file path
// //==================================================================================================

// function returnExt(filePath){
//     return path.extname(filePath)
// }
// console.log(returnExt("/docs/readme.md"));

// //==================================================================================================
// //5. Write a function that parses a given path and returns its name and ext
// //==================================================================================================

// function parsePath(p){
//     const obj=path.parse(p);
//     return {Name:obj.name,Ext:obj.ext}
// }

// const{Name,Ext}=parsePath("/home/app/main.js");
// console.log({Name,Ext});

// //==================================================================================================
// //6. Write a function that checks whether a given path is absolute.
// //==================================================================================================

// function isAbsolute(pathFile){
//     return path.isAbsolute(pathFile)
// }

// console.log(isAbsolute("/home/user/file.txt"));

// //==================================================================================================
// //7. Write a function that joins multiple segments
// //==================================================================================================

// function joinSegments(...seg){
//     let res=path.join(...seg);
//     return res;
// }

// const pathJoin=joinSegments("src","components", "App.js")
// console.log(pathJoin);

// //==================================================================================================
// //8. Write a function that resolves a relative path to an absolute one
// //==================================================================================================

// function resolvePath(relativePath){
//     return path.resolve(relativePath)
// }

// let absolutePath=resolvePath("./index.js")
// console.log(absolutePath);

// //==================================================================================================
// //9. Write a function that joins two paths
// //==================================================================================================

// function joinSegments(pathOne,pathTwo){
//     let res=path.join(pathOne,pathTwo);
//     return res;
// }

// const pathJoin=joinSegments("/folder1","folder2/file.txt")
// console.log(pathJoin);


// //==================================================================================================
// //12. Create an event emitter that listens for a "start" event and logs a welcome message
// //==================================================================================================

// event.on("start",()=>{
//     console.log("Welcome event triggered!");
// })

// event.emit("start")

// //==================================================================================================
// //13. Emit a custom "login" event with a username parameter.
// //==================================================================================================

// event.on("login",(userName)=>{
//     console.log(`User logged in: ${userName}`);
// })

// event.emit("login","Ahmed")


// //==================================================================================================
// //16. Check if a directory exists.
// //==================================================================================================

// console.log(fs.existsSync(path.resolve("./Q10"))); //true
// console.log(fs.existsSync(path.resolve("./Q1")));  //false

// //==================================================================================================
// //17. Write a function that returns the OS platform and CPU architecture
// //==================================================================================================

// const Arch=os.arch();
// const platform=os.platform();

// console.log({platform,Arch});


