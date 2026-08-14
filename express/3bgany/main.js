const express=require("express")
const app=express();

const port=3000;

let data=[
    {name:"eslam",age:20,id:1}
]

app.use(express.json()) 

app.get("/",(req,res,next)=>{
    res.status(200).json({msg:"in home page"})
})

app.get("/data",(req,res,next)=>{
    res.status(200).json(data);
})

app.post("/data",(req,res,next)=>{
    const{name,age,id}=req.body;
    let isEx=data.find((ele)=>{
        return ele.id==id;
    })

    if (isEx) {
        res.json({msg:"the user exist"})
    }else{
        data.push({name,age,id})
        return res.status(200).json(data)
    }
})


app.delete("/data/:id",(req,res,next)=>{
    let{id}=req.params;
    let find=data.findIndex((ele)=>{
        return ele.id==id;
    })

    if (find==-1) {
        res.json({msg:"the user not found"})
    }else{
        data.splice(find,1);
        res.status(200).json(data);
    }
})



app.use("{/*de}",(req,res,next)=>{
    res.status(404).json({status:404,msg:"error happend enter a valid URL"})
})

app.listen(port,()=>{
    console.log(`port run at port : ${port}`);
})