import { Router } from "express";
import express from "express";

import { successResponse } from "../../common/utils/response/success.response.js";
import { addUsers, findOne, getAllUsers, insertUser, updateUser } from "./user.service.js";
const router = Router();

router.use(express.json())

router.get("/",async(req,res)=>{
    const dataRet=await getAllUsers()

    if(dataRet.length==0)
        throw new Error("no data founded",{cause:{status:404}});
    successResponse({
        res,
        status:200,
        message:"done",
        data:dataRet
    })
})

router.get("/:id",async(req,res)=>{
    const dataRet=await findOne(req.params.id)

    if(dataRet.length==0)
        throw new Error("no data founded",{cause:{status:404}});
    successResponse({
        res,
        status:200,
        message:"done",
        data:dataRet
    })
})


router.post("/",async(req,res)=>{
    console.log(req.body);
    const dataRet=await addUsers(req.body)
    

    // if(dataRet)
    //     throw new Error("no data founded",{cause:{status:404}});

    successResponse({
        res,
        status:200,
        message:"done",
        data:dataRet
    })
})
router.post("/insert",async(req,res)=>{
    console.log(req.body);
    const dataRet=await insertUser(req.body)
    

    // if(dataRet)
    //     throw new Error("no data founded",{cause:{status:404}});

    successResponse({
        res,
        status:200,
        message:"done",
        data:dataRet
    })
})

router.patch("/:id",async(req,res)=>{
    const dataRet=await updateUser(req.params.id,req.body)

    // if(dataRet)
    //     throw new Error("no data founded",{cause:{status:404}});

    successResponse({
        res,
        status:200,
        message:"done",
        data:dataRet
    })
})

router.delete("/:id",async(req,res)=>{
    const dataRet=await updateUser(req.params.id)

    // if(dataRet)
    //     throw new Error("no data founded",{cause:{status:404}});

    successResponse({
        res,
        status:200,
        message:"done",
        data:dataRet
    })
})



export default router;
