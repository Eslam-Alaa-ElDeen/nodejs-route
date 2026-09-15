import { Router } from "express";
import { userModel } from "../../DB/model/user.model.js";
import { deleteUser, profileReturned, signup, updateUser } from "./user.service.js";
import { successResponse } from "../../common/utils/response/success.response.js";

const router = Router();

router.post("/signup", async (req, res, next) => {
  const result=await signup(req.body);
  successResponse({
    res,
    status:200,
    message:"data founded success",
    data:result
  })
});

router.get('/profile/:id',async(req,res)=>{
  const profile=await profileReturned(req.params.id)

      if(!profile){
        throw new Error("no profile founded",{cause:{status:409}})
    }
    successResponse({
      res,
      status:200,
      message:"data founded success",
      data:profile
    })
})


router.patch("/:id",async(req,res)=>{
  const returnData=await updateUser(req.body,req.params.id)

      if (!returnData) {
        throw new Error("user not found",{cause:{status:404}})
      }
      successResponse({
      res,
      status:200,
      message:"data founded success",
      data:returnData
    })
})


router.delete("/:id",async(req,res)=>{
  const returnData=await deleteUser(req.params.id)

      if (!returnData) {
        throw new Error("user not found enter valid ID",{cause:{status:404}})
      }
      successResponse({
      res,
      status:200,
      message:"data deleted success",
      data:returnData
    })
})

export default router;
