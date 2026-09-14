import { Router } from "express";
import { successResponse } from "../../common/utils/success.respoce.js";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "./user.service.js";

const router = Router();

router.get("/", async (req, res) => {
  const data = await getAllUsers();
  return successResponse({ res, data, message: "Users fetched", status: 200 });
});

router.get("/:id", async (req, res) => {
  const data = await getUserById(req.params.id);
  return successResponse({ res, data, message: "User fetched", status: 200 });
});

router.post("/", async (req, res) => {
  const data = await createUser(req.body);
  return successResponse({ res, data, message: "User created", status: 201 });
});

router.put("/:id", async (req, res) => {
  const data = await updateUser(req.params.id, req.body);
  return successResponse({ res, data, message: "User updated", status: 200 });
});

router.delete("/:id", async (req, res) => {
  const data = await deleteUser(req.params.id);
  return successResponse({ res, data, message: "User deleted", status: 200 });
});

export default router;
