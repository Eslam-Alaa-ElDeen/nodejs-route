import { Router } from "express";
import { successResponse } from "../../common/utils/success.respoce.js";
import { login, signup } from "./auth.service.js";

const router = Router();

router.post("/signup", async (req, res) => {
  const data = await signup(req.body);
  return successResponse({
    res,
    data,
    message: "Signup successful",
    status: 201,
  });
});

router.post("/login", async (req, res) => {
  const data = await login(req.body);
  return successResponse({ res, data, message: "Login successful" });
});

export default router;
