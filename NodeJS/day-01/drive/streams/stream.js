const fs=require("node:fs")
const path=require("node:path")
const {createGzip}=require("node:zlib")
const zip=createGzip();

const source=path.resolve("./newData.txt")
const dest=path.resolve("./newDest.txt")
const destZip=path.resolve("./newDest.txt.gz")


//=================================================================================================================
//=====read stream and write stream
//=================================================================================================================
// stream.on("eventName", callback);

// console.log({source});

const readStream=fs.createReadStream(source,{highWaterMark:300,encoding:"utf-8"})
const writeStream=fs.createWriteStream(dest);

const writeZipStream=fs.createWriteStream(destZip);


// readStream.on("data",(chunk)=>{
//     console.log("=================================================================================================================");
//     console.log(chunk);
//     console.log("=================================================================================================================");
//     writeStream.write(chunk)

// })

// ==========================
// end
// // ==========================
// readStream.on("end", () => {

// });


// // ==========================
// // error
// // ==========================
// readStream.on("error", (err) => {

// });


// // ==========================
// // open
// // ==========================
// readStream.on("open", (fd) => {

// });


// // ==========================
// // close
// // ==========================
// readStream.on("close", () => {

// });


// // ==========================
// // readable
// // ==========================
// readStream.on("readable", () => {

// });


// // ==========================
// // pause
// // ==========================
// readStream.on("pause", () => {

// });


// // ==========================
// // resume
// // ==========================
// readStream.on("resume", () => {

// });

readStream.pipe(writeStream);
readStream.pipe(zip).pipe(writeStream);