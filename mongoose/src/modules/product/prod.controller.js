import { Router } from "express";
import { successResponse } from "../../common/utils/response/success.response.js";
import { create, findData } from "./prod.service.js";

 const router=Router();

router.post("/",async(req,res)=>{
    const dataRet=await create(req.body)

    successResponse({
        res,
        status:201,
        message:"done",
        data:dataRet
    })
})
router.get("/",async(req,res)=>{
    const dataRet=await findData(req.body)

    successResponse({
        res,
        status:201,
        message:"done",
        data:dataRet
    })
})

export default router;