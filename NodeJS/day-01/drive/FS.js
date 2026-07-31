const fs=require("node:fs")
const path=require("node:path")

const pathFileRead=path.resolve("./read.txt");
const pathFileWrite=path.resolve("./write.txt")

//=================================================================================================================
//=====readFile vs readFileSync
//=================================================================================================================

// const ReadFile=fs.readFile(pathFileRead,"utf-8",(err,data)=>{  //async code and nonBlocking
//     if (err) {
//         throw new Error("error happend");
//     }else{
//         console.log({data});
//         return data;
//     }
// })

// console.log(ReadFile);
// console.log("eslam 3mk");

// const ReadFileSync=fs.readFileSync(pathFileRead,"utf-8")  //sync code and blocking
// console.log(ReadFileSync);


//=================================================================================================================
//=====writeFile vs writeFileSync
//=================================================================================================================
// fs.writeFile(pathFileWrite,"@@data from write file on js",{flag:"a"},(err)=>{
//     if (err) {
//         throw new Error("error eslam alaa")
//     }
// })

// fs.writeFile(pathFileWrite,"@@data from write file on js",{flag:"a"},(err)=>{
//     if (err) {
//         throw new Error("error eslam alaa")
//     }
// })

// fs.writeFile(pathFileWrite,"@@data from write file on js",{flag:"a"},(err)=>{
//     if (err) {
//         throw new Error("error eslam alaa")
//     }
// })

// fs.readFile(pathFileWrite,"utf-8",(err,data)=>{
//     if (err) {
//         throw new Error("error eslam alaa")
//     }else{
//         console.log(data.split("@@"))
//     }
// })

// fs.writeFileSync(pathFileWrite,"edit on file",{flag:"a"})


//=================================================================================================================
//===== exists & mkdire
//=================================================================================================================

// console.log(fs.existsSync(pathFileRead));
// const pathBatch=path.resolve("./node/maro/negm")
// const exist=fs.existsSync(pathBatch);



// if (!exist) {
//     fs.mkdirSync(pathBatch,{recursive:true})
// }

// fs.writeFileSync("./node/maro/negm/main.txt","")

//=================================================================================================================
//===== exists & mkdire
//=================================================================================================================

// fs.unlink("./node/maro/dir.js", (err) => {  //for delete a file only

//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("Deleted");

// });

// fs.mkdirSync("./node/maro/negm/fileWillDel",{recursive:true})

// fs.rmdir("./node/maro/negm/fileWillDel",(err)=>{  //remove folder or file
//  fs.rmdir("./node",{recursive:true},(err)=>{  //remove folder with files

//  });


//=================================================================================================================
//=====fs promise
//=================================================================================================================

const fs = require("fs/promises");

async function main() {
    try {

        // Create Folder
        await fs.mkdir("users", { recursive: true });
        console.log("Folder Created");

        // Check Folder Exists
        try {
            await fs.access("users");
            console.log("Folder Exists");
        } catch {
            console.log("Folder Doesn't Exist");
        }

        // Create File + Write
        await fs.writeFile("users/data.txt", "Hello Node JS");
        console.log("File Created");

        // Append Data
        await fs.appendFile("users/data.txt", "\nWelcome To Route");
        console.log("Data Appended");

        // Read File
        const data = await fs.readFile("users/data.txt", "utf8");
        console.log("\nFile Content:");
        console.log(data);

        // Delete File
        await fs.unlink("users/data.txt");
        console.log("\nFile Deleted");

        // Delete Folder
        await fs.rm("users", { recursive: true });
        console.log("Folder Deleted");

    } catch (err) {
        console.log(err);
    }
}

main();