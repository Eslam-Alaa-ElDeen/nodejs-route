const http=require("node:http");
const { json } = require("node:stream/consumers");

let port=3000; //port that the server will run on it


// const httpServer=http.createServer((req,res)=>{  //create server

//     res.end("API")
// })


// function lesten(port){    //listen on the server and take the port
//     httpServer.listen(port,()=>{
//         console.log(`server is runnig at port ${port}`);
//     })
// }

// lesten(port);

// httpServer.on("error",(error)=>{   //if the port repet will change
//     if(error.code=="EADDRINUSE"){
//         ++port;
//         lesten(port);
//     }
// })


///////////////////////////////////////////////////////////////////////////////////////////////

// const httpServer=http.createServer((req,res)=>{
//     const{url,method}=req;
//     console.log(url,method);

//     if (url=="/"&&method=="GET") {
//        res.write("HOME PAGE")
//        res.end()
//     }else if(url=="/product"&&method=="GET"){
//         // res.write(`
//         //         product one 
//         //         product two
//         //         product 3
//         //     ` )
//         res.writeHead(200,{"content-type":"application/json" })  //to force the browser to understand the json data 
//         res.write(JSON.stringify([{id:1,name:"eslam"}]))
//         res.end()
//     }else{
//         res.write(JSON.stringify({msg:"404 page no found"}))
//         res.end()
//     }
// })

// function lesten(port){
//     httpServer.listen(port,()=>{
//         console.log(`server is runnig at port ${port}`);
//     })
// }

// lesten(port)

/////////////////////////////////////////////////////////////////////////////////////////////////////


