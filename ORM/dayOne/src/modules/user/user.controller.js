import { Router } from "express";
import express from "express";
import { addUser, getAllUsers } from "./user.service.js";
import { ValidationErrorItemOrigin } from "sequelize";

const router = Router();

router.use(express.json())

router.get("/",async (req, res) => {
  const data=await getAllUsers();
  res.json({ msg: "user page" ,users:data});
});

router.post("/",async (req, res) => {
  const data=await addUser(req.body);
  if (data?.length==0) {
    throw  new Error("error happened",{case: {status: 500}});
  }else{

    res.json({ msg: "add user successufelly" ,users:data});
  }
});


export default router;
