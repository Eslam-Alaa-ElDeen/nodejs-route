import { Router } from "express";
import {
  addUser,
  deleteUser,
  getAllUsers,
  getUserById,
  restoreUser,
  updateUser,
} from "./user.service.js";
import { successResponse } from "../../common/utils/success.respoce.js";

const router = Router();

router.get("/", async (req, res) => {
  const data = await getAllUsers(req.query);
  return successResponse({
    res,
    data,
    message: "Users fetched successfully",
    status: 200,
  });
});

router.get("/:id", async (req, res) => {
  const data = await getUserById(req.params.id);
  return successResponse({ res, data, message: "User fetched successfully" });
});

router.patch("/:id/restore", async (req, res) => {
  const data = await restoreUser(req.params.id);
  return successResponse({ res, data, message: "User restored successfully" });
});

router.post("/", async (req, res) => {
  const data = await addUser(req.body);
  return successResponse({
    res,
    data,
    message: "User created successfully",
    status: 201,
  });
});

router.patch("/:id", async (req, res) => {
  const data = await updateUser(req.params.id, req.body);
  return successResponse({ res, data, message: "User updated successfully" });
});

router.delete("/:id", async (req, res) => {
  const data = await deleteUser(req.params.id);
  return successResponse({ res, data, message: "User deleted successfully" });
});

export default router;
