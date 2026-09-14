import { Router } from "express";
import { login, signup } from "./auth.service.js";
import { successResponse } from "../../common/utils/success.respoce.js";

const router = Router();

router.post("/signup", async (req, res) => {
  const data = signup(req.body);
  return successResponse({ res, data, message: "Signup done", status: 201 });
});

router.post("/login", async (req, res) => {
  const data = login(req.body);
  return successResponse({ res, data, message: "Login done", status: 200 });
});

export default router;
