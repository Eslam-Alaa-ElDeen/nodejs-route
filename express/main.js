const express=require("express")
const path=require("path");
const { fileURLToPath } = require("url");
const app=express();
const port=3000;
let flag=true;
const authenticationMiddleware=(req,res,next)=>{
            if(flag){
                next()
            }else{
                next(new Error("No Access"))  //go to app.use()
            }
        };

app.use(express.json())  //read data form body and confert it to obj and return it on req.body
// app.use(authenticationMiddleware);//like a write it in every method on the first of her
app.use(["/user","/main"],authenticationMiddleware);//select a detected URL to make the  middle on

app.get("/"
    ,
    authenticationMiddleware,
        (req,res,next)=>{

    // res.send(new Buffer('wahoo'));
    // res.send({ some: 'json' });
    // res.send('<p>some html</p>');
    // res.status(404).send('Sorry, cant find that');
    // res.json({name:"eslam",age:20})
    // res.sendFile(path.resolve("./index.html"))
    // res.download(path.resolve("./index.html"))

        res.json({name:"eslam"})
        
})



///////////test query params//////////////

//in url ===> ?key=eslam&gender=male     on the last of the url
app.get("/user/data",(req,res,next)=>{   //make {} around it to make it optionl 
    const {key,age}=req.query
    console.log(key,age);
    res.json({msg:"done",data:{key,age}})
})

///////////test params//////////////
app.get("/user{/:userID}",(req,res,next)=>{   //make {} around it to make it optionl 
    const {userID}=req.params;
    console.log(userID);
    res.json({msg:"done",id:userID})
})  //this come with a errors keep your mind up when u deel with it 

app.delete("/",(req,res,next)=>{
    res.write("delete page");
    res.end()
})

app.post("/",(req,res,next)=>{
    res.write("post page");
    res.end()
})

app.patch("/product",(req,res,next)=>{
    console.log({body:req.body});
    return res.status(200).json({msg:"done"})
    res.end()
})

app.put("/",(req,res,next)=>{
    res.write("put page");
    res.end()
})

app.all("{/*dummy}",(req,res,next)=>{
    res.write("Invalid URL");
    res.end()
})

// app.use((err,req,res,next)=>{
//     res.status(500).json({msg:err.message,err,stack:err.stack})
// })


app.listen(port,()=>{
    console.log(`server is runnig at port ${port}`);
})