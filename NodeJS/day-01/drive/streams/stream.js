const fs=require("node:fs")
const path=require("node:path")

const source=path.resolve("./data.txt")
const dest=path.resolve("./dest.txt")

//=================================================================================================================
//=====read stream and write stream
//=================================================================================================================
console.log({source});

const readStream=fs.createReadStream(source,{highWaterMark:300})
const writeStream=fs.createWriteStream(dest);

readStream.on("data",(chunk)=>{
    console.log("=================================================================================================================");
    console.log(chunk);
    console.log("=================================================================================================================");
    writeStream.write(chunk)

})