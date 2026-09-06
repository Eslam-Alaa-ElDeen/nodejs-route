import { Router } from "express";
import express from "express";
import { addUser, getAllUsers } from "./user.service.js";
import { ValidationErrorItemOrigin } from "sequelize";
import { successResponse } from "../../common/utils/success.respoce.js";

const router = Router();
router.use(express.json())

router.get("/",async (req, res) => {
  const data=await getAllUsers(req.body);
         return successResponse({
        res,
        data,
        message:"Users fetched successfully",
        status: 200
      });
});

router.post("/",async (req, res) => {
  // throw new Error("eslam alaa",{cause:{status:400}})
  const data=await addUser(req.body);
  if (data[1]) {
        return successResponse({
        res,
        data,
        message: "User created successfully",
        status: 201
      });
  }else{
      return successResponse({
        res,
        data,
        message: "User fetched successfully",
        status: 201
      });
  }

});


export default router;
